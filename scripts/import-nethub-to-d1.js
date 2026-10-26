"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { randomInt, webcrypto } = require("node:crypto");

const pinIterations = 600_000;
const textEncoder = new TextEncoder();

async function derivePinProof(username, pin) {
  const normalized = username.toLocaleLowerCase("en");
  const key = await webcrypto.subtle.importKey(
    "raw",
    textEncoder.encode(pin),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const result = await webcrypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: textEncoder.encode(`QuizHub NetHub PIN v2:${normalized}`),
      iterations: pinIterations,
      hash: "SHA-256",
    },
    key,
    256,
  );
  return Buffer.from(result).toString("base64url");
}

async function main() {
  const [apiBase, exportPath, resetCodesPath] = process.argv.slice(2);
  const importToken = process.env.QUIZHUB_NETHUB_IMPORT_TOKEN;
  if (!apiBase || !exportPath || !resetCodesPath || !importToken) {
    throw new Error(
      "Usage: node scripts/import-nethub-to-d1.js <Worker URL> <private export JSON> <private reset-codes JSONL>; set QUIZHUB_NETHUB_IMPORT_TOKEN first.",
    );
  }
  const parsedUrl = new URL(apiBase);
  const isLoopback = ["localhost", "127.0.0.1", "[::1]"].includes(parsedUrl.hostname);
  if (parsedUrl.protocol !== "https:" && !(parsedUrl.protocol === "http:" && isLoopback)) {
    throw new Error("The deployed NetHub Worker URL must use HTTPS.");
  }
  const database = JSON.parse(fs.readFileSync(exportPath, "utf8"));
  if (!Array.isArray(database.users) || !Array.isArray(database.quizzes)) {
    throw new Error("The NetHub export must contain users and quizzes arrays.");
  }
  const resolvedResetCodesPath = path.resolve(resetCodesPath);
  if (resolvedResetCodesPath === path.resolve(exportPath)) {
    throw new Error("Use a separate private file for PIN reset codes.");
  }
  fs.writeFileSync(resolvedResetCodesPath, "", { flag: "wx", mode: 0o600 });
  const baseUrl = apiBase.replace(/\/+$/, "");
  async function post(path, payload) {
    const response = await fetch(`${baseUrl}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Import-Token": importToken,
      },
      body: JSON.stringify(payload),
    });
    let result;
    try {
      result = await response.json();
    } catch {
      throw new Error(`Worker returned an unreadable response (${response.status}) for ${path}.`);
    }
    if (!response.ok) {
      throw new Error(result.error || `Import failed (${response.status}) for ${path}.`);
    }
    return result;
  }

  for (const [index, user] of database.users.entries()) {
    const pin = String(randomInt(0, 10_000)).padStart(4, "0");
    const result = await post("/admin/import/users", {
      id: user.id,
      username: user.username,
      createdAt: user.createdAt,
      pinProof: await derivePinProof(user.username, pin),
    });
    if (result.created) {
      fs.appendFileSync(
        resolvedResetCodesPath,
        `${JSON.stringify({ username: user.username, pin })}\n`,
        { mode: 0o600 },
      );
    }
    console.log(`Imported account ${index + 1}/${database.users.length}: ${user.username}`);
  }
  let skippedMusic = 0;
  for (const [index, quiz] of database.quizzes.entries()) {
    if (quiz.music?.upload) {
      skippedMusic++;
      if (typeof quiz.music.track === "string") {
        quiz.music = { track: quiz.music.track };
      } else {
        delete quiz.music;
      }
    }
    await post("/admin/import/quizzes", quiz);
    console.log(`Imported quiz ${index + 1}/${database.quizzes.length}: ${quiz.title}`);
  }
  console.log("Import complete. Existing usernames and quiz ownership are retained; share each new PIN privately from the reset-codes file.");
  if (skippedMusic) {
    console.log(`Skipped uploaded music for ${skippedMusic} quiz(zes); included QuizHub tracks are retained.`);
  }
  console.log(`Account reset codes: ${resolvedResetCodesPath}`);
}

main().catch((error) => {
  console.error("NetHub import failed:", error.message);
  process.exitCode = 1;
});
