import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:http";
import { once } from "node:events";

const APP_HOST = "127.0.0.1";
const requests = [];

async function listen(server) {
  server.listen(0, APP_HOST);
  await once(server, "listening");
  return server.address().port;
}

const mockResend = createServer((request, response) => {
  let body = "";
  request.setEncoding("utf8");
  request.on("data", (chunk) => {
    body += chunk;
  });
  request.on("end", () => {
    requests.push({ method: request.method, url: request.url, body });
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ id: `email-${requests.length}` }));
  });
});

const mockPort = await listen(mockResend);
const portProbe = createServer();
const appPort = await listen(portProbe);
await new Promise((resolve) => portProbe.close(resolve));

let output = "";
const app = spawn(
  "npm",
  ["run", "dev", "--", "--hostname", APP_HOST, "--port", String(appPort)],
  {
    cwd: process.cwd(),
    detached: true,
    env: {
      ...process.env,
      RESEND_API_KEY: "re_integration_test",
      RESEND_API_BASE_URL: `http://${APP_HOST}:${mockPort}`,
    },
    stdio: ["ignore", "pipe", "pipe"],
  },
);

for (const stream of [app.stdout, app.stderr]) {
  stream.on("data", (chunk) => {
    output = `${output}${chunk}`.slice(-12000);
  });
}

const appUrl = `http://${APP_HOST}:${appPort}`;

async function waitForApp() {
  for (let attempt = 0; attempt < 90; attempt += 1) {
    try {
      const response = await fetch(appUrl);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(`Next.js did not become ready.\n${output}`);
}

async function subscribe(email, intent) {
  const response = await fetch(`${appUrl}/api/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, intent }),
  });
  return { response, json: await response.json() };
}

try {
  await waitForApp();

  const guide = await subscribe("guide-test@example.com", "guide");
  assert.equal(guide.response.status, 200);
  assert.match(guide.json.message, /check your email for the guide/i);

  const newsletter = await subscribe(
    "newsletter-test@example.com",
    "newsletter",
  );
  assert.equal(newsletter.response.status, 200);
  assert.match(newsletter.json.message, /welcome note/i);

  const guideFile = await fetch(
    `${appUrl}/7_Day_Gut_Hormones_Reset_Meal_Plan.pdf`,
  );
  assert.equal(guideFile.status, 200);
  assert.match(guideFile.headers.get("content-type") ?? "", /application\/pdf/);

  assert.equal(requests.length, 4, "user and admin emails should be sent");
  assert.ok(requests.every((request) => request.url === "/emails"));

  const guidePayload = JSON.parse(requests[0].body);
  assert.equal(guidePayload.to[0], "guide-test@example.com");
  assert.equal(
    guidePayload.attachments[0].filename,
    "7_Day_Gut_Hormones_Reset_Meal_Plan.pdf",
  );
  const attachmentContent = guidePayload.attachments[0].content;
  const attachmentSize =
    typeof attachmentContent === "string"
      ? attachmentContent.length
      : (attachmentContent?.data?.length ?? 0);
  assert.ok(
    attachmentSize > 1000,
    "guide PDF should be included in the email payload",
  );

  const newsletterPayload = JSON.parse(requests[2].body);
  assert.equal(newsletterPayload.to[0], "newsletter-test@example.com");
  assert.equal(newsletterPayload.attachments, undefined);

  console.log(
    "Email integration passed: guide delivery, newsletter welcome, admin notifications, and PDF download.",
  );
} finally {
  if (app.pid) {
    try {
      process.kill(-app.pid, "SIGTERM");
    } catch {}
  }
  await new Promise((resolve) => mockResend.close(resolve));
}
