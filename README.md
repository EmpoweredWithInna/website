# Empowered Wellness with Inna

## Promote staging to production

Run the promotion from either the staging or production checkout: 

```bash
npm run promote:production -- --dry-run
npm run promote:production
```

Always run the dry run first. The command fetches `main` directly from the fixed staging and production SSH URLs. If production is behind, it is fast-forwarded to staging. If production has commits that staging does not, the command merges production into an isolated staging checkout, installs locked dependencies, runs lint and the production build, updates staging, and then promotes the identical commit to production.

The workflow never force-pushes, deletes branches, rewrites commits, or resets remote history. Normal push rejection protects against either repository changing after the initial fetch. A failed merge or validation leaves both remotes unchanged. Temporary checkouts and installed dependencies are removed on success and failure.

Requirements: SSH access to both GitHub repositories, Git, Node.js/npm, and the package manager corresponding to the committed lockfile (currently Yarn).
