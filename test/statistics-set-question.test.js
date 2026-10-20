"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");
const { quizCatalog } = require("../js/dev-scenes.js");

const context = { window: {} };
vm.runInNewContext(
  fs.readFileSync("js/questionBank.js", "utf8"),
  context,
  { filename: "js/questionBank.js" },
);

const sections = [
  "central-tendency",
  "correlation",
  "frequency",
  "normalized-data",
  "skewness",
  "spread",
];

function median(values) {
  const middle = Math.floor(values.length / 2);
  return values.length % 2
    ? values[middle]
    : (values[middle - 1] + values[middle]) / 2;
}

function expectedAnswer(question) {
  const details = question.interaction;
  const values = details.values || [];
  switch (details.template) {
    case "arithmetic-mean":
      return Math.round(
        (values.reduce((sum, value) => sum + value, 0) / values.length) * 100,
      ) / 100;
    case "geometric-mean":
      return Math.sqrt(values[0] * values[1]);
    case "median":
      return median([...values].sort((a, b) => a - b));
    case "mode":
      return details.target;
    case "range":
      return Math.max(...values) - Math.min(...values);
    case "population-variance": {
      const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
      return Math.round(
        (values.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
          values.length) *
          100,
      ) / 100;
    }
    case "population-standard-deviation": {
      const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
      const variance =
        values.reduce((sum, value) => sum + (value - mean) ** 2, 0) /
        values.length;
      return Math.round(Math.sqrt(variance) * 100) / 100;
    }
    case "iqr": {
      const sorted = [...values].sort((a, b) => a - b);
      const middle = sorted.length / 2;
      return (
        median(sorted.slice(Math.ceil(sorted.length / 2))) -
        median(sorted.slice(0, middle))
      );
    }
    case "pearson-correlation": {
      const meanX = details.x.reduce((sum, value) => sum + value, 0) /
        details.x.length;
      const meanY = details.y.reduce((sum, value) => sum + value, 0) /
        details.y.length;
      const numerator = details.x.reduce(
        (sum, value, index) =>
          sum + (value - meanX) * (details.y[index] - meanY),
        0,
      );
      const denominator = Math.sqrt(
        details.x.reduce((sum, value) => sum + (value - meanX) ** 2, 0) *
          details.y.reduce((sum, value) => sum + (value - meanY) ** 2, 0),
      );
      return Math.round((numerator / denominator) * 100) / 100;
    }
    case "frequency":
      return values.filter((value) => value === details.target).length;
    case "relative-frequency":
      return Math.round(
        (values.filter((value) => value === details.target).length /
          values.length) *
          10000,
      ) / 100;
    case "bowley-skewness": {
      const sorted = [...values].sort((a, b) => a - b);
      const middle = sorted.length / 2;
      const q1 = median(sorted.slice(0, middle));
      const q3 = median(sorted.slice(Math.ceil(sorted.length / 2)));
      const center = median(sorted);
      return Math.round(((q3 + q1 - 2 * center) / (q3 - q1)) * 100) / 100;
    }
    case "min-max-normalization":
      return Math.round(
        ((details.value - details.minimum) /
          (details.maximum - details.minimum)) *
          100,
      ) / 100;
    case "z-score":
      return Math.round(
        ((details.value - details.mean) / details.standardDeviation) * 100,
      ) / 100;
    default:
      assert.fail(`Unknown statistics template: ${details.template}`);
  }
}

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

