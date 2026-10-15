const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const preferencesScript = readFileSync(
	join(__dirname, "..", "js", "preferences.js"),
	"utf8",
);
const clamshellDisabledQuery = "(max-width: 720px) and (max-height: 748px)";

function loadPreferences({
	disabled = false,
	savedClamshell = false,
	displayMode = "desktop",
} = {}) {
	const values = new Map([
		["quizHubClamshellMode", String(savedClamshell)],
	]);
	const classes = new Map([
		[`dev-display-${displayMode}`, displayMode !== "desktop"],
	]);
	const mediaListeners = [];
	let reloadCount = 0;
	let requestedMediaQuery = "";
	const media = {
		matches: disabled,
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
		matchMedia(query) {
			requestedMediaQuery = query;
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
				contains(name) {
					return classes.get(name) === true;
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
		requestedMediaQuery: () => requestedMediaQuery,
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

test("small displays force Clamshell off and prevent enabling it", () => {
	const state = loadPreferences({ disabled: true, savedClamshell: true });

	assert.equal(state.requestedMediaQuery(), clamshellDisabledQuery);
	assert.equal(state.preferences.clamshellMode, false);
	assert.equal(state.values.get("quizHubClamshellMode"), "false");
	state.preferences.setClamshellMode(true);
	assert.equal(state.preferences.clamshellMode, false);
	assert.equal(state.reloadCount(), 0);
});

test("entering the disabled display size turns off active Clamshell mode", () => {
	const state = loadPreferences();
	state.preferences.setClamshellMode(true);

	state.media.matches = true;
	state.mediaListeners.forEach((listener) => listener({ matches: true }));

	assert.equal(state.preferences.clamshellMode, false);
	assert.equal(state.values.get("quizHubClamshellMode"), "false");
	assert.equal(state.classes.get("clamshell-mode"), false);
});

test("larger mobile displays do not disable Clamshell mode", () => {
	const state = loadPreferences({ disabled: false, savedClamshell: true });

	assert.equal(state.requestedMediaQuery(), clamshellDisabledQuery);
	assert.equal(state.preferences.clamshellMode, true);
	state.preferences.setClamshellMode(false);
	assert.equal(state.reloadCount(), 1);
});

test("developer mobile preview allows Clamshell mode on a desktop-sized window", () => {
	const state = loadPreferences({
		disabled: true,
		displayMode: "mobile",
	});

	assert.equal(state.preferences.clamshellModeAvailable, true);
	state.preferences.setClamshellMode(true);
	assert.equal(state.preferences.clamshellMode, true);
	assert.equal(state.values.get("quizHubClamshellMode"), "true");
	assert.equal(state.reloadCount(), 1);
});

test("developer Cover Screen preview keeps Clamshell mode unavailable", () => {
	const state = loadPreferences({
		displayMode: "cover",
		savedClamshell: true,
	});

	assert.equal(state.preferences.clamshellModeAvailable, false);
	assert.equal(state.preferences.clamshellMode, false);
	assert.equal(state.values.get("quizHubClamshellMode"), "false");
});
