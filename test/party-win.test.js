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

test("party results standings and online host actions reflect room readiness", async () => {
	const ids = [
		"partyPodium",
		"partyResultsTitle",
		"partyResultsMode",
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
		{ id: "a", name: "Alex", color: "#112233", score: 1, overallScore: 6, competitionPowerupsUsed: 2 },
		{ id: "b", name: "Blair", color: "#445566", score: 3, overallScore: 2, competitionPowerupsUsed: 5 },
	];
	const results = {
		partyMode: true,
		onlineParty: true,
		partyHostDisplay: true,
		competitionMode: true,
		partyRoomCode: "ABCD",
		partyCurrentPlayerId: "a",
		partyActionPlayerId: "a",
		category: "CloudComp",
		quizType: "quiz1",
		partyPlayers: players,
	};
	const listeners = new Map();
	const sentMessages = [];
	let partyClient;
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
			body: createElement(),
			createElement,
			getElementById: (id) => elements.get(id),
		},
		window: {
			location: { href: "https://quizhub.test/party-win.html" },
			quizHubPreferences: { secretMode: false },
			QuizHubPartyQuestion: require("../js/party-question.js"),
			QuizHubPartyClient: class {
				constructor() {
					partyClient = this;
				}
				on(type, listener) {
					listeners.set(type, listener);
				}
				send(message) {
					sentMessages.push(message);
					return Promise.resolve();
				}
			},
		},
	};
	vm.runInNewContext(partyWinScript, context, { filename: "js/party-win.js" });

	const title = elements.get("partyResultsTitle");
	const modeLabel = elements.get("partyResultsMode");
	const podium = elements.get("partyPodium");
	const currentTab = elements.get("partyCurrentStandings");
	const overallTab = elements.get("partyOverallStandings");
	const rankedNames = () =>
		podium.children.map((card) =>
			card.children.find((child) => child.className === "party-player-name").textContent,
		);

	assert.equal(elements.get("partyResultsTabs").hidden, false);
	assert.equal(modeLabel.textContent, "COMPETITION MODE");
	assert.equal(context.document.body.dataset.competitionMode, "true");
	assert.equal(title.textContent, "Blair wins!");
	assert.deepEqual(rankedNames(), ["Blair", "Alex"]);
	assert.equal(currentTab["aria-pressed"], "true");
	assert.ok(
		podium.children[0].children.some(
			(child) => child.textContent === "Powerups used: 5",
		),
	);
	assert.ok(
		podium.children[1].children.some(
			(child) => child.textContent === "Powerups used: 2",
		),
	);

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

	const waitingRoom = {
		stage: "results",
		hostDisplay: false,
		players: [
			{ id: "a", host: true, ready: true, connected: true },
			{ id: "b", host: false, ready: true, connected: false },
		],
	};
	listeners.get("joined")({ room: waitingRoom });
	assert.equal(elements.get("partyPlayAgain").disabled, true);
	assert.equal(elements.get("partyChooseNewQuiz").disabled, true);
	assert.match(elements.get("partyResultsStatus").textContent, /Waiting for all players/);

	const readyRoom = {
		...waitingRoom,
		players: waitingRoom.players.map((player) => ({ ...player, connected: true })),
	};
	listeners.get("room-state")({ room: readyRoom });
	assert.equal(elements.get("partyPlayAgain").disabled, false);
	assert.equal(elements.get("partyChooseNewQuiz").disabled, false);

	elements.get("partyPlayAgain").click();
	await Promise.resolve();
	assert.equal(sentMessages.at(-1).type, "replay");
	listeners.get("replay")({
		category: "CloudComp",
		quiz: "quiz1",
		mixedSources: null,
		netHubQuizId: null,
	});
	assert.match(context.window.location.href, /quiz\.html/);

	elements.get("partyChooseNewQuiz").click();
	await Promise.resolve();
	assert.equal(sentMessages.at(-1).type, "choose-new-quiz");
	listeners.get("choose-new-quiz")();
	assert.match(context.window.location.href, /party-lobby\.html/);
});
