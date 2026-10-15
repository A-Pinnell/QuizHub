"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { test } = require("node:test");
const { getSceneGroups, quizCatalog } = require("../js/dev-scenes.js");

const root = path.resolve(__dirname, "..");

test("Developer Menu scenes cover every root HTML page and selectable quiz", () => {
	const scenes = getSceneGroups().flatMap((group) => group.scenes);
	const sceneIds = new Set(scenes.map((scene) => scene.id));
	const targetPages = new Set(
		scenes.map((scene) => {
			return new URL(
				scene.href || "quiz.html",
				"https://quizhub.example/",
			).pathname.slice(1);
		}),
	);

	for (const page of fs.readdirSync(root).filter((name) => name.endsWith(".html"))) {
		assert.ok(targetPages.has(page), `Scene Select is missing ${page}.`);
	}
	for (const [category, quizzes] of Object.entries(quizCatalog)) {
		for (const quiz of quizzes) {
			assert.ok(
				sceneIds.has(`quiz:${category}:${quiz.id}`),
				`Scene Select is missing ${category} / ${quiz.id}.`,
			);
		}
	}
	assert.ok(sceneIds.has("options-menu"));
	assert.ok(sceneIds.has("win-passed"));
	assert.ok(sceneIds.has("win-failed"));
	assert.ok(sceneIds.has("perfect-win"));
	assert.ok(sceneIds.has("party-win"));
});

test("Developer Menu exposes Scene Select as a universal control", () => {
	const menuHtml = fs.readFileSync(path.join(root, "dev-menu.html"), "utf8");
	assert.match(menuHtml, /<section data-dev-page="any">[\s\S]*?id="devSceneSelect"/);
	assert.match(menuHtml, /Mobile \(412 × 924\)/);
	assert.match(menuHtml, /id="devQuizSetup"/);
});

test("Developer Menu exposes a persistent Mobile gestures toggle", () => {
	const menuHtml = fs.readFileSync(path.join(root, "dev-menu.html"), "utf8");
	const menuScript = fs.readFileSync(
		path.join(root, "js", "dev-menu.js"),
		"utf8",
	);
	const hostScript = fs.readFileSync(path.join(root, "js", "dev.js"), "utf8");
	const indexScript = fs.readFileSync(path.join(root, "js", "index.js"), "utf8");

	assert.match(menuHtml, /<section data-dev-page="any">[\s\S]*?id="devMobileGestures"/);
	assert.match(menuScript, /sendAction\("mobile-gestures"/);
	assert.match(hostScript, /quizHubDeveloperMobileGestures/);
	assert.match(hostScript, /dev-mobile-gestures/);
	assert.match(hostScript, /cornerTapCount < 5/);
	assert.match(hostScript, /nativeMatchMedia\("\(pointer: coarse\)"\)/);
	assert.match(indexScript, /canUseMobileMenuGestures/);
	assert.match(indexScript, /pointerdown/);
});

test("Perfect Score scene animates through 255 questions", () => {
	const originalWindow = global.window;
	let targetUrl;
	global.window = {
		location: {
			assign(url) {
				targetUrl = url;
			},
		},
	};
	try {
		require("../js/dev-scenes.js").navigate(
			"perfect-win",
			"https://quizhub.example/index.html",
		);
	} finally {
		if (originalWindow === undefined) delete global.window;
		else global.window = originalWindow;
	}

	const target = new URL(targetUrl);
	const results = JSON.parse(target.searchParams.get("results"));
	assert.equal(results.total, 255);
	assert.equal(results.score, 255);
	assert.equal(results.history.length, 255);
	assert.equal(results.history.at(-1).questionIndex, 254);
});
