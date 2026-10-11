"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const packageDefinition = require("../offline-package.json");

const root = path.resolve(__dirname, "..");
const releaseTag = process.argv[2];
if (!releaseTag || !/^v\d+(?:\.\d+){1,2}(?:[-+][0-9A-Za-z.-]+)?$/.test(releaseTag)) {
  throw new Error("Pass a release tag, for example v2.4 or v2.4.0.");
}

for (const entry of packageDefinition.files) {
  if (!fs.existsSync(path.join(root, entry))) {
    throw new Error(`Offline package input is missing: ${entry}`);
  }
}

const outputDirectory = path.join(root, "release-assets");
const outputFile = path.join(outputDirectory, "offline-site.zip");
const metadataDirectory = fs.mkdtempSync(path.join(require("node:os").tmpdir(), "quizhub-offline-"));
const metadataFile = path.join(metadataDirectory, "version.json");

fs.mkdirSync(outputDirectory, { recursive: true });
fs.rmSync(outputFile, { force: true });
fs.writeFileSync(metadataFile, `${JSON.stringify({ version: releaseTag })}\n`);
try {
  const content = spawnSync(
    "zip",
    ["-r", "-1", outputFile, ...packageDefinition.files],
    { cwd: root, stdio: "inherit" }
  );
  if (content.error) throw content.error;
  if (content.status !== 0) throw new Error(`zip exited with status ${content.status}.`);

  const metadata = spawnSync("zip", ["-j", "-1", outputFile, metadataFile], {
    cwd: root,
    stdio: "inherit"
  });
  if (metadata.error) throw metadata.error;
  if (metadata.status !== 0) throw new Error(`zip exited with status ${metadata.status}.`);
} finally {
  fs.rmSync(metadataDirectory, { recursive: true, force: true });
}
