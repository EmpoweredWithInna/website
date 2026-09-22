#!/usr/bin/env bash

set -euo pipefail

STAGING_URL="git@github.com:taiwoMoil/Inna-website.git"
PRODUCTION_URL="git@github.com:EmpoweredWithInna/website.git"
STAGING_REF="refs/promotion/staging-main"
PRODUCTION_REF="refs/promotion/production-main"
DRY_RUN=false
TEMP_ROOT=""
CHECKOUT=""

usage() {
  cat <<'EOF'
Usage: npm run promote:production [-- --dry-run]

Safely reconciles staging main with production main, validates any required
merge, and promotes the resulting commit without force-pushing.
EOF
}

progress() {
  printf '\n==> %s\n' "$1"
}

fail() {
  printf '\nFAILED: %s\n' "$1" >&2
  exit 1
}

cleanup() {
  if [[ -n "$TEMP_ROOT" && -d "$TEMP_ROOT" ]]; then
    case "$(basename "$TEMP_ROOT")" in
      inna-promote.*)
        printf '\n==> Cleaning temporary checkout and installed dependencies\n'
        rm -rf -- "$TEMP_ROOT"
        ;;
      *)
        printf '\nWARNING: Refusing to clean unexpected path: %s\n' "$TEMP_ROOT" >&2
        ;;
    esac
  fi
}

trap cleanup EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

