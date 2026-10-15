const questionBank = window.questionBank || {};
const codes = window.questionCodes || {};
const themes = window.quizThemes || {};
const resolveAssetUrl = (path) =>
	new URL(path, window.location.href).toString();
const canonicalCategory = (value) => {
	const category = Object.keys(questionBank).find(
		(key) => key.toLowerCase() === value?.toLowerCase(),
	);
	return category || value;
};

const soundFiles = {
	correct: resolveAssetUrl("./sfx/Correct.wav"),
	highlight: resolveAssetUrl("./sfx/highlight.wav"),
	incorrect: resolveAssetUrl("./sfx/Incorrect.wav"),
	begin: resolveAssetUrl("./sfx/QuizBegin.wav"),
	popup: resolveAssetUrl("./sfx/Popup.wav"),
	started: resolveAssetUrl("./secret/Started.mp3"),
	comboUp: resolveAssetUrl("./sfx/ComboUp.wav"),
};

const params = new URLSearchParams(location.search);
const requestedQuiz = params.get("quiz");
const requestedCategory = canonicalCategory(params.get("category"));
const forceStaticQuestionOrder =
	requestedCategory === "CompGFX" && requestedQuiz === "lautest";
const isDataSciLautest =
	requestedCategory === "DataSci" && requestedQuiz === "lautest";
const originalDocumentTitle = document.title;
const clamshellViewport = window.matchMedia("(max-width: 760px)");
function isForcedMobileDisplay() {
	return (
		document.documentElement.classList.contains("dev-display-mobile") ||
		document.documentElement.classList.contains("dev-display-cover")
	);
}
function syncClamshellDocumentTitle() {
	document.title =
		window.quizHubPreferences.clamshellMode &&
		(clamshellViewport.matches || isForcedMobileDisplay())
			? "Quiz Hub DS"
			: originalDocumentTitle;
}
window.addEventListener(
	"quizhub:preferenceschange",
	syncClamshellDocumentTitle,
);
window.addEventListener("quizhub:display-modechange", syncClamshellDocumentTitle);
clamshellViewport.addEventListener("change", syncClamshellDocumentTitle);
syncClamshellDocumentTitle();
const partyHost = params.get("partyHost") === "true";
let hostDisplayEnabled = params.get("hostDisplay") === "true";
const partyHostDisplay = hostDisplayEnabled && partyHost;
let hostDisplayPlayerId = params.get("hostDisplayPlayer") || "";
const hostDisplayMusicAllowed = !hostDisplayEnabled || partyHost;
const soundCache = {};
let soundsMuted = localStorage.getItem("quizHubMuted") === "true";
let activeHighlightSound = null;
Object.entries(soundFiles).forEach(([name, path]) => {
	const sound = new Audio(path);
	sound.preload = "auto";
	soundCache[name] = sound;
});

let audioUnlocked = false;
function unlockQuizAudio() {
	if (audioUnlocked) return;
	audioUnlocked = true;
	Object.values(soundCache).forEach((sound) => {
		try {
			sound.load();
			sound.muted = false;
		} catch (error) {
			console.warn("Could not unlock audio:", error);
		}
	});
	if (!musicMuted && quizMusic && quizMusic.paused) {
		startQuizMusic();
	}
	updateMeta();
}

function playSound(name) {
	if (soundsMuted) return;
	if (
		name === "highlight" &&
		activeHighlightSound &&
		!activeHighlightSound.paused &&
		!activeHighlightSound.ended
	)
		return;
	unlockQuizAudio();
	const soundName =
		window.quizHubPreferences.secretMode &&
		["popup", "begin", "select"].includes(name)
			? "started"
			: name;
	const defaultSource = soundFiles[soundName];
	if (!defaultSource) return;
	const soundSource = window.quizHubPreferences.resolveSfx(
		soundName,
		defaultSource,
		category,
	);
	const sound =
		soundSource === defaultSource
			? soundCache[soundName].cloneNode()
			: new Audio(soundSource);
	if (name === "highlight") activeHighlightSound = sound;
	try {
		sound.currentTime = 0;
		sound.play().catch(() => {});
	} catch (error) {
		console.warn("Could not play sound:", error);
	}
}

document.addEventListener("pointerover", (event) => {
	const button = event.target.closest("button");
	if (button && !button.contains(event.relatedTarget)) playSound("highlight");
});
document.addEventListener("pointerdown", (event) => {
	const button = event.target.closest("button");
	if (
		button &&
		!button.classList.contains("sound-toggle") &&
		!button.classList.contains("music-toggle")
	) {
		playSound("highlight");
	}
});

const soundToggle = document.getElementById("soundToggle");
function updateSoundToggle() {
	soundToggle.textContent = soundsMuted ? "🔇" : "🔊";
	soundToggle.setAttribute(
		"aria-label",
		soundsMuted ? "Unmute sounds" : "Mute sounds",
	);
	soundToggle.setAttribute("aria-pressed", String(soundsMuted));
}
soundToggle.addEventListener("click", () => {
	soundsMuted = !soundsMuted;
	localStorage.setItem("quizHubMuted", String(soundsMuted));
	unlockQuizAudio();
	updateSoundToggle();
});
updateSoundToggle();

let musicMuted = localStorage.getItem("quizHubMusicMuted") === "true";
const musicToggle = document.getElementById("musicToggle");
const requestedMusicCategory = canonicalCategory(
	new URLSearchParams(location.search).get("category"),
);
const quizMusicFile = forceStaticQuestionOrder
	? resolveAssetUrl("./music/Challenge_Intro.mp3")
	: requestedMusicCategory === "DataSci"
		? resolveAssetUrl("./music/DataSciMusic.wav")
		: requestedMusicCategory === "Practice1"
			? resolveAssetUrl("./music/BinaryTrack.wav")
			: requestedMusicCategory === "Practice2"
				? resolveAssetUrl("./music/HexadecimalTrack.wav")
				: requestedMusicCategory === "CloudComp"
					? resolveAssetUrl("./music/CloudCompMusic.wav")
					: requestedMusicCategory === "SoftEngi"
						? resolveAssetUrl("./music/SoftEngiMusic.wav")
						: requestedMusicCategory === "CompGFX"
							? resolveAssetUrl("./music/CompGFXMusic.wav")
							: requestedMusicCategory === "SocIndi"
								? resolveAssetUrl("./music/SocIndiMusic.wav")
								: resolveAssetUrl("./music/QuizMusic.wav");
const quizMusic = isDataSciLautest
	? new Audio()
	: new Audio(
			forceStaticQuestionOrder
				? quizMusicFile
				: window.quizHubPreferences.resolveQuizMusic(quizMusicFile),
		);
const isPreloadedQuiz = window.self !== window.top;
let quizMusicPending = false;
let lautestQuizMusicStarted = false;
let dataSciLautestMusicStarted = false;
let lautestLoopContext = null;
const lautestLoopBuffers = new Map();
let lautestLoopSource = null;
let lautestLoopSourceUrl = "";
let lautestLoopGeneration = 0;
quizMusic.loop = true;
quizMusic.volume = 0.45;
function updateMusicToggle() {
	musicToggle.textContent = musicMuted ? "♫̸" : "♫";
	musicToggle.disabled = false;
	musicToggle.setAttribute(
		"aria-label",
		musicMuted ? "Unmute music" : "Mute music",
	);
	musicToggle.setAttribute("aria-pressed", String(musicMuted));
}
function startQuizMusic() {
	if (isPreloadedQuiz || musicMuted || !hostDisplayMusicAllowed) return;
	if (isDataSciLautest && !dataSciLautestMusicStarted) return;
	if (forceStaticQuestionOrder) {
		startLautestLoopingMusic();
		return;
	}
	quizMusic
		.play()
		.then(() => {
			quizMusicPending = false;
		})
		.catch(() => {
			quizMusicPending = true;
		});
}
async function startLautestLoopingMusic() {
	if (musicMuted || !hostDisplayMusicAllowed) return;
	const AudioContextClass = window.AudioContext || window.webkitAudioContext;
	if (!AudioContextClass) {
		quizMusic.play().catch((error) => {
			console.error("Could not play Dr. Lau's Practice music:", error);
			quizMusicPending = true;
		});
		return;
	}

	const sourceUrl = quizMusic.src;
	if (!lautestLoopSource || lautestLoopSourceUrl !== sourceUrl) {
		quizMusic
			.play()
			.then(() => {
				quizMusicPending = false;
			})
			.catch(() => {
				quizMusicPending = true;
			});
	}

	try {
		const generation = ++lautestLoopGeneration;
		lautestLoopContext ||= new AudioContextClass();
		const resume = lautestLoopContext.resume();
		let bufferPromise = lautestLoopBuffers.get(sourceUrl);
		if (!bufferPromise) {
			bufferPromise = fetch(sourceUrl)
				.then((response) => {
					if (!response.ok)
						throw new Error(
							`Music request failed with status ${response.status}`,
						);
					return response.arrayBuffer();
				})
				.then((data) => lautestLoopContext.decodeAudioData(data));
			lautestLoopBuffers.set(sourceUrl, bufferPromise);
		}
		const [buffer] = await Promise.all([bufferPromise, resume]);
		if (
			generation !== lautestLoopGeneration ||
			musicMuted ||
			sourceUrl !== quizMusic.src
		)
			return;
		if (lautestLoopSource && lautestLoopSourceUrl === sourceUrl) return;
		if (lautestLoopSource) lautestLoopSource.stop();

		const source = lautestLoopContext.createBufferSource();
		const gain = lautestLoopContext.createGain();
		source.buffer = buffer;
		source.loop = true;
		gain.gain.value = quizMusic.volume;
		source.connect(gain);
		gain.connect(lautestLoopContext.destination);
		const offset = quizMusic.paused
			? 0
			: quizMusic.currentTime % buffer.duration;
		source.start(0, offset);
		lautestLoopSource = source;
		lautestLoopSourceUrl = sourceUrl;
		quizMusic.pause();
		quizMusicPending = false;
	} catch (error) {
		if (musicMuted) return;
		console.error("Could not start seamless Dr. Lau's Practice music:", error);
		quizMusicPending = true;
		quizMusic.play().catch((fallbackError) => {
			console.error("Could not play Dr. Lau's Practice music:", fallbackError);
		});
	}
}
function stopLautestLoopingMusic() {
	lautestLoopGeneration++;
	if (lautestLoopSource) {
		lautestLoopSource.stop();
		lautestLoopSource = null;
		lautestLoopSourceUrl = "";
	}
	quizMusic.pause();
	quizMusicPending = false;
}
function startLautestQuizMusic() {
	if (!forceStaticQuestionOrder || lautestQuizMusicStarted) return;
	lautestQuizMusicStarted = true;
	stopLautestLoopingMusic();
	quizMusic.src = resolveAssetUrl("./music/Challenge.mp3");
	quizMusic.load();
	quizMusicPending = true;
	startQuizMusic();
}
function startDataSciLautestMusic() {
	if (!isDataSciLautest || dataSciLautestMusicStarted) return;
	dataSciLautestMusicStarted = true;
	quizMusic.src = resolveAssetUrl("./music/Challenge2.mp3");
	quizMusic.load();
	startQuizMusic();
}
musicToggle.addEventListener("click", () => {
	musicMuted = !musicMuted;
	localStorage.setItem("quizHubMusicMuted", String(musicMuted));
	unlockQuizAudio();
	if (musicMuted) {
		if (forceStaticQuestionOrder) stopLautestLoopingMusic();
		else quizMusic.pause();
	} else {
		startQuizMusic();
	}
	updateMusicToggle();
});
updateMusicToggle();
startQuizMusic();
document.addEventListener("pointerdown", unlockQuizAudio, { capture: true });
document.addEventListener("touchstart", unlockQuizAudio, {
	capture: true,
	passive: true,
});
document.addEventListener("click", unlockQuizAudio, { capture: true });
document.addEventListener("keydown", unlockQuizAudio, { capture: true });
window.addEventListener("pageshow", startQuizMusic);
document.addEventListener("visibilitychange", () => {
	if (document.visibilityState === "visible") startQuizMusic();
});

const mixedStudyActive =
	requestedCategory === "MixedStudy" && requestedQuiz === "mixed";
let mixedStudyConfigError = "";
let requestedMixedSources = null;
if (mixedStudyActive) {
	try {
		requestedMixedSources = window.QuizHubMixedStudy.normalizeSources(
			JSON.parse(params.get("mixedSources") || "null"),
		);
	} catch (error) {
		mixedStudyConfigError = error.message;
	}
}
const partyRoomCode = (params.get("partyRoom") || "").toUpperCase();
const partyPlayerId = params.get("partyPlayer") || "";
const networkPartyActive =
	/^[A-Z]{4}$/.test(partyRoomCode) &&
	Boolean(partyPlayerId) &&
	!window.quizHubOfflineTestMode;
let hostDisplayAnswerer =
	hostDisplayEnabled && partyPlayerId === hostDisplayPlayerId;
let canControlPartyQuiz =
	partyHost || (networkPartyActive && hostDisplayAnswerer);
function syncHostDisplayControls(room) {
	if (!room) return;
	hostDisplayEnabled = room.hostDisplay === true;
	hostDisplayPlayerId = hostDisplayEnabled
		? room.hostDisplayPlayerId || ""
		: "";
	hostDisplayAnswerer =
		hostDisplayEnabled && partyPlayerId === hostDisplayPlayerId;
	canControlPartyQuiz =
		partyHost || (networkPartyActive && hostDisplayAnswerer);
	document.body.classList.toggle(
		"host-display-answerer",
		hostDisplayEnabled && !partyHost,
	);
	document.body.classList.toggle(
		"host-display-player-screen",
		hostDisplayEnabled && !partyHost,
	);
	document.body.classList.toggle("host-display-player", hostDisplayAnswerer);
	if (networkPartyActive && !partyHost) {
		skipButton.hidden = !hostDisplayAnswerer;
		nextButton.hidden = !hostDisplayAnswerer;
		quitButton.hidden = false;
		quitButton.textContent = hostDisplayAnswerer ? "END QUIZ" : "LEAVE GAME";
		quitButton.setAttribute(
			"aria-label",
			hostDisplayAnswerer ? "End quiz" : "Leave game",
		);
	}
	const controls = nextButton.closest(".controls");
	if (controls) {
		if (hostDisplayAnswerer) {
			controls.style.setProperty("display", "grid", "important");
		} else {
			controls.style.removeProperty("display");
			controls.style.removeProperty("grid-template-columns");
		}
	}
}
const defaultCategory = Object.keys(questionBank)[0] || "CompArch";
const category =
	requestedCategory &&
	(questionBank[requestedCategory] ||
		codes[requestedCategory] ||
		mixedStudyActive)
		? requestedCategory
		: defaultCategory;
const requestedPartyQuizTheme = params.get("partyQuizTheme");
const selectedQuizTheme =
	hostDisplayEnabled &&
	["default", "quizhub", "ai-model", "blended"].includes(
		requestedPartyQuizTheme,
	)
		? requestedPartyQuizTheme
		: window.quizHubPreferences.quizTheme;
const activeQuizTheme = mixedStudyActive
	? "quizhub"
	: selectedQuizTheme === "default"
		? category === "SoftEngi"
			? "ai-model"
			: category === "CompGFX"
				? "blended"
				: "quizhub"
		: selectedQuizTheme;
const socIndiReviewSections =
	category === "SocIndi" &&
	requestedQuiz === "reviewQuiz" &&
	questionBank.SocIndi &&
	questionBank.SocIndi.review &&
	!Array.isArray(questionBank.SocIndi.review)
		? questionBank.SocIndi.review
		: null;
const availableReviewSections = socIndiReviewSections
	? Object.keys(socIndiReviewSections)
	: [];
const requestedReviewSections = params.get("reviewSections");
let selectedReviewSections =
	requestedReviewSections === null
		? [...availableReviewSections]
		: [
				...new Set(
					requestedReviewSections
						.split(",")
						.filter((section) => availableReviewSections.includes(section)),
				),
			];
const requestedTimeLimit = params.get("timeLimit");
const requestedQuestionTimeLimit = Number.parseInt(
	params.get("questionTimeLimit"),
	10,
);
const initialQuestionTimeLimit =
	Number.isInteger(requestedQuestionTimeLimit) &&
	requestedQuestionTimeLimit >= 1 &&
	requestedQuestionTimeLimit <= 60
		? requestedQuestionTimeLimit
		: null;

function resolveQuestionBank(course, quizId = null) {
	const source = questionBank[course];
	if (Array.isArray(source)) return source;
	if (!source || typeof source !== "object") return [];

	if (quizId && Array.isArray(source[quizId])) return source[quizId];

	if (quizId === "textbookQuiz") {
		return Array.isArray(source.textbook)
			? source.textbook
			: Array.isArray(source.textbookQuestions)
				? source.textbookQuestions
				: [];
	}

	if (quizId === "reviewQuiz") {
		return Array.isArray(source.review)
			? source.review
			: source.review && typeof source.review === "object"
				? Object.values(source.review).flat()
				: Array.isArray(source.reviewQuestions)
					? source.reviewQuestions
					: [];
	}

	return Array.isArray(source.review)
		? source.review
		: Array.isArray(source.textbook)
			? source.textbook
			: Object.values(source).find(Array.isArray) || [];
}

function getSelectedQuestionBank() {
	if (!socIndiReviewSections)
		return resolveQuestionBank(category, requestedQuiz);
	return selectedReviewSections.flatMap(
		(section) => socIndiReviewSections[section] || [],
	);
}

