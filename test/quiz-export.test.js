"use strict";

const { test } = require("node:test");
const assert = require("node:assert/strict");
const { createJson, createPdf, wrapText } = require("../js/quiz-export.js");
const { quizCatalog } = require("../js/dev-scenes.js");

function pdfPageStreams(pdfBytes) {
	const pdf = Buffer.from(pdfBytes).toString("ascii");
	const pageContents = [...pdf.matchAll(/\/Type \/Page \/Parent 2 0 R[\s\S]*?\/Contents (\d+) 0 R/g)];
	return pageContents.map(([, streamId]) => {
		const objectStart = pdf.indexOf(`${streamId} 0 obj`);
		const streamStart = pdf.indexOf("stream\n", objectStart) + "stream\n".length;
		const streamEnd = pdf.indexOf("\nendstream", streamStart);
		return pdf.slice(streamStart, streamEnd);
	});
}

test("quiz PDF contains every question before a dedicated answer-key page", () => {
	const questions = Array.from({ length: 38 }, (_, index) => ({
		q: `Question marker ${String(index + 1).padStart(2, "0")}: choose the correct answer.`,
		a: ["Incorrect", `Correct answer ${index + 1}`, "Also incorrect", "No answer"],
		c: 1,
	}));
	const pdf = createPdf({
		title: "Printable Question Set",
		courseName: "Computer Graphics",
		questions,
	});
	const pdfText = Buffer.from(pdf).toString("ascii");
	const streams = pdfPageStreams(pdf);
	const keyPage = streams.findIndex((stream) => stream.includes("(ANSWER KEY)"));

	assert.equal(pdfText.startsWith("%PDF-1.4"), true);
	assert.equal(pdfText.endsWith("%%EOF"), true);
	assert.ok(streams.length > 2, "question pages and answer-key pages are created");
	assert.ok(keyPage > 0, "the answer key begins after the question pages");
	assert.equal(
		streams.slice(0, keyPage).every((stream) => !stream.includes("(Correct answer 1)")),
		true,
		"correct answers are omitted from the question pages",
	);
	assert.ok(streams.slice(0, keyPage).some((stream) => stream.includes("Question marker 38:")));
	assert.ok(streams.slice(keyPage).some((stream) => stream.includes("B. Correct answer 38")));
});

test("quiz PDF answer key includes structured table solutions", () => {
	const pdf = createPdf({
		title: "Mesh Table",
		courseName: "Computer Graphics",
		questions: [
			{
				q: "Enter the vertex table.",
				a: ["Enter the X, Y, and Z coordinates."],
				c: 0,
				interaction: {
					type: "mesh-table",
					rowPrefix: "v",
					correctTable: [
						["1", "2", "3"],
						["4", "5", "6"],
					],
				},
			},
		],
	});
	const streams = pdfPageStreams(pdf);
	const answerKey = streams.find((stream) => stream.includes("(ANSWER KEY)"));
	assert.match(answerKey, /\(1\. v0: 1, 2, 3\)/);
	assert.match(answerKey, /\(v1: 4, 5, 6\)/);
});

test("question JSON export includes the resolved correct answer", () => {
	const json = JSON.parse(
		createJson({
			title: "Binary Basics",
			courseName: "Computer Architecture",
			questions: [
				{
					q: "Which digits are used in binary?",
					a: ["0 and 1", "1 and 2"],
					c: 0,
				},
			],
		}),
	);
	assert.equal(json.questions[0].correctAnswer, "0 and 1");
	assert.equal(json.questions[0].c, 0);
});

test("question text wraps at readable word boundaries and long tokens", () => {
	assert.deepEqual(wrapText("one two three four", 7), ["one two", "three", "four"]);
	assert.deepEqual(wrapText("abcdefgh", 3), ["abc", "def", "gh"]);
});

test("Statistic Practice is marked non-downloadable in the quiz catalog", () => {
	const statisticsPractice = quizCatalog.DataSci.find(
		(quiz) => quiz.id === "statisticsPractice",
	);
	assert.ok(statisticsPractice);
	assert.equal(statisticsPractice.downloadable, false);
});

test("non-downloadable quizzes cannot be exported as PDF or JSON", () => {
	const quiz = {
		title: "Statistic Practice",
		downloadable: false,
		questions: [{ q: "Question", a: ["Answer"], c: 0 }],
	};
	assert.throws(() => createPdf(quiz), /Downloads are disabled/);
	assert.throws(() => createJson(quiz), /Downloads are disabled/);
});
