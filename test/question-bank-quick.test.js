"use strict";

const fs = require("node:fs");
const vm = require("node:vm");
const { test } = require("node:test");
const assert = require("node:assert/strict");

const context = { window: {} };
vm.createContext(context);
vm.runInContext(
	fs.readFileSync("js/questionBank.js", "utf8"),
	context,
	{ filename: "js/questionBank.js" },
);
const originalQuestionBank = context.window.questionBank;
vm.runInContext(
	fs.readFileSync("js/questionBank-Quick.js", "utf8"),
	context,
	{ filename: "js/questionBank-Quick.js" },
);

function getQuestions(value) {
	if (Array.isArray(value)) return value.flatMap(getQuestions);
	if (!value || typeof value !== "object") return [];
	const questions =
		typeof value.q === "string" && Array.isArray(value.a) ? [value] : [];
	return [
		...questions,
		...Object.entries(value).flatMap(([key, entry]) =>
			key === "q" || key === "a" ? [] : getQuestions(entry),
		),
	];
}

test("Quick Play loads its authored quiz data without replacing the regular bank", () => {
	const fullBank = context.window.questionBank;
	const quickBank = context.window.questionBankQuick;
	assert.equal(fullBank, originalQuestionBank);
	assert.ok(quickBank);
	assert.notEqual(quickBank, fullBank);

	const quickQuestions = getQuestions(quickBank);
	assert.ok(quickQuestions.length > 0);
	assert.ok(Array.isArray(quickBank.CloudComp.quiz3));
	assert.equal(quickBank.CloudComp.quiz3[0].q, "What is a SOC's purpose?");
	for (const [index, question] of quickQuestions.entries()) {
		assert.equal(typeof question.q, "string", `question ${index} text`);
		assert.ok(Array.isArray(question.a), `question ${index} answers`);
		assert.ok(question.a.length > 1, `question ${index} has answer choices`);
		assert.ok(
			Number.isInteger(question.c) &&
				question.c >= 0 &&
				question.c < question.a.length,
			`question ${index} correct answer index`,
		);
	}
	assert.equal(context.window.QuizHubQuickQuestionBank, undefined);
});