let bank = [];
if (mixedStudyActive && !mixedStudyConfigError) {
	try {
		bank = window.QuizHubMixedStudy.buildQuestionBank(
			questionBank,
			requestedMixedSources,
		);
	} catch (error) {
		mixedStudyConfigError = error.message;
	}
} else if (!mixedStudyActive) {
	bank = getSelectedQuestionBank();
}
const rawMiniQuestions = params.get("miniQuestions");
const customQuestionSequence = rawMiniQuestions
	? rawMiniQuestions
			.split(",")
			.map((value) => Number.parseInt(value, 10))
			.filter((value) => Number.isInteger(value) && value >= 0)
	: [];
const miniQuizMode =
	params.get("miniQuiz") === "true" || customQuestionSequence.length > 0;
const partyModeRequested =
	params.get("partyMode") === "true" || networkPartyActive;
let partyPlayers = [];
let partyConfigError = "";
let partyHideLockedAnswers = false;
let partyShowPlayerScores = true;
if (partyModeRequested) {
	try {
		const savedPartyPlayers = JSON.parse(
			sessionStorage.getItem("quizHubPartyPlayers") || "null",
		);
		if (
			!Array.isArray(savedPartyPlayers) ||
			savedPartyPlayers.length < 2 ||
			savedPartyPlayers.length > 50
		) {
			throw new Error(
				"Party mode needs between two and fifty player profiles.",
			);
		}
		partyPlayers = savedPartyPlayers.map((player, index) => ({
			id:
				typeof player.id === "string" && player.id
					? player.id
					: `player-${index + 1}`,
			name:
				typeof player.name === "string" && player.name.trim()
					? player.name.trim().slice(0, 48)
					: `Player ${index + 1}`,
			color:
				typeof player.color === "string" && /^#[0-9a-f]{6}$/i.test(player.color)
					? player.color
					: "#4688e8",
			photo:
				typeof player.photo === "string" &&
				player.photo.startsWith("data:image/")
					? player.photo
					: "",
			score: 0,
			overallScore: 0,
		}));
		const partySetup = JSON.parse(
			sessionStorage.getItem("quizHubPartySetup") || "null",
		);
		partyHideLockedAnswers = partySetup?.hideLockedAnswers === true;
	} catch (error) {
		partyConfigError = error.message;
	}
}
const partyModeActive =
	partyModeRequested && (partyPlayers.length >= 2 || networkPartyActive);
if (networkPartyActive && hostDisplayEnabled && !partyHost) {
	document.body.classList.add("host-display-answerer");
	document.body.classList.add("host-display-player-screen");
}
if (networkPartyActive && hostDisplayAnswerer) {
	document.body.classList.add("host-display-player");
}
if (networkPartyActive && partyPlayers.length < 2) {
	partyConfigError = "The shared player list could not be loaded.";
}
let partyTurns = [];
let partyChoices = [];
let partyHistory = [];
let partyCurrentPlayer = null;
let partyTurnAnimating = false;
let partyTurnAnimation = null;
let partyTurnTimer = null;
let partyTurnToken = 0;
const partyConnection = networkPartyActive
	? new window.QuizHubPartyClient()
	: null;
let partyConnectionReady = false;
let partyStartPending = false;
let skipQuestionPending = false;

const theme = themes[category] ||
	themes.CompArch || {
		pageBg: "#6f7d86",
		visualBg: "#348ac0",
		courseText: "#0e426c",
		questionText: "#0e426c",
		panelBg: "#6f7d86",
		panelBorder: "#91a4bf",
		buttonBg: "#b9bec0",
		buttonAccent: "#7a1731",
		success: "#39c85a",
		danger: "#d94b4b",
	};

const root = document.documentElement;
root.style.setProperty("--quiz-page-bg", theme.pageBg);
root.style.setProperty("--quiz-visual-bg", theme.visualBg);
root.style.setProperty("--quiz-course-text", theme.courseText);
root.style.setProperty("--quiz-question-text", theme.questionText);
root.style.setProperty("--quiz-hud-text", theme.hudText || "#111111");
root.style.setProperty("--quiz-panel-bg", theme.panelBg);
root.style.setProperty("--quiz-panel-border", theme.panelBorder);
root.style.setProperty("--quiz-button-bg", theme.buttonBg);
root.style.setProperty("--quiz-button-accent", theme.buttonAccent);
root.style.setProperty("--quiz-success-color", theme.success);
root.style.setProperty("--quiz-danger-color", theme.danger);

const courseCode = document.getElementById("courseCode");
const answersEl = document.getElementById("answers");
const statisticsSetBuilder = document.getElementById("statisticsSetBuilder");
const statisticsSetInputs = [
	...statisticsSetBuilder.querySelectorAll("[data-statistics-value]"),
];
const statisticsSetResult = document.getElementById("statisticsSetResult");
const statisticsSetSolution = document.getElementById("statisticsSetSolution");
const statisticsSetStatus = document.getElementById("statisticsSetStatus");
const statisticsSetSubmit = document.getElementById("statisticsSetSubmit");
const tableAnswerBuilder = document.getElementById("tableAnswerBuilder");
const tableAnswerScroll = document.getElementById("tableAnswerScroll");
const tableAnswerStatus = document.getElementById("tableAnswerStatus");
const tableAnswerSubmit = document.getElementById("tableAnswerSubmit");
const openglBuilder = document.getElementById("openglBuilder");
const openglSequence = document.getElementById("openglSequence");
const openglAttempts = document.getElementById("openglAttempts");
const openglSolution = document.getElementById("openglSolution");
const openglSubmit = document.getElementById("openglSubmit");
const feedback = document.getElementById("feedback");
const skipButton = document.getElementById("skip");
const nextButton = document.getElementById("next");
const quitButton = document.getElementById("quit");
const fade = document.getElementById("fade");
const setup = document.getElementById("quizSetup");
const content = document.getElementById("quizContent");
const countInput = document.getElementById("questionCount");
const countMax = document.getElementById("countMax");
const setupCount = document.getElementById("setupCount");
const setupError = document.getElementById("setupError");
const socIndiTimeLimits = document.getElementById("socIndiTimeLimits");
const perQuestionTimeLimit = document.getElementById("perQuestionTimeLimit");
const reviewSectionDialog = document.getElementById("reviewSectionDialog");
const reviewSectionTrigger = document.getElementById("reviewSectionTrigger");
const reviewSectionClose = document.getElementById("reviewSectionClose");
const reviewSectionDone = document.getElementById("reviewSectionDone");
const reviewSectionChoices = document.getElementById("reviewSectionChoices");
const questionJumpDialog = document.getElementById("questionJumpDialog");
const questionJumpClose = document.getElementById("questionJumpClose");
const questionJumpList = document.getElementById("questionJumpList");
const beginButton = document.getElementById("beginQuiz");
const setupTitle = document.getElementById("setupTitle");
const exitSetupButton = document.getElementById("exitSetup");
const timer = document.getElementById("timer");
const questionTimer = document.getElementById("questionTimer");
const scoreDisplay = document.getElementById("scoreDisplay");
const comboDisplay = document.getElementById("comboDisplay");
const comboPopup = document.getElementById("comboPopup");
const questionDisplay = document.getElementById("questionDisplay");
const hostDisplayPlayerScore = document.getElementById(
	"hostDisplayPlayerScore",
);

const partyScoreDisplay = document.getElementById("partyScoreDisplay");
const partyScoreToggle = document.getElementById("partyScoreToggle");
const partySettingsSummary = document.getElementById("partySettingsSummary");
const partyPlayerLeftDialog = document.getElementById("partyPlayerLeftDialog");
const partyPlayerLeftMessage = document.getElementById(
	"partyPlayerLeftMessage",
);
const questionTitle = document.getElementById("questionTitle");
const questionContentRow = document.querySelector(".question-content-row");
const questionImageTrigger = document.getElementById("questionImageTrigger");
const questionImage = document.getElementById("questionImage");
const questionImageView = document.getElementById("questionImageView");
const questionImageDialog = document.getElementById("questionImageDialog");
const questionImageExpanded = document.getElementById("questionImageExpanded");
const questionImageClose = document.getElementById("questionImageClose");
const isSoftEngi = activeQuizTheme === "ai-model";
const isCompGFX = category === "CompGFX" && activeQuizTheme === "blended";
const softengiSidebar = document.getElementById("softengiSidebar");
const softengiScore = document.getElementById("softengiScore");
const softengiCombo = document.getElementById("softengiCombo");
const softengiAccuracy = document.getElementById("softengiAccuracy");
const softengiProgress = document.getElementById("softengiProgress");
const softengiProgressTrack = document.querySelector(
	".softengi-progress-track",
);
const softengiProgressBar = document.getElementById("softengiProgressBar");
const softengiTime = document.getElementById("softengiTime");

if (mixedStudyActive) {
	document.body.classList.add("mixed-study-mode");
	setupTitle.textContent = "Mixed Study";
	if (mixedStudyConfigError) {
		setupError.textContent = mixedStudyConfigError;
		beginButton.disabled = true;
	}
}

if (isSoftEngi) {
	document.body.classList.add("softengi-mode");
	softengiSidebar.hidden = false;
	const softengiComposer = document.querySelector(".softengi-composer");
	const questionHeading = questionTitle.closest(".quiz-heading");
	if (softengiComposer && questionHeading) {
		if (
			!window.quizHubPreferences.clamshellMode ||
			!clamshellViewport.matches
		) {
			softengiComposer.parentElement.insertBefore(
				questionHeading,
				softengiComposer,
			);
		}
		softengiComposer.after(feedback);
	}
}
if (isCompGFX) {
	document.body.classList.add("compgfx-mode");
	if (forceStaticQuestionOrder) document.body.classList.add("lautest-mode");
	document.body.append(feedback);
	setupTitle.textContent = "New Quiz";
	setup.querySelector(".setup-kicker").textContent = "QUIZ WORKSPACE";
	beginButton.textContent = "START QUIZ";
	const gfxStage = document.querySelector(".gfx-cube-stage");
	const gfxFrontFace = document.querySelector(".gfx-cube-front");
	const questionHeading = questionTitle.closest(".quiz-heading");
	const selectionCursor = document.getElementById("gfxSelectionCursor");
	if (gfxStage && gfxFrontFace && questionHeading) {
		gfxFrontFace.removeAttribute("aria-hidden");
		gfxFrontFace.appendChild(questionHeading);
		if (selectionCursor) gfxFrontFace.appendChild(selectionCursor);
	}
}
if (partyModeActive) document.body.classList.add("party-mode");
if (partyModeRequested && !partyModeActive) {
	setupError.textContent = `Party mode could not start: ${partyConfigError}`;
	beginButton.disabled = true;
}
if (networkPartyActive) {
	beginButton.disabled = !partyHost;
	partySettingsSummary.hidden = false;
	partySettingsSummary.textContent =
		"Waiting for the host to choose quiz settings…";
	if (!partyHost) {
		beginButton.textContent = "WAITING FOR HOST";
		setup.classList.add("party-network-guest");
		setupTitle.textContent = "Waiting for Host";
		setupError.textContent =
			"Waiting for the host to configure and start the quiz…";
		setup
			.querySelectorAll("input, select, #reviewSectionTrigger")
			.forEach((control) => {
				control.disabled = true;
			});
		skipButton.hidden = true;
		nextButton.hidden = true;
		quitButton.textContent = "LEAVE GAME";
		quitButton.setAttribute("aria-label", "Leave game");
	}
}

courseCode.textContent = mixedStudyActive
	? "MIXED STUDY"
	: `${codes[category] || category}`;
let totalAvailable = bank.length;
countInput.max = Math.max(1, totalAvailable);
countInput.value = Math.max(1, totalAvailable);
countMax.textContent = `of ${totalAvailable}`;
setupCount.textContent = `${totalAvailable} question${totalAvailable === 1 ? "" : "s"} available in this quiz.`;

let orderMode = "random";
const randomOrderInput = document.querySelector(
	'input[name="order"][value="random"]',
);
if (forceStaticQuestionOrder) {
	randomOrderInput.closest("fieldset").remove();
	orderMode = "static";
}
let timeLimitMinutes = null;
let perQuestionTimeMinutes = initialQuestionTimeLimit;
let selectedQuestionCount = totalAvailable;
let questionSequence = [];
let sequencePosition = 0;
let current = null;
let currentQuestionIndex = null;
let cheatAlwaysRightAnswer = false;
let cheatAlwaysPerfectScore = false;
let cheatComboLossDisabled = false;
let cheatRotationEnabled = false;
let cheatRotationAngle = 0;
let cheatCoverScale = 1;
let lastLautestCorrectAnswerPosition = null;
let questionNumber = 0;
let score = 0;
let combo = 0;
let longestCombo = 0;
const partyComboStreaks = new Map();
const partyLongestComboStreaks = new Map();
let answered = false;
let openglAttemptCount = 0;
let meshTableAttemptCount = 0;
let statisticsSetAttemptCount = 0;
let history = [];
let quizStarted = false;
let remainingSeconds = null;
let timerInterval = null;
let remainingQuestionSeconds = null;
let questionTimerInterval = null;
let quizEnded = false;
let questionTypingTimer = null;
let feedbackTypingTimer = null;
let compGfxQuestionLoaded = false;
let compGfxRotation = -45;
let compGFXAnswerPanelAnimation = null;
const compGfxCube = document.getElementById("gfxCube");
const compGfxQuestion = document.querySelector(
	".gfx-cube-face > .quiz-heading",
);
const compGfxCursor = document.getElementById("gfxSelectionCursor");
let compGfxQuestionAnimation = null;
let compGfxImageAnimation = null;
let compGfxTransitionId = 0;
const compGfxFaceOrder = ["front", "left", "back", "right"];

function placeCompGFXQuestionOnFace(rotation, selectFace = true) {
	if (!compGfxCube || !compGfxQuestion) return;
	const faceIndex =
		((Math.round(rotation / 90) % compGfxFaceOrder.length) +
			compGfxFaceOrder.length) %
		compGfxFaceOrder.length;
	const targetFace = compGfxCube.querySelector(
		`.gfx-cube-${compGfxFaceOrder[faceIndex]}`,
	);
	if (!targetFace) return;

	compGfxCube.querySelectorAll(".gfx-cube-face").forEach((face) => {
		const isTargetFace = face === targetFace;
		face.classList.toggle("active-question-face", isTargetFace && selectFace);
		if (isTargetFace) {
			face.removeAttribute("aria-hidden");
		} else {
			face.setAttribute("aria-hidden", "true");
		}
	});
	targetFace.append(compGfxQuestion);
	if (compGfxCursor) targetFace.append(compGfxCursor);
	return targetFace;
}

function animateCompGFXCursor(reduceMotion) {
	if (!compGfxCursor || reduceMotion) return;
	compGfxCursor.classList.remove("selecting");
	void compGfxCursor.offsetWidth;
	compGfxCursor.classList.add("selecting");
}

function transitionCompGFXIntoQuiz() {
	if (!isCompGFX || !compGfxCube) return;
	if (hostDisplayAnswerer) {
		document.body.classList.add("gfx-quiz-started");
		return;
	}

	const motionMode = window.quizHubPreferences.motionMode;
	const reduceMotion =
		motionMode === "reduced" ||
		window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (reduceMotion) {
		document.body.classList.add("gfx-quiz-started");
		requestAnimationFrame(fitCompGFXQuestionTitle);
		return;
	}

	const currentTransform = new DOMMatrixReadOnly(
		getComputedStyle(compGfxCube).transform,
	);
	const currentAngle =
		(Math.atan2(currentTransform.m31, currentTransform.m11) * 180) / Math.PI;
	const targetAngle =
		compGfxRotation +
		360 * Math.floor((currentAngle - compGfxRotation) / 360) -
		360;
	const startTransform = `rotateX(-12deg) rotateY(${currentAngle}deg)`;

	compGfxCube.style.transform = startTransform;
	compGfxCube.style.setProperty("--gfx-cube-angle", `${targetAngle}deg`);
	document.body.classList.add("gfx-quiz-started");
	requestAnimationFrame(fitCompGFXQuestionTitle);

	const spinAnimation = compGfxCube.animate(
		[
			{ transform: startTransform, offset: 0 },
			{ transform: `rotateX(-20deg) rotateY(${targetAngle}deg)`, offset: 1 },
		],
		{ duration: 1300, easing: "cubic-bezier(.3,.7,.25,1)", fill: "forwards" },
	);

	spinAnimation.onfinish = () => {
		compGfxCube.style.removeProperty("transform");
		spinAnimation.cancel();
	};
}

function animateCompGFXCube() {
	if (!isCompGFX || !compGfxCube || hostDisplayAnswerer) return 0;

	const motionMode = window.quizHubPreferences.motionMode;
	const reduceMotion =
		motionMode === "reduced" ||
		window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const turnDuration = motionMode === "minimal" ? 450 : 650;
	compGfxCube.style.setProperty(
		"--gfx-turn-duration",
		`${turnDuration / 1000}s`,
	);
	if (compGfxQuestionLoaded) {
		const nextRotation = compGfxRotation + 90;
		compGfxCube.style.setProperty(
			"--gfx-cube-from",
			`rotateX(-20deg) rotateY(${compGfxRotation}deg)`,
		);
		compGfxCube.style.setProperty(
			"--gfx-cube-to",
			`rotateX(-20deg) rotateY(${nextRotation}deg)`,
		);
		compGfxRotation = nextRotation;
		compGfxCube.classList.remove("turning");
		return reduceMotion ? 0 : turnDuration;
	} else {
		compGfxQuestionLoaded = true;
		compGfxCube.style.setProperty("--gfx-cube-angle", `${compGfxRotation}deg`);
		placeCompGFXQuestionOnFace(compGfxRotation);
		animateCompGFXCursor(reduceMotion);
		return 0;
	}
}

