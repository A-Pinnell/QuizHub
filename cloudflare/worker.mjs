const maxRequestBytes = 16 * 1024 * 1024;
const maxQuestionDataBytes = 1_900_000;
const maxQuestions = 250;
const maxLoginFailures = 5;
const loginWindowMs = 15 * 60 * 1000;
const sessionLifetimeMs = 30 * 24 * 60 * 60 * 1000;
const quizThemes = new Set(["default", "quizhub", "ai-model", "blended"]);
const musicTracks = new Set([
  "default", "BonusTrack", "Practice1", "Practice2", "CompArch", "CloudComp",
  "DataSci", "StatisticPractice", "DataSciLautest", "SoftEngi", "CompGFX",
  "CompGFXLautest", "SocIndi", "NetHubBonus1", "NetHubBonus2",
]);
const textEncoder = new TextEncoder();

function httpError(status, message) {
  return Object.assign(new Error(message), { status });
}

function jsonResponse(status, payload, extraHeaders = {}) {
  return new Response(status === 204 ? null : JSON.stringify(payload), {
    status,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Import-Token",
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      ...extraHeaders,
    },
  });
}

async function readJson(request, limit = maxRequestBytes) {
  const declaredLength = Number(request.headers.get("content-length") || 0);
  if (declaredLength > limit) throw httpError(413, "Request body is too large.");
  const body = await request.arrayBuffer();
  if (body.byteLength > limit) throw httpError(413, "Request body is too large.");
  try {
    return JSON.parse(new TextDecoder().decode(body));
  } catch {
    throw httpError(400, "Request body must be valid JSON.");
  }
}

function cleanUsername(value) {
  const username = typeof value === "string" ? value.trim() : "";
  if (!/^[A-Za-z0-9_-]{3,20}$/.test(username)) {
    throw httpError(400, "Username must be 3–20 letters, numbers, underscores, or hyphens.");
  }
  return username;
}

function cleanQuestion(question, index) {
  if (!question || typeof question !== "object" || Array.isArray(question)) {
    throw httpError(400, `Question ${index + 1} must be an object.`);
  }
  const prompt = typeof question.q === "string" ? question.q.trim() : "";
  const answers = question.a;
  if (!prompt || prompt.length > 1200) {
    throw httpError(400, `Question ${index + 1} needs text (up to 1,200 characters).`);
  }
  if (!Array.isArray(answers) || answers.length < 2 || answers.length > 4 ||
      !answers.every((answer) => typeof answer === "string" && answer.trim() && answer.length <= 300)) {
    throw httpError(400, `Question ${index + 1} must have 2–4 answer choices, each up to 300 characters.`);
  }
  if (!Number.isInteger(question.c) || question.c < 0 || question.c >= answers.length) {
    throw httpError(400, `Question ${index + 1} has an invalid correct-answer index.`);
  }
  const clean = { q: prompt, a: answers.map((answer) => answer.trim()), c: question.c };
  for (const key of ["i", "image"]) {
    if (question[key] === undefined) continue;
    const image = typeof question[key] === "string" ? question[key].trim() : "";
    let imageUrl;
    try {
      imageUrl = new URL(image, "https://quizhub.invalid");
    } catch {
      imageUrl = null;
    }
    if (!image || image.length > 2048 || !["http:", "https:"].includes(imageUrl?.protocol)) {
      throw httpError(400, `Question ${index + 1} has an invalid image URL.`);
    }
    clean[key] = image;
  }
  if (question.interaction !== undefined) {
    const interaction = question.interaction;
    if (!interaction || typeof interaction !== "object" || Array.isArray(interaction)) {
      throw httpError(400, `Question ${index + 1} has invalid interaction data.`);
    }
    if (interaction.type === "mesh-table") {
      const valid =
        ["vertices", "faces"].includes(interaction.table) &&
        typeof interaction.rowPrefix === "string" &&
        interaction.rowPrefix.length > 0 &&
        interaction.rowPrefix.length <= 8 &&
        Array.isArray(interaction.columnHeaders) &&
        interaction.columnHeaders.length > 0 &&
        interaction.columnHeaders.length <= 8 &&
        interaction.columnHeaders.every(
          (header) => typeof header === "string" && header.trim() && header.length <= 100,
        ) &&
        Array.isArray(interaction.correctTable) &&
        interaction.correctTable.length > 0 &&
        interaction.correctTable.length <= 100 &&
        interaction.correctTable.every(
          (row) => Array.isArray(row) &&
            row.length === interaction.columnHeaders.length &&
            row.every((value) => typeof value === "string" && value.trim() && value.length <= 300),
        );
      if (!valid) throw httpError(400, `Question ${index + 1} has an invalid mesh table.`);
    }
    clean.interaction = interaction;
  }
  return clean;
}

