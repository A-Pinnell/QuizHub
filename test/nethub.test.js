"use strict";

const { spawn } = require("node:child_process");
const { once } = require("node:events");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const vm = require("node:vm");
const { test } = require("node:test");
const assert = require("node:assert/strict");

test("NetHub accounts, uploads, ownership, updates, deletes, and persisted quizzes", async (t) => {
  const port = 19000 + Math.floor(Math.random() * 1000);
  const dataDirectory = fs.mkdtempSync(path.join(os.tmpdir(), "quizhub-nethub-"));
  let server;
  async function startServer() {
    server = spawn(process.execPath, ["server.js"], {
      cwd: process.cwd(),
      env: {
        ...process.env,
        PORT: String(port),
        DATABASE_URL: "",
        QUIZHUB_DATA_DIR: dataDirectory
      },
      stdio: ["ignore", "pipe", "pipe"]
    });
    let output = "";
    server.stdout.on("data", (chunk) => { output += chunk.toString(); });
    server.stderr.on("data", (chunk) => { output += chunk.toString(); });
    for (let attempt = 0; attempt < 40; attempt++) {
      if (server.exitCode !== null) throw new Error(`NetHub server exited: ${output}`);
      try {
        const response = await fetch(`http://localhost:${port}/healthz`);
        if (response.ok) return;
      } catch {}
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    throw new Error(`NetHub server did not start: ${output}`);
  }
  function stopServer() {
    if (server && server.exitCode === null) {
      server.kill();
      return once(server, "exit");
    }
  }
  t.after(async () => {
    await stopServer();
    fs.rmSync(dataDirectory, { recursive: true, force: true });
  });

  await startServer();
  async function api(route, options = {}, token = "") {
    const response = await fetch(`http://localhost:${port}${route}`, {
      ...options,
      headers: {
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers
      }
    });
    return { response, payload: await response.json() };
  }

  const serviceHealth = await api("/api/nethub/healthz");
  assert.equal(serviceHealth.response.status, 200);
  assert.deepEqual(serviceHealth.payload, { status: "ok", netHub: true });
  assert.equal(
    serviceHealth.response.headers.get("access-control-allow-origin"),
    "*"
  );

  const firstAuth = await api("/api/nethub/auth", {
    method: "POST",
    body: JSON.stringify({ username: "QuizMaker", pin: "0427" })
  });
  assert.equal(firstAuth.response.status, 200);
  assert.equal(firstAuth.payload.created, true);
  const firstToken = firstAuth.payload.token;
  const tempQuestions = JSON.parse(
    JSON.stringify(
      vm.runInNewContext(
        fs.readFileSync(path.join(process.cwd(), "js", "temp.js"), "utf8"),
        {}
      )
    )
  );
  assert.ok(Array.isArray(tempQuestions));
  assert.ok(tempQuestions.some((question) => question.i));
  assert.ok(tempQuestions.some((question) => question.interaction?.type === "mesh-table"));
  const quizData = {
    title: "NetHub Temp Data Test",
    courseKey: "CompGFX",
    courseName: "Computer Graphics",
    theme: "blended",
    allowShortAnswer: true,
    music: { track: "NetHubBonus1" },
    questions: tempQuestions
  };
  const created = await api("/api/nethub/quizzes", {
    method: "POST",
    body: JSON.stringify(quizData)
  }, firstToken);
  assert.equal(created.response.status, 201);
  const quizId = created.payload.quiz.id;

  const publicList = await api("/api/nethub/quizzes");
  assert.equal(publicList.payload.quizzes.length, 1);
  assert.equal(publicList.payload.quizzes[0].author, "QuizMaker");
  const publicQuiz = await api(`/api/nethub/quizzes/${quizId}`);
  assert.equal(publicQuiz.payload.quiz.theme, quizData.theme);
  assert.deepEqual(publicQuiz.payload.quiz.questions, quizData.questions);
  assert.deepEqual(publicQuiz.payload.quiz.music, quizData.music);
  const unauthorized = await api(`/api/nethub/quizzes/${quizId}`, {
    method: "PUT",
    body: JSON.stringify({ ...quizData, title: "Hijacked" })
  });
  assert.equal(unauthorized.response.status, 401);
  const otherAuth = await api("/api/nethub/auth", {
    method: "POST",
    body: JSON.stringify({ username: "AnotherUser", pin: "9931" })
  });
  const forbiddenUpdate = await api(`/api/nethub/quizzes/${quizId}`, {
    method: "PUT",
    body: JSON.stringify({ ...quizData, title: "Hijacked" })
  }, otherAuth.payload.token);
  assert.equal(forbiddenUpdate.response.status, 403);

  const updated = await api(`/api/nethub/quizzes/${quizId}`, {
    method: "PUT",
    body: JSON.stringify({
      ...quizData,
      title: "Updated Quiz",
      music: {
        upload: {
          name: "my-song.mp3",
          type: "audio/mpeg",
          data: `data:audio/mpeg;base64,${Buffer.from("ID3QuizHub test audio").toString("base64")}`
        }
      }
    })
  }, firstToken);
  assert.equal(updated.response.status, 200);
  assert.equal(updated.payload.quiz.title, "Updated Quiz");
  const uploadedMusicQuiz = await api(`/api/nethub/quizzes/${quizId}`);
  assert.equal(uploadedMusicQuiz.payload.quiz.music.upload.name, "my-song.mp3");
  assert.equal(uploadedMusicQuiz.payload.quiz.music.upload.type, "audio/mpeg");
  const ownedQuizzes = await api("/api/nethub/mine", {}, firstToken);
  assert.equal(ownedQuizzes.payload.quizzes[0].music.upload.name, "my-song.mp3");

  const maxSizeAudio = Buffer.concat([
    Buffer.from("ID3"),
    Buffer.alloc(10 * 1024 * 1024 - 3)
  ]);
  const maxSizeMusic = await api("/api/nethub/quizzes", {
    method: "POST",
    body: JSON.stringify({
      ...quizData,
      title: "10 MB Music Quiz",
      music: {
        upload: {
          name: "max-size.mp3",
          type: "audio/mpeg",
          data: `data:audio/mpeg;base64,${maxSizeAudio.toString("base64")}`
        }
      }
    })
  }, firstToken);
  assert.equal(maxSizeMusic.response.status, 201);

  const invalidQuiz = await api("/api/nethub/quizzes", {
    method: "POST",
    body: JSON.stringify({ ...quizData, questions: [{ q: "bad", a: ["A"], c: 0 }] })
  }, firstToken);
  assert.equal(invalidQuiz.response.status, 400);

  const invalidImage = await api("/api/nethub/quizzes", {
    method: "POST",
    body: JSON.stringify({
      ...quizData,
      questions: [{ ...tempQuestions.find((question) => question.i), i: "javascript:alert(1)" }]
    })
  }, firstToken);
  assert.equal(invalidImage.response.status, 400);

  const invalidMusic = await api("/api/nethub/quizzes", {
    method: "POST",
    body: JSON.stringify({
      ...quizData,
      music: {
        upload: {
          name: "not-audio.mp3",
          type: "audio/mpeg",
          data: `data:audio/mpeg;base64,${Buffer.from("not an audio file").toString("base64")}`
        }
      }
    })
  }, firstToken);
  assert.equal(invalidMusic.response.status, 400);

  const oversizedAudio = Buffer.concat([
    Buffer.from("ID3"),
    Buffer.alloc(10 * 1024 * 1024 - 2)
  ]);
  const oversizedMusic = await api("/api/nethub/quizzes", {
    method: "POST",
    body: JSON.stringify({
      ...quizData,
      music: {
        upload: {
          name: "too-big.mp3",
          type: "audio/mpeg",
          data: `data:audio/mpeg;base64,${oversizedAudio.toString("base64")}`
        }
      }
    })
  }, firstToken);
  assert.equal(oversizedMusic.response.status, 400);

  await stopServer();
  await startServer();
  const persisted = await api("/api/nethub/quizzes");
  assert.equal(persisted.payload.quizzes.length, 2);
  const persistedUploadedQuiz = await api(`/api/nethub/quizzes/${quizId}`);
  assert.equal(persistedUploadedQuiz.payload.quiz.music.upload.name, "my-song.mp3");
  assert.equal(
    persistedUploadedQuiz.payload.quiz.music.upload.data,
    `data:audio/mpeg;base64,${Buffer.from("ID3QuizHub test audio").toString("base64")}`
  );
  const storedDatabase = JSON.parse(fs.readFileSync(path.join(dataDirectory, "nethub.json"), "utf8"));
  assert.equal(storedDatabase.users[0].pinHash.length, 128);
  assert.equal(Object.hasOwn(storedDatabase.users[0], "pin"), false);

  const deleted = await api(`/api/nethub/quizzes/${quizId}`, { method: "DELETE" }, firstToken);
  assert.equal(deleted.response.status, 401);
  const ownerAfterRestart = await api("/api/nethub/auth", {
    method: "POST",
    body: JSON.stringify({ username: "quizmaker", pin: "0427" })
  });
  assert.equal(ownerAfterRestart.payload.created, false);
  const deletedByOwner = await api(`/api/nethub/quizzes/${quizId}`, {
    method: "DELETE"
  }, ownerAfterRestart.payload.token);
  assert.equal(deletedByOwner.payload.deleted, true);
});

test("NetHub API runs without a PostgreSQL connection", async (t) => {
  const port = 21000 + Math.floor(Math.random() * 1000);
  const server = spawn(process.execPath, ["server.js"], {
    cwd: process.cwd(),
    env: {
      ...process.env,
      PORT: String(port),
      DATABASE_URL: "postgres://quizhub:quizhub@127.0.0.1:1/quizhub?sslmode=disable"
    },
    stdio: ["ignore", "ignore", "ignore"]
  });
  t.after(async () => {
    if (server.exitCode === null) {
      server.kill();
      await once(server, "exit");
    }
  });

  let response;
  for (let attempt = 0; attempt < 40; attempt++) {
    if (server.exitCode !== null) throw new Error("NetHub server exited unexpectedly.");
    try {
      response = await fetch(`http://localhost:${port}/api/nethub/healthz`);
      break;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
  }
  assert.ok(response, "NetHub server did not start.");
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: "ok", netHub: true });
});