socIndiTimeLimits.hidden = !socIndiReviewSections;
for (let minutes = 1; minutes <= 60; minutes++) {
	const option = document.createElement("option");
	option.value = String(minutes);
	option.textContent = `${minutes} minute${minutes === 1 ? "" : "s"}`;
	perQuestionTimeLimit.appendChild(option);
}
if (initialQuestionTimeLimit !== null) {
	perQuestionTimeLimit.value = String(initialQuestionTimeLimit);
}
if (requestedTimeLimit !== null) {
	const timeOption = [
		...document.querySelectorAll('input[name="timeLimit"]'),
	].find(
		(input) =>
			input.value === requestedTimeLimit &&
			(!["100", "150"].includes(input.value) || Boolean(socIndiReviewSections)),
	);
	if (timeOption) timeOption.checked = true;
}

if (socIndiReviewSections) {
	reviewSectionTrigger.hidden = false;
	availableReviewSections.forEach((section) => {
		const label = document.createElement("label");
		label.className = "review-section-choice";
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.value = section;
		checkbox.checked = selectedReviewSections.includes(section);
		const text = document.createElement("span");
		text.textContent = section;
		label.append(checkbox, text);
		reviewSectionChoices.appendChild(label);
		checkbox.addEventListener("change", () => {
			selectedReviewSections = [
				...reviewSectionChoices.querySelectorAll("input:checked"),
			].map((input) => input.value);
			bank = getSelectedQuestionBank();
			totalAvailable = bank.length;
			const currentCount = Number.parseInt(countInput.value, 10);
			countInput.max = Math.max(1, totalAvailable);
			countInput.value = Math.min(
				Number.isFinite(currentCount) ? currentCount : totalAvailable,
				Math.max(1, totalAvailable),
			);
			selectedQuestionCount = Number.parseInt(countInput.value, 10);
			countMax.textContent = `of ${totalAvailable}`;
			setupCount.textContent = `${totalAvailable} question${totalAvailable === 1 ? "" : "s"} available in the selected sections.`;
			reviewSectionTrigger.textContent = `Choose review sections (${selectedReviewSections.length} selected)`;
			setupError.textContent = "";
			publishPartySettings();
		});
	});
	reviewSectionTrigger.textContent = `Choose review sections (${selectedReviewSections.length} selected)`;
	reviewSectionTrigger.addEventListener("click", () =>
		reviewSectionDialog.showModal(),
	);
	reviewSectionClose.addEventListener("click", () =>
		reviewSectionDialog.close(),
	);
	reviewSectionDone.addEventListener("click", () =>
		reviewSectionDialog.close(),
	);
}

function shuffle(array) {
	const copy = [...array];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}

function shuffleWithoutConsecutiveDuplicates(array) {
	const copy = [...array];

	if (copy.length < 2) return copy;

	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}

	for (let i = 1; i < copy.length; i++) {
		if (copy[i] === copy[i - 1]) {
			const swapIndex = copy.findIndex(
				(value, index) => index > i && value !== copy[i - 1],
			);
			if (swapIndex !== -1) {
				[copy[i], copy[swapIndex]] = [copy[swapIndex], copy[i]];
			}
		}
	}

	return copy;
}

function avoidRepeatedLautestCorrectAnswerPosition(answerOrder, correctIndex) {
	if (!forceStaticQuestionOrder) return answerOrder;
	let correctPosition = answerOrder.indexOf(correctIndex);
	if (correctPosition === -1) return answerOrder;
	if (
		answerOrder.length > 1 &&
		correctPosition === lastLautestCorrectAnswerPosition
	) {
		let swapPosition = Math.floor(Math.random() * (answerOrder.length - 1));
		if (swapPosition >= correctPosition) swapPosition++;
		[answerOrder[correctPosition], answerOrder[swapPosition]] = [
			answerOrder[swapPosition],
			answerOrder[correctPosition],
		];
		correctPosition = swapPosition;
	}
	lastLautestCorrectAnswerPosition = correctPosition;
	return answerOrder;
}

function buildQuestionSequence() {
	const originalSequence = bank.map((_, index) => index);

	if (!forceStaticQuestionOrder && orderMode === "random") {
		questionSequence = shuffle(originalSequence);
		if (
			originalSequence.length > 1 &&
			questionSequence.every(
				(value, index) => value === originalSequence[index],
			)
		) {
			questionSequence = buildQuestionSequence();
			return;
		}
	} else {
		questionSequence = originalSequence;
	}

	questionSequence = questionSequence.slice(0, selectedQuestionCount);
	sequencePosition = 0;
}

function showQuestionJumpDialog() {
	if (
		!quizStarted ||
		quizEnded ||
		(networkPartyActive && !partyHost) ||
		!questionSequence.length
	)
		return;
	questionJumpList.replaceChildren();
	questionSequence.forEach((bankIndex, position) => {
		const question = bank[bankIndex];
		if (!question) return;
		const button = document.createElement("button");
		button.type = "button";
		button.className = "question-jump-choice";
		button.setAttribute("aria-current", String(position === sequencePosition));
		const number = document.createElement("span");
		number.className = "question-jump-number";
		number.textContent = String(position + 1);
		const text = document.createElement("span");
		text.className = "question-jump-text";
		text.textContent = question.q;
		button.append(number, text);
		button.addEventListener("click", () => {
			if (position === sequencePosition) return;
			if (networkPartyActive) {
				partyConnection
					.send({
						type: "dev-jump-question",
						code: partyRoomCode,
						questionNumber: position,
					})
					.then(() => questionJumpDialog.close())
					.catch((error) => {
						setupError.textContent = `Could not jump the party quiz: ${error.message}`;
					});
				return;
			}
			questionJumpDialog.close();
			stopQuestionTimer();
			sequencePosition = position;
			slideComboPopupOut();
			loadQuestion();
		});
		questionJumpList.appendChild(button);
	});
	questionJumpDialog.showModal();
}

function shouldCountAsCorrect(resultType, isCorrect) {
	if (partyModeActive || networkPartyActive) return isCorrect;
	return (
		cheatAlwaysPerfectScore ||
		(resultType === "answer" && cheatAlwaysRightAnswer) ||
		isCorrect
	);
}

function resetComboAfterIncorrectAnswer() {
	if (
		!cheatComboLossDisabled ||
		partyModeActive ||
		networkPartyActive
	)
		combo = 0;
}

function clearCheatRotationAnimation() {
	const quizPage = document.querySelector(".quiz-page");
	if (!quizPage) return;
	quizPage.classList.remove("cheat-rotation-enabled");
	cheatRotationAngle = 0;
	updateCheatScreenTransform();
}

function updateCheatScreenTransform() {
	const quizPage = document.querySelector(".quiz-page");
	if (!quizPage) return;
	if (document.documentElement.classList.contains("cheat-display-cover")) {
		quizPage.style.transform = `translate(-50%, -50%) scale(${cheatCoverScale}) rotate(${cheatRotationAngle}deg)`;
	} else if (cheatRotationAngle !== 0) {
		quizPage.style.transform = `rotate(${cheatRotationAngle}deg)`;
	} else {
		quizPage.style.removeProperty("transform");
	}
}

function updateCheatCoverScale() {
	cheatCoverScale = Math.min(
		1,
		window.quizHubDisplayViewport.width / 720,
		window.quizHubDisplayViewport.height / 748,
	);
	updateCheatScreenTransform();
}

function updateCheatDisplayMode() {
	updateCheatCoverScale();
}

function updateMeta() {
	if (scoreDisplay) scoreDisplay.textContent = `Score: ${score}`;
	if (comboDisplay) comboDisplay.textContent = `Combo: ${combo}`;
	if (questionDisplay) {
		if (current) {
			const remaining = Math.max(0, selectedQuestionCount - questionNumber);
			questionDisplay.textContent = `Question ${questionNumber} of ${selectedQuestionCount} • ${remaining} left`;
		} else {
			questionDisplay.textContent = "Question 0 of 0";
		}
	}
	if (softengiScore)
		softengiScore.textContent = `${score} / ${selectedQuestionCount}`;
	if (softengiCombo) softengiCombo.textContent = String(combo);
	if (softengiAccuracy) {
		const accuracy = history.length
			? Math.round((score / history.length) * 100)
			: 0;
		softengiAccuracy.textContent = `${accuracy}%`;
	}
	if (softengiProgress) {
		softengiProgress.textContent = current
			? `${questionNumber} / ${selectedQuestionCount}`
			: `0 / ${totalAvailable}`;
	}
	if (softengiProgressTrack && softengiProgressBar) {
		const progress = selectedQuestionCount
			? (questionNumber / selectedQuestionCount) * 100
			: 0;
		softengiProgressTrack.setAttribute(
			"aria-valuenow",
			String(Math.round(progress)),
		);
		softengiProgressBar.style.width = `${progress}%`;
	}
	updatePartyScoreDisplay();
}

function resetPartyComboStreaks() {
	partyComboStreaks.clear();
	partyLongestComboStreaks.clear();
	partyPlayers.forEach((player) => partyComboStreaks.set(player.id, 0));
	partyPlayers.forEach((player) => partyLongestComboStreaks.set(player.id, 0));
	combo = 0;
	longestCombo = 0;
}

function updatePartyComboStreaks(correctPlayerIds) {
	const correctPlayers = new Set(correctPlayerIds);
	let anyStreakIncreased = false;
	partyPlayers.forEach((player) => {
		const previousStreak = partyComboStreaks.get(player.id) || 0;
		const streak = correctPlayers.has(player.id) ? previousStreak + 1 : 0;
		partyComboStreaks.set(player.id, streak);
		partyLongestComboStreaks.set(
			player.id,
			Math.max(partyLongestComboStreaks.get(player.id) || 0, streak),
		);
		if (streak > previousStreak) anyStreakIncreased = true;
	});
	combo = networkPartyActive
		? partyComboStreaks.get(partyPlayerId) || 0
		: Math.max(0, ...partyComboStreaks.values());
	longestCombo = Math.max(longestCombo, combo);
	if (anyStreakIncreased && combo > 1) showComboPopup();
}

function updatePartyScoreDisplay() {
	if (!partyScoreDisplay) return;
	partyScoreDisplay.hidden = !partyModeActive;
	partyScoreToggle.hidden = !partyModeActive;
	updateHostDisplayPlayerScore();
	if (!partyModeActive) return;
	const visiblePlayers =
		networkPartyActive && !partyShowPlayerScores
			? partyPlayers.filter((player) => player.id === partyPlayerId)
			: partyPlayers;
	partyScoreDisplay.replaceChildren(
		...visiblePlayers.map((player) => {
			const score = document.createElement("span");
			score.className = "party-player-score-item";
			score.style.setProperty("--party-player-color", player.color);
			score.textContent = `${networkPartyActive && !partyShowPlayerScores ? "Your score" : player.name}: ${player.score}`;
			score.setAttribute(
				"aria-label",
				`${networkPartyActive && !partyShowPlayerScores ? "Your score" : player.name}: ${player.score} points`,
			);
			return score;
		}),
	);
}

function updateHostDisplayPlayerScore() {
	if (!hostDisplayPlayerScore) return;
	const standing =
		networkPartyActive && hostDisplayEnabled && !partyHost
			? window.QuizHubPartyQuestion.getPlayerStanding(
					partyPlayers,
					partyPlayerId,
				)
			: null;
	hostDisplayPlayerScore.hidden = !standing;
	if (!standing) return;
	const suffix =
		standing.place % 100 >= 11 && standing.place % 100 <= 13
			? "th"
			: { 1: "st", 2: "nd", 3: "rd" }[standing.place % 10] || "th";
	hostDisplayPlayerScore.textContent = `Score: ${standing.score} · Place: ${standing.place}${suffix}`;
}

function updatePartySettingsSummary(config) {
	if (!networkPartyActive || !partySettingsSummary) return;
	partySettingsSummary.hidden = false;
	if (!config) {
		partySettingsSummary.textContent =
			"Waiting for the host to choose quiz settings…";
		return;
	}
	const quizTime =
		config.timeLimitMinutes === null
			? "No quiz time limit"
			: `${config.timeLimitMinutes} minute quiz limit`;
	const questionTime =
		config.perQuestionTimeMinutes === null
			? "No per-question timer"
			: `${config.perQuestionTimeMinutes} minute per-question timer`;
	const reviewSections =
		Array.isArray(config.reviewSections) && config.reviewSections.length
			? ` · Sections: ${config.reviewSections.join(", ")}`
			: "";
	const questionCount = Number.isInteger(config.questionCount)
		? config.questionCount
		: config.questionSequence?.length;
	if (!Number.isInteger(questionCount)) return;
	const selectedOrder = forceStaticQuestionOrder
		? "Static question order · Randomized A-D choices"
		: `${config.orderMode === "static" ? "Static" : "Random"} order`;
	partySettingsSummary.textContent = `Host settings: ${questionCount} questions · ${selectedOrder} · ${quizTime} · ${questionTime}${reviewSections}`;
}

function publishPartySettings() {
	if (!networkPartyActive || !partyHost || quizStarted) return;
	const questionCount = Number.parseInt(countInput.value, 10);
	if (
		!Number.isInteger(questionCount) ||
		questionCount < 1 ||
		questionCount > totalAvailable
	)
		return;
	const selectedTime = document.querySelector(
		'input[name="timeLimit"]:checked',
	);
	const selectedOrder = document.querySelector('input[name="order"]:checked');
	const questionMinutes =
		perQuestionTimeLimit.value === "none"
			? null
			: Number.parseInt(perQuestionTimeLimit.value, 10);
	const config = {
		questionCount,
		orderMode:
			forceStaticQuestionOrder || selectedOrder?.value === "static"
				? "static"
				: "random",
		timeLimitMinutes:
			selectedTime && selectedTime.value !== "none"
				? Number(selectedTime.value)
				: null,
		perQuestionTimeMinutes: Number.isInteger(questionMinutes)
			? questionMinutes
			: null,
		reviewSections: socIndiReviewSections ? selectedReviewSections : [],
	};
	partyConnection
		.send({ type: "quiz-config", code: partyRoomCode, config })
		.catch((error) => {
			setupError.textContent = `Could not share quiz settings: ${error.message}`;
		});
	updatePartySettingsSummary(config);
}

function createPartyAvatar(player, className) {
	const avatar = document.createElement("span");
	avatar.className = className;
	avatar.style.setProperty("--party-player-color", player.color);
	if (window.quizHubPreferences.secretMode || player.photo) {
		const image = document.createElement("img");
		image.src = window.quizHubPreferences.secretMode
			? "secret/secret.png"
			: player.photo;
		image.alt = "";
		avatar.appendChild(image);
	} else {
		avatar.textContent = player.name.trim().charAt(0).toUpperCase();
	}
	return avatar;
}

function setPartyAnswerAvailability(available) {
	answersEl.querySelectorAll(".answer").forEach((button) => {
		button.disabled = !available;
	});
	skipButton.disabled = !available;
}

function updatePartyAnswerMarker(button) {
	let markers = button.querySelector(".party-answer-voters");
	if (!markers) {
		markers = document.createElement("span");
		markers.className = "party-answer-voters";
		button.appendChild(markers);
	}
	markers.replaceChildren();
	if (partyHideLockedAnswers && !answered) {
		markers.hidden = true;
		return;
	}
	partyChoices
		.filter(
			(choice) => choice.selectedIndex === Number(button.dataset.originalIndex),
		)
		.forEach((choice) => {
			const player = partyPlayers.find((entry) => entry.id === choice.playerId);
			if (player) {
				const voter = document.createElement("span");
				voter.className = "party-answer-voter";
				voter.setAttribute("role", "img");
				voter.title = `${player.name} locked in this answer`;
				voter.setAttribute(
					"aria-label",
					`${player.name} locked in this answer`,
				);
				const avatar = createPartyAvatar(player, "party-answer-avatar");
				avatar.setAttribute("aria-hidden", "true");
				voter.append(
					avatar,
					Object.assign(document.createElement("span"), {
						className: "party-answer-voter-name",
						textContent: player.name,
					}),
				);
				markers.appendChild(voter);
			}
		});
	markers.hidden = markers.childElementCount === 0;
}

function buildNetworkAnswerOrder(question, questionNumberIndex, questionIndex) {
	const indexes = question.a
		.map((answer, index) => (answer === "BLANK" ? null : index))
		.filter((index) => index !== null);
	if (indexes.length < 2 || indexes.length > 4)
		throw new Error(
			"Online party questions must have between two and four answer choices.",
		);
	let seed = Array.from(
		`${partyRoomCode}:${questionNumberIndex}:${questionIndex}`,
	).reduce(
		(value, character) =>
			Math.imul(value ^ character.charCodeAt(0), 16777619) >>> 0,
		2166136261,
	);
	for (let index = indexes.length - 1; index > 0; index--) {
		seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
		const swap = seed % (index + 1);
		[indexes[index], indexes[swap]] = [indexes[swap], indexes[index]];
	}
	return indexes;
}

function updateNetworkPlayers(players) {
	if (!Array.isArray(players)) return;
	players.forEach((updated) => {
		const player = partyPlayers.find(
			(candidate) => candidate.id === updated.id,
		);
		if (!player) return;
		if (Number.isFinite(Number(updated.score)))
			player.score = Number(updated.score);
		if (Number.isFinite(Number(updated.overallScore))) {
			player.overallScore = Number(updated.overallScore);
		}
	});
	updatePartyScoreDisplay();
}

