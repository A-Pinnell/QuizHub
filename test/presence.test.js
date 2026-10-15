"use strict";

const { spawn } = require("node:child_process");
const { test } = require("node:test");
const assert = require("node:assert/strict");

test("anonymous presence endpoint tracks, refreshes, and removes sessions", async (t) => {
  const port = 19080 + Math.floor(Math.random() * 1000);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"]
  });
  let serverOutput = "";
  server.stdout.on("data", (chunk) => { serverOutput += chunk.toString(); });
  server.stderr.on("data", (chunk) => { serverOutput += chunk.toString(); });
  t.after(() => server.kill());

  let ready = false;
  for (let attempt = 0; attempt < 40; attempt++) {
    if (server.exitCode !== null) throw new Error(`Presence server exited: ${serverOutput}`);
    try {
      const response = await fetch(`http://localhost:${port}/healthz`);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
  assert.equal(ready, true, `Presence server did not start: ${serverOutput}`);

  const baseUrl = `http://localhost:${port}/presence`;
  const preflight = await fetch(baseUrl, { method: "OPTIONS" });
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get("access-control-allow-origin"), "*");

  const initial = await fetch(baseUrl);
  assert.deepEqual(await initial.json(), { activeSessions: 0 });
  assert.equal(initial.headers.get("cache-control"), "no-store");

  const invalid = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId: "not-a-uuid" })
  });
  assert.equal(invalid.status, 400);

  const sessionIds = [
    "63846bb4-93cc-4a83-9b89-581688e4d21f",
    "95f31e72-0aec-46e4-9569-0fa03f26a6c9"
  ];
  for (const [index, sessionId] of sessionIds.entries()) {
    const heartbeat = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId })
    });
    assert.deepEqual(await heartbeat.json(), { activeSessions: index + 1 });
  }

  const removal = await fetch(baseUrl, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId: sessionIds[0] })
  });
  assert.deepEqual(await removal.json(), { activeSessions: 1 });

  const repeatedHeartbeat = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId: sessionIds[1] })
  });
  assert.deepEqual(await repeatedHeartbeat.json(), { activeSessions: 1 });
});
