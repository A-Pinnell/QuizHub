"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { Pool } = require("pg");

async function main() {
  const outputPath = process.argv[2];
  if (!process.env.DATABASE_URL) {
    throw new Error("Set DATABASE_URL to the existing Supabase Postgres connection string.");
  }
  if (!outputPath) {
    throw new Error("Provide an output file path outside the repository for the private export.");
  }
  const resolvedOutput = path.resolve(outputPath);
  const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 1 });
  try {
    const result = await pool.query("SELECT data FROM public.nethub_state WHERE id = 1");
    if (!result.rows.length || !Array.isArray(result.rows[0].data?.users) ||
        !Array.isArray(result.rows[0].data?.quizzes)) {
      throw new Error("The Supabase NetHub state row is missing or invalid.");
    }
    fs.writeFileSync(
      resolvedOutput,
      `${JSON.stringify(result.rows[0].data)}\n`,
      { flag: "wx", mode: 0o600 },
    );
    console.log(`Exported ${result.rows[0].data.users.length} account(s) and ${result.rows[0].data.quizzes.length} quiz(zes) to ${resolvedOutput}.`);
    console.log("Keep this export private. It contains legacy password hashes and quiz content.");
  } finally {
    await pool.end();
  }
}

main().catch((error) => {
  console.error("NetHub export failed:", error.message);
  process.exitCode = 1;
});
