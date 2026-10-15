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

test("DataSci mean-and-mode question requires five entered integers", () => {
  const question = context.window.questionBank.DataSci.lautest.find(
    (item) => item.q === "Which set of five integers has a mean of 4 and a mode of 6?",
  );

  assert.ok(question);
  assert.equal(question.interaction.type, "statistics-set");
  assert.equal(question.interaction.valueCount, 5);
  assert.equal(question.interaction.targetMean, 4);
  assert.equal(question.interaction.targetMode, 6);
  assert.equal(question.a[question.c], "1, 3, 6, 6, 4");
  const sampleSet = question.a[question.c].split(",").map(Number);
  assert.equal(sampleSet.reduce((sum, value) => sum + value, 0) / sampleSet.length, 4);
  assert.equal(sampleSet.filter((value) => value === 6).length, 2);
});