function cleanQuiz(payload) {
  const title = typeof payload?.title === "string" ? payload.title.trim() : "";
  const courseName = typeof payload?.courseName === "string" ? payload.courseName.trim() : "";
  const courseKey = typeof payload?.courseKey === "string" ? payload.courseKey.trim() : "";
  if (!title || title.length > 64 || !courseName || courseName.length > 64 ||
      !/^[A-Za-z0-9_-]{1,48}$/.test(courseKey)) {
    throw httpError(400, "Enter a quiz title and course name (up to 64 characters).");
  }
  if (!quizThemes.has(payload.theme)) throw httpError(400, "Choose a valid quiz theme.");
  if (!Array.isArray(payload.questions) || payload.questions.length < 1 ||
      payload.questions.length > maxQuestions) {
    throw httpError(400, `A quiz must contain 1–${maxQuestions} questions.`);
  }
  const questions = payload.questions.map(cleanQuestion);
  if (textEncoder.encode(JSON.stringify(questions)).byteLength > maxQuestionDataBytes) {
    throw httpError(400, "Quiz question data is too large to store.");
  }
  let music = null;
  if (payload.music !== undefined) {
    if (!payload.music || typeof payload.music !== "object" || Array.isArray(payload.music)) {
      throw httpError(400, "Choose a valid quiz music track.");
    }
    if (payload.music.upload !== undefined) {
      throw httpError(
        400,
        "Custom uploaded music is unavailable on hosted NetHub in D1-only mode. Choose a track from either collection.",
      );
    } else if (typeof payload.music.track === "string" && musicTracks.has(payload.music.track)) {
      music = { track: payload.music.track };
    } else {
      throw httpError(400, "Choose a valid quiz music track.");
    }
  }
  return {
    title,
    courseName,
    courseKey,
    theme: payload.theme,
    allowShortAnswer: payload.allowShortAnswer === true,
    questions,
    music,
  };
}

