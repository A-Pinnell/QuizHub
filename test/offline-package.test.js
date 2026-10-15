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

test("offline package includes every standalone HTML page", () => {
  const htmlPages = offlinePackage.files.filter((entry) =>
    entry.toLowerCase().endsWith(".html"),
  );
  assert.ok(htmlPages.includes("index.html"));
  assert.ok(htmlPages.includes("quiz.html"));
  assert.ok(htmlPages.includes("dev-menu.html"));
  for (const page of htmlPages) {
    assert.ok(
      fs.statSync(path.join(root, page)).isFile(),
      `Offline page is missing: ${page}`,
    );
  }
});

test("offline HTML and CSS resources resolve to files in the package", () => {
  const packagedFiles = [];
  const collectFiles = (relativePath) => {
    const fullPath = path.join(root, relativePath);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      for (const entry of fs.readdirSync(fullPath)) {
        collectFiles(path.join(relativePath, entry));
      }
    } else {
      packagedFiles.push(relativePath);
    }
  };
  offlinePackage.files.forEach(collectFiles);

  for (const relativePath of packagedFiles) {
    if (!/\.(?:html|css)$/i.test(relativePath)) continue;
    const fullPath = path.join(root, relativePath);
    const source = fs.readFileSync(fullPath, "utf8");
    const references = [];
    const pattern = relativePath.endsWith(".css")
      ? /url\(([^)]+)\)/gi
      : /(?:src|href)\s*=\s*["']([^"']+)["']/gi;
    let match;
    while ((match = pattern.exec(source))) {
      const reference = match[1].trim().replace(/^['"]|['"]$/g, "");
      if (!reference || /^(?:[a-z]+:|\/\/|#|data:|javascript:)/i.test(reference)) {
        continue;
      }
      references.push(reference.split(/[?#]/)[0]);
    }

    for (const reference of references) {
      const target = path.resolve(
        path.dirname(fullPath),
        decodeURIComponent(reference),
      );
      assert.ok(fs.existsSync(target), `${relativePath} references missing ${reference}`);
      const targetRelativePath = path.relative(root, target);
      assert.ok(
        offlinePackage.files.some(
          (entry) =>
            targetRelativePath === entry ||
            targetRelativePath.startsWith(`${entry}${path.sep}`),
        ),
        `${relativePath} references a file excluded from the offline package: ${reference}`,
      );
    }
  }
});