function startNetworkQuiz(config, roomSnapshot = null) {
	if (
		!config ||
		!Array.isArray(config.questionSequence) ||
		config.questionSequence.length < 1
	) {
		setupError.textContent = "The host sent an invalid quiz setup.";
		return;
	}
	syncHostDisplayControls(roomSnapshot);
	partyStartPending = false;
	beginButton.disabled = !partyHost;
	questionSequence = config.questionSequence.slice();
	selectedQuestionCount = questionSequence.length;
	countInput.value = String(selectedQuestionCount);
	orderMode =
		forceStaticQuestionOrder || config.orderMode === "static"
			? "static"
			: "random";
	lastLautestCorrectAnswerPosition = null;
	timeLimitMinutes = Number.isFinite(config.timeLimitMinutes)
		? config.timeLimitMinutes
		: null;
	perQuestionTimeMinutes = Number.isFinite(config.perQuestionTimeMinutes)
		? config.perQuestionTimeMinutes
		: null;
	partyShowPlayerScores = config.partyOptions?.showPlayerScores !== false;
	partyHideLockedAnswers = config.partyOptions?.showLockedAnswers === false;
	updatePartyScoreDisplay();
	if (Array.isArray(config.reviewSections) && socIndiReviewSections) {
		selectedReviewSections = config.reviewSections.filter((section) =>
			availableReviewSections.includes(section),
		);
		bank = getSelectedQuestionBank();
	}
	score = 0;
	resetPartyComboStreaks();
	history = [];
	partyHistory = [];
	sequencePosition = 0;
	quizStarted = true;
	if (partyHostDisplay) {
		const hostDisplayHeading = questionTitle.closest(".quiz-heading");
		if (hostDisplayHeading && !isCompGFX)
			document.body.append(hostDisplayHeading);
		document.body.classList.add("host-display-active");
	}
	setup.classList.remove("party-network-guest");
	if (isSoftEngi) document.body.classList.add("softengi-active");
	if (isCompGFX) transitionCompGFXIntoQuiz();
	playSound("begin");
	if (forceStaticQuestionOrder) startLautestQuizMusic();
	else if (isDataSciLautest) startDataSciLautestMusic();
	else startQuizMusic();
	setup.hidden = true;
	content.hidden = false;
	startTimer();
	updateMeta();
	if (roomSnapshot?.question) {
		const question = roomSnapshot.question;
		displayNetworkQuestion(question);
		if (roomSnapshot.reveal) revealNetworkQuestion(roomSnapshot.reveal);
		else if (
			!partyHostDisplay &&
			roomSnapshot.answersLocked?.includes(partyPlayerId)
		) {
			answered = true;
			stopQuestionTimer();
			answersEl.querySelectorAll(".answer").forEach((button) => {
				button.disabled = true;
			});
			skipButton.disabled = true;
			feedback.textContent =
				"Your answer is locked in. Waiting for the other players…";
			feedback.className = "motivation visible";
		}
	} else if (partyHost) loadQuestion();
	else {
	}
}

function displayNetworkQuestion(message) {
	if (
		message.questionNumber < 0 ||
		message.questionNumber >= questionSequence.length ||
		questionSequence[message.questionNumber] !== message.questionIndex ||
		!bank[message.questionIndex]
	) {
		setupError.textContent =
			"The host sent a question that does not match this quiz.";
		return;
	}
	if (
		partyHost &&
		currentQuestionIndex === message.questionIndex &&
		questionNumber === message.questionNumber + 1
	)
		return;
	sequencePosition = message.questionNumber;
	currentQuestionIndex = message.questionIndex;
	partyChoices = [];
	try {
		current = window.QuizHubPartyQuestion.getNetworkQuestion(
			bank[currentQuestionIndex],
			bank,
			currentQuestionIndex,
			partyRoomCode,
		);
	} catch (error) {
		setupError.textContent = error.message;
		return;
	}
	if (
		!window.QuizHubPartyQuestion.isValidAnswerOrder(
			current,
			message.answerOrder,
		)
	) {
		setupError.textContent =
			"The host sent an invalid answer order for this question.";
		return;
	}
	questionNumber = sequencePosition + 1;
	renderQuestion(message.answerOrder);
	if (partyHostDisplay) {
		answered = false;
		answersEl.querySelectorAll(".answer").forEach((button) => {
			button.disabled = true;
		});
		skipButton.disabled = true;
		nextButton.disabled = true;
	} else {
		startQuestionTimer();
	}
}

function lockNetworkAnswerUi(selectedIndex) {
	answered = true;
	stopQuestionTimer();
	if (selectedIndex !== null) {
		const ownChoice = partyChoices.find(
			(choice) => choice.playerId === partyPlayerId,
		);
		if (ownChoice) ownChoice.selectedIndex = selectedIndex;
		else partyChoices.push({ playerId: partyPlayerId, selectedIndex });
		const selectedButton = answersEl.querySelector(
			`.answer[data-original-index="${selectedIndex}"]`,
		);
		if (selectedButton) updatePartyAnswerMarker(selectedButton);
	}
	answersEl.querySelectorAll(".answer").forEach((button) => {
		button.disabled = true;
		if (
			selectedIndex !== null &&
			Number(button.dataset.originalIndex) === selectedIndex
		) {
			button.classList.add("party-answer-locked");
		}
	});
	skipButton.disabled = true;
	nextButton.disabled = true;
	feedback.textContent = "Answer locked in. Waiting for the other players…";
	feedback.className = "motivation visible";
}

function submitNetworkAnswer(selectedIndex) {
	if (!quizStarted || quizEnded || answered) return;
	lockNetworkAnswerUi(selectedIndex);
	partyConnection
		.send({
			type: "answer",
			code: partyRoomCode,
			questionNumber: questionNumber - 1,
			answerIndex: selectedIndex,
		})
		.catch((error) => {
			setupError.textContent = `Could not submit answer: ${error.message}`;
		});
}

function skipNetworkQuestion() {
	if (
		!quizStarted ||
		quizEnded ||
		answered ||
		skipQuestionPending ||
		!hostDisplayAnswerer
	)
		return;
	skipQuestionPending = true;
	answered = true;
	stopQuestionTimer();
	answersEl.querySelectorAll(".answer").forEach((button) => {
		button.disabled = true;
	});
	skipButton.disabled = true;
	nextButton.disabled = true;
	feedback.textContent = "Skipping this question for everyone…";
	feedback.className = "motivation visible";
	partyConnection
		.send({
			type: "skip-question",
			code: partyRoomCode,
			questionNumber: questionNumber - 1,
		})
		.catch((error) => {
			if (!skipQuestionPending) return;
			skipQuestionPending = false;
			answered = false;
			answersEl.querySelectorAll(".answer").forEach((button) => {
				button.disabled = false;
			});
			skipButton.disabled = false;
			feedback.textContent = "";
			feedback.className = "feedback";
			startQuestionTimer();
			setupError.textContent = `Could not skip the shared question: ${error.message}`;
		});
}

function revealNetworkQuestion(message) {
	if (!current || !Array.isArray(message.answers)) return;
	skipQuestionPending = false;
	stopQuestionTimer();
	answered = true;
	partyChoices = message.answers.map((entry) => ({
		playerId: entry.playerId,
		selectedIndex: entry.selectedIndex,
	}));
	message.answers.forEach((entry) => {
		const player = partyPlayers.find(
			(candidate) => candidate.id === entry.playerId,
		);
		if (!player) return;
		if (Number.isFinite(Number(entry.score)))
			player.score = Number(entry.score);
		if (Number.isFinite(Number(entry.overallScore))) {
			player.overallScore = Number(entry.overallScore);
		}
	});
	const buttons = [...answersEl.querySelectorAll(".answer")];
	buttons.forEach((button) => {
		const index = Number(button.dataset.originalIndex);
		button.disabled = true;
		if (index === message.correctIndex) button.classList.add("correct");
		if (
			message.answers.some(
				(entry) =>
					entry.selectedIndex === index && index !== message.correctIndex,
			)
		) {
			button.classList.add("wrong");
		}
		updatePartyAnswerMarker(button);
	});
	const ownAnswer = message.answers.find(
		(entry) => entry.playerId === partyPlayerId,
	);
	const ownPlayer = partyPlayers.find((player) => player.id === partyPlayerId);
	if (ownAnswer && ownAnswer.selectedIndex !== null) {
		playSound(ownAnswer.correct ? "correct" : "incorrect");
	}
	const correctAnswer = current.a[message.correctIndex];
	const correctCount = message.answers.filter((entry) => entry.correct).length;
	updatePartyComboStreaks(
		message.answers
			.filter((entry) => entry.correct)
			.map((entry) => entry.playerId),
	);
	history.push({
		question: current.q,
		questionIndex: currentQuestionIndex,
		selected:
			!ownAnswer || ownAnswer.selectedIndex === null
				? ""
				: current.a[ownAnswer.selectedIndex],
		correctAnswer,
		correct: ownAnswer?.correct === true,
		skipped: ownAnswer?.selectedIndex === null,
		timedOut: false,
	});
	partyHistory.push({
		question: current.q,
		correctAnswer,
		selections: message.answers.map((entry) => {
			const player = partyPlayers.find(
				(candidate) => candidate.id === entry.playerId,
			);
			return {
				playerId: entry.playerId,
				playerName: player?.name || "",
				selected:
					entry.selectedIndex === null ? "" : current.a[entry.selectedIndex],
				correct: entry.correct === true,
			};
		}),
		timedOut: false,
	});
	score = partyShowPlayerScores
		? partyPlayers.reduce((total, player) => total + player.score, 0)
		: partyPlayers.find((player) => player.id === partyPlayerId)?.score || 0;
	const ownPoints = ownAnswer?.pointsEarned || 0;
	const pointsMessage =
		ownPoints > 0
			? ` You earned ${ownPoints} point${ownPoints === 1 ? "" : "s"}.`
			: "";
	const answeringPlayerCount = partyPlayers.length;
	feedback.textContent = `${correctCount} of ${answeringPlayerCount} players answered correctly. Correct answer: ${formatPowerText(correctAnswer)}.${pointsMessage}`;
	feedback.className = `motivation visible ${ownAnswer?.correct ? "right" : "wrong"}`;
	nextButton.disabled = !canControlPartyQuiz;
	skipButton.disabled = true;

	updateMeta();
	if (canControlPartyQuiz) {
		if (questionNumber >= selectedQuestionCount) {
			nextButton.textContent = "FINISH QUIZ";
			nextButton.setAttribute("aria-label", "Finish quiz");
		} else {
			nextButton.textContent = "NEXT";
			nextButton.setAttribute("aria-label", "Next question");
		}
	}
}

function beginPartyQuestion() {
	if (networkPartyActive) return;
	if (!partyModeActive) return;
	if (partyTurnTimer !== null) {
		clearTimeout(partyTurnTimer);
		partyTurnTimer = null;
	}
	if (partyTurnAnimation !== null) {
		clearInterval(partyTurnAnimation);
		partyTurnAnimation = null;
	}
	partyTurnToken++;
	partyTurnAnimating = false;
	partyChoices = [];
	partyTurns = shuffle(partyPlayers.map((player) => player.id));
	partyCurrentPlayer = null;

	setPartyAnswerAvailability(false);
	assignNextPartyPlayer();
}

function assignNextPartyPlayer() {
	if (partyTurns.length === 0 || answered || quizEnded) return;
	const token = ++partyTurnToken;
	const candidates = partyTurns
		.map((id) => partyPlayers.find((player) => player.id === id))
		.filter(Boolean);
	if (candidates.length === 1) {
		partyCurrentPlayer = candidates[0];
		partyTurnAnimating = false;
		showPartyTurn(partyCurrentPlayer);
		setPartyAnswerAvailability(true);
		return;
	}
	partyTurnAnimating = true;
	setPartyAnswerAvailability(false);
	const chosen = candidates[Math.floor(Math.random() * candidates.length)];
	let frame = 0;
	const frameCount = 10;
	showPartyTurn(candidates[0], true);
	partyTurnAnimation = setInterval(() => {
		if (token !== partyTurnToken) {
			clearInterval(partyTurnAnimation);
			partyTurnAnimation = null;
			return;
		}
		frame++;
		const visiblePlayer =
			frame >= frameCount ? chosen : candidates[frame % candidates.length];
		showPartyTurn(visiblePlayer, true);
		if (frame >= frameCount) {
			clearInterval(partyTurnAnimation);
			partyTurnAnimation = null;
			partyCurrentPlayer = chosen;
			partyTurnAnimating = false;
			showPartyTurn(chosen);
			setPartyAnswerAvailability(true);
		}
	}, 75);
}

function finishPartyQuestion(timedOut = false) {
	if (!partyModeActive || answered || quizEnded) return;
	if (partyTurnTimer !== null) {
		clearTimeout(partyTurnTimer);
		partyTurnTimer = null;
	}
	if (partyTurnAnimation !== null) {
		clearInterval(partyTurnAnimation);
		partyTurnAnimation = null;
	}
	partyTurnToken++;
	partyTurnAnimating = false;
	partyCurrentPlayer = null;
	stopQuestionTimer();
	answered = true;
	let correctThisQuestion = 0;
	partyChoices.forEach((choice) => {
		if (choice.selectedIndex === current.c) {
			const player = partyPlayers.find((entry) => entry.id === choice.playerId);
			if (player) {
				player.score++;
				correctThisQuestion++;
			}
		}
	});
	if (correctThisQuestion > 0) score += correctThisQuestion;
	updatePartyComboStreaks(
		partyChoices
			.filter((choice) => choice.selectedIndex === current.c)
			.map((choice) => choice.playerId),
	);
	partyHistory.push({
		question: current.q,
		correctAnswer: current.a[current.c],
		selections: partyChoices.map((choice) => {
			const player = partyPlayers.find((entry) => entry.id === choice.playerId);
			return {
				playerId: choice.playerId,
				playerName: player ? player.name : "",
				selected:
					choice.selectedIndex === null ? "" : current.a[choice.selectedIndex],
				correct: choice.selectedIndex === current.c,
			};
		}),
		timedOut,
	});
	const buttons = [...answersEl.querySelectorAll(".answer")];
	buttons.forEach((button) => {
		const index = Number(button.dataset.originalIndex);
		button.disabled = true;
		if (index === current.c) button.classList.add("correct");
		if (
			partyChoices.some(
				(choice) => choice.selectedIndex === index && index !== current.c,
			)
		) {
			button.classList.add("wrong");
		}
		updatePartyAnswerMarker(button);
	});
	feedback.textContent = `${correctThisQuestion} player${correctThisQuestion === 1 ? "" : "s"} got it right. Correct answer: ${formatPowerText(current.a[current.c])}`;
	feedback.className = "motivation visible";
	nextButton.disabled = false;
	skipButton.disabled = true;

	updateMeta();
}

function recordPartySelection(selectedIndex) {
	if (
		!quizStarted ||
		quizEnded ||
		answered ||
		!partyCurrentPlayer ||
		partyTurnAnimating
	)
		return;
	const player = partyCurrentPlayer;
	partyChoices.push({ playerId: player.id, selectedIndex });
	partyTurns = partyTurns.filter((id) => id !== player.id);
	if (selectedIndex !== null) {
		const button = answersEl.querySelector(
			`.answer[data-original-index="${selectedIndex}"]`,
		);
		if (button) updatePartyAnswerMarker(button);
	}
	partyCurrentPlayer = null;
	setPartyAnswerAvailability(false);
	if (partyTurns.length === 0) {
		finishPartyQuestion();
		return;
	}

	partyTurnTimer = setTimeout(() => {
		partyTurnTimer = null;
		assignNextPartyPlayer();
	}, 260);
}

