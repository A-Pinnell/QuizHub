"use strict";

const { test } = require("node:test");
const assert = require("node:assert/strict");
const shortAnswer = require("../js/short-answer.js");

test("short-answer scoring awards three points for an exact answer", () => {
	assert.equal(
		shortAnswer.getShortAnswerPoints("Most Significant Bit", "Most Significant Bit"),
		3,
	);
});

test("short-answer scoring ignores capitalization, punctuation, and articles", () => {
	assert.equal(
		shortAnswer.getShortAnswerPoints("The MOST significant bit!", "Most Significant Bit"),
		3,
	);
});

test("short-answer scoring awards partial points for close answers", () => {
	assert.equal(
		shortAnswer.getShortAnswerPoints("Significant", "Most Significant Bit"),
		1,
	);
	assert.equal(
		shortAnswer.getShortAnswerPoints("Most significant", "Most Significant Bit"),
		2,
	);
});

test("short-answer scoring gives no points for unrelated or empty answers", () => {
	assert.equal(shortAnswer.getShortAnswerPoints("graphics card", "Most Significant Bit"), 0);
	assert.equal(shortAnswer.getShortAnswerPoints("", "Most Significant Bit"), 0);
	assert.equal(shortAnswer.getShortAnswerPoints("bit", ""), 0);
});

test("semantic similarity awards full credit for paraphrases", () => {
	assert.equal(
		shortAnswer.getShortAnswerPoints(
			"To represent both positive and negative numbers",
			"To represent both positive and negative integers",
			0.84,
		),
		3,
	);
});

test("semantic similarity awards partial credit by meaning", () => {
	assert.equal(shortAnswer.getShortAnswerPoints("A graphics card", "Most Significant Bit", 0.7), 2);
	assert.equal(shortAnswer.getShortAnswerPoints("A graphics card", "Most Significant Bit", 0.52), 1);
	assert.equal(shortAnswer.getShortAnswerPoints("A graphics card", "Most Significant Bit", 0.2), 0);
});

test("semantic similarity does not override an explicitly contradictory restriction", () => {
	assert.equal(
		shortAnswer.getShortAnswerPoints(
			"Only positive numbers can be represented",
			"To represent both positive and negative integers",
			0.779,
		),
		0,
	);
});