test("Statistic Practice offers randomized, verifiable numeric questions", () => {
  const quiz = quizCatalog.DataSci.find(
    (item) => item.id === "statisticsPractice",
  );
  const templates = context.window.questionBank.DataSci.statisticsPractice;

  assert.ok(quiz);
  assert.equal(quiz.label, "Statistic Practice");
  assert.equal(quiz.partyMode, false);
  assert.equal(templates.length, sections.length);
  assert.deepEqual(
    [...new Set(templates.map((question) => question.interaction.section))].sort(),
    [...sections].sort(),
  );
  assert.ok(
    templates.every(
      (question) =>
        question.q &&
        question.a.length === 1 &&
        question.interaction.type === "numeric-answer" &&
        Number.isFinite(Number(question.a[question.c])) &&
        question.c >= 0 &&
        question.c < question.a.length,
    ),
  );

  const generate = context.window.QuizHubStatisticsPractice.generateQuestions;
  const generated = generate(1000, sections);
  assert.equal(generated.length, 1000);
  assert.ok(generated.every((question) => sections.includes(question.interaction.section)));
  assert.ok(
    generated.every(
      (question, index) =>
        index === 0 ||
        question.interaction.section !== generated[index - 1].interaction.section,
    ),
  );
  assert.deepEqual(
    [...new Set(generated.map((question) => question.interaction.template))].sort(),
    [
      "arithmetic-mean",
      "bowley-skewness",
      "frequency",
      "geometric-mean",
      "iqr",
      "median",
      "min-max-normalization",
      "mode",
      "pearson-correlation",
      "population-standard-deviation",
      "population-variance",
      "range",
      "relative-frequency",
      "z-score",
    ].sort(),
  );
  generated.forEach((question) => {
    assert.equal(
      Number(question.a[question.c]),
      expectedAnswer(question),
      `${question.interaction.template}: ${question.q}`,
    );
    assert.ok(
      Math.abs(Number(question.a[question.c]) - expectedAnswer(question)) <=
        question.interaction.tolerance,
    );
  });

  const spreadOnly = generate(25, ["spread"]);
  assert.equal(spreadOnly.length, 25);
  assert.ok(spreadOnly.every((question) => question.interaction.section === "spread"));
  assert.throws(() => generate(0, sections), /supports 1 to 1000/);
  assert.throws(() => generate(1001, sections), /supports 1 to 1000/);
  assert.throws(() => generate(1, []), /Select at least one/);

  const quizHtml = fs.readFileSync(
    path.join(__dirname, "..", "quiz.html"),
    "utf8",
  );
  assert.match(quizHtml, /id="statisticsPracticeFocus"/);
  assert.match(quizHtml, /id="statisticsPracticeHeartLimit"/);
  assert.match(quizHtml, /<option value="5" selected>5 hearts<\/option>/);
  assert.match(quizHtml, /<option value="unlimited">Unlimited<\/option>/);
  assert.match(quizHtml, /Each incorrect answer uses one heart\. Skipping does not\./);
  assert.match(quizHtml, /id="statisticsPracticeWorkspace"/);
  assert.match(quizHtml, /id="statisticsPracticeProgressTrack"/);
  assert.match(quizHtml, /id="statisticsPracticeProgressText"/);
  assert.match(quizHtml, /id="statisticsPracticeBullet"/);
  assert.equal((quizHtml.match(/id="statisticsPracticeBullet"/g) || []).length, 1);
  assert.match(quizHtml, /id="statisticsPracticeHeartsMeter"/);
  assert.match(quizHtml, /id="statisticsPracticeComboMeter"/);
  assert.match(quizHtml, /id="statisticsPracticeResponse"/);
  assert.match(
    quizHtml,
    /class="statistics-practice-revolver"[\s\S]*?class="statistics-practice-cylinder"[\s\S]*?id="statisticsPracticeBullet"/,
  );

  const quizStyles = fs.readFileSync(
    path.join(__dirname, "..", "css", "quiz.css"),
    "utf8",
  );
  assert.match(quizStyles, /statistics-cylinder-spin/);
  assert.match(quizStyles, /statistics-numbered-bullet-shot/);
  assert.match(quizStyles, /statistics-numbered-bullet-reload/);
  assert.match(quizStyles, /statistics-question-enter/);

  const resultsHtml = fs.readFileSync(
    path.join(__dirname, "..", "win.html"),
    "utf8",
  );
  assert.match(resultsHtml, /id="resultsKicker"/);

  const resultsScript = fs.readFileSync(
    path.join(__dirname, "..", "js", "win.js"),
    "utf8",
  );
  assert.match(resultsScript, /statisticsPracticeGameOver/);
  assert.match(resultsScript, /TRIAL OVER/);
});