function formatTime(seconds) {
	const safe = Math.max(0, Number(seconds) || 0);
	const mins = Math.floor(safe / 60);
	const secs = safe % 60;
	return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function toSuperscript(value) {
	const map = {
		0: "⁰",
		1: "¹",
		2: "²",
		3: "³",
		4: "⁴",
		5: "⁵",
		6: "⁶",
		7: "⁷",
		8: "⁸",
		9: "⁹",
	};
	return String(value)
		.split("")
		.map((char) => map[char] || char)
		.join("");
}

function formatPowerText(value) {
	if (typeof value !== "string") return value;

	return value.replace(/(\d+)\s*\^\s*(\d+)/g, (_, base, exponent) => {
		return `${base}${toSuperscript(exponent)}`;
	});
}

function getQuestionImageSource(question) {
	const imagePath =
		typeof question?.image === "string"
			? question.image
			: typeof question?.i === "string"
				? question.i
				: "";
	if (!imagePath) return "";
	return resolveAssetUrl(imagePath);
}

function openQuestionImage() {
	if (questionImageTrigger.hidden) return;
	questionImageExpanded.src = questionImage.src;
	questionImageExpanded.alt = questionImage.alt;
	questionImageDialog.showModal();
}

questionImageTrigger.addEventListener("click", openQuestionImage);
questionImageView.addEventListener("click", openQuestionImage);
questionImageClose.addEventListener("click", () => questionImageDialog.close());
questionImageDialog.addEventListener("click", (event) => {
	if (event.target === questionImageDialog) questionImageDialog.close();
});

function updateQuestionImage() {
	const imageSource = getQuestionImageSource(current);
	const hasImage = Boolean(imageSource);
	questionImageTrigger.hidden = !hasImage;
	questionImageView.hidden = isCompGFX || !hasImage;
	if (isCompGFX) {
		const faceIndex =
			((Math.round(compGfxRotation / 90) % compGfxFaceOrder.length) +
				compGfxFaceOrder.length) %
			compGfxFaceOrder.length;
		const rightFaceIndex =
			(faceIndex - 1 + compGfxFaceOrder.length) % compGfxFaceOrder.length;
		const rightFace = compGfxCube?.querySelector(
			`.gfx-cube-${compGfxFaceOrder[rightFaceIndex]}`,
		);
		if (hasImage && rightFace) {
			rightFace.removeAttribute("aria-hidden");
			rightFace.appendChild(questionImageTrigger);
		} else if (
			questionContentRow &&
			questionImageTrigger.parentElement !== questionContentRow
		) {
			questionContentRow.appendChild(questionImageTrigger);
		}
	} else if (
		questionContentRow &&
		questionImageTrigger.parentElement !== questionContentRow
	) {
		questionContentRow.appendChild(questionImageTrigger);
	}
	if (!hasImage) {
		questionImage.removeAttribute("src");
		questionImageExpanded.removeAttribute("src");
		return;
	}
	const altText = `Question image: ${current.q}`;
	questionImage.src = imageSource;
	questionImage.alt = altText;
	questionImageExpanded.src = imageSource;
	questionImageExpanded.alt = altText;
	if (isCompGFX && document.body.classList.contains("gfx-quiz-started")) {
		compGfxImageAnimation?.cancel();
		compGfxImageAnimation = null;
		const motionMode = window.quizHubPreferences.motionMode;
		const reduceMotion =
			motionMode === "reduced" ||
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduceMotion) {
			questionImageTrigger.style.opacity = "1";
		} else {
			questionImageTrigger.style.removeProperty("opacity");
			compGfxImageAnimation = questionImageTrigger.animate(
				[{ opacity: 0 }, { opacity: 1 }],
				{ duration: 450, delay: 120, easing: "ease-out", fill: "both" },
			);
		}
	}
}

function isOpenGLBuilderQuestion() {
	return (
		current?.interaction?.type === "opengl-transform-sequence" &&
		!partyModeActive &&
		!networkPartyActive
	);
}

function isMeshTableQuestion() {
	return (
		current?.interaction?.type === "mesh-table" &&
		!partyModeActive &&
		!networkPartyActive
	);
}

function isStatisticsSetQuestion() {
	return (
		current?.interaction?.type === "statistics-set" &&
		!partyModeActive &&
		!networkPartyActive
	);
}

function resetStatisticsSetBuilder() {
	statisticsSetAttemptCount = 0;
	statisticsSetInputs.forEach((input) => {
		input.value = "";
		input.disabled = false;
	});
	statisticsSetResult.textContent = "";
	statisticsSetResult.hidden = true;
	statisticsSetSolution.textContent = "";
	statisticsSetSolution.hidden = true;
	statisticsSetStatus.textContent =
		"Enter all five integers, then check your set. You have 3 attempts.";
	statisticsSetSubmit.disabled = false;
}

function calculateStatisticsSet(values) {
	const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
	const counts = new Map();
	values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
	const highestFrequency = Math.max(...counts.values());
	const modes = [...counts]
		.filter(([, frequency]) => frequency === highestFrequency)
		.map(([value]) => value)
		.sort((left, right) => left - right);
	return {
		mean,
		modes: highestFrequency > 1 ? modes : [],
	};
}

function finishStatisticsSetResponse(resultType, isCorrect, submitted = "") {
	isCorrect = shouldCountAsCorrect(resultType, isCorrect);
	stopQuestionTimer();
	answered = true;
	if (isCorrect) {
		combo++;
		longestCombo = Math.max(longestCombo, combo);
		if (combo > 1) showComboPopup();
		score++;
		playSound("correct");
		feedback.textContent = "Correct! Your set has a mean of 4 and a mode of 6.";
		feedback.className = "motivation visible right";
		statisticsSetStatus.textContent = "Correct set.";
	} else {
		resetComboAfterIncorrectAnswer();
		if (resultType === "answer") playSound("incorrect");
		statisticsSetSolution.textContent = `One correct answer: ${current.a[current.c]}.`;
		statisticsSetSolution.hidden = false;
		feedback.textContent =
			resultType === "skip"
				? "Skipped. A correct set has a mean of 4 and a mode of 6."
				: resultType === "timeout"
					? "Time expired. A correct set has a mean of 4 and a mode of 6."
					: "No attempts remaining. A correct set has a mean of 4 and a mode of 6.";
		feedback.className = "motivation visible wrong";
		statisticsSetStatus.textContent = feedback.textContent;
	}
	history.push({
		question: current.q,
		questionIndex: currentQuestionIndex,
		selected: resultType === "answer" ? submitted : "",
		correctAnswer: "A set with a mean of 4 and a mode of 6",
		correct: isCorrect,
		skipped: resultType === "skip",
		timedOut: resultType === "timeout",
	});
	statisticsSetInputs.forEach((input) => {
		input.disabled = true;
	});
	statisticsSetSubmit.disabled = true;
	nextButton.disabled = false;
	skipButton.disabled = true;
	skipButton.classList.remove("skip-show");
	skipButton.classList.add("skip-hidden", "animate-hide");
	skipButton.style.setProperty("opacity", "0", "important");
	skipButton.style.setProperty("visibility", "hidden", "important");
	skipButton.style.setProperty("pointer-events", "none", "important");
	updateMeta();
}

function resetMeshTableBuilder() {
	const interaction = current.interaction;
	const isVertexTable = interaction.table === "vertices";
	meshTableAttemptCount = 0;
	const table = document.createElement("table");
	table.className = "mesh-answer-table";
	const caption = document.createElement("caption");
	caption.textContent = isVertexTable
		? "Vertex table — enter each vertex's coordinates."
		: "Face table — enter the vertex IDs separated by commas (for example, V1, V2, V3).";
	table.appendChild(caption);

	const head = document.createElement("thead");
	const headerRow = document.createElement("tr");
	const rowHeader = document.createElement("th");
	rowHeader.scope = "col";
	rowHeader.textContent = isVertexTable ? "Vertex ID" : "Face ID";
	headerRow.appendChild(rowHeader);
	interaction.columnHeaders.forEach((label) => {
		const header = document.createElement("th");
		header.scope = "col";
		header.textContent = label;
		headerRow.appendChild(header);
	});
	head.appendChild(headerRow);
	table.appendChild(head);

	const body = document.createElement("tbody");
	interaction.correctTable.forEach((values, rowIndex) => {
		const row = document.createElement("tr");
		const idHeader = document.createElement("th");
		idHeader.scope = "row";
		idHeader.textContent = `${interaction.rowPrefix}${rowIndex}`;
		row.appendChild(idHeader);
		values.forEach((_, columnIndex) => {
			const cell = document.createElement("td");
			const input = document.createElement("input");
			input.type = "text";
			input.inputMode = isVertexTable ? "decimal" : "text";
			input.placeholder = isVertexTable ? "0" : "V?, V?, ...";
			input.autocomplete = "off";
			input.spellcheck = false;
			input.dataset.row = String(rowIndex);
			input.dataset.column = String(columnIndex);
			input.setAttribute(
				"aria-label",
				isVertexTable
					? `Vertex ${interaction.rowPrefix}${rowIndex}, ${interaction.columnHeaders[columnIndex]}`
					: `Face ${interaction.rowPrefix}${rowIndex}, comma-separated vertex IDs`,
			);
			cell.appendChild(input);
			row.appendChild(cell);
		});
		body.appendChild(row);
	});
	table.appendChild(body);
	tableAnswerScroll.replaceChildren(table);
	tableAnswerStatus.textContent =
		"Fill in every cell, then check your table. You have 3 attempts.";
	tableAnswerSubmit.disabled = false;
}

function showMeshTableSolution() {
	const { table, correctTable, columnHeaders, rowPrefix } = current.interaction;
	const solution = document.createElement("table");
	solution.className = "mesh-answer-table mesh-answer-solution";
	const caption = document.createElement("caption");
	caption.textContent = "Correct answer";
	solution.appendChild(caption);

	const head = document.createElement("thead");
	const headerRow = document.createElement("tr");
	[table === "vertices" ? "Vertex ID" : "Face ID", ...columnHeaders].forEach(
		(label) => {
			const header = document.createElement("th");
			header.scope = "col";
			header.textContent = label;
			headerRow.appendChild(header);
		},
	);
	head.appendChild(headerRow);
	solution.appendChild(head);

	const body = document.createElement("tbody");
	correctTable.forEach((values, rowIndex) => {
		const row = document.createElement("tr");
		const idHeader = document.createElement("th");
		idHeader.scope = "row";
		idHeader.textContent = `${rowPrefix}${rowIndex}`;
		row.appendChild(idHeader);
		values.forEach((value) => {
			const cell = document.createElement("td");
			cell.textContent = value;
			row.appendChild(cell);
		});
		body.appendChild(row);
	});
	solution.appendChild(body);
	tableAnswerScroll.appendChild(solution);
	tableAnswerScroll.scrollTop = tableAnswerScroll.scrollHeight;
}

function readMeshTableAnswer() {
	return [...tableAnswerScroll.querySelectorAll("tbody tr")].map((row) =>
		[...row.querySelectorAll("input")].map((input) => input.value.trim()),
	);
}

function isMeshTableAnswerCorrect(values) {
	const { table, correctTable } = current.interaction;
	if (values.length !== correctTable.length) return false;
	return values.every(
		(row, rowIndex) =>
			row.length === correctTable[rowIndex].length &&
			row.every((value, columnIndex) => {
				const expected = correctTable[rowIndex][columnIndex];
				if (table === "vertices") {
					return (
						value !== "" &&
						Number.isFinite(Number(value)) &&
						Number(value) === Number(expected)
					);
				}
				const submittedReferences = value
					.split(",")
					.map((reference) => reference.trim());
				const expectedReferences = String(expected)
					.split(",")
					.map((reference) => reference.trim());
				return (
					submittedReferences.length === expectedReferences.length &&
					submittedReferences.every(
						(reference, index) =>
							/^v?\d+$/i.test(reference) &&
							/^v?\d+$/i.test(expectedReferences[index]) &&
							Number(reference.replace(/^v/i, "")) ===
								Number(expectedReferences[index].replace(/^v/i, "")),
					)
				);
			}),
	);
}

function finishMeshTableResponse(resultType, isCorrect, submitted = "") {
	isCorrect = shouldCountAsCorrect(resultType, isCorrect);
	stopQuestionTimer();
	answered = true;
	if (isCorrect) {
		combo++;
		longestCombo = Math.max(longestCombo, combo);
		if (combo > 1) showComboPopup();
		score++;
		playSound("correct");
		feedback.textContent = "Correct! Your table matches the answer.";
		feedback.className = "motivation visible right";
		tableAnswerStatus.textContent = "Correct table.";
	} else {
		resetComboAfterIncorrectAnswer();
		if (resultType === "answer") playSound("incorrect");
		feedback.textContent =
			resultType === "skip"
				? "Skipped. The correct answer is shown below."
				: resultType === "timeout"
					? "Time expired. The correct answer is shown below."
					: "No attempts remaining. The correct answer is shown below.";
		feedback.className = "motivation visible wrong";
		tableAnswerStatus.textContent = feedback.textContent;
		showMeshTableSolution();
	}
	history.push({
		question: current.q,
		questionIndex: currentQuestionIndex,
		selected: resultType === "answer" ? submitted : "",
		correctAnswer: JSON.stringify(current.interaction.correctTable),
		correct: isCorrect,
		skipped: resultType === "skip",
		timedOut: resultType === "timeout",
	});
	tableAnswerBuilder.querySelectorAll("input,button").forEach((control) => {
		control.disabled = true;
	});
	nextButton.disabled = false;
	skipButton.disabled = true;
	skipButton.classList.remove("skip-show");
	skipButton.classList.add("skip-hidden", "animate-hide");
	skipButton.style.setProperty("opacity", "0", "important");
	skipButton.style.setProperty("visibility", "hidden", "important");
	skipButton.style.setProperty("pointer-events", "none", "important");
	updateMeta();
}

function formatOpenGLNumber(value) {
	if (typeof value === "string" && value.trim() === "") return "?";
	return Number(value).toFixed(1);
}

function getOpenGLSolutionText() {
	return current.interaction.solution
		.map((step) => {
			if (step.function === "translate") {
				return `glTranslatef(${formatOpenGLNumber(step.tx)}, ${formatOpenGLNumber(step.ty)}, 0.0);`;
			}
			if (step.function === "rotate") {
				return `glRotatef(${formatOpenGLNumber(step.angle)}, 0.0, 0.0, 1.0);`;
			}
			return `glScalef(${formatOpenGLNumber(step.sx)}, ${formatOpenGLNumber(step.sy)}, 1.0);`;
		})
		.join("\n");
}

function resetOpenGLBuilder() {
	openglAttemptCount = 0;
	openglSequence.replaceChildren();
	openglSolution.hidden = true;
	openglSolution.querySelector("code").textContent = "";
	openglAttempts.textContent = "3 attempts remaining";
	openglSubmit.disabled = false;
	openglBuilder.querySelectorAll("[data-transform-add]").forEach((button) => {
		button.disabled = false;
	});
}

function appendOpenGLCode(row, text) {
	const code = document.createElement("span");
	code.textContent = text;
	row.appendChild(code);
}

function appendOpenGLInput(row, parameter, label) {
	const input = document.createElement("input");
	input.type = "number";
	input.step = "any";
	input.inputMode = "decimal";
	input.required = true;
	input.dataset.parameter = parameter;
	input.setAttribute("aria-label", label);
	input.placeholder = parameter;
	row.appendChild(input);
}

function addOpenGLTransform(type) {
	if (
		!isOpenGLBuilderQuestion() ||
		answered ||
		openglSequence.querySelector(`[data-transform="${type}"]`)
	)
		return;

	const row = document.createElement("li");
	row.className = "opengl-sequence-row";
	row.dataset.transform = type;
	row.setAttribute("aria-label", `${type} transformation`);
	if (type === "translate") {
		appendOpenGLCode(row, "glTranslatef(");
		appendOpenGLInput(row, "tx", "Translation x (tx)");
		appendOpenGLCode(row, ", ");
		appendOpenGLInput(row, "ty", "Translation y (ty)");
		appendOpenGLCode(row, ", 0.0);");
	} else if (type === "rotate") {
		appendOpenGLCode(row, "glRotatef(");
		appendOpenGLInput(row, "angle", "Rotation angle");
		appendOpenGLCode(row, ", 0.0, 0.0, 1.0);");
	} else {
		appendOpenGLCode(row, "glScalef(");
		appendOpenGLInput(row, "sx", "Scale x (sx)");
		appendOpenGLCode(row, ", ");
		appendOpenGLInput(row, "sy", "Scale y (sy)");
		appendOpenGLCode(row, ", 1.0);");
	}
	const removeButton = document.createElement("button");
	removeButton.type = "button";
	removeButton.className = "opengl-remove-transform";
	removeButton.setAttribute("aria-label", `Remove ${type} transformation`);
	removeButton.textContent = "×";
	removeButton.addEventListener("click", () => {
		if (answered) return;
		row.remove();
		const addButton = openglBuilder.querySelector(
			`[data-transform-add="${type}"]`,
		);
		addButton.disabled = false;
	});
	row.appendChild(removeButton);
	openglSequence.appendChild(row);
	openglBuilder.querySelector(`[data-transform-add="${type}"]`).disabled = true;
}

function getOpenGLSubmittedText() {
	return [...openglSequence.querySelectorAll(".opengl-sequence-row")]
		.map((row) => {
			const type = row.dataset.transform;
			const fields = [...row.querySelectorAll("input")];
			if (type === "translate") {
				return `glTranslatef(${formatOpenGLNumber(fields[0].value)}, ${formatOpenGLNumber(fields[1].value)}, 0.0);`;
			}
			if (type === "rotate") {
				return `glRotatef(${formatOpenGLNumber(fields[0].value)}, 0.0, 0.0, 1.0);`;
			}
			return `glScalef(${formatOpenGLNumber(fields[0].value)}, ${formatOpenGLNumber(fields[1].value)}, 1.0);`;
		})
		.join("\n");
}

function isOpenGLSubmittedAnswerCorrect() {
	const rows = [...openglSequence.querySelectorAll(".opengl-sequence-row")];
	const solution = current.interaction.solution;
	if (rows.length !== solution.length) return false;
	return rows.every((row, index) => {
		const expected = solution[index];
		if (row.dataset.transform !== expected.function) return false;
		const values = [...row.querySelectorAll("input")].map(
			(input) => input.value,
		);
		if (
			values.some(
				(value) => value.trim() === "" || !Number.isFinite(Number(value)),
			)
		)
			return false;
		if (expected.function === "translate") {
			return (
				Number(values[0]) === expected.tx && Number(values[1]) === expected.ty
			);
		}
		if (expected.function === "scale") {
			return (
				Number(values[0]) === expected.sx && Number(values[1]) === expected.sy
			);
		}
		return Number(values[0]) === expected.angle;
	});
}

