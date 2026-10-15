"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const offlinePackage = require("../offline-package.json");

test("offline package includes the complete assets directory", () => {
  assert.ok(offlinePackage.files.includes("assets"));
  assert.ok(fs.statSync(path.join(root, "assets")).isDirectory());
  assert.ok(fs.existsSync(path.join(root, "assets", "icon.png")));
  assert.ok(
    fs.existsSync(
      path.join(root, "assets", "quizimages", "lau-gfxmidtermpractice", "image1.png"),
    ),
  );
});
