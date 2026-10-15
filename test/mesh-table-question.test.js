"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const test = require("node:test");
const vm = require("node:vm");

const context = { window: {} };
vm.runInNewContext(
  fs.readFileSync("js/questionBank.js", "utf8"),
  context,
  { filename: "js/questionBank.js" },
);

const lautest = context.window.questionBank.CompGFX.lautest;

test("Lautest has editable ten-vertex and seven-face table questions", () => {
  const vertexQuestion = lautest.find(
    (question) => question.interaction?.table === "vertices",
  );
  const faceQuestion = lautest.find(
    (question) => question.interaction?.table === "faces",
  );

  assert.ok(vertexQuestion);
  assert.ok(faceQuestion);
  assert.equal(vertexQuestion.interaction.type, "mesh-table");
  assert.equal(faceQuestion.interaction.type, "mesh-table");
  assert.deepEqual(Array.from(vertexQuestion.interaction.columnHeaders), ["X", "Y", "Z"]);
  assert.deepEqual(Array.from(faceQuestion.interaction.columnHeaders), [
    "Vertex numbers (comma-separated)",
  ]);
  assert.equal(vertexQuestion.interaction.correctTable.length, 10);
  assert.ok(vertexQuestion.interaction.correctTable.every((row) => row.length === 3));
  assert.equal(faceQuestion.interaction.correctTable.length, 7);
  assert.ok(faceQuestion.interaction.correctTable.every((row) => row.length === 1));
  assert.ok(
    faceQuestion.interaction.correctTable
      .flat()
      .every((references) => /^v?\d+(?:,\s*v?\d+){2,}$/i.test(references)),
  );
});

test("Lautest mesh-table questions use the existing diagram asset", () => {
  const vertexQuestion = lautest.find(
    (question) => question.interaction?.table === "vertices",
  );
  const faceQuestion = lautest.find(
    (question) => question.interaction?.table === "faces",
  );

  assert.ok(vertexQuestion?.i);
  assert.ok(faceQuestion?.i);
  assert.equal(vertexQuestion.i, "./assets/quizimages/lau-gfxmidtermpractice/Image20.png");
  assert.equal(faceQuestion.i, "./assets/quizimages/lau-gfxmidtermpractice/Image20.png");
  assert.ok(fs.existsSync("assets/quizimages/lau-gfxmidtermpractice/Image20.png"));
});
