"use strict";

const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { test } = require("node:test");
const vm = require("node:vm");

class Element {
	constructor() {
		this.listeners = new Map();
		this.children = [];
		this.dataset = {};
		this.attributes = {};
		this.open = false;
	}

	addEventListener(type, listener) {
		this.listeners.set(type, listener);
	}

	removeEventListener(type, listener) {
		if (this.listeners.get(type) === listener) this.listeners.delete(type);
	}

	dispatch(type, event = {}) {
		this.listeners.get(type)?.(event);
	}

	setAttribute(name, value) {
		this.attributes[name] = value;
	}

	append(...children) {
		this.children.push(...children);
	}

	appendChild(child) {
		this.children.push(child);
	}

	replaceChildren(...children) {
		this.children = children;
	}

	querySelectorAll(selector) {
		if (selector === ".quiz-music-picker-category") return this.categoryTabs;
		if (selector === "button") return this.children;
		return [];
	}

	querySelector(selector) {
		if (selector === ".quiz-music-picker-options") return this.options;
		if (selector === ".quiz-music-picker-status") return this.status;
		if (selector === ".quiz-music-picker-close") return this.closeButton;
		if (selector === ".quiz-music-picker-option") return this.options.children[0];
		return null;
	}

	showModal() {
		this.open = true;
	}

	close() {
		this.open = false;
	}

	focus() {}
}

function createPicker() {
	const button = new Element();
	const documentListeners = new Map();
	const sounds = [];
	const dialog = new Element();
	dialog.options = new Element();
	dialog.status = new Element();
	dialog.closeButton = new Element();
	dialog.categoryTabs = ["QuizHub OST", "NetHub OST", "Rotation"].map(
		(category, index) => {
			const tab = new Element();
			tab.id = `category-${index}`;
			tab.dataset.category = category;
			return tab;
		},
	);
	let selected = "NetHubBonus9";
	const selections = [];
	const window = {
		location: { href: "https://quizhub.example/quiz.html" },
		addEventListener() {},
		quizHubPreferences: {
			get quizMusic() {
				return selected;
			},
			getQuizMusicName: () => "NetHub Track 9",
			getQuizMusicOptions: () => [
				{
					value: "NetHubBonus9",
					label: "NetHub Track 9",
					category: "NetHub OST",
				},
			],
			isQuizMusicRotationValue: () => false,
			setQuizMusic(value) {
				selected = value;
			},
		},
	};
	const document = {
		body: { append() {} },
		createElement: (tag) => (tag === "dialog" ? dialog : new Element()),
		addEventListener(type, listener) {
			documentListeners.set(type, listener);
		},
	};
	class Audio extends Element {
		constructor(source) {
			super();
			this.src = source;
			this.playCount = 0;
			sounds.push(this);
		}

		load() {}

		pause() {}

		play() {
			this.playCount += 1;
			return Promise.resolve();
		}
	}
	vm.runInNewContext(
		readFileSync("js/quiz-music-picker.js", "utf8"),
		{ document, window, Audio, URL },
		{ filename: "js/quiz-music-picker.js" },
	);
	window.QuizHubMusicPicker.attach({
		button,
		isSoundEnabled: () => true,
		isMusicEnabled: () => true,
		onSelectionStart() {},
		onTrackSelected(...args) {
			selections.push(args);
		},
	});
	return {
		button,
		dialog,
		documentListeners,
		selections,
		sounds,
	};
}

test("holding A selects the alternate NetHub Track 9, including when already selected", () => {
	const picker = createPicker();
	picker.button.dispatch("click");
	picker.documentListeners.get("keydown")({ key: "a" });
	picker.dialog.options.children[0].dispatch("click");

	assert.match(picker.sounds[0].src, /\/secret\/Loading\.mp3$/);
	assert.equal(picker.sounds[0].playCount, 1);
	picker.sounds[0].dispatch("ended");
	assert.equal(picker.selections.length, 1);
	assert.equal(picker.selections[0][2], "NetHubBonus9");
	assert.equal(picker.selections[0][3], true);

	picker.documentListeners.get("keyup")({ key: "a" });
	picker.button.dispatch("click");
	picker.dialog.options.children[0].dispatch("click");
	assert.equal(picker.selections.length, 1);
});
