"use strict";

const fs = require("node:fs");
const vm = require("node:vm");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const mixedStudy = require("../js/mixed-study.js");

const context = { window: {} };
vm.runInNewContext(
  fs.readFileSync("js/questionBank.js", "utf8"),
  context,
  { filename: "js/questionBank.js" },
);
const questionBank = context.window.questionBank;

test("mixed source normalization is canonical and rejects empty, duplicate, and unknown sources", () => {
  assert.deepEqual(
    mixedStudy.normalizeSources([
      { category: "CloudComp", quiz: "quiz2" },
      { category: "CompArch", quiz: "quiz1" },
    ]),
    [
      { category: "CompArch", quiz: "quiz1" },
      { category: "CloudComp", quiz: "quiz2" },
    ],
  );
  assert.throws(() => mixedStudy.normalizeSources([]), /at least one/i);
  assert.throws(
    () => mixedStudy.normalizeSources([
      { category: "CompArch", quiz: "quiz1" },
      { category: "CompArch", quiz: "quiz1" },
    ]),
    /more than once/i,
  );
  assert.throws(
    () => mixedStudy.normalizeSources([{ category: "Unknown", quiz: "quiz1" }]),
    /not available/i,
  );
});

test("mixed bank combines selected course banks and individual review sets with course prefixes", () => {
  const bank = mixedStudy.buildQuestionBank(questionBank, [
    { category: "SocIndi", quiz: "reviewQuiz", section: "CHAPTER 1" },
    { category: "SocIndi", quiz: "reviewQuiz", section: "CHAPTER 2" },
    { category: "CloudComp", quiz: "quiz1" },
  ]);
  assert.ok(bank.length > 2);
  assert.match(bank[0].q, /^For Cloud Computing,/);
  assert.equal(bank[0].mixedSource.category, "CloudComp");
  assert.ok(bank.some((question) => question.mixedSource.section === "CHAPTER 1"));
  assert.ok(bank.some((question) => question.mixedSource.section === "CHAPTER 2"));
  assert.ok(
    bank.some((question) => question.q.startsWith("For Tech Soc Indi People Can,")),
  );
});

test("every selectable question bank resolves to real question data", () => {
  const bank = mixedStudy.buildQuestionBank(questionBank, mixedStudy.sources);
  assert.ok(bank.length > 1000);
  assert.ok(bank.every((question) => /^For .+,\s/.test(question.q)));
});

test("Mixed Study presets select no sources, midterm review sources, or the complete catalog", () => {
  const none = mixedStudy.getPresetSources("none");
  const midterms = mixedStudy.getPresetSources("midterm");
  const all = mixedStudy.getPresetSources("all");
  assert.equal(none.length, 0);
  assert.equal(midterms.length, 14);
  assert.ok(midterms.some((source) => source.category === "CompArch" && source.quiz === "test1"));
  assert.ok(midterms.some((source) => source.category === "CompGFX" && source.quiz === "lautest"));
  assert.ok(midterms.some((source) => source.category === "DataSci" && source.quiz === "lautest"));
  assert.ok(midterms.some((source) => source.category === "SocIndi" && source.section === "CHAPTER 1"));
  assert.ok(all.length > midterms.length);
  assert.throws(() => mixedStudy.getPresetSources("unknown"), /valid Mixed Study preset/i);
});