test("party NetHub quiz links load quiz data and music from the D1 Worker API", async () => {
  const quizId = "123e4567-e89b-42d3-a456-426614174000";
  const quizKey = `nethub_${quizId.replaceAll("-", "")}`;
  const quiz = {
    id: quizId,
    title: "Party NetHub Quiz",
    courseKey: "CompGFX",
    courseName: "Computer Graphics",
    theme: "blended",
    questions: [{ q: "Question?", a: ["Yes", "No"], c: 0 }],
    music: { upload: { name: "song.mp3", type: "audio/mpeg", data: "data:audio/mpeg;base64,SUQz" } }
  };
  let requestedUrl = "";
  const context = {
    URLSearchParams,
    fetch: async (url) => {
      requestedUrl = url;
      return { ok: true, json: async () => ({ quiz }) };
    },
    window: {
      quizHubNetHubApiBase: () => "https://quizhub-nethub.example.workers.dev",
      location: {
        hostname: "localhost",
        origin: "http://localhost:8080",
        search: `?category=NetHub&quiz=${quizKey}&netHubQuiz=${quizId}&partyMode=true`
      }
    }
  };
  vm.runInNewContext(
    fs.readFileSync(path.join(process.cwd(), "js", "net-hub-quiz.js"), "utf8"),
    context
  );
  await context.window.quizHubNetHubQuizPromise;

  assert.equal(
    requestedUrl,
    `https://quizhub-nethub.example.workers.dev/api/nethub/quizzes/${quizId}`,
  );
  assert.deepEqual(
    JSON.parse(JSON.stringify(context.window.questionBank.NetHub[quizKey])),
    quiz.questions
  );
  assert.equal(context.window.quizHubNetHubQuiz.music.upload.data, quiz.music.upload.data);
});