function finishOpenGLResponse(resultType, isCorrect, submitted = "") {
	isCorrect = shouldCountAsCorrect(resultType, isCorrect);
	stopQuestionTimer();
	answered = true;
	if (isCorrect) {
		combo++;
		longestCombo = Math.max(longestCombo, combo);
		if (combo > 1) showComboPopup();
		score++;
		playSound("correct");
		feedback.textContent =
			"Correct! You built the right transformation sequence.";
		feedback.className = "motivation visible right";
	} else {
		resetComboAfterIncorrectAnswer();
		if (resultType === "answer") playSound("incorrect");
		feedback.textContent =
			resultType === "timeout"
				? "Time expired."
				: resultType === "skip"
					? "Skipped."
					: "No attempts remaining.";
		feedback.className = "motivation visible wrong";
		openglSolution.querySelector("code").textContent = getOpenGLSolutionText();
		openglSolution.hidden = false;
	}
	history.push({
		question: current.q,
		questionIndex: currentQuestionIndex,
		selected: resultType === "answer" ? submitted : "",
		correctAnswer: getOpenGLSolutionText(),
		correct: isCorrect,
		skipped: resultType === "skip",
		timedOut: resultType === "timeout",
	});
	openglBuilder.querySelectorAll("button,input").forEach((control) => {
		control.disabled = true;
	});
	openglAttempts.textContent = `${openglAttemptCount} of 3 attempts used`;
	nextButton.disabled = false;
	skipButton.disabled = true;
	skipButton.classList.remove("skip-show");
	skipButton.classList.add("skip-hidden", "animate-hide");
	skipButton.style.setProperty("opacity", "0", "important");
	skipButton.style.setProperty("visibility", "hidden", "important");
	skipButton.style.setProperty("pointer-events", "none", "important");
	updateMeta();
}

openglBuilder.querySelectorAll("[data-transform-add]").forEach((button) => {
	button.addEventListener("click", () =>
		addOpenGLTransform(button.dataset.transformAdd),
	);
});
openglSubmit.addEventListener("click", () => {
	if (!isOpenGLBuilderQuestion() || answered) return;
	if (openglSequence.querySelectorAll(".opengl-sequence-row").length !== 3) {
		openglAttempts.textContent =
			"Add all three transformations before checking your answer.";
		return;
	}
	openglAttemptCount++;
	const isCorrect =
		isOpenGLSubmittedAnswerCorrect() ||
		cheatAlwaysRightAnswer ||
		cheatAlwaysPerfectScore;
	if (isCorrect || openglAttemptCount >= 3) {
		finishOpenGLResponse("answer", isCorrect, getOpenGLSubmittedText());
		return;
	}
	playSound("incorrect");
	const remaining = 3 - openglAttemptCount;
	openglAttempts.textContent = `Not quite. ${remaining} ${remaining === 1 ? "try" : "tries"} remaining. Edit the values or remove and re-add functions to change the order.`;
});
tableAnswerSubmit.addEventListener("click", () => {
	if (!isMeshTableQuestion() || answered) return;
	const values = readMeshTableAnswer();
	if (values.some((row) => row.some((value) => value === ""))) {
		tableAnswerStatus.textContent =
			"Fill in every cell before checking your table.";
		[...tableAnswerScroll.querySelectorAll("input")]
			.find((input) => input.value.trim() === "")
			?.focus();
		return;
	}
	if (
		isMeshTableAnswerCorrect(values) ||
		cheatAlwaysRightAnswer ||
		cheatAlwaysPerfectScore
	) {
		finishMeshTableResponse("answer", true, JSON.stringify(values));
		return;
	}
	meshTableAttemptCount++;
	if (meshTableAttemptCount >= 3) {
		finishMeshTableResponse("answer", false, JSON.stringify(values));
		return;
	}
	playSound("incorrect");
	const remaining = 3 - meshTableAttemptCount;
	tableAnswerStatus.textContent = `Not quite. ${remaining} ${remaining === 1 ? "attempt" : "attempts"} remaining. Edit your entries and try again.`;
});
statisticsSetSubmit.addEventListener("click", () => {
	if (!isStatisticsSetQuestion() || answered) return;
	const values = statisticsSetInputs.map((input) => input.value.trim());
	const invalidIndex = values.findIndex(
		(value) => value === "" || !Number.isInteger(Number(value)),
	);
	if (invalidIndex !== -1) {
		statisticsSetStatus.textContent =
			"Enter an integer in each of the five boxes before checking.";
		statisticsSetInputs[invalidIndex].focus();
		return;
	}
	const numbers = values.map(Number);
	const { mean, modes } = calculateStatisticsSet(numbers);
	const modeText =
		modes.length === 0
			? "No mode"
			: modes.map((mode) => String(mode)).join(", ");
	const modeSummary =
		modes.length === 0
			? "No mode"
			: `${modes.length === 1 ? "Mode" : "Modes"} = ${modeText}`;
	statisticsSetResult.textContent = `Your set: mean = ${mean}; ${modeSummary}.`;
	statisticsSetResult.hidden = false;
	const isCorrect =
		(mean === current.interaction.targetMean &&
			modes.includes(current.interaction.targetMode)) ||
		cheatAlwaysRightAnswer ||
		cheatAlwaysPerfectScore;
	if (isCorrect) {
		finishStatisticsSetResponse("answer", true, JSON.stringify(numbers));
		return;
	}
	statisticsSetAttemptCount++;
	if (statisticsSetAttemptCount >= 3) {
		finishStatisticsSetResponse("answer", false, JSON.stringify(numbers));
		return;
	}
	playSound("incorrect");
	const remaining = 3 - statisticsSetAttemptCount;
	statisticsSetStatus.textContent = `Not quite. ${remaining} ${remaining === 1 ? "attempt" : "attempts"} remaining. Edit your set and try again.`;
});

function fitCompGFXQuestionTitle() {
	if (!isCompGFX || !questionTitle) return;

	questionTitle.style.removeProperty("font-size");

	const heading = questionTitle.closest(".quiz-heading");
	if (!heading || !heading.clientWidth || !heading.clientHeight) return;

	const headingStyle = getComputedStyle(heading);
	const availableWidth =
		heading.clientWidth -
		parseFloat(headingStyle.paddingLeft) -
		parseFloat(headingStyle.paddingRight);
	const availableHeight =
		heading.clientHeight -
		parseFloat(headingStyle.paddingTop) -
		parseFloat(headingStyle.paddingBottom) -
		2;
	const maxFontSize = parseFloat(getComputedStyle(questionTitle).fontSize);
	const fits = () =>
		questionTitle.clientWidth <= availableWidth + 1 &&
		questionTitle.scrollWidth <= questionTitle.clientWidth &&
		questionTitle.scrollHeight <= availableHeight;

	if (fits()) return;

	let low = 1;
	let high = maxFontSize;
	let bestFit = low;
	for (let attempt = 0; attempt < 16; attempt++) {
		const fontSize = (low + high) / 2;
		questionTitle.style.fontSize = `${fontSize}px`;
		if (fits()) {
			bestFit = fontSize;
			low = fontSize;
		} else {
			high = fontSize;
		}
	}
	questionTitle.style.fontSize = `${bestFit}px`;
}

function showQuestionTitle() {
	if (!questionTitle || !current) return;
	updateQuestionImage();
	if (questionTypingTimer !== null) {
		clearInterval(questionTypingTimer);
		questionTypingTimer = null;
	}

	if (!isSoftEngi) {
		if (isCompGFX) {
			const titleLength = Array.from(current.q).length;
			questionTitle.classList.toggle("gfx-question-long", titleLength > 90);
			questionTitle.classList.toggle(
				"gfx-question-very-long",
				titleLength > 150,
			);
		}
		questionTitle.textContent = formatPowerText(current.q);
		if (isCompGFX) requestAnimationFrame(fitCompGFXQuestionTitle);
		return;
	}

	const emojis = ["✨", "💡", "🧠", "🚀", "🎯"];
	const emoji = emojis[Math.floor(Math.random() * emojis.length)];
	const title = `${formatPowerText(current.q)} ${emoji}`;
	const titleLength = Array.from(title).length;
	questionTitle.classList.toggle("question-long", titleLength > 100);
	questionTitle.classList.toggle("question-very-long", titleLength > 160);
	questionTitle.classList.add("typing");

	const motionMode = window.quizHubPreferences.motionMode;
	if (
		motionMode === "reduced" ||
		window.matchMedia("(prefers-reduced-motion: reduce)").matches
	) {
		questionTitle.textContent = title;
		questionTitle.classList.remove("typing");
		return;
	}

	const characters = Array.from(title);
	let position = 0;
	questionTitle.textContent = "";
	const typeNextCharacter = () => {
		questionTitle.textContent = characters.slice(0, position + 1).join("");
		position++;
		if (position >= characters.length) {
			clearInterval(questionTypingTimer);
			questionTypingTimer = null;
			questionTitle.classList.remove("typing");
		}
	};

	typeNextCharacter();
	const defaultTypingSpeed = titleLength > 120 ? 8 : 12;
	const typingSpeed =
		motionMode === "minimal"
			? Math.max(1, Math.round(defaultTypingSpeed * 0.75))
			: defaultTypingSpeed;
	questionTypingTimer = setInterval(typeNextCharacter, typingSpeed);
}

window.addEventListener("resize", fitCompGFXQuestionTitle);

function transitionCompGFXQuestionTitle(shouldFade, turnDuration) {
	const transitionId = ++compGfxTransitionId;
	compGfxQuestionAnimation?.cancel();
	compGfxImageAnimation?.cancel();
	compGFXAnswerPanelAnimation?.cancel();
	compGfxQuestionAnimation = null;
	compGfxImageAnimation = null;
	compGFXAnswerPanelAnimation = null;
	if (!shouldFade || !compGfxQuestion) {
		showQuestionTitle();
		return;
	}

	const motionMode = window.quizHubPreferences.motionMode;
	const reduceMotion =
		motionMode === "reduced" ||
		window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (reduceMotion) {
		compGfxCube.classList.remove("turning");
		compGfxCube.style.setProperty("--gfx-cube-angle", `${compGfxRotation}deg`);
		placeCompGFXQuestionOnFace(compGfxRotation);
		showQuestionTitle();
		return;
	}

	const wait = (duration) =>
		new Promise((resolve) => setTimeout(resolve, duration));
	const clickDuration = 110;
	const answerPanelExitTransform =
		window.matchMedia("(max-width: 760px)").matches ||
		isForcedMobileDisplay()
		? `translateY(${window.quizHubDisplayViewport.height + 40}px)`
		: `translateX(${window.quizHubDisplayViewport.width + 40}px)`;
	const animateAnswerPanel = !partyHostDisplay;
	if (animateAnswerPanel) {
		compGFXAnswerPanelAnimation = content.animate(
			[
				{ transform: "translateX(0)", opacity: 1 },
				{ transform: answerPanelExitTransform, opacity: 0 },
			],
			{ duration: 220, easing: "cubic-bezier(.55,0,1,.45)", fill: "forwards" },
		);
	}
	compGfxQuestionAnimation = compGfxQuestion.animate(
		[{ opacity: 1 }, { opacity: 0 }],
		{ duration: 80, easing: "ease-in", fill: "forwards" },
	);
	compGfxImageAnimation?.cancel();
	if (!questionImageTrigger.hidden) {
		compGfxImageAnimation = questionImageTrigger.animate(
			[{ opacity: 1 }, { opacity: 0 }],
			{ duration: 80, easing: "ease-in", fill: "forwards" },
		);
	}
	animateCompGFXCursor(false);
	void (async () => {
		await wait(clickDuration);
		if (transitionId !== compGfxTransitionId) return;
		compGfxCube
			.querySelector(".active-question-face")
			?.classList.remove("active-question-face");

		if (turnDuration > 0) {
			compGfxCube.classList.remove("turning");
			void compGfxCube.offsetWidth;
			compGfxCube.style.setProperty(
				"--gfx-cube-angle",
				`${compGfxRotation}deg`,
			);
			compGfxCube.classList.add("turning");
			await wait(turnDuration);
			if (transitionId !== compGfxTransitionId) return;
			compGfxCube.classList.remove("turning");
			compGfxCube.style.setProperty(
				"--gfx-cube-angle",
				`${compGfxRotation}deg`,
			);
		}

		const selectedFace = placeCompGFXQuestionOnFace(compGfxRotation, false);
		showQuestionTitle();
		animateCompGFXCursor(false);
		await wait(clickDuration);
		if (transitionId !== compGfxTransitionId) return;
		selectedFace?.classList.add("active-question-face");
		compGfxQuestionAnimation = compGfxQuestion.animate(
			[{ opacity: 0 }, { opacity: 1 }],
			{ duration: 150, easing: "ease-out", fill: "forwards" },
		);
		await wait(150);
		if (transitionId !== compGfxTransitionId) return;
		compGfxQuestionAnimation = null;
		if (animateAnswerPanel) {
			compGFXAnswerPanelAnimation = content.animate(
				[
					{ transform: answerPanelExitTransform, opacity: 0 },
					{ transform: "translateX(0)", opacity: 1 },
				],
				{ duration: 260, easing: "cubic-bezier(.16,1,.3,1)", fill: "forwards" },
			);
			const answerPanelAnimation = compGFXAnswerPanelAnimation;
			void answerPanelAnimation.finished
				.then(() => {
					if (compGFXAnswerPanelAnimation === answerPanelAnimation) {
						compGFXAnswerPanelAnimation = null;
					}
				})
				.catch(() => {});
		}
	})();
}

function typeSoftEngiFeedback() {
	if (!isSoftEngi) return;
	if (feedbackTypingTimer !== null) {
		clearInterval(feedbackTypingTimer);
		feedbackTypingTimer = null;
	}

	const text = feedback.textContent;
	feedback.classList.add("softengi-typing");
	const motionMode = window.quizHubPreferences.motionMode;
	if (
		!text ||
		motionMode === "reduced" ||
		window.matchMedia("(prefers-reduced-motion: reduce)").matches
	) {
		feedback.classList.remove("softengi-typing");
		return;
	}

	const characters = Array.from(text);
	let position = 0;
	feedback.textContent = "";
	const typeNextCharacter = () => {
		feedback.textContent = characters.slice(0, position + 1).join("");
		position++;
		if (position >= characters.length) {
			clearInterval(feedbackTypingTimer);
			feedbackTypingTimer = null;
			feedback.classList.remove("softengi-typing");
		}
	};

	typeNextCharacter();
	const defaultTypingSpeed = characters.length > 120 ? 8 : 12;
	const typingSpeed =
		motionMode === "minimal"
			? Math.max(1, Math.round(defaultTypingSpeed * 0.75))
			: defaultTypingSpeed;
	feedbackTypingTimer = setInterval(typeNextCharacter, typingSpeed);
}

function updateTimer() {
	if (remainingSeconds === null) {
		timer.hidden = true;
		if (softengiTime) softengiTime.textContent = "No limit";
		return;
	}
	timer.hidden = false;
	timer.textContent = formatTime(remainingSeconds);
	timer.classList.toggle("warning", remainingSeconds <= 60);
	if (softengiTime) softengiTime.textContent = formatTime(remainingSeconds);
}

function stopTimer() {
	if (timerInterval !== null) {
		clearInterval(timerInterval);
		timerInterval = null;
	}
}

function updateQuestionTimer() {
	if (remainingQuestionSeconds === null) {
		questionTimer.hidden = true;
		questionTimer.classList.remove("flashing");
		return;
	}
	questionTimer.hidden = false;
	questionTimer.textContent = formatTime(remainingQuestionSeconds);
	questionTimer.classList.toggle("flashing", remainingQuestionSeconds <= 5);
}

function stopQuestionTimer() {
	if (questionTimerInterval !== null) {
		clearInterval(questionTimerInterval);
		questionTimerInterval = null;
	}
	remainingQuestionSeconds = null;
	updateQuestionTimer();
}

function startQuestionTimer() {
	stopQuestionTimer();
	if (partyHostDisplay) return;
	if (perQuestionTimeMinutes === null) {
		remainingQuestionSeconds = null;
		updateQuestionTimer();
		return;
	}
	remainingQuestionSeconds = perQuestionTimeMinutes * 60;
	updateQuestionTimer();
	questionTimerInterval = setInterval(() => {
		remainingQuestionSeconds--;
		updateQuestionTimer();
		if (remainingQuestionSeconds <= 0) {
			stopQuestionTimer();
			playSound("popup");
			if (networkPartyActive && partyHost) {
				partyConnection
					.send({ type: "question-timeout", code: partyRoomCode })
					.catch((error) => {
						setupError.textContent = `Could not time out the shared question: ${error.message}`;
					});
			} else if (networkPartyActive) {
				submitNetworkAnswer(null);
			} else if (partyModeActive) finishPartyQuestion(true);
			else revealQuestion("timeout");
		}
	}, 1000);
}

function startTimer() {
	stopTimer();
	if (timeLimitMinutes === null) {
		remainingSeconds = null;
		updateTimer();
		return;
	}
	remainingSeconds = timeLimitMinutes * 60;
	updateTimer();
	timerInterval = setInterval(() => {
		remainingSeconds--;
		updateTimer();
		if (remainingSeconds <= 0) {
			stopTimer();
			if (networkPartyActive) {
				if (partyHost)
					partyConnection
						.send({ type: "end-game", code: partyRoomCode, reason: "time" })
						.catch((error) => {
							setupError.textContent = `Could not end the shared quiz: ${error.message}`;
						});
				else if (timer) timer.textContent = "00:00";
			} else {
				endQuiz("time");
			}
		}
	}, 1000);
}

let comboPopupExitAnimation = null;

