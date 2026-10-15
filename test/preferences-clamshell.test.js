const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const preferencesScript = readFileSync(
	join(__dirname, "..", "js", "preferences.js"),
	"utf8",
);

function loadPreferences({ coverScreen = false, savedClamshell = false } = {}) {
	const values = new Map([
		["quizHubClamshellMode", String(savedClamshell)],
	]);
	const classes = new Map();
	const mediaListeners = [];
	let reloadCount = 0;
	const media = {
		matches: coverScreen,
		addEventListener(type, listener) {
			if (type === "change") mediaListeners.push(listener);
		},
	};
	const window = {
		localStorage: {
			getItem(key) {
				return values.get(key) ?? null;
			},
			setItem(key, value) {
				values.set(key, String(value));
			},
			removeItem(key) {
				values.delete(key);
			},
		},
		matchMedia() {
			return media;
		},
		location: {
			href: "https://quizhub.example/",
			origin: "https://quizhub.example",
			reload() {
				reloadCount += 1;
			},
		},
		HTMLMediaElement: { prototype: { play() {} } },
		dispatchEvent() {},
	};
	const document = {
		fullscreenElement: null,
		documentElement: {
			classList: {
				toggle(name, enabled) {
					classes.set(name, enabled);
				},
			},
			dataset: {},
			style: { setProperty() {} },
		},
	};
	class CustomEvent {
		constructor(type, options) {
			this.type = type;
			this.detail = options.detail;
		}
	}

	vm.runInNewContext(preferencesScript, { window, document, CustomEvent });

	return {
		classes,
		media,
		mediaListeners,
		preferences: window.quizHubPreferences,
		reloadCount: () => reloadCount,
		values,
	};
}

test("Clamshell changes persist and reload when enabled or disabled", () => {
	const state = loadPreferences();

	state.preferences.setClamshellMode(true);
	assert.equal(state.values.get("quizHubClamshellMode"), "true");
	assert.equal(state.classes.get("clamshell-mode"), true);
	assert.equal(state.reloadCount(), 1);

	state.preferences.setClamshellMode(false);
	assert.equal(state.values.get("quizHubClamshellMode"), "false");
	assert.equal(state.classes.get("clamshell-mode"), false);
	assert.equal(state.reloadCount(), 2);
});

test("cover screen mode forces Clamshell off and prevents enabling it", () => {
	const state = loadPreferences({ coverScreen: true, savedClamshell: true });

	assert.equal(state.preferences.clamshellMode, false);
	assert.equal(state.values.get("quizHubClamshellMode"), "false");
	state.preferences.setClamshellMode(true);
	assert.equal(state.preferences.clamshellMode, false);
	assert.equal(state.reloadCount(), 0);
});

test("entering cover screen mode turns off an active Clamshell preference", () => {
	const state = loadPreferences();
	state.preferences.setClamshellMode(true);

	state.media.matches = true;
	state.mediaListeners.forEach((listener) => listener({ matches: true }));

	assert.equal(state.preferences.clamshellMode, false);
	assert.equal(state.values.get("quizHubClamshellMode"), "false");
	assert.equal(state.classes.get("clamshell-mode"), false);
});
