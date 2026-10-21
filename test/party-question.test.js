"use strict";

const fs = require("node:fs");
const vm = require("node:vm");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const partyQuestion = require("../js/party-question.js");

const context = { window: {} };
vm.runInNewContext(
	fs.readFileSync("js/questionBank.js", "utf8"),
	context,
	{ filename: "js/questionBank.js" },
);
const questionBank = context.window.questionBank;

test("party true/false questions keep only their two original choices", () => {
	const question = questionBank.CompGFX.test1.find(
		(entry) =>
			entry.a[0] === "True" &&
			entry.a[1] === "False" &&
			entry.a[2] === "BLANK",
	);
	assert.ok(question);

	const result = partyQuestion.getNetworkQuestion(
		question,
		questionBank.CompGFX.test1,
		0,
		"ABCD",
	);

	assert.deepEqual(Array.from(result.a), ["True", "False"]);
	assert.equal(result.c, question.c);
	assert.equal(
		partyQuestion.isValidAnswerOrder(result, [0, 1]),
		true,
	);
	assert.equal(
		partyQuestion.isValidAnswerOrder(result, [0, 1, 2, 3]),
		false,
	);
	assert.equal(partyQuestion.isTrueFalseQuestion(result), true);
});

test("party non-binary questions still receive four answer choices", () => {
	const question = {
		q: "Choose the correct value.",
		a: ["one", "two", "BLANK", "BLANK"],
		c: 1,
	};
	const result = partyQuestion.getNetworkQuestion(
		question,
		[
			question,
			{ a: ["three", "four", "five", "six"] },
		],
		1,
		"ABCD",
	);

	assert.equal(result.a.length, 4);
	assert.equal(result.c, 1);
	assert.equal(partyQuestion.isValidAnswerOrder(result, [0, 1, 2, 3]), true);
	assert.equal(partyQuestion.isTrueFalseQuestion(result), false);
});

test("Host Display players see labels only while the display keeps answer text", () => {
	assert.equal(partyQuestion.getAnswerButtonText("A", "True", true), "A");
	assert.equal(partyQuestion.getAnswerButtonText("B", "False", true), "B");
	assert.equal(partyQuestion.getAnswerButtonText("A", "True", false), "A. True");
	assert.equal(partyQuestion.getAnswerButtonText("B", "False", false), "B. False");
});

test("Host Display player standing ranks current scores and shares tied places", () => {
	const players = [
		{ id: "first", score: 5 },
		{ id: "tied", score: 5 },
		{ id: "third", score: 2 },
	];

	assert.deepEqual(partyQuestion.getPlayerStanding(players, "first"), {
		score: 5,
		place: 1,
	});
	assert.deepEqual(partyQuestion.getPlayerStanding(players, "third"), {
		score: 2,
		place: 3,
	});
	assert.equal(partyQuestion.getPlayerStanding(players, "missing"), null);
});

test("party standings sort by current or cumulative score and keep tied placements", () => {
	const players = [
		{ id: "first", score: 2, overallScore: 8 },
		{ id: "second", score: 5, overallScore: 3 },
		{ id: "third", score: 5, overallScore: 8 },
	];

	assert.deepEqual(
		partyQuestion.getPlayerStandings(players).map(({ player, score, place }) => ({
			id: player.id,
			score,
			place,
		})),
		[
			{ id: "second", score: 5, place: 1 },
			{ id: "third", score: 5, place: 1 },
			{ id: "first", score: 2, place: 3 },
		],
	);
	assert.deepEqual(
		partyQuestion.getPlayerStandings(players, "overallScore").map(
			({ player, score, place }) => ({ id: player.id, score, place }),
		),
		[
			{ id: "first", score: 8, place: 1 },
			{ id: "third", score: 8, place: 1 },
			{ id: "second", score: 3, place: 3 },
		],
	);
});

test("true/false Party Mode is recognized for answer-button labels", () => {
	assert.equal(partyQuestion.isTrueFalseQuestion({ a: ["True", "False"] }), true);
	assert.equal(
		partyQuestion.isTrueFalseQuestion({ a: [" true ", "FALSE", "BLANK"] }),
		true,
	);
	assert.equal(
		partyQuestion.isTrueFalseQuestion({ a: ["True", "False", "Maybe"] }),
		false,
	);
});