function showComboPopup() {
	if (comboPopupExitAnimation) {
		comboPopupExitAnimation.cancel();
		comboPopupExitAnimation = null;
	}

	const message = `COMBO UP! ×${combo}`;
	comboPopup.replaceChildren();
	comboPopup.setAttribute("aria-label", message);
	if (isCompGFX) {
		const dialog = document.createElement("div");
		dialog.className = "gfx-combo-dialog";
		const titleBar = document.createElement("div");
		titleBar.className = "gfx-combo-titlebar";
		const title = document.createElement("span");
		title.textContent = "QuizHub";
		const closeButton = document.createElement("button");
		closeButton.className = "gfx-combo-close";
		closeButton.type = "button";
		closeButton.setAttribute("aria-label", "Close combo notification");
		closeButton.textContent = "×";
		closeButton.addEventListener("click", hideComboPopup);
		titleBar.append(title, closeButton);

		const messageRow = document.createElement("div");
		messageRow.className = "gfx-combo-message";
		const successIcon = document.createElement("span");
		successIcon.className = "gfx-combo-success-icon";
		successIcon.setAttribute("aria-hidden", "true");
		successIcon.textContent = "✓";
		const messageText = document.createElement("p");
		messageText.textContent = message;
		messageRow.append(successIcon, messageText);

		const footer = document.createElement("div");
		footer.className = "gfx-combo-footer";
		const okButton = document.createElement("button");
		okButton.className = "gfx-combo-ok";
		okButton.type = "button";
		okButton.textContent = "OK";
		okButton.addEventListener("click", hideComboPopup);
		footer.append(okButton);
		dialog.append(titleBar, messageRow, footer);
		comboPopup.append(dialog);
	} else {
		const letterDelayStep = Math.min(
			0.025,
			0.28 / Math.max(1, message.length - 1),
		);
		Array.from(message).forEach((character, index) => {
			const letter = document.createElement("span");
			letter.className = "combo-popup-letter";
			letter.setAttribute("aria-hidden", "true");
			letter.textContent = character === " " ? "\u00a0" : character;
			letter.style.setProperty(
				"--letter-delay",
				`${0.32 + index * letterDelayStep}s`,
			);
			comboPopup.appendChild(letter);
		});
	}
	comboPopup.hidden = false;
	comboPopup.classList.remove("combo-popup-active");
	void comboPopup.offsetWidth;
	comboPopup.classList.add("combo-popup-active");
	playSound("comboUp");
}

function hideComboPopup() {
	if (comboPopupExitAnimation) {
		comboPopupExitAnimation.cancel();
		comboPopupExitAnimation = null;
	}
	comboPopup.classList.remove("combo-popup-active");
	comboPopup.hidden = true;
}

function slideComboPopupOut() {
	if (comboPopup.hidden) return;

	const { transform, opacity } = getComputedStyle(comboPopup);
	comboPopup.classList.remove("combo-popup-active");
	comboPopupExitAnimation = comboPopup.animate(
		[
			{ transform, opacity },
			{
				transform: "translate(150vw, -50%) scale(.9) rotate(5deg)",
				opacity: 0,
			},
		],
		{ duration: 260, easing: "ease-in", fill: "forwards" },
	);
	comboPopupExitAnimation.onfinish = hideComboPopup;
}

comboPopup.addEventListener("animationend", (event) => {
	if (
		event.target === comboPopup &&
		(event.animationName === "comboShoot" ||
			event.animationName === "gfxComboDialog")
	) {
		hideComboPopup();
	}
});

function renderQuestion(forcedAnswerOrder = null) {
	if (!current) return;
	if (cheatRotationEnabled) {
		const quizPage = document.querySelector(".quiz-page");
		if (quizPage) {
			cheatRotationAngle += 2;
			quizPage.classList.add("cheat-rotation-enabled");
			updateCheatScreenTransform();
		}
	} else if (cheatRotationAngle !== 0) {
		clearCheatRotationAnimation();
	}
	const fadeCompGFXQuestion =
		isCompGFX && !hostDisplayAnswerer && compGfxQuestionLoaded;
	const compGfxTurnDuration = animateCompGFXCube();
	if (feedbackTypingTimer !== null) {
		clearInterval(feedbackTypingTimer);
		feedbackTypingTimer = null;
	}

	if (isCompGFX) {
		transitionCompGFXQuestionTitle(fadeCompGFXQuestion, compGfxTurnDuration);
	} else {
		showQuestionTitle();
	}
	nextButton.disabled = true;
	skipButton.disabled = false;
	skipButton.classList.remove("skip-hidden", "animate-hide");
	skipButton.classList.add("skip-show");
	skipButton.style.removeProperty("opacity");
	skipButton.style.removeProperty("visibility");
	skipButton.style.removeProperty("pointer-events");

	const answerIndices = current.a
		.map((_, index) => index)
		.filter((index) => current.a[index] !== "BLANK");
	const randomizedAnswerOrder = avoidRepeatedLautestCorrectAnswerPosition(
		forcedAnswerOrder || shuffleWithoutConsecutiveDuplicates(answerIndices),
		current.c,
	);

	const useOpenGLBuilder = isOpenGLBuilderQuestion();
	const useMeshTableBuilder = isMeshTableQuestion();
	const useStatisticsSetBuilder = isStatisticsSetQuestion();
	openglBuilder.hidden = !useOpenGLBuilder;
	tableAnswerBuilder.hidden = !useMeshTableBuilder;
	statisticsSetBuilder.hidden = !useStatisticsSetBuilder;
	answersEl.hidden =
		useOpenGLBuilder || useMeshTableBuilder || useStatisticsSetBuilder;
	if (useOpenGLBuilder) resetOpenGLBuilder();
	if (useMeshTableBuilder) resetMeshTableBuilder();
	if (useStatisticsSetBuilder) resetStatisticsSetBuilder();
	answersEl.innerHTML = "";
	const answerLabels = [
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
		"H",
		"I",
		"J",
		"K",
		"L",
		"M",
		"N",
		"O",
		"P",
		"Q",
		"R",
		"S",
		"T",
		"U",
		"V",
		"W",
		"X",
		"Y",
		"Z",
	];

	randomizedAnswerOrder.forEach((originalIndex, displayIndex) => {
		const answer = current.a[originalIndex];
		const button = document.createElement("button");
		button.type = "button";
		button.className = "answer";
		button.dataset.originalIndex = String(originalIndex);
		const answerLabel = answerLabels[displayIndex] || String(displayIndex + 1);
		const hideHostDisplayAnswerText =
			networkPartyActive && hostDisplayEnabled && !partyHostDisplay;
		const isPartyTrueFalse =
			partyModeActive &&
			window.QuizHubPartyQuestion.isTrueFalseQuestion(current) &&
			!partyHostDisplay;
		const answerButtonText = isPartyTrueFalse
			? formatPowerText(answer)
			: window.QuizHubPartyQuestion.getAnswerButtonText(
					answerLabel,
					formatPowerText(answer),
					hideHostDisplayAnswerText,
				);
		if (isSoftEngi) {
			button.classList.add("softengi-answer");
			button.setAttribute("aria-label", answerButtonText);
			const marker = document.createElement("span");
			marker.className = "softengi-answer-marker";
			marker.textContent = isPartyTrueFalse
				? formatPowerText(answer)
				: answerLabel;
			button.appendChild(marker);
			if (!hideHostDisplayAnswerText && !isPartyTrueFalse) {
				const answerText = document.createElement("span");
				answerText.className = "softengi-answer-text";
				answerText.textContent = formatPowerText(answer);
				button.appendChild(answerText);
			}
		} else {
			if (hideHostDisplayAnswerText) {
				button.setAttribute("aria-label", answerButtonText);
				const answerLabelElement = document.createElement("span");
				answerLabelElement.className = "host-display-answer-label";
				answerLabelElement.textContent = answerButtonText;
				button.appendChild(answerLabelElement);
			} else {
				button.textContent = answerButtonText;
			}
		}
		button.addEventListener("click", () => chooseAnswer(originalIndex));
		answersEl.appendChild(button);
	});

	const firstAnswer = answersEl.querySelector(".answer");
	if (useOpenGLBuilder) {
		openglBuilder.querySelector("[data-transform-add]:not(:disabled)")?.focus();
	} else if (useMeshTableBuilder) {
		tableAnswerScroll.querySelector("input")?.focus();
	} else if (useStatisticsSetBuilder) {
		statisticsSetInputs[0]?.focus();
	} else if (firstAnswer) {
		firstAnswer.focus();
	}

	feedback.textContent = "";
	feedback.className = "feedback";
	answered = false;
	updateMeta();
}

function loadQuestion() {
	if (sequencePosition >= questionSequence.length) {
		finishQuiz("complete");
		return;
	}

	const questionIndex = questionSequence[sequencePosition];

	if (!bank[questionIndex]) {
		finishQuiz("complete");
		return;
	}

	currentQuestionIndex = questionIndex;
	try {
		current = networkPartyActive
			? window.QuizHubPartyQuestion.getNetworkQuestion(
					bank[questionIndex],
					bank,
					questionIndex,
					partyRoomCode,
				)
			: bank[questionIndex];
	} catch (error) {
		setupError.textContent = error.message;
		return;
	}
	questionNumber = sequencePosition + 1;
	if (networkPartyActive && partyHost) {
		partyChoices = [];
		let answerOrder;
		try {
			answerOrder = buildNetworkAnswerOrder(
				current,
				sequencePosition,
				currentQuestionIndex,
			);
		} catch (error) {
			setupError.textContent = error.message;
			return;
		}
		renderQuestion(answerOrder);
		partyConnection
			.send({
				type: "question",
				code: partyRoomCode,
				questionNumber: sequencePosition,
				questionIndex: currentQuestionIndex,
				answerOrder,
				correctIndex: current.c,
			})
			.catch((error) => {
				setupError.textContent = `Could not send question to the room: ${error.message}`;
			});
	} else {
		renderQuestion();
	}
	startQuestionTimer();
	beginPartyQuestion();
}

function finishQuiz(reason = "complete") {
	if (quizEnded) return;
	quizEnded = true;
	if (
		cheatAlwaysPerfectScore &&
		!partyModeActive &&
		!networkPartyActive
	) {
		score = selectedQuestionCount;
		history = history.map((entry) => ({ ...entry, correct: true }));
		updateMeta();
	}
	stopTimer();
	stopQuestionTimer();
	partyTurnToken++;
	if (partyTurnAnimation !== null) clearInterval(partyTurnAnimation);
	if (partyTurnTimer !== null) clearTimeout(partyTurnTimer);
	if (questionTypingTimer !== null) {
		clearInterval(questionTypingTimer);
		questionTypingTimer = null;
	}
	if (feedbackTypingTimer !== null) {
		clearInterval(feedbackTypingTimer);
		feedbackTypingTimer = null;
	}

	// The result page receives ONLY the questions the user has actually seen.
	// The total remains the configured quiz length, so ending early is explicit.
	const results = {
		category,
		quizType: requestedQuiz || "reviewQuiz",
		score,
		longestCombo,
		total: selectedQuestionCount,
		timeLimitMinutes,
		perQuestionTimeMinutes,
		isRetake: miniQuizMode,
		partyMode: partyModeActive,
		...(partyModeActive
			? {
					partyPlayers: partyPlayers.map((player) => ({
						...player,
						longestCombo: partyLongestComboStreaks.get(player.id) || 0,
					})),
					partyHistory,
				}
			: {}),
		...(partyModeActive
			? {
					partyCurrentPlayerId: networkPartyActive
						? partyPlayerId
						: partyPlayers[0]?.id,
				}
			: {}),
		seen: history.length,
		completed: reason === "complete",
		endReason: reason,
		...(socIndiReviewSections
			? { reviewSections: selectedReviewSections }
			: {}),
		history,
	};

	try {
		sessionStorage.setItem("lakeheadQuizResults", JSON.stringify(results));
		location.href = partyModeActive ? "party-win.html" : "win.html";
	} catch (error) {
		console.error("Could not save quiz results:", error);
		quizEnded = false;
	}
}

function endQuiz(reason = "ended") {
	if (!quizStarted || quizEnded) return;
	finishQuiz(reason);
}

function revealQuestion(resultType, selectedIndex = null) {
	if (answered || quizEnded) return;
	if (isOpenGLBuilderQuestion()) {
		finishOpenGLResponse(resultType, false);
		return;
	}
	if (isMeshTableQuestion()) {
		finishMeshTableResponse(resultType, false);
		return;
	}
	if (isStatisticsSetQuestion()) {
		finishStatisticsSetResponse(resultType, false);
		return;
	}
	stopQuestionTimer();
	answered = true;

	const correctIndex = current.c;
	const answerIndex =
		resultType === "answer" && cheatAlwaysRightAnswer
			? correctIndex
			: selectedIndex;
	const isCorrect = shouldCountAsCorrect(
		resultType,
		resultType === "answer" && answerIndex === correctIndex,
	);

	if (isCorrect) {
		combo++;
		longestCombo = Math.max(longestCombo, combo);
		if (combo > 1) showComboPopup();
	} else {
		resetComboAfterIncorrectAnswer();
	}

	if (resultType === "answer") {
		playSound(isCorrect ? "correct" : "incorrect");
		if (isCorrect) score++;
	}

	history.push({
		question: current.q,
		questionIndex: currentQuestionIndex,
		selected: resultType === "answer" ? current.a[answerIndex] : "",
		correctAnswer: current.a[correctIndex],
		correct: isCorrect,
		skipped: resultType === "skip",
		timedOut: resultType === "timeout",
	});

	const buttons = [...answersEl.querySelectorAll(".answer")];
	buttons.forEach((button) => {
		const originalIndex = Number(button.dataset.originalIndex);
		button.disabled = true;
		button.classList.remove("correct", "wrong", "incorrect");
		if (originalIndex === correctIndex) {
			button.classList.add("correct");
		}
		if (
			resultType === "answer" &&
			originalIndex === answerIndex &&
			!isCorrect
		) {
			button.classList.add("wrong");
			button.classList.add("incorrect");
		}
	});

	if (resultType === "skip" || resultType === "timeout") {
		const outcome = resultType === "timeout" ? "Time expired" : "Skipped";
		feedback.textContent = `${outcome} — the correct answer was: ${formatPowerText(current.a[correctIndex])}`;
		feedback.className = "motivation visible wrong";
	} else if (isCorrect) {
		feedback.textContent = [
			"Excellent! Keep it going! 🔥",
			"Correct! You're on a roll! ⭐",
			"Nice work! You nailed it! 🎯",
			"That's right! Keep pushing! 💪",
			"Great job! Your STEM skills are showing! 🚀",
		][Math.floor(Math.random() * 5)];
		feedback.className = "motivation visible right";
	} else {
		feedback.textContent = [
			"Not quite — keep going, you've got this! 💪",
			"Good try! Learn from it and keep moving! 🌟",
			"Almost! Don't give up — the next one is yours! 🔥",
			"Keep your momentum! One question doesn't define your score! 🚀",
			"Nice attempt! Stay focused and keep going! 🎯",
		][Math.floor(Math.random() * 5)];
		feedback.className = "motivation visible wrong";
	}

	typeSoftEngiFeedback();

	nextButton.disabled = false;
	skipButton.disabled = true;
	skipButton.classList.remove("skip-show");
	skipButton.classList.add("skip-hidden", "animate-hide");
	skipButton.style.setProperty("opacity", "0", "important");
	skipButton.style.setProperty("visibility", "hidden", "important");
	skipButton.style.setProperty("pointer-events", "none", "important");
	updateMeta();
}

function chooseAnswer(index) {
	if (!quizStarted || quizEnded || answered) return;
	if (networkPartyActive) {
		submitNetworkAnswer(Number(index));
		return;
	}
	if (partyModeActive) {
		recordPartySelection(Number(index));
		return;
	}
	revealQuestion("answer", Number(index));
}

function goNext() {
	if (!quizStarted || quizEnded) return;
	if (networkPartyActive && !canControlPartyQuiz) return;

	if (!answered) {
		feedback.textContent = "Choose an answer or skip the question first.";
		feedback.className = "feedback error";
		return;
	}

	if (networkPartyActive) {
		nextButton.disabled = true;
		partyConnection
			.send({ type: "next-question", code: partyRoomCode })
			.catch((error) => {
				nextButton.disabled = false;
				setupError.textContent = `Could not advance the shared quiz: ${error.message}`;
			});
		return;
	}

	if (sequencePosition + 1 < questionSequence.length) slideComboPopupOut();
	sequencePosition++;
	loadQuestion();
}

function skip() {
	if (!quizStarted || quizEnded || answered) return;
	if (networkPartyActive && !canControlPartyQuiz) return;
	if (networkPartyActive && hostDisplayAnswerer) {
		skipNetworkQuestion();
		return;
	}
	if (partyHostDisplay) {
		submitNetworkAnswer(null);
		return;
	}
	if (networkPartyActive) {
		submitNetworkAnswer(null);
		return;
	}
	playSound("popup");
	if (partyModeActive) {
		recordPartySelection(null);
		return;
	}
	revealQuestion("skip");
}

function exitSetup() {
	if (quizStarted || quizEnded) return;
	quizMusic.pause();
	fade.classList.add("active");
	setTimeout(() => {
		window.location.href = "index.html?fromSetup=1";
	}, 560);
}

