"use strict";

const assert = require("node:assert/strict");
const { test } = require("node:test");
const workerModule = import("../cloudflare/worker.mjs");

test("D1 NetHub Worker validates account names and quiz payloads", async () => {
  const { cleanQuiz, cleanUsername } = await workerModule;
  assert.equal(cleanUsername("  Quiz_Maker-1 "), "Quiz_Maker-1");
  assert.throws(() => cleanUsername("x"), /Username must be/);

  const quiz = cleanQuiz({
    title: "Test quiz",
    courseName: "Computer Graphics",
    courseKey: "CompGFX",
    theme: "blended",
    allowShortAnswer: true,
    questions: [{ q: "Question?", a: ["One", "Two"], c: 1 }],
    music: { track: "CompGFX" },
  });
  assert.equal(quiz.questions.length, 1);
  assert.equal(quiz.music.track, "CompGFX");
  assert.equal(cleanQuiz({
    ...quiz,
    music: { track: "NetHubBonus1" },
  }).music.track, "NetHubBonus1");
  assert.equal(cleanQuiz({
    ...quiz,
    music: { track: "NetHubBonus2" },
  }).music.track, "NetHubBonus2");
  assert.throws(() => cleanQuiz({ ...quiz, theme: "unknown" }), /valid quiz theme/);
  assert.throws(
    () => cleanQuiz({
      ...quiz,
      music: { upload: { name: "song.mp3", type: "audio/mpeg", data: "data:audio/mpeg;base64," } },
    }),
    /unavailable on hosted NetHub in D1-only mode/,
  );
});

test("D1 NetHub Worker health check only verifies the database binding", async () => {
  const { default: worker } = await workerModule;
  let query = "";
  const response = await worker.fetch(
    new Request("https://quizhub-nethub.example.workers.dev/healthz"),
    {
      DB: {
        prepare(sql) {
          query = sql;
          return { first: async () => ({ ok: 1 }) };
        },
      },
    },
  );
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: "ok", netHub: true });
  assert.equal(query, "SELECT 1 AS ok");
});

test("D1 NetHub Worker keeps import endpoints disabled without a secret", async () => {
  const { default: worker } = await workerModule;
  const response = await worker.fetch(
    new Request("https://quizhub-nethub.example.workers.dev/admin/import/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: "123e4567-e89b-42d3-a456-426614174000", username: "Maker" }),
    }),
    { DB: {} },
  );
  assert.equal(response.status, 404);
});
