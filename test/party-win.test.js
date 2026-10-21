"use strict";

const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { test } = require("node:test");
const vm = require("node:vm");

const partyWinScript = readFileSync("js/party-win.js", "utf8");

function createElement() {
	const listeners = new Map();
	return {
		children: [],
		dataset: {},
		hidden: false,
		style: { setProperty() {} },
		addEventListener(type, listener) {
			listeners.set(type, listener);
		},
		append(...children) {
			this.children.push(...children);
		},
		appendChild(child) {
			this.children.push(child);
		},
		click() {
			listeners.get("click")?.({});
		},
		replaceChildren(...children) {
			this.children = children;
		},
		setAttribute(name, value) {
			this[name] = value;
		},
	};
}

test("party results toggle between current quiz and cumulative party standings", () => {
	const ids = [
		"partyPodium",
		"partyResultsTitle",
		"partyResultsSummary",
		"partyResultsError",
		"partyResultsStatus",
		"partyResultsTabs",
		"partyCurrentStandings",
		"partyOverallStandings",
		"partyPlayAgain",
		"partyChooseNewQuiz",
		"partyReturnMenu",
	];
	const elements = new Map(ids.map((id) => [id, createElement()]));
	const players = [
		{ id: "a", name: "Alex", color: "#112233", score: 1, overallScore: 6 },
		{ id: "b", name: "Blair", color: "#445566", score: 3, overallScore: 2 },
	];
	const results = {
		partyMode: true,
		onlineParty: true,
		partyHostDisplay: true,
		partyRoomCode: "ABCD",
		partyCurrentPlayerId: "a",
		partyActionPlayerId: "a",
		category: "CloudComp",
		quizType: "quiz1",
		partyPlayers: players,
	};
	const context = {
		URL,
		URLSearchParams,
		console,
		sessionStorage: {
			getItem: () => JSON.stringify(results),
			setItem() {},
		},
		document: {
			addEventListener() {},
			createElement,
			getElementById: (id) => elements.get(id),
		},
		window: {
			location: { href: "https://quizhub.test/party-win.html" },
			quizHubPreferences: { secretMode: false },
			QuizHubPartyQuestion: require("../js/party-question.js"),
			QuizHubPartyClient: class {
				on() {}
				send() {
					return Promise.resolve();
				}
			},
		},
	};
	vm.runInNewContext(partyWinScript, context, { filename: "js/party-win.js" });

	const title = elements.get("partyResultsTitle");
	const podium = elements.get("partyPodium");
	const currentTab = elements.get("partyCurrentStandings");
	const overallTab = elements.get("partyOverallStandings");
	const rankedNames = () =>
		podium.children.map((card) =>
			card.children.find((child) => child.className === "party-player-name").textContent,
		);

	assert.equal(elements.get("partyResultsTabs").hidden, false);
	assert.equal(title.textContent, "Blair wins!");
	assert.deepEqual(rankedNames(), ["Blair", "Alex"]);
	assert.equal(currentTab["aria-pressed"], "true");

	overallTab.click();
	assert.equal(title.textContent, "Overall party placements");
	assert.deepEqual(rankedNames(), ["Alex", "Blair"]);
	assert.equal(currentTab["aria-pressed"], "false");
	assert.equal(overallTab["aria-pressed"], "true");

	currentTab.click();
	assert.equal(title.textContent, "Blair wins!");
	assert.deepEqual(rankedNames(), ["Blair", "Alex"]);
	assert.equal(currentTab["aria-pressed"], "true");
	assert.equal(overallTab["aria-pressed"], "false");
});