function quit() {
	// END QUIZ intentionally goes straight to the result screen and preserves
	// only the questions that have been displayed and recorded in history.
	if (networkPartyActive) {
		if (partyHost) {
			partyConnection
				.send({ type: "end-game", code: partyRoomCode, reason: "ended" })
				.catch((error) => {
					setupError.textContent = `Could not end the shared quiz: ${error.message}`;
				});
		} else if (hostDisplayAnswerer) {
			partyConnection
				.send({ type: "end-game", code: partyRoomCode, reason: "ended" })
				.catch((error) => {
					setupError.textContent = `Could not end the shared quiz: ${error.message}`;
				});
		} else {
			quitButton.disabled = true;
			quitButton.textContent = "LEAVING…";
			partyConnection
				.send({ type: "leave", code: partyRoomCode })
				.catch((error) => {
					quitButton.disabled = false;
					quitButton.textContent = "LEAVE GAME";
					setupError.textContent = `Could not leave the shared game: ${error.message}`;
				});
		}
		return;
	}
	endQuiz("ended");
}

function handleNetworkGameOver(message) {
	if (message.departedPlayerId === partyPlayerId) {
		location.replace("index.html");
		return;
	}
	if (message.reason === "player-left") {
		if (quizEnded) return;
		quizEnded = true;
		stopTimer();
		stopQuestionTimer();
		answersEl.querySelectorAll(".answer").forEach((button) => {
			button.disabled = true;
		});
		nextButton.disabled = true;
		skipButton.disabled = true;
		quitButton.disabled = true;
		const departedPlayer = partyPlayers.find(
			(player) => player.id === message.departedPlayerId,
		);
		partyPlayerLeftMessage.textContent = departedPlayer
			? `${departedPlayer.name} left the game. You can return to the menu.`
			: "A player left the game. You can return to the menu.";
		if (!partyPlayerLeftDialog.open) partyPlayerLeftDialog.showModal();
		return;
	}
	if (!quizEnded) {
		if (!quizStarted) {
			setup.hidden = true;
			content.hidden = false;
			quizStarted = true;
		}
		if (message.players) {
			message.players.forEach((updated) => {
				const player = partyPlayers.find(
					(candidate) => candidate.id === updated.id,
				);
				if (!player) return;
				if (Number.isFinite(Number(updated.score)))
					player.score = Number(updated.score);
				if (Number.isFinite(Number(updated.overallScore))) {
					player.overallScore = Number(updated.overallScore);
				}
			});
		}
		quizEnded = true;
		stopTimer();
		stopQuestionTimer();
		const currentResultPlayerId = partyHostDisplay
			? hostDisplayPlayerId
			: partyPlayerId;
		const result = {
			category,
			quizType: requestedQuiz || "reviewQuiz",
			score:
				partyPlayers.find((player) => player.id === currentResultPlayerId)
					?.score || 0,
			longestCombo,
			total: selectedQuestionCount,
			timeLimitMinutes,
			perQuestionTimeMinutes,
			isRetake: false,
			partyMode: true,
			onlineParty: true,
			partyRoomCode,
			partyHost,
			partyHostDisplay,
			partyCurrentPlayerId: currentResultPlayerId,
			partyActionPlayerId: partyPlayerId,
			partyPlayers: partyPlayers.map((player) => ({
				...player,
				longestCombo: partyLongestComboStreaks.get(player.id) || 0,
			})),
			overallPartyPlayers: partyPlayers.map((player) => ({ ...player })),
			partyHistory,
			history,
			seen: history.length,
			completed: message.reason !== "ended",
			endReason: message.reason || "complete",
			reviewSections: socIndiReviewSections ? selectedReviewSections : [],
		};
		try {
			sessionStorage.setItem("lakeheadQuizResults", JSON.stringify(result));
			location.href = "party-win.html";
		} catch (error) {
			quizEnded = false;
			setupError.textContent = `Could not save the party results: ${error.message}`;
		}
	}
}

function readTimingSettings() {
	const selectedTime = document.querySelector(
		'input[name="timeLimit"]:checked',
	);
	timeLimitMinutes =
		selectedTime && selectedTime.value !== "none"
			? Number(selectedTime.value)
			: null;
	const perQuestionMinutes =
		perQuestionTimeLimit.value === "none"
			? null
			: Number.parseInt(perQuestionTimeLimit.value, 10);
	perQuestionTimeMinutes =
		Number.isInteger(perQuestionMinutes) &&
		perQuestionMinutes >= 1 &&
		perQuestionMinutes <= 60
			? perQuestionMinutes
			: null;
}

function validateSetup() {
	if (socIndiReviewSections && selectedReviewSections.length === 0) {
		setupError.textContent = "Choose at least one review section.";
		return false;
	}

	if (totalAvailable < 1) {
		setupError.textContent =
			"There are no questions available in the selected sections.";
		return false;
	}

	const requested = Number.parseInt(countInput.value, 10);
	if (!Number.isFinite(requested) || requested < 1) {
		setupError.textContent = "Choose at least 1 question.";
		return false;
	}
	if (requested > totalAvailable) {
		setupError.textContent = `This quiz only has ${totalAvailable} question${totalAvailable === 1 ? "" : "s"}.`;
		return false;
	}

	selectedQuestionCount = requested;
	const selectedOrder = document.querySelector('input[name="order"]:checked');
	orderMode = forceStaticQuestionOrder
		? "static"
		: selectedOrder
			? selectedOrder.value
			: "random";
	readTimingSettings();
	setupError.textContent = "";
	return true;
}

function beginQuiz() {
	if (quizStarted) return;
	if (networkPartyActive && !partyHost) return;
	if (partyStartPending) return;
	readTimingSettings();

	if (miniQuizMode && customQuestionSequence.length) {
		const validIndexes = customQuestionSequence.filter(
			(index) => index < bank.length,
		);
		if (!validIndexes.length) {
			setupError.textContent = "No missed questions are available to retake.";
			return;
		}
		selectedQuestionCount = validIndexes.length;
		questionSequence = validIndexes.slice();
		sequencePosition = 0;
	} else if (!validateSetup()) {
		return;
	} else {
		buildQuestionSequence();
	}
	lastLautestCorrectAnswerPosition = null;

	if (networkPartyActive) {
		partyStartPending = true;
		beginButton.disabled = true;
		setupError.textContent = "Starting the shared quiz…";
		partyConnection
			.send({
				type: "quiz-start",
				code: partyRoomCode,
				config: {
					questionSequence,
					orderMode,
					timeLimitMinutes,
					perQuestionTimeMinutes,
					reviewSections: socIndiReviewSections ? selectedReviewSections : [],
				},
			})
			.catch((error) => {
				partyStartPending = false;
				beginButton.disabled = false;
				setupError.textContent = `Could not start the shared quiz: ${error.message}`;
			});
		return;
	}

	playSound("begin");
	if (partyModeActive) resetPartyComboStreaks();
	quizStarted = true;
	if (isSoftEngi) document.body.classList.add("softengi-active");
	if (isCompGFX) transitionCompGFXIntoQuiz();
	if (forceStaticQuestionOrder) startLautestQuizMusic();
	else if (isDataSciLautest) startDataSciLautestMusic();
	else startQuizMusic();
	setup.hidden = true;
	content.hidden = false;
	startTimer();
	loadQuestion(false);
}

nextButton.addEventListener("click", goNext);
skipButton.addEventListener("click", skip);
quitButton.addEventListener("click", quit);
beginButton.addEventListener("click", beginQuiz);
exitSetupButton.addEventListener("click", exitSetup);

if (networkPartyActive) {
	partyConnection.on("joined", (message) => {
		syncHostDisplayControls(message.room);
		updateNetworkPlayers(message.room.players);
		updatePartySettingsSummary(message.room.quizConfig);
		partyHideLockedAnswers =
			message.room.partyOptions?.showLockedAnswers === false;
		if (message.room.stage === "quiz" && message.room.quizConfig) {
			startNetworkQuiz(message.room.quizConfig, message.room);
		} else if (partyHost) publishPartySettings();
	});
	partyConnection.on("quiz-start", (message) => {
		updateNetworkPlayers(message.players);
		startNetworkQuiz(message.config);
	});
	partyConnection.on("question", displayNetworkQuestion);
	partyConnection.on("dev-jump-question", (message) => {
		stopQuestionTimer();
		if (partyHost) {
			sequencePosition = message.questionNumber;
			slideComboPopupOut();
			loadQuestion();
		}
	});
	partyConnection.on("answer-locked", (message) => {
		if (Number.isInteger(message.answerIndex)) {
			const choice = partyChoices.find(
				(entry) => entry.playerId === message.playerId,
			);
			if (choice) choice.selectedIndex = message.answerIndex;
			else
				partyChoices.push({
					playerId: message.playerId,
					selectedIndex: message.answerIndex,
				});
			const selectedButton = answersEl.querySelector(
				`.answer[data-original-index="${message.answerIndex}"]`,
			);
			if (selectedButton) updatePartyAnswerMarker(selectedButton);
		}
	});
	partyConnection.on("reveal", revealNetworkQuestion);
	partyConnection.on("next-question", () => {
		if (partyHost) {
			sequencePosition++;
			loadQuestion();
		} else {
			nextButton.disabled = true;
			answered = false;
		}
		if (partyHostDisplay) answered = false;
	});
	partyConnection.on("game-over", handleNetworkGameOver);
	partyConnection.on("left", () => location.replace("index.html"));
	partyConnection.on("room-state", (message) => {
		syncHostDisplayControls(message.room);
		updateNetworkPlayers(message.room.players);
		updatePartySettingsSummary(message.room.quizConfig);
	});
	partyConnection.on("error", (message) => {
		if (skipQuestionPending) {
			skipQuestionPending = false;
			answered = false;
			answersEl.querySelectorAll(".answer").forEach((button) => {
				button.disabled = false;
			});
			skipButton.disabled = false;
			feedback.textContent = "";
			feedback.className = "feedback";
			startQuestionTimer();
		}
		setupError.textContent = message.message;
		if (!quizStarted && partyHost) {
			partyStartPending = false;
			beginButton.disabled = false;
		}
	});
	partyConnection.on("close", () => {
		if (!quizEnded) {
			setupError.textContent =
				"Connection to the shared game was lost. Reconnect before continuing.";
			answersEl.querySelectorAll(".answer").forEach((button) => {
				button.disabled = true;
			});
			nextButton.disabled = true;
			skipButton.disabled = true;
		}
	});
	document
		.getElementById("partyPlayerLeftReturn")
		.addEventListener("click", () => {
			location.replace("index.html");
		});
	partyConnection
		.send({
			type: "join",
			code: partyRoomCode,
			playerId: partyPlayerId,
			player: partyPlayers.find((player) => player.id === partyPlayerId),
		})
		.then(() => {
			partyConnectionReady = true;
		})
		.catch((error) => {
			setupError.textContent = `Could not reconnect to the party room: ${error.message}`;
			beginButton.disabled = true;
		});
}

answersEl.addEventListener("pointerover", (event) => {
	if (event.pointerType !== "mouse") return;
	const answer = event.target.closest(".answer:not(:disabled)");
	if (!answer || answer.contains(event.relatedTarget)) return;
	answersEl.querySelectorAll(".keyboard-highlight").forEach((highlighted) => {
		highlighted.classList.remove("keyboard-highlight");
	});
});

document.addEventListener("keydown", (event) => {
	if (event.key.toLowerCase() === "m" && event.target.tagName !== "INPUT") {
		event.preventDefault();
		if (forceStaticQuestionOrder) {
			soundsMuted = !soundsMuted;
			localStorage.setItem("quizHubMuted", String(soundsMuted));
			updateSoundToggle();
			return;
		}
		if (!hostDisplayMusicAllowed) {
			soundsMuted = !soundsMuted;
			localStorage.setItem("quizHubMuted", String(soundsMuted));
			updateSoundToggle();
			return;
		}
		const muted = !(soundsMuted && musicMuted);
		soundsMuted = muted;
		musicMuted = muted;
		localStorage.setItem("quizHubMuted", String(muted));
		localStorage.setItem("quizHubMusicMuted", String(muted));
		if (muted) quizMusic.pause();
		else if (quizStarted) startQuizMusic();
		updateSoundToggle();
		updateMusicToggle();
		return;
	}

	if (event.key === "Escape" && !quizStarted && !quizEnded) {
		event.preventDefault();
		exitSetup();
		return;
	}

	if (
		!quizStarted ||
		quizEnded ||
		event.target.closest("input, textarea, select, [contenteditable='true']")
	)
		return;

	if (event.key === "Escape") {
		if (document.querySelector("dialog[open]")) return;
		event.preventDefault();
		quit();
		return;
	}

	if (event.key === "Enter" && answered) {
		event.preventDefault();
		goNext();
		return;
	}

	const answerButtons = [
		...answersEl.querySelectorAll(".answer:not(:disabled)"),
	];
	if (!answerButtons.length) return;

	const activeIndex = answerButtons.indexOf(document.activeElement);
	const focusAnswer = (button) => {
		if (!button) return;
		button.focus();
		answersEl.querySelectorAll(".keyboard-highlight").forEach((highlighted) => {
			highlighted.classList.remove("keyboard-highlight");
		});
		button.classList.remove("keyboard-highlight");
		void button.offsetWidth;
		button.classList.add("keyboard-highlight");
		playSound("highlight");
	};
	if (event.key === "ArrowDown" || event.key === "ArrowRight") {
		event.preventDefault();
		focusAnswer(
			answerButtons[
				(activeIndex + 1 + answerButtons.length) % answerButtons.length
			],
		);
	} else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
		event.preventDefault();
		focusAnswer(
			answerButtons[
				(activeIndex - 1 + answerButtons.length) % answerButtons.length
			],
		);
	} else if (/^[1-4]$/.test(event.key)) {
		event.preventDefault();
		focusAnswer(answerButtons[Number(event.key) - 1]);
	} else if (/^[a-d]$/i.test(event.key)) {
		event.preventDefault();
		focusAnswer(answerButtons[event.key.toLowerCase().charCodeAt(0) - 97]);
	}
});

questionJumpClose.addEventListener("click", () => questionJumpDialog.close());
questionJumpDialog.addEventListener("click", (event) => {
	if (event.target === questionJumpDialog) questionJumpDialog.close();
});
window.addEventListener("quizhub:dev-menu-context-request", (event) => {
	const modifiersAvailable = !partyModeActive && !networkPartyActive;
	event.detail.quizModifiersAvailable = modifiersAvailable;
	event.detail.quizCanModify =
		modifiersAvailable && quizStarted && !quizEnded;
	event.detail.quizJumpAvailable =
		(!networkPartyActive || partyHost) &&
		quizStarted &&
		!quizEnded &&
		questionSequence.length > 0;
	event.detail.quizCanJump = event.detail.quizJumpAvailable;
	event.detail.quizSetupAvailable =
		!partyModeActive && !networkPartyActive && quizStarted && !quizEnded;
	event.detail.alwaysRight = cheatAlwaysRightAnswer;
	event.detail.perfectScore = cheatAlwaysPerfectScore;
	event.detail.disableComboLoss = cheatComboLossDisabled;
	event.detail.rotation = cheatRotationEnabled;
});
window.addEventListener("quizhub:dev-menu-action", (event) => {
	const { action, name, value } = event.detail;
	if (action === "quiz-jump") {
		if (
			quizStarted &&
			!quizEnded &&
			(!networkPartyActive || partyHost)
		)
			showQuestionJumpDialog();
		return;
	}
	if (
		action === "quiz-show-setup" &&
		!partyModeActive &&
		!networkPartyActive &&
		quizStarted &&
		!quizEnded
	) {
		window.location.reload();
		return;
	}
	if (
		action !== "quiz-modifier" ||
		partyModeActive ||
		networkPartyActive ||
		!quizStarted ||
		quizEnded
	)
		return;
	switch (name) {
		case "always-right":
			cheatAlwaysRightAnswer = value;
			break;
		case "perfect-score":
			cheatAlwaysPerfectScore = value;
			break;
		case "disable-combo-loss":
			cheatComboLossDisabled = value;
			break;
		case "rotation":
			cheatRotationEnabled = value;
			if (!cheatRotationEnabled) clearCheatRotationAnimation();
			break;
	}
	window.dispatchEvent(
		new CustomEvent("quizhub:dev-menu-context-change", {
			detail: {
				alwaysRight: cheatAlwaysRightAnswer,
				perfectScore: cheatAlwaysPerfectScore,
				disableComboLoss: cheatComboLossDisabled,
				rotation: cheatRotationEnabled,
			},
		}),
	);
});
window.addEventListener("quizhub:display-modechange", updateCheatDisplayMode);
window.addEventListener("resize", updateCheatCoverScale);
updateCheatDisplayMode();

countInput.addEventListener("input", () => {
	setupError.textContent = "";
	const value = Number.parseInt(countInput.value, 10);
	if (Number.isFinite(value) && value > totalAvailable)
		countInput.value = totalAvailable;
	if (Number.isFinite(value) && value < 1) countInput.value = 1;
	publishPartySettings();
});
countInput.addEventListener("change", publishPartySettings);
document
	.querySelectorAll('input[name="order"], input[name="timeLimit"]')
	.forEach((input) => {
		input.addEventListener("change", publishPartySettings);
	});
perQuestionTimeLimit.addEventListener("change", publishPartySettings);
partyScoreToggle.addEventListener("click", () => {
	const expanded = partyScoreToggle.getAttribute("aria-expanded") === "true";
	document.body.classList.toggle("party-scores-open", !expanded);
	partyScoreToggle.setAttribute("aria-expanded", String(!expanded));
	partyScoreToggle.setAttribute(
		"aria-label",
		expanded ? "View player scores" : "Hide player scores",
	);
});

if (miniQuizMode && customQuestionSequence.length) {
	beginQuiz();
}