if [[ $# -gt 1 ]]; then
  usage
  exit 2
fi

if [[ $# -eq 1 ]]; then
  case "$1" in
    --dry-run) DRY_RUN=true ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      usage
      fail "Unknown option: $1"
      ;;
  esac
fi

for command_name in git npm mktemp; do
  command -v "$command_name" >/dev/null 2>&1 ||
    fail "Required command is unavailable: $command_name"
done

TMP_BASE="${TMPDIR:-/tmp}"
TMP_BASE="${TMP_BASE%/}"
TEMP_ROOT="$(mktemp -d "$TMP_BASE/inna-promote.XXXXXX")" ||
  fail "Unable to create a temporary workspace."
CHECKOUT="$TEMP_ROOT/checkout"

progress "Starting production promotion"
if [[ "$DRY_RUN" == true ]]; then
  printf 'Mode: DRY RUN (no remote will be changed)\n'
else
  printf 'Mode: LIVE PROMOTION\n'
fi
printf 'Staging:    %s\n' "$STAGING_URL"
printf 'Production: %s\n' "$PRODUCTION_URL"

git init --quiet "$CHECKOUT" || fail "Unable to initialize the temporary checkout."

progress "Fetching staging main"
if ! git -C "$CHECKOUT" fetch --quiet --no-tags "$STAGING_URL" \
  "refs/heads/main:$STAGING_REF"; then
  fail "Could not fetch staging main. Check SSH access and repository availability."
fi

progress "Fetching production main"
if ! git -C "$CHECKOUT" fetch --quiet --no-tags "$PRODUCTION_URL" \
  "refs/heads/main:$PRODUCTION_REF"; then
  fail "Could not fetch production main. Check SSH access and repository availability."
fi

STAGING_SHA="$(git -C "$CHECKOUT" rev-parse "$STAGING_REF")"
PRODUCTION_SHA="$(git -C "$CHECKOUT" rev-parse "$PRODUCTION_REF")"
printf 'Staging main:    %s\n' "$STAGING_SHA"
printf 'Production main: %s\n' "$PRODUCTION_SHA"

validate_push() {
  local label="$1"
  local url="$2"
  local commit="$3"

  progress "Validating ${label} push"
  if ! git -C "$CHECKOUT" push --dry-run "$url" \
    "$commit:refs/heads/main"; then
    fail "${label} rejected the dry-run push. Nothing was changed."
  fi
}

push_commit() {
  local label="$1"
  local url="$2"
  local commit="$3"

  progress "Pushing ${commit} to ${label} main"
  if ! git -C "$CHECKOUT" push "$url" "$commit:refs/heads/main"; then
    fail "${label} rejected the push. Remote history was not forced or rewritten."
  fi
}

if [[ "$STAGING_SHA" == "$PRODUCTION_SHA" ]]; then
  progress "No promotion needed"
  printf 'Both repositories already point to %s. No changes were made.\n' \
    "$STAGING_SHA"
  exit 0
fi

if git -C "$CHECKOUT" merge-base --is-ancestor \
  "$PRODUCTION_REF" "$STAGING_REF"; then
  progress "Decision: production is behind staging"
  printf 'Production can fast-forward to staging commit %s.\n' "$STAGING_SHA"

  if [[ "$DRY_RUN" == true ]]; then
    validate_push "staging" "$STAGING_URL" "$STAGING_SHA"
    validate_push "production" "$PRODUCTION_URL" "$STAGING_SHA"
    progress "Dry run completed successfully"
    printf 'Both push validations passed. No remote was changed.\n'
  else
    push_commit "production" "$PRODUCTION_URL" "$STAGING_SHA"
    progress "Production promotion completed"
    printf 'Production main now points to %s.\n' "$STAGING_SHA"
  fi
  exit 0
fi

progress "Decision: production contains commits missing from staging"
printf 'An isolated branch will merge production main into staging main.\n'

git -C "$CHECKOUT" checkout --quiet -b promotion-merge "$STAGING_REF" ||
  fail "Unable to create the isolated staging checkout."

GIT_USER_NAME="$(git config user.name || true)"
GIT_USER_EMAIL="$(git config user.email || true)"
if [[ -z "$GIT_USER_NAME" || -z "$GIT_USER_EMAIL" ]]; then
  fail "A Git user.name and user.email are required to create the reconciliation commit."
fi

progress "Merging production main into staging main"
set +e
git -C "$CHECKOUT" \
  -c "user.name=$GIT_USER_NAME" \
  -c "user.email=$GIT_USER_EMAIL" \
  merge --no-ff --no-edit "$PRODUCTION_REF"
MERGE_STATUS=$?
set -e

if [[ $MERGE_STATUS -ne 0 ]]; then
  if git -C "$CHECKOUT" diff --name-only --diff-filter=U | grep -q .; then
    printf '\nMerge conflicts were detected. Neither remote was updated.\n' >&2
    printf 'Resolve manually with these steps:\n' >&2
    printf '  1. git clone --branch main %s inna-reconcile\n' "$STAGING_URL" >&2
    printf '  2. git -C inna-reconcile fetch %s main:production-main\n' \
      "$PRODUCTION_URL" >&2
    printf '  3. git -C inna-reconcile merge --no-ff production-main\n' >&2
    printf '  4. Resolve conflicts, run npm run lint and npm run build, then push staging main.\n' >&2
    printf '  5. Re-run npm run promote:production.\n' >&2
    fail "Reconciliation requires manual conflict resolution."
  fi
  fail "Git could not merge the two histories. Neither remote was updated."
fi

CANDIDATE_SHA="$(git -C "$CHECKOUT" rev-parse HEAD)"
printf 'Validated merge candidate: %s\n' "$CANDIDATE_SHA"

progress "Installing locked dependencies"
if [[ -f "$CHECKOUT/yarn.lock" ]]; then
  command -v yarn >/dev/null 2>&1 || fail "yarn is required by yarn.lock."
  (cd "$CHECKOUT" && yarn install --frozen-lockfile --non-interactive) ||
    fail "Locked dependency installation failed. Neither remote was updated."
elif [[ -f "$CHECKOUT/package-lock.json" ]]; then
  (cd "$CHECKOUT" && npm ci) ||
    fail "Locked dependency installation failed. Neither remote was updated."
elif [[ -f "$CHECKOUT/pnpm-lock.yaml" ]]; then
  command -v pnpm >/dev/null 2>&1 || fail "pnpm is required by pnpm-lock.yaml."
  (cd "$CHECKOUT" && pnpm install --frozen-lockfile) ||
    fail "Locked dependency installation failed. Neither remote was updated."
else
  fail "No supported dependency lockfile was found. Neither remote was updated."
fi

progress "Running lint"
(cd "$CHECKOUT" && npm run lint) ||
  fail "Lint failed. Neither remote was updated."

progress "Running production build"
(cd "$CHECKOUT" && npm run build) ||
  fail "Production build failed. Neither remote was updated."

if [[ "$DRY_RUN" == true ]]; then
  validate_push "staging" "$STAGING_URL" "$CANDIDATE_SHA"
  validate_push "production" "$PRODUCTION_URL" "$CANDIDATE_SHA"
  progress "Reconciliation dry run completed successfully"
  printf 'Merge, checks, and both push validations passed for %s.\n' \
    "$CANDIDATE_SHA"
  printf 'No remote was changed.\n'
  exit 0
fi

push_commit "staging" "$STAGING_URL" "$CANDIDATE_SHA"

progress "Staging updated; promoting the identical commit to production"
if ! git -C "$CHECKOUT" push "$PRODUCTION_URL" \
  "$CANDIDATE_SHA:refs/heads/main"; then
  printf '\nStaging main was updated to %s, but production rejected the push.\n' \
    "$CANDIDATE_SHA" >&2
  printf 'Production was not forced. Fetch both repositories and re-run the promotion.\n' >&2
  exit 1
fi

progress "Production promotion completed"
printf 'Staging and production main now point to %s.\n' "$CANDIDATE_SHA"