function publicSummary(row) {
  return {
    id: row.id,
    title: row.title,
    courseName: row.course_name,
    courseKey: row.course_key,
    theme: row.theme,
    allowShortAnswer: Boolean(row.allow_short_answer),
    questionCount: row.question_count,
    author: row.author || "QuizHub user",
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

async function quizRows(db, ownerId = null) {
  const query = ownerId
    ? db.prepare(
      `SELECT q.id, q.title, q.course_name, q.course_key, q.theme, q.allow_short_answer,
              q.created_at, q.updated_at, u.username AS author,
              json_array_length(q.questions_json) AS question_count
       FROM quizzes q JOIN users u ON u.id = q.owner_id
       WHERE q.owner_id = ? ORDER BY q.created_at DESC`,
    ).bind(ownerId)
    : db.prepare(
      `SELECT q.id, q.title, q.course_name, q.course_key, q.theme, q.allow_short_answer,
              q.created_at, q.updated_at, u.username AS author,
              json_array_length(q.questions_json) AS question_count
       FROM quizzes q JOIN users u ON u.id = q.owner_id
       ORDER BY q.created_at DESC`,
    );
  const { results } = await query.all();
  return results;
}

async function ownedQuizRows(db, ownerId) {
  const { results } = await db.prepare(
    `SELECT q.*, u.username AS author,
            json_array_length(q.questions_json) AS question_count
     FROM quizzes q JOIN users u ON u.id = q.owner_id
     WHERE q.owner_id = ? ORDER BY q.created_at DESC`,
  ).bind(ownerId).all();
  return results;
}

function parseMusic(value) {
  return value ? JSON.parse(value) : null;
}

function fullQuiz(row) {
  const storedMusic = parseMusic(row.music_json);
  const music = storedMusic?.upload ? null : storedMusic;
  const questions = JSON.parse(row.questions_json);
  return {
    ...publicSummary(row),
    questionCount: questions.length,
    questions,
    music,
  };
}

function encodeHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function encodeBase64Url(bytes) {
  let binary = "";
  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  }
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

async function digestHex(value) {
  return encodeHex(new Uint8Array(await crypto.subtle.digest("SHA-256", textEncoder.encode(value))));
}

async function pinVerifier(env, normalizedUsername, pinProof) {
  const key = await crypto.subtle.importKey(
    "raw",
    textEncoder.encode(env.PIN_PEPPER),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    textEncoder.encode(`${normalizedUsername}:${pinProof}`),
  );
  return encodeHex(new Uint8Array(signature));
}

function constantTimeEqual(left, right) {
  if (typeof left !== "string" || typeof right !== "string" || left.length !== right.length) {
    return false;
  }
  let difference = 0;
  for (let index = 0; index < left.length; index++) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return difference === 0;
}

function bearerToken(request) {
  const authorization = request.headers.get("authorization") || "";
  return authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
}

async function authorizedUser(request, db) {
  const token = bearerToken(request);
  if (!token) return null;
  const tokenHash = await digestHex(token);
  const result = await db.prepare(
    `SELECT u.id, u.username, u.normalized_username
     FROM sessions s JOIN users u ON u.id = s.user_id
     WHERE s.token_hash = ? AND s.expires_at > ?`,
  ).bind(tokenHash, Date.now()).first();
  return result || null;
}

async function accountAuth(request, env) {
  if (!env.PIN_PEPPER) throw new Error("PIN_PEPPER is not configured.");
  const payload = await readJson(request);
  const username = cleanUsername(payload.username);
  const normalizedUsername = username.toLocaleLowerCase("en");
  const pinProof = typeof payload.pinProof === "string" ? payload.pinProof : "";
  if (!/^[A-Za-z0-9_-]{43}$/.test(pinProof)) {
    throw httpError(400, "Enter a valid 4-digit password.");
  }
  const remoteAddress = request.headers.get("CF-Connecting-IP") || "unknown";
  const rateKey = `${remoteAddress}:${normalizedUsername}`;
  const now = Date.now();
  const attempts = await env.DB.prepare(
    "SELECT count, expires_at FROM login_failures WHERE rate_key = ?",
  ).bind(rateKey).first();
  if (attempts && attempts.expires_at > now && attempts.count >= maxLoginFailures) {
    throw httpError(429, "Too many incorrect passwords. Try again in 15 minutes.");
  }

  let user = await env.DB.prepare(
    "SELECT id, username, pin_verifier FROM users WHERE normalized_username = ?",
  ).bind(normalizedUsername).first();
  const candidateVerifier = await pinVerifier(env, normalizedUsername, pinProof);
  let created = false;
  let reset = false;
  if (!user) {
    const id = crypto.randomUUID();
    const createdAt = new Date(now).toISOString();
    const inserted = await env.DB.prepare(
      `INSERT INTO users (id, username, normalized_username, pin_verifier, created_at)
       VALUES (?, ?, ?, ?, ?)
       ON CONFLICT(normalized_username) DO NOTHING`,
    ).bind(id, username, normalizedUsername, candidateVerifier, createdAt).run();
    created = inserted.meta.changes === 1;
    user = await env.DB.prepare(
      "SELECT id, username, pin_verifier FROM users WHERE normalized_username = ?",
    ).bind(normalizedUsername).first();
    if (!user) throw new Error("New NetHub account could not be loaded.");
  } else if (user.pin_verifier === null) {
    const updated = await env.DB.prepare(
      "UPDATE users SET pin_verifier = ? WHERE id = ? AND pin_verifier IS NULL",
    ).bind(candidateVerifier, user.id).run();
    reset = updated.meta.changes === 1;
    user = await env.DB.prepare(
      "SELECT id, username, pin_verifier FROM users WHERE id = ?",
    ).bind(user.id).first();
  }
  if (!created && !reset && !constantTimeEqual(candidateVerifier, user.pin_verifier)) {
    const next = attempts && attempts.expires_at > now
      ? env.DB.prepare("UPDATE login_failures SET count = count + 1 WHERE rate_key = ?")
        .bind(rateKey)
      : env.DB.prepare(
        `INSERT INTO login_failures (rate_key, count, expires_at) VALUES (?, 1, ?)
         ON CONFLICT(rate_key) DO UPDATE SET count = 1, expires_at = excluded.expires_at`,
      ).bind(rateKey, now + loginWindowMs);
    await next.run();
    throw httpError(401, "Username or 4-digit password is incorrect.");
  }

  await env.DB.prepare("DELETE FROM login_failures WHERE rate_key = ?").bind(rateKey).run();
  await env.DB.prepare("DELETE FROM sessions WHERE expires_at <= ?").bind(now).run();
  const tokenBytes = crypto.getRandomValues(new Uint8Array(32));
  const token = encodeBase64Url(tokenBytes);
  await env.DB.prepare(
    "INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)",
  ).bind(await digestHex(token), user.id, now + sessionLifetimeMs).run();
  return jsonResponse(200, { token, username: user.username, created, reset });
}

async function saveQuiz(db, row, clean, createdAt) {
  const previousMusic = row ? parseMusic(row.music_json) : null;
  const savedMusic = clean.music ?? (previousMusic?.upload ? null : previousMusic);
  const values = [
    clean.title,
    clean.courseName,
    clean.courseKey,
    clean.theme,
    clean.allowShortAnswer ? 1 : 0,
    JSON.stringify(clean.questions),
    savedMusic ? JSON.stringify(savedMusic) : null,
    createdAt,
  ];
  if (row) {
    await db.prepare(
      `UPDATE quizzes SET title = ?, course_name = ?, course_key = ?, theme = ?,
       allow_short_answer = ?, questions_json = ?, music_json = ?, updated_at = ?
       WHERE id = ?`,
    ).bind(...values, row.id).run();
  } else {
    await db.prepare(
      `INSERT INTO quizzes
       (id, owner_id, title, course_name, course_key, theme, allow_short_answer,
        questions_json, music_json, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    ).bind(
      clean.id,
      clean.ownerId,
      ...values.slice(0, 7),
      createdAt,
      createdAt,
    ).run();
  }
  return savedMusic;
}

async function importUser(request, env) {
  if (!env.IMPORT_TOKEN) throw httpError(404, "Import is disabled.");
  if (!constantTimeEqual(request.headers.get("X-Import-Token") || "", env.IMPORT_TOKEN)) {
    throw httpError(403, "Import token is invalid.");
  }
  if (!env.PIN_PEPPER) throw new Error("PIN_PEPPER is not configured.");
  const payload = await readJson(request);
  const id = typeof payload.id === "string" ? payload.id : "";
  const username = cleanUsername(payload.username);
  if (!/^[0-9a-f-]{36}$/i.test(id)) throw httpError(400, "Imported account ID is invalid.");
  const normalized = username.toLocaleLowerCase("en");
  if (!/^[A-Za-z0-9_-]{43}$/.test(payload.pinProof || "")) {
    throw httpError(400, "Imported account PIN proof is invalid.");
  }
  const verifier = await pinVerifier(env, normalized, payload.pinProof);
  const result = await env.DB.prepare(
    `INSERT INTO users (id, username, normalized_username, pin_verifier, created_at)
     VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(id) DO UPDATE SET username = excluded.username,
       normalized_username = excluded.normalized_username`,
  ).bind(id, username, normalized, verifier, payload.createdAt || new Date().toISOString()).run();
  return jsonResponse(200, { imported: true, created: result.meta.changes === 1 });
}

async function importQuiz(request, env) {
  if (!env.IMPORT_TOKEN) throw httpError(404, "Import is disabled.");
  if (!constantTimeEqual(request.headers.get("X-Import-Token") || "", env.IMPORT_TOKEN)) {
    throw httpError(403, "Import token is invalid.");
  }
  const payload = await readJson(request);
  if (!/^[0-9a-f-]{36}$/i.test(payload.id || "") ||
      !/^[0-9a-f-]{36}$/i.test(payload.ownerId || "")) {
    throw httpError(400, "Imported quiz or owner ID is invalid.");
  }
  const clean = cleanQuiz(payload);
  const existing = await env.DB.prepare("SELECT id, music_json FROM quizzes WHERE id = ?")
    .bind(payload.id).first();
  clean.id = payload.id;
  clean.ownerId = payload.ownerId;
  const savedMusic = await saveQuiz(
    env.DB,
    existing,
    clean,
    payload.createdAt || new Date().toISOString(),
  );
  if (payload.updatedAt && payload.updatedAt !== payload.createdAt) {
    await env.DB.prepare("UPDATE quizzes SET updated_at = ? WHERE id = ?")
      .bind(payload.updatedAt, payload.id).run();
  }
  return jsonResponse(200, { imported: true, hasMusic: Boolean(savedMusic) });
}

async function handleRequest(request, env) {
  const url = new URL(request.url);
  if (request.method === "OPTIONS") return jsonResponse(204, {});
  if (url.pathname === "/healthz" && request.method === "GET") {
    await env.DB.prepare("SELECT 1 AS ok").first();
    return jsonResponse(200, { status: "ok", netHub: true });
  }
  if (url.pathname === "/admin/import/users" && request.method === "POST") {
    return importUser(request, env);
  }
  if (url.pathname === "/admin/import/quizzes" && request.method === "POST") {
    return importQuiz(request, env);
  }
  if (!url.pathname.startsWith("/api/nethub/")) {
    return jsonResponse(404, { error: "Not found." });
  }
  if (request.method === "POST" && url.pathname === "/api/nethub/auth") {
    return accountAuth(request, env);
  }
  if (request.method === "POST" && url.pathname === "/api/nethub/logout") {
    const token = bearerToken(request);
    if (token) await env.DB.prepare("DELETE FROM sessions WHERE token_hash = ?")
      .bind(await digestHex(token)).run();
    return jsonResponse(200, { signedOut: true });
  }
  if (request.method === "GET" && url.pathname === "/api/nethub/quizzes") {
    return jsonResponse(200, { quizzes: (await quizRows(env.DB)).map(publicSummary) });
  }
  if (request.method === "GET" && url.pathname === "/api/nethub/mine") {
    const user = await authorizedUser(request, env.DB);
    if (!user) throw httpError(401, "Sign in to view your uploads.");
    const rows = await ownedQuizRows(env.DB, user.id);
    const quizzes = rows.map(fullQuiz);
    return jsonResponse(200, { quizzes });
  }
  const quizMatch = url.pathname.match(/^\/api\/nethub\/quizzes(?:\/([0-9a-f-]{36}))?$/i);
  if (quizMatch && request.method === "GET" && quizMatch[1]) {
    const row = await env.DB.prepare(
      `SELECT q.*, u.username AS author,
       json_array_length(q.questions_json) AS question_count
       FROM quizzes q JOIN users u ON u.id = q.owner_id WHERE q.id = ?`,
    ).bind(quizMatch[1]).first();
    if (!row) throw httpError(404, "Quiz not found.");
    return jsonResponse(200, { quiz: fullQuiz(row) });
  }
  if (quizMatch && request.method === "DELETE" && quizMatch[1]) {
    const user = await authorizedUser(request, env.DB);
    if (!user) throw httpError(401, "Sign in to manage your uploads.");
    const row = await env.DB.prepare("SELECT owner_id FROM quizzes WHERE id = ?")
      .bind(quizMatch[1]).first();
    if (!row) throw httpError(404, "Quiz not found.");
    if (row.owner_id !== user.id) throw httpError(403, "You can only delete your own quizzes.");
    await env.DB.prepare("DELETE FROM quizzes WHERE id = ?").bind(quizMatch[1]).run();
    return jsonResponse(200, { deleted: true });
  }
  if (quizMatch && ["POST", "PUT"].includes(request.method) &&
      (request.method === "POST" ? !quizMatch[1] : Boolean(quizMatch[1]))) {
    const user = await authorizedUser(request, env.DB);
    if (!user) throw httpError(401, "Sign in to manage your uploads.");
    const payload = await readJson(request);
    const clean = cleanQuiz(payload);
    let existing = null;
    if (request.method === "PUT") {
      existing = await env.DB.prepare(
        "SELECT id, owner_id, music_json FROM quizzes WHERE id = ?",
      ).bind(quizMatch[1]).first();
      if (!existing) throw httpError(404, "Quiz not found.");
      if (existing.owner_id !== user.id) {
        throw httpError(403, "You can only edit your own quizzes.");
      }
    }
    const id = existing?.id || crypto.randomUUID();
    const now = new Date().toISOString();
    clean.id = id;
    clean.ownerId = user.id;
    const music = await saveQuiz(env.DB, existing, clean, now);
    const summary = {
      id,
      title: clean.title,
      courseName: clean.courseName,
      courseKey: clean.courseKey,
      theme: clean.theme,
      allowShortAnswer: clean.allowShortAnswer,
      questionCount: clean.questions.length,
      author: user.username,
      createdAt: existing?.created_at || now,
      updatedAt: now,
      music,
    };
    return jsonResponse(request.method === "POST" ? 201 : 200, { quiz: summary });
  }
  return jsonResponse(404, { error: "NetHub endpoint not found." });
}

export default {
  async fetch(request, env) {
    try {
      return await handleRequest(request, env);
    } catch (error) {
      const status = Number.isInteger(error.status) ? error.status : 500;
      if (status === 500) console.error("NetHub Worker request failed:", error);
      return jsonResponse(status, {
        error: status === 500 ? "NetHub is temporarily unavailable." : error.message,
      });
    }
  },
};

export { cleanQuiz, cleanUsername };
