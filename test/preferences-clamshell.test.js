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
	const math = Object.create(Math);
	math.random = Math.random;
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

	vm.runInNewContext(preferencesScript, {
		window,
		document,
		CustomEvent,
		URL,
		Math: math,
	});

	return {
		classes,
		media,
		mediaListeners,
		math,
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

test("quiz music options expose named, persistent track selections", () => {
	const state = loadPreferences();

	assert.deepEqual(
		[
			...state.preferences
				.getQuizMusicOptions()
				.map((option) => option.value),
		],
		[
			"default",
			"rotation",
			"quizHubRotation",
			"netHubRotation",
			"BonusTrack",
			"Practice1",
			"BinaryQuiz2",
			"Practice2",
			"CompArch",
			"CloudComp",
			"DataSci",
			"StatisticPractice",
			"DataSciLautest",
			"SoftEngi",
			"CompGFX",
			"CompGFXLautest",
			"SocIndi",
			"NetHubMenu",
			"NetHubBonus1",
			"NetHubBonus2",
			"NetHubBonus3",
			"NetHubBonus4",
			"NetHubBonus5",
			"NetHubBonus6",
			"NetHubBonus7",
			"NetHubBonus8",
			"NetHubBonus9",
			"NetHubBonus10",
		],
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus1"),
		/\/music\/NetHubBonus\/Net1\.mp3$/,
	);
	const musicOptions = state.preferences.getQuizMusicOptions();
	assert.equal(
		musicOptions.some((option) => option.value === "BinaryQuiz2Intro"),
		false,
	);
	assert.equal(
		musicOptions.find((option) => option.value === "BinaryQuiz2").category,
		"QuizHub OST",
	);
	assert.equal(
		musicOptions.find((option) => option.value === "NetHubBonus1").category,
		"NetHub OST",
	);
	assert.equal(
		musicOptions.find((option) => option.value === "NetHubMenu").label,
		"NetHub Menu",
	);
	assert.equal(
		musicOptions.find((option) => option.value === "NetHubMenu").category,
		"NetHub OST",
	);
	assert.equal(
		musicOptions.find((option) => option.value === "NetHubBonus10").label,
		"NetHub Track 10",
	);
	assert.equal(
		musicOptions.find((option) => option.value === "rotation").category,
		"Rotation",
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubMenu"),
		/\/music\/NetHub\.mp3$/,
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus2"),
		/\/music\/NetHubBonus\/Net2\.mp3$/,
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus3"),
		/\/music\/NetHubBonus\/Net3\.mp3$/,
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus4"),
		/\/music\/NetHubBonus\/Net4\.mp3$/,
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus5"),
		/\/music\/NetHubBonus\/Net5\.mp3$/,
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus6"),
		/\/music\/NetHubBonus\/Net6\.mp3$/,
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus7"),
		/\/music\/NetHubBonus\/Net7\.mp3$/,
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus8"),
		/\/music\/NetHubBonus\/Net8\.mp3$/,
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus9"),
		/\/music\/NetHubBonus\/Net9\.mp3$/,
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus10"),
		/\/music\/NetHubBonus\/Net10\.mp3$/,
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus9", true),
		/\/music\/NetHubBonus\/Net9_ALT\.mp3$/,
	);
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus8", true),
		/\/music\/NetHubBonus\/Net8\.mp3$/,
	);
	const rotationTracks = new Set();
	for (let index = 0; index < 100; index++) {
		state.math.random = () => index / 100;
		rotationTracks.add(
			state.preferences.getNextQuizMusic(
				"https://quizhub.example/music/QuizMusic.wav",
				"./music/QuizMusic.wav",
			),
		);
	}
	state.math.random = Math.random;
	assert.ok(
		rotationTracks.has(
			state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus1"),
		),
	);
	assert.ok(
		rotationTracks.has(
			state.preferences.resolveQuizMusic("fallback.mp3", "NetHubBonus2"),
		),
	);
	state.preferences.setQuizMusic("rotation");
	assert.equal(state.values.get("quizHubQuizMusic"), "rotation");
	assert.equal(state.preferences.isQuizMusicRotation, true);
	assert.equal(state.preferences.getQuizMusicName(), "Full Music Rotation");
	let previousRotationTrack =
		state.preferences.resolveQuizMusic("./music/QuizMusic.wav");
	for (let index = 0; index < 50; index++) {
		const nextRotationTrack = state.preferences.getNextQuizMusic(
			previousRotationTrack,
			"./music/QuizMusic.wav",
		);
		assert.notEqual(nextRotationTrack, previousRotationTrack);
		assert.match(nextRotationTrack, /\/music\/(?:[^/]+\/)?[^/]+\.(?:wav|mp3)$/);
		previousRotationTrack = nextRotationTrack;
	}
	const collectRotationTracks = (selection) => {
		state.preferences.setQuizMusic(selection);
		const tracks = new Set();
		for (let index = 0; index < 100; index++) {
			state.math.random = () => index / 100;
			const nextTrack = state.preferences.getNextQuizMusic(
				null,
				"./music/QuizMusic.wav",
			);
			tracks.add(nextTrack);
		}
		return tracks;
	};
	const quizHubRotationTracks = collectRotationTracks("quizHubRotation");
	assert.ok(
		[...quizHubRotationTracks].some((track) =>
			track.endsWith("/music/BinaryQuiz2.mp3"),
		),
	);
	assert.ok(
		[...quizHubRotationTracks].every(
			(track) =>
				!track.includes("/music/NetHubBonus/") &&
				!track.endsWith("/music/NetHub.mp3"),
		),
	);
	const netHubRotationTracks = collectRotationTracks("netHubRotation");
	assert.deepEqual(
		[...netHubRotationTracks].sort(),
		[
			"https://quizhub.example/music/NetHub.mp3",
			"https://quizhub.example/music/NetHubBonus/Net1.mp3",
			"https://quizhub.example/music/NetHubBonus/Net10.mp3",
			"https://quizhub.example/music/NetHubBonus/Net2.mp3",
			"https://quizhub.example/music/NetHubBonus/Net3.mp3",
			"https://quizhub.example/music/NetHubBonus/Net4.mp3",
			"https://quizhub.example/music/NetHubBonus/Net5.mp3",
			"https://quizhub.example/music/NetHubBonus/Net6.mp3",
			"https://quizhub.example/music/NetHubBonus/Net7.mp3",
			"https://quizhub.example/music/NetHubBonus/Net8.mp3",
			"https://quizhub.example/music/NetHubBonus/Net9.mp3",
			"https://quizhub.example/music/NetHubBonus/Net9_ALT.mp3",
		],
	);
	state.preferences.setQuizMusic("rotation");
	const fullRotationTracks = collectRotationTracks("rotation");
	assert.ok(
		[...fullRotationTracks].some((track) =>
			track.endsWith("/music/BinaryQuiz2.mp3"),
		),
	);
	assert.ok(
		[...fullRotationTracks].some((track) =>
			track.includes("/music/NetHubBonus/"),
		),
	);
	state.math.random = Math.random;

	const verifyTrack9Alternate = (rotation) => {
		const rotationState = loadPreferences();
		rotationState.math.random = () =>
			rotation === "netHubRotation" ? 0.85 : 0.92;
		const firstTrack9 = rotationState.preferences.getNextQuizMusic(
			null,
			"./music/QuizMusic.wav",
			rotation,
		);
		assert.ok(firstTrack9.endsWith("/music/NetHubBonus/Net9.mp3"));
		const secondTrack9 = rotationState.preferences.getNextQuizMusic(
			"https://quizhub.example/music/NetHubBonus/Net8.mp3",
			"./music/QuizMusic.wav",
			rotation,
		);
		assert.ok(secondTrack9.endsWith("/music/NetHubBonus/Net9_ALT.mp3"));
		const thirdTrack9 = rotationState.preferences.getNextQuizMusic(
			"https://quizhub.example/music/NetHubBonus/Net8.mp3",
			"./music/QuizMusic.wav",
			rotation,
		);
		assert.ok(thirdTrack9.endsWith("/music/NetHubBonus/Net9.mp3"));
	};
	verifyTrack9Alternate("rotation");
	verifyTrack9Alternate("netHubRotation");

	state.preferences.setQuizMusic("Practice1");
	assert.equal(state.values.get("quizHubQuizMusic"), "Practice1");
	assert.equal(state.preferences.isQuizMusicRotation, false);
	assert.equal(state.preferences.getQuizMusicName(), "Binary");
	state.preferences.setQuizMusic("BinaryQuiz2");
	assert.equal(state.values.get("quizHubQuizMusic"), "BinaryQuiz2");
	assert.equal(state.preferences.getQuizMusicName(), "Binary Quiz 2");
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3"),
		/\/music\/BinaryQuiz2\.mp3$/,
	);
	assert.match(
		state.preferences.resolveQuizMusicIntro("BinaryQuiz2"),
		/\/music\/BinaryQuiz2-Intro\.mp3$/,
	);
	assert.equal(state.preferences.resolveQuizMusicIntro("CompGFXLautest"), null);
	assert.equal(
		state.preferences.getQuizMusicIntroPlayCount("CompGFXLautest"),
		0,
	);
	assert.equal(state.preferences.getQuizMusicIntroPlayCount("BinaryQuiz2"), 1);
	assert.equal(state.preferences.getQuizMusicIntroPlayCount("Practice1"), 0);
	assert.equal(state.preferences.resolveQuizMusicIntro("Practice1"), null);
	state.preferences.setQuizMusic("BonusTrack");
	assert.equal(state.values.get("quizHubQuizMusic"), "BonusTrack");
	assert.equal(state.preferences.getQuizMusicName(), "Bonus Track");
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3", "CompArch"),
		/\/music\/QuizMusic\.wav$/,
	);
	assert.equal(state.preferences.quizMusic, "BonusTrack");
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3"),
		/\/music\/BonusTrack\.wav$/,
	);
	state.preferences.setQuizMusic("SocIndi");
	assert.equal(state.preferences.quizMusic, "SocIndi");
	assert.equal(
		state.preferences.getQuizMusicName("StatisticPractice"),
		"Statistic Practice",
	);
	assert.equal(
		state.preferences.getQuizMusicName("DataSciLautest"),
		"Dr. Lau's Practice (Data Science)",
	);
	assert.equal(
		state.preferences.getQuizMusicName("CompGFXLautest"),
		"Dr. Lau's Practice (Computer Graphics)",
	);
	state.preferences.setQuizMusic("StatisticPractice");
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3"),
		/\/music\/Trial_Quiz\.mp3$/,
	);
	state.preferences.setQuizMusic("DataSciLautest");
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3"),
		/\/music\/Challenge2\.mp3$/,
	);
	state.preferences.setQuizMusic("CompGFXLautest");
	assert.match(
		state.preferences.resolveQuizMusic("fallback.mp3"),
		/\/music\/Challenge\.mp3$/,
	);
});

test("secret-mode quiz song options include the secret track", () => {
	const state = loadPreferences();
	state.preferences.setSecretMode(true);

	assert.equal(state.preferences.quizMusic, "run");
	assert.equal(state.preferences.getQuizMusicName(), "Run");
	assert.equal(
		state.preferences.getQuizMusicOptions()[0].value,
		"run",
	);
});
