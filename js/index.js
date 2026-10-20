const syncViewportHeight = () => {
	const viewportHeight =
		window.quizHubDisplayViewport?.height ??
		(window.visualViewport ? window.visualViewport.height : window.innerHeight);
	document.documentElement.style.setProperty(
		"--app-viewport-height",
		`${viewportHeight}px`,
	);
};

window.addEventListener("resize", syncViewportHeight);
window.addEventListener("orientationchange", syncViewportHeight);
if (window.visualViewport) {
	window.visualViewport.addEventListener("resize", syncViewportHeight);
}
syncViewportHeight();

const resolveAssetUrl = (path) =>
	new URL(path, window.location.href).toString();

const soundFiles = {
	highlight: resolveAssetUrl("sfx/highlight.wav"),
	popup: resolveAssetUrl("sfx/Popup.wav"),
	arrow: resolveAssetUrl("sfx/ArrowButton.wav"),
	select: resolveAssetUrl("sfx/QuizSelect.wav"),
	incorrect: resolveAssetUrl("sfx/Incorrect.wav"),
	titleEnd: resolveAssetUrl("sfx/TitleEnd.wav"),
	started: resolveAssetUrl("secret/Started.mp3"),
	loading: resolveAssetUrl("secret/Loading.mp3"),
};

const soundCache = {};
let soundsMuted = localStorage.getItem("quizHubMuted") === "true";
let activeHighlightSound = null;
Object.entries(soundFiles).forEach(([name, path]) => {
	const sound = new Audio(path);
	sound.preload = "auto";
	soundCache[name] = sound;
});

function playSound(name, course = null, restart = false) {
	if (soundsMuted) return;
	if (
		name === "highlight" &&
		activeHighlightSound &&
		!activeHighlightSound.paused &&
		!activeHighlightSound.ended &&
		!restart
	)
		return;
	if (name === "highlight" && activeHighlightSound && restart) {
		activeHighlightSound.pause();
		activeHighlightSound.currentTime = 0;
	}
	const secretSubstituteSounds = ["popup", "select", "begin"];
	const soundName =
		window.quizHubPreferences.secretMode &&
		secretSubstituteSounds.includes(name)
			? "started"
			: name;
	const defaultSource = soundFiles[soundName];
	if (!defaultSource) return;
	const soundSource = window.quizHubPreferences.resolveSfx(
		soundName,
		defaultSource,
		course,
	);
	const sound =
		soundSource === soundFiles[soundName]
			? soundCache[soundName].cloneNode()
			: new Audio(soundSource);
	if (name === "highlight") activeHighlightSound = sound;
	sound.currentTime = 0;
	sound.play().catch(() => {});
}

document.addEventListener("pointerover", (event) => {
	const control = event.target.closest("button, input, select, .setting-radio");
	if (
		control &&
		!control.contains(event.relatedTarget) &&
		!control.classList.contains("sound-toggle") &&
		!control.classList.contains("music-toggle")
	) {
		playSound("highlight");
	}
});
document.addEventListener("pointerdown", (event) => {
	const control = event.target.closest("button, input, select, .setting-radio");
	if (
		control &&
		!control.classList.contains("sound-toggle") &&
		!control.classList.contains("music-toggle")
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
function setSoundsMuted(muted) {
	soundsMuted = Boolean(muted);
	window.quizHubPreferences.setSoundMuted(soundsMuted);
	updateSoundToggle();
	if (!soundsMuted) tryPlayDSTitleSound();
}
window.addEventListener("quizhub:preferenceschange", (event) => {
	soundsMuted = event.detail.soundMuted;
	updateSoundToggle();
});
soundToggle.addEventListener("click", () => {
	setSoundsMuted(!soundsMuted);
});
updateSoundToggle();

let musicMuted = localStorage.getItem("quizHubMusicMuted") === "true";
const musicToggle = document.getElementById("musicToggle");
const menuMusic = new Audio(resolveAssetUrl("music/MenuMusic.wav"));
const normalMenuMusicSource = resolveAssetUrl("music/MenuMusic.wav");
const specialMenuMusicSource = resolveAssetUrl("music/SpecialMenu.wav");
const stressMenuMusicSource = resolveAssetUrl("music/StressMenu.mp3");
const secretMenuMusicSource = resolveAssetUrl("secret/HUB.wav");
const stressMenuDates = new Set(["2026-10-20", "2026-10-21", "2026-10-22"]);
const specialMenuMusicDates = new Set([
	"2026-10-12",
	"2026-10-13",
	"2026-10-14",
	"2026-10-15",
	"2026-10-16",
	"2026-10-17",
	"2026-10-18",
	"2026-10-19",
]);
const quizMusicPreview = document.getElementById("quizMusicPreview");
const quizPreviewMusic = new Audio();
quizPreviewMusic.loop = true;
quizPreviewMusic.preload = "auto";
quizPreviewMusic.volume = 0.45;
let quizPreviewPlaying = false;
let menuVisible = false;
let menuMusicFadeFrame = null;
let menuMusicFadePending = false;
menuMusic.loop = true;
menuMusic.volume = 0.45;
function getMenuMusicSource(date = new Date()) {
	if (isStressMenuDate(date)) return stressMenuMusicSource;
	if (window.quizHubPreferences.secretMode) return secretMenuMusicSource;
	return isSpecialMenuMusicDate(date)
		? specialMenuMusicSource
		: normalMenuMusicSource;
}
function isStressMenuDate(date = new Date()) {
	const localDate = [
		date.getFullYear(),
		String(date.getMonth() + 1).padStart(2, "0"),
		String(date.getDate()).padStart(2, "0"),
	].join("-");
	return stressMenuDates.has(localDate);
}
function isSpecialMenuMusicDate(date = new Date()) {
	const localDate = [
		date.getFullYear(),
		String(date.getMonth() + 1).padStart(2, "0"),
		String(date.getDate()).padStart(2, "0"),
	].join("-");
	return specialMenuMusicDates.has(localDate);
}
function updateSpecialMenuTheme(date = new Date()) {
	const override = localStorage.getItem("quizHubSpecialEventMode");
	document.body.classList.toggle("stress-menu-fire", isStressMenuDate(date));
	document.body.classList.toggle(
		"special-menu-night",
		override === "true" ||
			(override !== "false" && isSpecialMenuMusicDate(date)),
	);
}
function scheduleMenuMusicDateRefresh() {
	const now = new Date();
	const nextMidnight = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate() + 1,
	);
	window.setTimeout(() => {
		updateSpecialMenuTheme();
		startMenuMusic();
		scheduleMenuMusicDateRefresh();
	}, nextMidnight.getTime() - now.getTime());
}
updateSpecialMenuTheme();
function updateMusicToggle() {
	musicToggle.textContent = musicMuted ? "♫̸" : "♫";
	musicToggle.setAttribute(
		"aria-label",
		musicMuted ? "Unmute music" : "Mute music",
	);
	musicToggle.setAttribute("aria-pressed", String(musicMuted));
}
function setMusicMuted(muted) {
	musicMuted = Boolean(muted);
	window.quizHubPreferences.setMusicMuted(musicMuted);
	if (musicMuted) {
		menuMusic.pause();
		quizPreviewMusic.pause();
	} else if (quizPreviewPlaying) {
		startQuizMusicPreview();
	} else {
		startMenuMusic();
	}
	updateMusicToggle();
}
function updateQuizMusicPreview() {
	quizMusicPreview.textContent = quizPreviewPlaying ? "■" : "▶";
	quizMusicPreview.setAttribute(
		"aria-label",
		quizPreviewPlaying
			? "Stop selected quiz music preview"
			: "Preview selected quiz music",
	);
	quizMusicPreview.setAttribute("aria-pressed", String(quizPreviewPlaying));
	quizMusicPreview.title = quizPreviewPlaying
		? "Stop selected quiz music preview"
		: "Preview selected quiz music";
}
function startQuizMusicPreview() {
	if (!menuVisible || musicMuted || !quizPreviewPlaying) return;
	if (menuMusicFadeFrame !== null) {
		cancelAnimationFrame(menuMusicFadeFrame);
		menuMusicFadeFrame = null;
	}
	menuMusic.pause();
	quizPreviewMusic.src = window.quizHubPreferences.resolveQuizMusic(
		"music/QuizMusic.wav",
	);
	quizPreviewMusic.play().catch((error) => {
		quizPreviewPlaying = false;
		updateQuizMusicPreview();
		if (settingsModal.classList.contains("open")) {
			settingsError.textContent = `Could not play quiz music preview: ${error.message}`;
		}
	});
}
function stopQuizMusicPreview(resumeMenuMusic = true) {
	quizPreviewPlaying = false;
	quizPreviewMusic.pause();
	quizPreviewMusic.currentTime = 0;
	updateQuizMusicPreview();
	if (resumeMenuMusic) startMenuMusic();
}
function startMenuMusic(fadeIn = false) {
	if (fadeIn) menuMusicFadePending = true;
	if (!menuVisible || musicMuted || quizPreviewPlaying) return;

	const menuMusicSource = getMenuMusicSource();
	if (menuMusic.src !== menuMusicSource) {
		menuMusic.src = menuMusicSource;
		menuMusic.currentTime = 0;
	}

	if (menuMusicFadeFrame !== null) {
		cancelAnimationFrame(menuMusicFadeFrame);
		menuMusicFadeFrame = null;
	}

	if (!menuMusicFadePending) {
		menuMusic.volume = 0.45;
		menuMusic.play().catch(() => {});
		return;
	}

	menuMusic.volume = 0;
	menuMusic
		.play()
		.then(() => {
			menuMusicFadePending = false;
			const fadeStartedAt = performance.now();
			const fadeDuration = 1150;
			const raiseVolume = (now) => {
				if (musicMuted) {
					menuMusic.volume = 0;
					menuMusicFadeFrame = null;
					return;
				}
				const progress = Math.min((now - fadeStartedAt) / fadeDuration, 1);
				menuMusic.volume = 0.45 * progress;
				if (progress < 1)
					menuMusicFadeFrame = requestAnimationFrame(raiseVolume);
				else menuMusicFadeFrame = null;
			};
			menuMusicFadeFrame = requestAnimationFrame(raiseVolume);
		})
		.catch(() => {});
}
scheduleMenuMusicDateRefresh();
musicToggle.addEventListener("click", () => {
	setMusicMuted(!musicMuted);
});
quizMusicPreview.addEventListener("click", () => {
	if (quizPreviewPlaying) stopQuizMusicPreview();
	else {
		quizPreviewPlaying = true;
		updateQuizMusicPreview();
		startQuizMusicPreview();
	}
});
document.addEventListener("pointerdown", () => startMenuMusic());
document.addEventListener("touchstart", () => startMenuMusic(), {
	passive: true,
});
updateMusicToggle();
updateQuizMusicPreview();

document.addEventListener("keydown", (event) => {
	if (event.key.toLowerCase() !== "m" || event.target.tagName === "INPUT")
		return;
	event.preventDefault();
	const muted = !(soundsMuted && musicMuted);
	setSoundsMuted(muted);
	setMusicMuted(muted);
});

const welcomeText = "Let's Get Started!";
const menuDate = document.getElementById("menuDate");
const menuTime = document.getElementById("menuTime");
const dateFormatter = new Intl.DateTimeFormat(undefined, {
	weekday: "short",
	year: "numeric",
	month: "short",
	day: "numeric",
});
const timeFormatter = new Intl.DateTimeFormat(undefined, {
	hour: "numeric",
	minute: "2-digit",
	second: "2-digit",
});
function updateMenuDateTime() {
	const now = new Date();
	menuDate.textContent = dateFormatter.format(now);
	menuTime.textContent = timeFormatter.format(now);
}
updateMenuDateTime();
setInterval(updateMenuDateTime, 1000);

const welcomeLine = document.getElementById("welcomeLine");
[...welcomeText].forEach((ch) => {
	const span = document.createElement("span");
	span.className = "letter";
	span.textContent = ch === " " ? " " : ch;
	welcomeLine.appendChild(span);
});

let leaving = false;
let preloadFrame = null;
let quizLoaded = false;
let welcomeVisible = false;
let navigationStarted = false;
let loadingSoundPlayed = false;
let loadingCompleteScheduled = false;
let loadingStartedAt = 0;
let loadingCompletionTimer = null;
let loadingProgressTimer = null;
let slowLoadingEnabled = localStorage.getItem("quizHubSlowLoading") === "true";
let showLoadingPercentage =
	localStorage.getItem("quizHubShowLoadingPercentage") === "true";
let navigationTarget = "";
let selectedCourse = "";
let quizMenuTrigger = null;
let partyModeActive = false;
let partyPlayers = [];
const loadingProgressPanel = document.getElementById("loadingProgressPanel");
const loadingProgressPercent = document.getElementById(
	"loadingProgressPercent",
);
const loadingProgressTrack = document.querySelector(".loading-progress-track");
const loadingProgressFill = document.getElementById("loadingProgressFill");

function updateLoadingProgress(percent) {
	const clampedPercent = Math.max(0, Math.min(100, Math.round(percent)));
	loadingProgressPercent.textContent = `${clampedPercent}%`;
	loadingProgressTrack.setAttribute("aria-valuenow", String(clampedPercent));
	loadingProgressFill.style.width = `${clampedPercent}%`;
}

function tickLoadingProgress() {
	const simulatedDuration = slowLoadingEnabled ? 8000 : 2800;
	const elapsed = Date.now() - loadingStartedAt;
	updateLoadingProgress(Math.min(94, (elapsed / simulatedDuration) * 94));
}

function beginLoadingProgress() {
	if (loadingProgressTimer !== null) clearInterval(loadingProgressTimer);
	if (loadingCompletionTimer !== null) clearTimeout(loadingCompletionTimer);
	loadingProgressTimer = null;
	loadingCompletionTimer = null;
	loadingStartedAt = Date.now();
	loadingProgressPanel.hidden = true;
	updateLoadingProgress(0);
	if (showLoadingPercentage) {
		loadingProgressTimer = window.setInterval(tickLoadingProgress, 100);
	}
}

const courseCodes = {
	CompArch: "COMP-2453",
	CloudComp: "COMP-4312",
	SocIndi: "SOCI-2755",
	DataSci: "COMP-4112",
	SoftEngi: "COMP-3415",
	CompGFX: "COMP-4471",
};

const courseQuizCatalog = window.QuizHubDevScenes.quizCatalog;

function renderQuizOptions(course) {
	const container = document.querySelector(".quiz-options");
	const mixedOptions = document.getElementById("mixedStudyOptions");
	if (!container || !mixedOptions) return;

	const isMixedStudy = course === "MixedStudy";
	container.hidden = isMixedStudy;
	mixedOptions.hidden = !isMixedStudy;
	if (isMixedStudy) {
		window.QuizHubMixedStudy.renderSourceChoices(
			document.getElementById("mixedStudySources"),
		);
		document.getElementById("mixedStudyError").textContent = "";
	}
	const options = (
		courseQuizCatalog[course] || courseQuizCatalog.CompArch
	).filter(
		(quiz) => !partyModeActive || (!quiz.external && quiz.partyMode !== false),
	);
	container.innerHTML = "";
	document.getElementById("quizMenuTitle").textContent = partyModeActive
		? "Choose a party quiz"
		: isMixedStudy
			? "Mixed Study"
			: "Choose an Option";
	document.querySelector("#quizModal .quiz-menu > p").textContent = isMixedStudy
		? "Build a session from the course question banks you want to review."
		: partyModeActive
			? "Take turns choosing answers. The best-scoring player wins."
			: "Select which quiz you would like to take.";

	options.forEach((quiz) => {
		const button = document.createElement("button");
		button.type = "button";
		button.className = "quiz-option";
		button.dataset.quiz = quiz.id;
		button.innerHTML = `<span>${quiz.label}</span><small>${quiz.detail}</small>`;
		button.addEventListener("click", () => {
			if (!selectedCourse) return;
			playSound("select");
			if (quiz.external) {
				startExternalQuiz(quiz.external);
				return;
			}
			startQuiz(selectedCourse, button.dataset.quiz);
		});
		container.appendChild(button);
	});
}

function preloadQuiz(category, quiz, mixedSources = null) {
	preloadFrame = document.createElement("iframe");
	preloadFrame.className = "preload-frame";
	const target = new URL("quiz.html", window.location.href);
	target.searchParams.set("category", category);
	target.searchParams.set("quiz", quiz);
	if (mixedSources)
		target.searchParams.set("mixedSources", JSON.stringify(mixedSources));
	if (partyModeActive) target.searchParams.set("partyMode", "true");
	navigationTarget = target.toString();
	navigationStarted = false;
	preloadFrame.src = navigationTarget;
	preloadFrame.onload = () => {
		quizLoaded = true;
		if (welcomeVisible) showLoadingComplete();
	};
	document.body.appendChild(preloadFrame);
}

function startMenuExit() {
	document.body.classList.remove("leaving", "motion-fade-leaving");
	if (window.quizHubPreferences.motionMode !== "default") {
		document.body.classList.add("motion-fade-leaving");
	} else {
		document.body.classList.add("leaving");
	}
}

function startExternalQuiz(target) {
	if (leaving) return;
	document.body.classList.remove("compgfx-loading");
	stopQuizMusicPreview(false);
	menuMusic.pause();
	menuMusic.currentTime = 0;
	closeQuizMenu();
	leaving = true;
	navigationStarted = false;
	loadingSoundPlayed = false;
	loadingCompleteScheduled = false;
	document.querySelectorAll(".card").forEach((c) => (c.disabled = true));
	quizLoaded = false;
	beginLoadingProgress();
	preloadFrame = document.createElement("iframe");
	preloadFrame.className = "preload-frame";
	navigationTarget = target;
	preloadFrame.src = navigationTarget;
	preloadFrame.onload = () => {
		quizLoaded = true;
		if (welcomeVisible) {
			if (
				window.quizHubPreferences.disableLoadingAnimation &&
				!window.quizHubPreferences.secretMode &&
				!slowLoadingEnabled &&
				!showLoadingPercentage
			)
				navigateToQuiz();
			else showLoadingComplete();
		}
	};
	document.body.appendChild(preloadFrame);
	setTimeout(startMenuExit, 520);
	setTimeout(() => {
		welcomeVisible = true;
		if (
			window.quizHubPreferences.disableLoadingAnimation &&
			!window.quizHubPreferences.secretMode &&
			!slowLoadingEnabled &&
			!showLoadingPercentage
		) {
			if (quizLoaded) navigateToQuiz();
		} else {
			showLoadingScreen();
			if (quizLoaded) showLoadingComplete();
		}
	}, 1180);
	setTimeout(() => {
		if (!quizLoaded) {
			const status = document.getElementById("loadingStatus");
			status.textContent = "Loading...";
		}
	}, 4500);
}

function showLoadingComplete() {
	if (loadingCompletionTimer !== null || loadingCompleteScheduled) return;
	const minimumDisplayDuration = slowLoadingEnabled
		? 8000
		: showLoadingPercentage
			? 1600
			: 0;
	const remainingDuration =
		minimumDisplayDuration - (Date.now() - loadingStartedAt);
	if (remainingDuration > 0) {
		loadingCompletionTimer = window.setTimeout(() => {
			loadingCompletionTimer = null;
			showLoadingComplete();
		}, remainingDuration);
		return;
	}
	loadingCompleteScheduled = true;
	if (showLoadingPercentage) {
		updateLoadingProgress(100);
		if (loadingProgressTimer !== null) {
			clearInterval(loadingProgressTimer);
			loadingProgressTimer = null;
		}
	}
	if (
		window.quizHubPreferences.disableLoadingAnimation &&
		!window.quizHubPreferences.secretMode
	) {
		navigateToQuiz();
		return;
	}
	if (window.quizHubPreferences.secretMode) {
		setTimeout(navigateToQuiz, 1650);
		return;
	}
	const status = document.getElementById("loadingStatus");
	status.textContent = "Loading Complete";
	status.classList.remove("complete");
	void status.offsetWidth;
	status.classList.add("complete");
	setTimeout(() => document.body.classList.add("welcome-out"), 900);
	setTimeout(navigateToQuiz, 1650);
}

function showLoadingScreen() {
	loadingProgressPanel.hidden = !showLoadingPercentage;
	if (window.quizHubPreferences.secretMode) {
		document.body.classList.add("secret-loading");
		if (!loadingSoundPlayed) {
			playSound("loading");
			loadingSoundPlayed = true;
		}
	}
	document.body.classList.add("show-welcome");
}

function navigateToQuiz() {
	if (navigationStarted) return;
	navigationStarted = true;
	if (loadingProgressTimer !== null) {
		clearInterval(loadingProgressTimer);
		loadingProgressTimer = null;
	}
	if (loadingCompletionTimer !== null) {
		clearTimeout(loadingCompletionTimer);
		loadingCompletionTimer = null;
	}
	window.location.href = navigationTarget;
}

function closeQuizMenu() {
	const modal = document.getElementById("quizModal");
	const returnFocus = quizMenuTrigger;
	document.activeElement?.blur();
	modal.classList.remove("open");
	modal.setAttribute("aria-hidden", "true");
	document.getElementById("mixedStudyOptions").hidden = true;
	document.querySelector(".quiz-options").hidden = false;
	selectedCourse = "";
	quizMenuTrigger = null;
	if (returnFocus?.isConnected) returnFocus.focus();
}

function openQuizMenu(course) {
	quizMenuTrigger =
		document.activeElement?.closest(".course-card") ||
		(document.activeElement?.id === "mixedStudyLaunch"
			? document.activeElement
			: null);
	selectedCourse = course;
	playSound("popup");
	const modal = document.getElementById("quizModal");
	document.getElementById("quizMenuCourse").textContent =
		course === "MixedStudy"
			? "MIXED QUESTION BANKS"
			: courseCodes[course] || course;
	renderQuizOptions(course);
	modal.classList.add("open");
	modal.setAttribute("aria-hidden", "false");
	attachSwipeToModal(modal, closeQuizMenu);
	if (course === "MixedStudy") {
		modal
			.querySelector("#mixedStudyOptions:not([hidden]) input")
			?.focus({ preventScroll: true });
	} else {
		requestAnimationFrame(() => modal.querySelector(".quiz-option")?.focus());
	}
}

function startQuiz(course, quiz, mixedSources = null) {
	if (leaving) return;
	document.body.classList.toggle("compgfx-loading", course === "CompGFX");
	if (partyModeActive) {
		try {
			sessionStorage.setItem(
				"quizHubPartyPlayers",
				JSON.stringify(partyPlayers),
			);
		} catch (error) {
			document.getElementById("partyModeError").textContent =
				`Could not save player profiles: ${error.message}`;
			return;
		}
	}
	stopQuizMusicPreview(false);
	menuMusic.pause();
	menuMusic.currentTime = 0;
	closeQuizMenu();
	leaving = true;
	navigationStarted = false;
	loadingSoundPlayed = false;
	loadingCompleteScheduled = false;
	document.querySelectorAll(".card").forEach((c) => (c.disabled = true));
	quizLoaded = false;
	beginLoadingProgress();
	preloadQuiz(course, quiz, mixedSources);
	setTimeout(startMenuExit, 520);
	setTimeout(() => {
		welcomeVisible = true;
		if (
			window.quizHubPreferences.disableLoadingAnimation &&
			!window.quizHubPreferences.secretMode &&
			!slowLoadingEnabled &&
			!showLoadingPercentage
		) {
			if (quizLoaded) navigateToQuiz();
		} else {
			showLoadingScreen();
			if (quizLoaded) showLoadingComplete();
		}
	}, 1180);
	setTimeout(() => {
		if (!quizLoaded) {
			const status = document.getElementById("loadingStatus");
			status.textContent = "Loading...";
		}
	}, 4500);
}

document.querySelectorAll(".course-card").forEach((card) => {
	card.addEventListener("click", () => {
		// Coming Soon courses intentionally do nothing.
		if (card.dataset.comingSoon === "true") {
			playSound("incorrect");
			return;
		}
		openQuizMenu(card.dataset.course);
	});

	document.getElementById("mixedStudyLaunch").addEventListener("click", () => {
		openQuizMenu("MixedStudy");
	});
	document.getElementById("mixedStudyStart").addEventListener("click", () => {
		try {
			const selectedSources = window.QuizHubMixedStudy.readSourceChoices(
				document.getElementById("mixedStudySources"),
			);
			startQuiz("MixedStudy", "mixed", selectedSources);
		} catch (error) {
			document.getElementById("mixedStudyError").textContent = error.message;
		}
	});
});

const partyModeModal = document.getElementById("partyModeModal");
const partyNoConnectionModal = document.getElementById(
	"partyNoConnectionModal",
);
const partyPlayerSetup = document.getElementById("partyPlayerSetup");
const partyModeError = document.getElementById("partyModeError");
const partyModeToggle = document.getElementById("partyModeToggle");
const partyModeChoice = document.getElementById("partyModeChoice");
const partyHostSetup = document.getElementById("partyHostSetup");
const partyHostChoice = document.getElementById("partyHostChoice");
const partySetupStorageKey = "quizHubPartySetup";
const defaultPartyColors = [
	"#e8505b",
	"#3686e8",
	"#22a06b",
	"#9254de",
	"#e39426",
];
let partyProfileDrafts = defaultPartyColors.map((color, index) => ({
	name: `Player ${index + 1}`,
	color,
	photo: "",
}));
let partyModeTrigger = null;

function persistPartySetup() {
	try {
		sessionStorage.setItem(
			partySetupStorageKey,
			JSON.stringify({
				players: partyProfileDrafts,
			}),
		);
		return true;
	} catch (error) {
		partyModeError.textContent = `Could not remember player setup for this session: ${error.message}`;
		return false;
	}
}

function restorePartySetup() {
	try {
		const saved = JSON.parse(
			sessionStorage.getItem(partySetupStorageKey) || "null",
		);
		if (!saved || !Array.isArray(saved.players)) return;
		partyProfileDrafts = defaultPartyColors.map((color, index) => {
			const player = saved.players[index];
			return {
				name:
					typeof player?.name === "string"
						? player.name.slice(0, 24)
						: `Player ${index + 1}`,
				color:
					typeof player?.color === "string" &&
					/^#[0-9a-f]{6}$/i.test(player.color)
						? player.color
						: color,
				photo:
					typeof player?.photo === "string" &&
					player.photo.startsWith("data:image/")
						? player.photo
						: "",
			};
		});
	} catch (error) {
		console.error("Could not restore party setup:", error);
		partyModeError.textContent = `Could not restore the saved player setup: ${error.message}`;
	}
}

restorePartySetup();

function createPartyProfile(index, profile = {}) {
	const card = document.createElement("fieldset");
	card.className = "party-player-card";
	card.dataset.playerIndex = String(index);
	const legend = document.createElement("legend");
	legend.textContent = `Player ${index + 1}`;
	const row = document.createElement("div");
	row.className = "party-player-fields";

	const avatar = document.createElement("div");
	avatar.className = "party-player-avatar";
	avatar.style.setProperty("--party-player-color", profile.color || "#e8505b");
	if (profile.photo) {
		const image = document.createElement("img");
		image.src = profile.photo;
		image.alt = "";
		avatar.appendChild(image);
	} else {
		avatar.textContent = (profile.name || `Player ${index + 1}`)
			.trim()
			.charAt(0)
			.toUpperCase();
	}

	const nameLabel = document.createElement("label");
	nameLabel.className = "party-player-name";
	nameLabel.textContent = "Name";
	const nameInput = document.createElement("input");
	nameInput.type = "text";
	nameInput.maxLength = 24;
	nameInput.required = true;
	nameInput.value = profile.name || `Player ${index + 1}`;
	nameInput.setAttribute("aria-label", `Player ${index + 1} name`);
	nameLabel.appendChild(nameInput);

	const colorLabel = document.createElement("label");
	colorLabel.className = "party-player-color";
	colorLabel.textContent = "Color";
	const colorInput = document.createElement("input");
	colorInput.type = "color";
	colorInput.value =
		profile.color ||
		["#e8505b", "#3686e8", "#22a06b", "#9254de", "#e39426"][index];
	colorInput.setAttribute("aria-label", `Player ${index + 1} color`);
	colorLabel.appendChild(colorInput);

	const photoLabel = document.createElement("label");
	photoLabel.className = "party-player-photo";
	photoLabel.textContent = "Upload picture";
	const photoInput = document.createElement("input");
	photoInput.type = "file";
	photoInput.accept = "image/*";
	photoInput.setAttribute(
		"aria-label",
		`Upload a picture for player ${index + 1}`,
	);
	photoLabel.appendChild(photoInput);
	row.append(nameLabel, colorLabel, photoLabel);
	card.append(legend, avatar, row);

	nameInput.addEventListener("input", () => {
		const image = avatar.querySelector("img");
		if (image) avatar.replaceChildren(image);
		else avatar.textContent = nameInput.value.trim().charAt(0).toUpperCase();
	});
	colorInput.addEventListener("input", () =>
		avatar.style.setProperty("--party-player-color", colorInput.value),
	);
	photoInput.addEventListener("change", () => {
		const file = photoInput.files && photoInput.files[0];
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			partyModeError.textContent =
				"Choose an image file for the player picture.";
			photoInput.value = "";
			return;
		}
		if (file.size > 10 * 1024 * 1024) {
			partyModeError.textContent = "Choose an image smaller than 10 MB.";
			photoInput.value = "";
			return;
		}
		card.dataset.photoPending = "true";
		partyModeError.textContent = "";
		const reader = new FileReader();
		reader.onload = () => {
			const imageData = String(reader.result);
			if (file.type === "image/gif") {
				if (imageData.length > 450_000) {
					partyModeError.textContent =
						"Choose a GIF smaller than about 330 KB to preserve its animation.";
				} else {
					avatar.replaceChildren(
						Object.assign(document.createElement("img"), {
							src: imageData,
							alt: "",
						}),
					);
					card.dataset.photo = imageData;
					capturePartyDrafts();
					partyModeError.textContent = "";
				}
				delete card.dataset.photoPending;
				return;
			}
			const image = new Image();
			image.onload = () => {
				const canvas = document.createElement("canvas");
				const scale = Math.min(
					1,
					256 / Math.max(image.naturalWidth, image.naturalHeight),
				);
				canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
				canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
				const context = canvas.getContext("2d");
				if (!context) {
					partyModeError.textContent = "Could not process that player picture.";
				} else {
					context.drawImage(image, 0, 0, canvas.width, canvas.height);
					const photo = canvas.toDataURL("image/jpeg", 0.82);
					avatar.replaceChildren(
						Object.assign(document.createElement("img"), {
							src: photo,
							alt: "",
						}),
					);
					card.dataset.photo = photo;
					capturePartyDrafts();
				}
				delete card.dataset.photoPending;
			};
			image.onerror = () => {
				delete card.dataset.photoPending;
				partyModeError.textContent = "Could not load that player picture.";
			};
			image.src = imageData;
		};
		reader.onerror = () => {
			delete card.dataset.photoPending;
			partyModeError.textContent = "Could not read that player picture.";
		};
		reader.readAsDataURL(file);
	});
	return card;
}

function renderPartyProfiles() {
	partyPlayerSetup.replaceChildren(
		createPartyProfile(0, partyProfileDrafts[0]),
	);
	persistPartySetup();
}

function capturePartyDrafts() {
	[...partyPlayerSetup.querySelectorAll(".party-player-card")].forEach(
		(card) => {
			const index = Number.parseInt(card.dataset.playerIndex, 10);
			if (!Number.isInteger(index) || index < 0 || index >= 5) return;
			partyProfileDrafts[index] = {
				name: card.querySelector(".party-player-name input").value,
				color: card.querySelector(".party-player-color input").value,
				photo: card.dataset.photo || partyProfileDrafts[index]?.photo || "",
			};
		},
	);
	persistPartySetup();
}

partyModeToggle.addEventListener("click", () => {
	if (!navigator.onLine) {
		partyNoConnectionModal.classList.add("open");
		partyNoConnectionModal.setAttribute("aria-hidden", "false");
		partyNoConnectionModal
			.querySelector("[data-close-party-connection].party-mode-close")
			.focus();
		return;
	}
	partyModeTrigger = document.activeElement;
	partyModeError.textContent = "";
	partyModeChoice.hidden = false;
	partyHostSetup.hidden = true;
	partyModeModal.classList.add("open");
	partyModeModal.setAttribute("aria-hidden", "false");
	requestAnimationFrame(() => partyHostChoice.focus());
});
document.querySelectorAll("[data-close-party-connection]").forEach((element) =>
	element.addEventListener("click", () => {
		partyNoConnectionModal.classList.remove("open");
		partyNoConnectionModal.setAttribute("aria-hidden", "true");
		if (partyModeToggle?.isConnected) partyModeToggle.focus();
	}),
);
partyHostChoice.addEventListener("click", () => {
	partyModeChoice.hidden = true;
	partyHostSetup.hidden = false;
	renderPartyProfiles();
});
document.getElementById("partyJoinChoice").addEventListener("click", () => {
	location.href = "party-join.html";
});
partyPlayerSetup.addEventListener("input", capturePartyDrafts);
partyPlayerSetup.addEventListener("change", capturePartyDrafts);
document.querySelectorAll("[data-close-party-mode]").forEach((element) =>
	element.addEventListener("click", () => {
		partyModeModal.classList.remove("open");
		partyModeModal.setAttribute("aria-hidden", "true");
		partyModeActive = false;
		partyPlayers = [];
		if (partyModeTrigger?.isConnected) partyModeTrigger.focus();
	}),
);
document.getElementById("partyModeStart").addEventListener("click", () => {
	if (partyPlayerSetup.querySelector('[data-photo-pending="true"]')) {
		partyModeError.textContent =
			"Wait for player pictures to finish processing.";
		return;
	}
	capturePartyDrafts();
	const hostCard = partyPlayerSetup.querySelector(".party-player-card");
	const hostProfile = {
		name: hostCard.querySelector(".party-player-name input").value.trim(),
		color: hostCard.querySelector(".party-player-color input").value,
		photo: hostCard.dataset.photo || "",
	};
	if (!hostProfile.name) {
		partyModeError.textContent = "Enter your player name.";
		return;
	}
	partyProfileDrafts[0] = hostProfile;
	if (!persistPartySetup()) return;
	const button = document.getElementById("partyModeStart");
	button.disabled = true;
	partyModeError.textContent = "Creating room…";
	const client = new window.QuizHubPartyClient();
	let completed = false;
	const onHosted = (message) => {
		if (completed) return;
		completed = true;
		sessionStorage.setItem("quizHubPartyProfile", JSON.stringify(hostProfile));
		sessionStorage.setItem(
			"quizHubPartyReconnect",
			JSON.stringify({
				code: message.room.code,
				playerId: message.playerId,
			}),
		);
		location.href = `party-lobby.html?code=${encodeURIComponent(message.room.code)}&playerId=${encodeURIComponent(message.playerId)}&host=1`;
	};
	const onError = (message) => {
		if (completed) return;
		completed = true;
		partyModeError.textContent = /between 2 and 5 total players/i.test(
			message.message,
		)
			? "The party server is out of date and still limits rooms to five players. Redeploy the latest server.js from this repository, then try again."
			: message.message;
		button.disabled = false;
		client.close();
	};
	client.on("hosted", onHosted);
	client.on("error", onError);
	client.on("close", () => {
		if (!completed) {
			completed = true;
			partyModeError.textContent = "Connection to the party server was lost.";
			button.disabled = false;
		}
	});
	client
		.send({
			type: "host",
			capacity: 50,
			player: hostProfile,
		})
		.catch((error) => {
			if (completed) return;
			completed = true;
			partyModeError.textContent = /between 2 and 5 total players/i.test(
				error.message,
			)
				? "The party server is out of date and still limits rooms to five players. Redeploy the latest server.js from this repository, then try again."
				: error.message;
			button.disabled = false;
			client.close();
		});
});

const menuTrack = document.getElementById("menuTrack");
const menuPages = [...document.querySelectorAll(".menu-track .menu")];
const menuCards = menuPages.flatMap((page) => [
	...page.querySelectorAll(".course-card"),
]);
const coverMenuMedia = window.matchMedia(
	"(orientation: portrait) and (max-width: 900px) and (min-height: 640px)",
);
const coverMenuPageSize = 2;
let menuPage = 0;

function isForcedMobileDisplay() {
	return (
		document.documentElement.classList.contains("dev-display-mobile") ||
		document.documentElement.classList.contains("dev-display-cover")
	);
}

function isCoverMenuDisplay() {
	return coverMenuMedia.matches || isForcedMobileDisplay();
}

function isDeveloperMobileMenu() {
	return document.documentElement.classList.contains("dev-display-mobile");
}

function getCurrentMenuCards(page = menuPage) {
	if (isCoverMenuDisplay()) {
		const start = page * coverMenuPageSize;
		return menuCards.slice(start, start + coverMenuPageSize);
	}
	return [...menuPages[page].querySelectorAll(".course-card")];
}

function resetDeveloperMobileMenu() {
	menuTrack.style.display = "";
	menuTrack.style.gridTemplateColumns = "";
	menuTrack.style.gridTemplateRows = "";
	menuPages.forEach((menu) => {
		menu.style.display = "";
	});
	menuCards.forEach((card) => {
		card.style.display = "";
	});
	const menuArea = document.querySelector(".menu-area");
	const viewport = document.querySelector(".menu-viewport");
	menuArea.style.flexDirection = "";
	menuArea.style.alignItems = "";
	menuArea.style.justifyContent = "";
	menuArea.style.gap = "";
	viewport.style.flex = "";
	viewport.style.width = "";
	viewport.style.height = "";
	viewport.style.maxHeight = "";
	const content = document.querySelector(".content");
	if (content) content.style.marginInline = "";
	document.querySelectorAll(".menu-arrow").forEach((arrow) => {
		arrow.style.display = "";
		arrow.style.flex = "";
		arrow.style.width = "";
	});
}

function showMenuPage(page) {
	if (isCoverMenuDisplay()) {
		const pageCount = Math.ceil(menuCards.length / coverMenuPageSize);
		menuPage = (page + pageCount) % pageCount;
		if (isDeveloperMobileMenu()) {
			menuTrack.style.display = "grid";
			menuTrack.style.width = "100%";
			menuTrack.style.gridTemplateColumns = "minmax(0, 1fr)";
			menuTrack.style.gridTemplateRows = "repeat(2, minmax(0, 1fr))";
			menuTrack.style.transform = "none";
			menuTrack.style.transition = "none";
			menuPages.forEach((menu) => {
				menu.style.display = "contents";
			});
			menuCards.forEach((card, index) => {
				card.style.display =
					index >= menuPage * coverMenuPageSize &&
					index < (menuPage + 1) * coverMenuPageSize
						? "flex"
						: "none";
			});
			const menuArea = document.querySelector(".menu-area");
			const viewport = document.querySelector(".menu-viewport");
			menuArea.style.flexDirection = "row";
			menuArea.style.alignItems = "center";
			menuArea.style.justifyContent = "center";
			menuArea.style.gap = "7px";
			const content = document.querySelector(".content");
			if (content) content.style.marginInline = "auto";
			viewport.style.flex = "1 1 0";
			viewport.style.width = "calc(100% - 68px)";
			viewport.style.height = "100%";
			viewport.style.maxHeight = "none";
			document.querySelectorAll(".menu-arrow").forEach((arrow) => {
				arrow.style.display = "block";
				arrow.style.flex = "0 0 30px";
				arrow.style.width = "30px";
			});
			return;
		}
		resetDeveloperMobileMenu();
		menuTrack.style.width = `${pageCount * 100}%`;
		menuTrack.style.transform = `translateX(-${(menuPage * 100) / pageCount}%)`;
		menuTrack.style.transition =
			"transform 0.62s cubic-bezier(0.22, 1, 0.36, 1)";
		return;
	}

	resetDeveloperMobileMenu();
	menuTrack.style.width = "";
	const pageCount = menuPages.length;
	menuPage = (page + pageCount) % pageCount;
	menuCards.forEach((card) => {
		card.style.display = "";
	});
	menuTrack.style.transform = `translateX(-${menuPage * 50}%)`;
	menuTrack.style.transition = "transform 0.55s cubic-bezier(.22,.8,.25,1)";
}

function attachCoverMenuSwipe() {
	const viewport = document.querySelector(".menu-viewport");
	if (!viewport || viewport.dataset.swipeBound === "true") return;
	viewport.dataset.swipeBound = "true";
	let startX = 0;
	let startY = 0;
	let isTouching = false;
	let horizontalDrag = false;
	let startTranslateX = 0;
	let suppressClickUntil = 0;
	let mouseSwipeStart = null;

	viewport.addEventListener(
		"touchstart",
		(event) => {
			if (!canUseMobileMenuGestures()) return;
			const touch = event.changedTouches[0];
			startX = touch.clientX;
			startY = touch.clientY;
			isTouching = true;
			horizontalDrag = false;
			startTranslateX =
				menuTrack.getBoundingClientRect().left -
				viewport.getBoundingClientRect().left;
		},
		{ passive: true },
	);

	viewport.addEventListener(
		"touchmove",
		(event) => {
			if (!isTouching || !isCoverMenuDisplay() || !canUseMobileMenuGestures())
				return;
			const touch = event.changedTouches[0];
			const deltaX = touch.clientX - startX;
			const deltaY = touch.clientY - startY;
			if (Math.abs(deltaX) > 12 && Math.abs(deltaX) > Math.abs(deltaY)) {
				horizontalDrag = true;
				event.preventDefault();
				menuTrack.style.transition = "none";
				menuTrack.style.transform = `translateX(${startTranslateX + deltaX}px)`;
			}
		},
		{ passive: false },
	);

	viewport.addEventListener(
		"touchend",
		(event) => {
			if (!isTouching) return;
			isTouching = false;
			if (!canUseMobileMenuGestures()) {
				showMenuPage(menuPage);
				return;
			}
			const touch = event.changedTouches[0];
			const deltaX = touch.clientX - startX;
			const deltaY = touch.clientY - startY;
			if (isCoverMenuDisplay() && horizontalDrag) {
				event.preventDefault();
				suppressClickUntil = Date.now() + 500;
				showMenuPage(
					Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)
						? menuPage + (deltaX < 0 ? 1 : -1)
						: menuPage,
				);
				if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
					playSound("arrow");
				}
				return;
			}
			if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
				event.preventDefault();
				suppressClickUntil = Date.now() + 500;
				showMenuPage(deltaX < 0 ? menuPage + 1 : menuPage - 1);
				playSound("arrow");
			}
		},
		{ passive: false },
	);

	viewport.addEventListener("pointerdown", (event) => {
		if (
			event.pointerType !== "mouse" ||
			!isDeveloperMobileMenu() ||
			!canUseMobileMenuGestures()
		)
			return;
		mouseSwipeStart = {
			x: event.clientX,
			y: event.clientY,
			translateX:
				menuTrack.getBoundingClientRect().left -
				viewport.getBoundingClientRect().left,
			moved: false,
		};
		viewport.setPointerCapture(event.pointerId);
	});
	viewport.addEventListener("pointermove", (event) => {
		if (!mouseSwipeStart || !canUseMobileMenuGestures()) return;
		const deltaX = event.clientX - mouseSwipeStart.x;
		const deltaY = event.clientY - mouseSwipeStart.y;
		if (Math.abs(deltaX) <= 12 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
		mouseSwipeStart.moved = true;
		menuTrack.style.transition = "none";
		menuTrack.style.transform = `translateX(${mouseSwipeStart.translateX + deltaX}px)`;
	});
	viewport.addEventListener("pointerup", (event) => {
		if (!mouseSwipeStart) return;
		const start = mouseSwipeStart;
		mouseSwipeStart = null;
		if (!start.moved) return;
		if (!canUseMobileMenuGestures()) {
			showMenuPage(menuPage);
			return;
		}
		const deltaX = event.clientX - start.x;
		const deltaY = event.clientY - start.y;
		suppressClickUntil = Date.now() + 500;
		if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY)) {
			showMenuPage(menuPage + (deltaX < 0 ? 1 : -1));
			playSound("arrow");
		} else {
			showMenuPage(menuPage);
		}
	});
	viewport.addEventListener("pointercancel", () => {
		if (!mouseSwipeStart) return;
		mouseSwipeStart = null;
		showMenuPage(menuPage);
	});

	viewport.addEventListener(
		"click",
		(event) => {
			if (Date.now() >= suppressClickUntil) return;
			event.preventDefault();
			event.stopImmediatePropagation();
		},
		true,
	);
}

function canUseMobileMenuGestures() {
	return (
		!isDeveloperMobileMenu() ||
		window.matchMedia("(pointer: coarse)").matches ||
		document.documentElement.classList.contains("dev-mobile-gestures")
	);
}

showMenuPage(menuPage);
coverMenuMedia.addEventListener("change", () => showMenuPage(menuPage));
window.addEventListener("quizhub:display-modechange", () => {
	showMenuPage(menuPage);
	updateBranding();
});
attachCoverMenuSwipe();

document.querySelectorAll(".menu-arrow").forEach((arrow) => {
	arrow.addEventListener("click", () => {
		playSound("arrow");
		showMenuPage(
			arrow.classList.contains("menu-arrow-left") ? menuPage - 1 : menuPage + 1,
		);
	});
});

let keyboardNavigation = false;
document.addEventListener("pointerdown", () => {
	keyboardNavigation = false;
});
document.addEventListener("focusin", (event) => {
	const button = event.target.closest(
		".course-card, .menu-arrow, .quiz-option",
	);
	if (button && keyboardNavigation) {
		if (button.classList.contains("course-card")) {
			document
				.querySelectorAll(".course-card.keyboard-selected")
				.forEach((card) => {
					card.classList.remove("keyboard-selected");
				});
			button.classList.add("keyboard-selected");
		}
		playSound("highlight");
		keyboardNavigation = false;
	}
});
document.addEventListener("pointerover", (event) => {
	const card = event.target.closest(".course-card");
	if (!card || card.contains(event.relatedTarget)) return;
	document
		.querySelectorAll(".course-card.keyboard-selected")
		.forEach((selected) => {
			selected.classList.remove("keyboard-selected");
		});
	keyboardNavigation = false;
});

document.querySelectorAll("[data-close-quiz-menu]").forEach((el) => {
	el.addEventListener("click", closeQuizMenu);
});

const patchnotesModal = document.getElementById("patchnotesModal");
const patchnotesContent = document.getElementById("patchnotesContent");
let patchnotesTrigger = null;
const downloadAppModal = document.getElementById("downloadAppModal");
const downloadIntroStep = document.getElementById("downloadIntroStep");
const downloadPlatformStep = document.getElementById("downloadPlatformStep");
const downloadAppButton = document.getElementById("downloadAppButton");
const appDownloadUrls = {
	windows:
		"https://github.com/A-Pinnell/QuizHub/releases/latest/download/QuizHub-Setup.exe",
	linux:
		"https://github.com/A-Pinnell/QuizHub/releases/latest/download/QuizHub-Linux-x64.AppImage",
	android: "https://github.com/A-Pinnell/QuizHub/releases/latest/",
};
let downloadAppTrigger = null;
function closePatchnotes() {
	const returnFocus = patchnotesTrigger;
	document.activeElement?.blur();
	patchnotesModal.classList.remove("open");
	patchnotesModal.setAttribute("aria-hidden", "true");
	patchnotesTrigger = null;
	if (returnFocus?.isConnected) returnFocus.focus();
}
function openPatchnotes() {
	patchnotesTrigger = document.getElementById("patchnotesButton");
	patchnotesModal.classList.add("open");
	patchnotesModal.setAttribute("aria-hidden", "false");
	requestAnimationFrame(() =>
		document.querySelector(".patchnotes-close").focus(),
	);
	attachSwipeToModal(patchnotesModal, closePatchnotes);
}
document.getElementById("patchnotesButton").addEventListener("click", () => {
	playSound("popup");
	openPatchnotes();
});
document.querySelectorAll("[data-close-patchnotes]").forEach((el) => {
	el.addEventListener("click", closePatchnotes);
});

function attachSwipeToModal(modal, onClose) {
	const panel = modal.querySelector('[role="dialog"]');
	if (!panel || panel.dataset.swipeBound === "true") return;
	panel.dataset.swipeBound = "true";
	let startY = 0;
	let startX = 0;
	let startTop = 0;
	let touching = false;
	let touchingScrollable = false;

	panel.addEventListener(
		"touchstart",
		(event) => {
			if (!canUseMobileMenuGestures()) return;
			const touch = event.changedTouches[0];
			startY = touch.clientY;
			startX = touch.clientX;
			startTop = panel.scrollTop;
			touchingScrollable = false;
			let target = event.target instanceof Element ? event.target : null;
			while (target && target !== panel) {
				const style = window.getComputedStyle(target);
				if (
					/(auto|scroll)/.test(style.overflowY) &&
					target.scrollHeight > target.clientHeight
				) {
					touchingScrollable = true;
					break;
				}
				target = target.parentElement;
			}
			touching = true;
		},
		{ passive: true },
	);

	panel.addEventListener(
		"touchmove",
		(event) => {
			if (
				!touching ||
				!canUseMobileMenuGestures() ||
				touchingScrollable ||
				panel.scrollTop > 0
			)
				return;
			const touch = event.changedTouches[0];
			const deltaY = touch.clientY - startY;
			const deltaX = touch.clientX - startX;
			if (deltaY < 0 && Math.abs(deltaY) > Math.abs(deltaX) * 1.3) {
				event.preventDefault();
				panel.style.transform = `translateY(${Math.max(deltaY, -180)}px)`;
			}
		},
		{ passive: false },
	);

	panel.addEventListener(
		"touchend",
		(event) => {
			if (!touching) return;
			touching = false;
			panel.style.transform = "";
			if (!canUseMobileMenuGestures()) {
				touchingScrollable = false;
				return;
			}
			if (touchingScrollable) {
				touchingScrollable = false;
				return;
			}
			const touch = event.changedTouches[0];
			const deltaY = touch.clientY - startY;
			const deltaX = touch.clientX - startX;
			if (
				deltaY < -120 &&
				Math.abs(deltaY) > Math.abs(deltaX) * 1.3 &&
				startTop <= 2
			) {
				onClose();
			}
		},
		{ passive: true },
	);
}

function closeDownloadAppModal() {
	const returnFocus = downloadAppTrigger;
	document.activeElement?.blur();
	downloadAppModal.classList.remove("open");
	downloadAppModal.setAttribute("aria-hidden", "true");
	downloadAppButton.setAttribute("aria-expanded", "false");
	downloadIntroStep.hidden = false;
	downloadPlatformStep.hidden = true;
	downloadAppTrigger = null;
	if (returnFocus?.isConnected) returnFocus.focus();
}

function openDownloadAppModal() {
	downloadAppTrigger = downloadAppButton;
	downloadIntroStep.hidden = false;
	downloadPlatformStep.hidden = true;
	downloadAppModal.classList.add("open");
	downloadAppModal.setAttribute("aria-hidden", "false");
	downloadAppButton.setAttribute("aria-expanded", "true");
	requestAnimationFrame(() =>
		document.getElementById("downloadAppContinue").focus(),
	);
}

downloadAppButton.addEventListener("click", () => {
	playSound("popup");
	openDownloadAppModal();
});

document.getElementById("downloadAppContinue").addEventListener("click", () => {
	playSound("popup");
	downloadIntroStep.hidden = true;
	downloadPlatformStep.hidden = false;
	requestAnimationFrame(() =>
		downloadPlatformStep.querySelector("[data-download-platform]").focus(),
	);
});

document.getElementById("downloadAppBack").addEventListener("click", () => {
	playSound("popup");
	downloadPlatformStep.hidden = true;
	downloadIntroStep.hidden = false;
	requestAnimationFrame(() =>
		document.getElementById("downloadAppContinue").focus(),
	);
});

document.querySelectorAll("[data-close-download-app]").forEach((element) => {
	element.addEventListener("click", closeDownloadAppModal);
});

document.querySelectorAll("[data-download-platform]").forEach((button) => {
	button.addEventListener("click", () => {
		const downloadUrl = appDownloadUrls[button.dataset.downloadPlatform];
		if (!downloadUrl) return;
		playSound("popup");
		window.location.assign(downloadUrl);
	});
});

const settingsModal = document.getElementById("settingsModal");
const optionsToggle = document.getElementById("optionsToggle");
const motionModeSlider = document.getElementById("motionModeSlider");
const quizMusicSetting = document.getElementById("quizMusicSetting");
const quizMusicTrackName = document.getElementById("quizMusicTrackName");
const textSizeSetting = document.getElementById("textSizeSetting");
const secretQuizMusicOption = document.getElementById("secretQuizMusicOption");
const soundMutedSetting = document.getElementById("soundMutedSetting");
const musicMutedSetting = document.getElementById("musicMutedSetting");
const disableLoadingSetting = document.getElementById("disableLoadingSetting");
const highContrastSetting = document.getElementById("highContrastSetting");
const secretModeSetting = document.getElementById("secretModeSetting");
const secretModeSettingRow = document.getElementById("secretModeSettingRow");
const clamshellModeSetting = document.getElementById("clamshellModeSetting");
const clamshellDisabledMedia = window.matchMedia(
	"(max-width: 720px) and (max-height: 748px)",
);
const universityName = document.getElementById("universityName");
const resetSettingsButton = document.getElementById("resetSettings");
const settingsError = document.getElementById("settingsError");
function updateOfflineTestMode(enabled) {
	window.quizHubOfflineTestMode = Boolean(enabled);
	localStorage.setItem(
		"quizHubOfflineTestMode",
		String(window.quizHubOfflineTestMode),
	);
	document.documentElement.classList.toggle(
		"offline-test-mode",
		window.quizHubOfflineTestMode,
	);
	const offlineAppMode =
		window.quizHubOfflineTestMode || window.quizHubNativeOfflineApp;
	window.quizHubOfflineApp = offlineAppMode;
	document.documentElement.classList.toggle("offline-mode", offlineAppMode);
	const version = document.querySelector(".tagline");
	if (version) {
		version.textContent = version.textContent
			.replace(/^Offline\s+/, "")
			.replace(/^/, offlineAppMode ? "Offline " : "");
	}
	const partyModeToggle = document.getElementById("partyModeToggle");
	partyModeToggle.disabled = window.quizHubOfflineTestMode;
	window.dispatchEvent(
		new CustomEvent("quizhub:offline-test-modechange", {
			detail: { enabled: window.quizHubOfflineTestMode },
		}),
	);
}
window.addEventListener("quizhub:dev-menu-context-request", (event) => {
	event.detail.specialEvent =
		document.body.classList.contains("special-menu-night");
	event.detail.offlineTestMode = window.quizHubOfflineTestMode;
	event.detail.slowLoading = slowLoadingEnabled;
	event.detail.showLoadingPercentage = showLoadingPercentage;
});
window.addEventListener("quizhub:dev-menu-action", (event) => {
	if (event.detail.action === "special-event") {
		localStorage.setItem("quizHubSpecialEventMode", String(event.detail.value));
		updateSpecialMenuTheme();
		window.quizHubDevMenu.updateContext({
			specialEvent: event.detail.value,
		});
	} else if (event.detail.action === "offline-test") {
		updateOfflineTestMode(event.detail.value);
		window.quizHubDevMenu.updateContext({
			offlineTestMode: window.quizHubOfflineTestMode,
			status: window.quizHubOfflineTestMode
				? "Offline Test Mode is on. Online party and active-session requests are disabled."
				: "",
		});
	} else if (event.detail.action === "slow-loading") {
		slowLoadingEnabled = Boolean(event.detail.value);
		localStorage.setItem("quizHubSlowLoading", String(slowLoadingEnabled));
		window.quizHubDevMenu.updateContext({
			slowLoading: slowLoadingEnabled,
		});
	} else if (event.detail.action === "loading-percentage") {
		showLoadingPercentage = Boolean(event.detail.value);
		localStorage.setItem(
			"quizHubShowLoadingPercentage",
			String(showLoadingPercentage),
		);
		window.quizHubDevMenu.updateContext({
			showLoadingPercentage,
		});
	}
});
updateOfflineTestMode(window.quizHubOfflineTestMode);
window.addEventListener("resize", () => {
	if (document.documentElement.classList.contains("dev-display-cover")) {
		const scale = Math.min(
			1,
			window.quizHubDisplayViewport.width / 720,
			window.quizHubDisplayViewport.height / 748,
		);
		document.documentElement.style.setProperty(
			"--dev-display-scale",
			String(scale),
		);
	}
});
const motionModeNames = ["default", "minimal", "reduced"];
const motionModeLabels = ["Default", "Minimal", "Reduced"];
const quizThemeDetails = {
	default: {
		caption: "Default course themes",
		image: "./assets/quiz-theme-default.png",
		alt: "Preview of a course's default quiz style",
	},
	quizhub: {
		caption: "QuizHub Style · the standard look for other courses",
		image: "./assets/quiz-theme-quizhub.png",
		alt: "Preview of the standard QuizHub quiz style",
	},
	"ai-model": {
		caption: "AI Model Style · Software Engineering",
		image: "./assets/quiz-theme-ai-model.png",
		alt: "Preview of the AI Model quiz style",
	},
	blended: {
		caption: "Blended Style · Computer Graphics",
		image: "./assets/quiz-theme-blended.png",
		alt: "Preview of the Blended quiz style",
	},
};
const quizThemePreviewImage = document.getElementById("quizThemePreviewImage");
const quizThemePreviewCaption = document.getElementById(
	"quizThemePreviewCaption",
);
const sfxStyleRadios = document.querySelectorAll('input[name="sfxStyle"]');
let settingsTrigger = null;
let secretUnlockProgress = 0;
let secretUnlockSoundPlayed = false;
let secretModeUnlocked = false;

function updateQuizMusicTrackName() {
	const musicSetting = window.quizHubPreferences.quizMusic;

	const courseMusicNames = {
		default: "Track selected automatically for each course",
		run: "Closer by Nine Inch Nails [Instrumental]",
		CompArch: "What Would Sonic Do? ... from The Murder of Sonic The Hedgehog",
		Practice1: "Blue Spheres ... from Sonic Mania [QuizHub Mix]",
		Practice2: "Special Stage ... from Sonic 3D Blast (Genesis) [QuizHub Mix]",
		CompGFX: "Craterscape ... from Wild 9",
		SocIndi: "Ace Attorney 6 [QuizHub Mix]",
		CloudComp: "A Lone Prayer ... from Persona [QuizHub Mix]",
		DataSci:
			"Jellyfish Fields ... from Spongebob Squarepants - Supersponge [QuizHub Mix]",
		StatisticPractice:
			"議論 -HOPE VS DESPAIR- ... from Trigger Happy Havoc Danganronpa",
		DataSciLautest: "Flower Man (Supersponge Remix)",
		SoftEngi: "Brainrot Hub Mix [Ratatung x Verity x Looping the Rooms]",
		CompGFXLautest: "Confrontation ... from 007 Tomorrow Never Dies",
	};

	if (courseMusicNames[musicSetting]) {
		quizMusicTrackName.textContent = courseMusicNames[musicSetting];
		return;
	}

	quizMusicTrackName.textContent = "No music track selected";
}
function syncSettings() {
	const motionIndex = motionModeNames.indexOf(
		window.quizHubPreferences.motionMode,
	);
	motionModeSlider.value = String(motionIndex);
	motionModeSlider.setAttribute(
		"aria-valuetext",
		motionModeLabels[motionIndex],
	);
	document.querySelectorAll('input[name="answerSide"]').forEach((input) => {
		input.checked = input.value === window.quizHubPreferences.answerSide;
	});
	secretQuizMusicOption.hidden = !window.quizHubPreferences.secretMode;
	quizMusicSetting.value = window.quizHubPreferences.quizMusic;
	updateQuizMusicTrackName();
	textSizeSetting.value = window.quizHubPreferences.textSize;
	document.querySelectorAll('input[name="quizTheme"]').forEach((input) => {
		input.checked = input.value === window.quizHubPreferences.quizTheme;
	});
	sfxStyleRadios.forEach((input) => {
		input.checked = input.value === window.quizHubPreferences.sfxStyle;
	});
	updateQuizThemePreview(window.quizHubPreferences.quizTheme);
	soundMutedSetting.checked = window.quizHubPreferences.soundMuted;
	musicMutedSetting.checked = window.quizHubPreferences.musicMuted;
	disableLoadingSetting.checked =
		window.quizHubPreferences.disableLoadingAnimation;
	highContrastSetting.checked = window.quizHubPreferences.highContrast;
	secretModeSetting.checked = window.quizHubPreferences.secretMode;
	syncClamshellModeSetting();
	secretModeSettingRow.hidden =
		!window.quizHubPreferences.secretMode && !secretModeUnlocked;
}

function syncClamshellModeSetting() {
	const clamshellDisabled = !window.quizHubPreferences.clamshellModeAvailable;
	clamshellModeSetting.disabled = clamshellDisabled;
	clamshellModeSetting.checked =
		!clamshellDisabled && window.quizHubPreferences.clamshellMode;
	clamshellModeSetting
		.closest(".setting-choice")
		.classList.toggle("is-disabled", clamshellDisabled);
	document.getElementById("clamshellModeUnavailable").hidden =
		!clamshellDisabled;
}

clamshellDisabledMedia.addEventListener("change", syncClamshellModeSetting);
window.addEventListener("quizhub:display-modechange", syncClamshellModeSetting);

function updateQuizThemePreview(theme) {
	const details = quizThemeDetails[theme] || quizThemeDetails.default;
	quizThemePreviewImage.src = details.image;
	quizThemePreviewImage.alt = details.alt;
	quizThemePreviewCaption.textContent = details.caption;
}

function closeSettings() {
	secretUnlockProgress = 0;
	const returnFocus = settingsTrigger;
	document.activeElement?.blur();
	settingsModal.classList.remove("open");
	settingsModal.setAttribute("aria-hidden", "true");
	optionsToggle.setAttribute("aria-expanded", "false");
	settingsTrigger = null;
	if (returnFocus?.isConnected) returnFocus.focus();
}

function openSettings() {
	secretUnlockProgress = 0;
	settingsTrigger = optionsToggle;
	syncSettings();
	settingsModal.classList.add("open");
	settingsModal.setAttribute("aria-hidden", "false");
	optionsToggle.setAttribute("aria-expanded", "true");
	requestAnimationFrame(() =>
		settingsModal.querySelector(".settings-close").focus(),
	);
}

document.addEventListener("keydown", (event) => {
	if (!settingsModal.classList.contains("open")) return;
	const code = "hub";
	const key = event.key.toLowerCase();
	if (key === code[secretUnlockProgress]) {
		event.preventDefault();
		secretUnlockProgress++;
	} else {
		secretUnlockProgress = key === code[0] ? 1 : 0;
	}
	if (secretUnlockProgress === code.length) {
		secretUnlockProgress = 0;
		secretModeUnlocked = true;
		secretModeSettingRow.hidden = false;
		if (!secretUnlockSoundPlayed) {
			playSound("loading");
			secretUnlockSoundPlayed = true;
		}
	}
});

optionsToggle.addEventListener("click", () => {
	playSound("popup");
	settingsError.textContent = "";
	openSettings();
});
motionModeSlider.addEventListener("input", () => {
	const motionIndex = Number(motionModeSlider.value);
	const motionMode = motionModeNames[motionIndex];
	motionModeSlider.setAttribute(
		"aria-valuetext",
		motionModeLabels[motionIndex],
	);
	window.quizHubPreferences.setMotionMode(motionMode);
});
quizMusicSetting.addEventListener("change", () => {
	window.quizHubPreferences.setQuizMusic(quizMusicSetting.value);
	updateQuizMusicTrackName();
	if (quizPreviewPlaying) startQuizMusicPreview();
});
textSizeSetting.addEventListener("change", () => {
	window.quizHubPreferences.setTextSize(textSizeSetting.value);
});
document.querySelectorAll('input[name="quizTheme"]').forEach((input) => {
	input.addEventListener("change", () => {
		if (!input.checked) return;
		window.quizHubPreferences.setQuizTheme(input.value);
		updateQuizThemePreview(input.value);
	});
});
sfxStyleRadios.forEach((input) => {
	input.addEventListener("change", () => {
		if (!input.checked) return;
		window.quizHubPreferences.setSfxStyle(input.value);
		playSound("highlight", "CompGFX", true);
	});
});
soundMutedSetting.addEventListener("change", () => {
	setSoundsMuted(soundMutedSetting.checked);
});
musicMutedSetting.addEventListener("change", () => {
	setMusicMuted(musicMutedSetting.checked);
});
disableLoadingSetting.addEventListener("change", () => {
	window.quizHubPreferences.setDisableLoadingAnimation(
		disableLoadingSetting.checked,
	);
});
highContrastSetting.addEventListener("change", () => {
	window.quizHubPreferences.setHighContrast(highContrastSetting.checked);
});
secretModeSetting.addEventListener("change", () => {
	window.quizHubPreferences.setSecretMode(secretModeSetting.checked);
	secretQuizMusicOption.hidden = !secretModeSetting.checked;
	quizMusicSetting.value = window.quizHubPreferences.quizMusic;
	updateQuizMusicTrackName();
	if (secretModeSetting.checked) {
		playSound("started");
	}
	if (quizPreviewPlaying) startQuizMusicPreview();
	updateBranding();
	if (!quizPreviewPlaying) startMenuMusic(true);
});
clamshellModeSetting.addEventListener("change", () => {
	window.quizHubPreferences.setClamshellMode(clamshellModeSetting.checked);
});
resetSettingsButton.addEventListener("click", () => {
	window.quizHubPreferences.reset();
	setSoundsMuted(false);
	setMusicMuted(false);
	updateBranding();
	secretModeUnlocked = false;
	secretModeSettingRow.hidden = true;
	if (quizPreviewPlaying) startQuizMusicPreview();
	syncSettings();
	settingsError.textContent = "";
});
document.querySelectorAll('input[name="answerSide"]').forEach((input) => {
	input.addEventListener("change", () => {
		if (input.checked) window.quizHubPreferences.setAnswerSide(input.value);
	});
});
document.querySelectorAll("[data-close-settings]").forEach((el) => {
	el.addEventListener("click", closeSettings);
});

const textbookLibraryLink = document.getElementById("textbookLibraryLink");
textbookLibraryLink.addEventListener("click", (event) => {
	if (
		event.button !== 0 ||
		event.metaKey ||
		event.ctrlKey ||
		event.shiftKey ||
		event.altKey
	)
		return;
	event.preventDefault();
	if (document.body.classList.contains("library-leaving")) return;
	document.body.classList.add("library-leaving");
	window.setTimeout(
		() => window.location.assign(textbookLibraryLink.href),
		220,
	);
});

patchnotesContent.textContent = `
Version 2.7.3
- A new main menu theme has been added for Exam days.
- Music rotation is now an option, allowing a different song to play throughout your quizzing
- Fixes to Dr. Lau's Practice for Computer Graphics
- The room code now always shows in the bottom right corner of the screen in Party Mode

Version 2.7.2
- A Statistics practice has been added for Data Science, for testing various kinds of math and statistics questions. This quiz has a new theme and music.
- A player leaving a Party mode game will now only be removed and not cause the game from ending for everyone else.
- You can now change the quiz theme in the middle of a quiz
- The default loading screen has been updated with a new design, including a progress bar
- Binary Quiz and Hexadecimal Quiz are now available in Party Mode!


Version 2.7.1
- Dr. Lau's Practice for Data Science has been updated with new questions and images, including a new question type! Can you beat his questions? (Note this quiz is not available in Party Mode)
- The win screen will now change if you fail a quiz.
- Various other changes and improvements

Version 2.7.0
- Various improvements and bug fixes

Version 2.6.9
- Various improvements and bug fixes

Version 2.6.8
- Fixed various bugs throughout the site, including issues with Images and Offline Mode 
- You can now uninstall the Offline Version if you want to or if there is a corrupted file

Version 2.6.7
- GIFS are now properly supported in Party Mode
- Dr. Lau's Practice for CompGFX has been added. Including new music, images for some questions, and new types of questions! Can you beat his questions? (Note this quiz is not available in Party Mode)

Version 2.6.6
- Various improvements and bug fixes

Version 2.6.5
- If playing again with the same people in Party Mode, it will now show the overall score as well as the current score
- All quizzes and courses are now properly available in Party Mode
- The new quiz and play again buttons in Host Display mode now work properly
- The host's selected style is now seen on all other players
- Host Display have been visually redesigned
- True/False questions now display correctly in party mode

Version 2.6.4
- Various improvements and bug fixes
- Host Display mode actually works

Version 2.6.3
- Various improvements and bug fixes

Version 2.6.2
- Various improvements and bug fixes

Version 2.6.1
- Clamshell mode has been added to the mobile version, which allows the site to be used in a more compact layout for devices with limited screen space. This mode can be toggled in the settings menu.
- Various improvements and bug fixes

Version 2.6.0
- Host Display has been added as a Party Mode option. This allows the host to display the quiz on a separate screen, while players can answer on their own devices. This is useful for classrooms or group settings where a shared display is available.
- Party mode will now say default name and color upon joining, but can still be changed afterwards.
- Mobile interface improvements, including better support for smaller screens and touch interactions.
- The menu now changes during specific study periods of the year
- If a connection is detected in Offline Mode, the site will now prompt to switch to Online Mode for a better experience.

Version 2.5.2
- Now presents probably on a Samsung Galaxy Z Flip 8 cover screen

Version 2.5.1
- Mixed Study has been added, which allows you to practice questions from a variety ofcourses in a single quiz. This quiz has a new theme and music, and is available in both the main menu and online party mode.
- The Downloaded version can now be used offline, without an internet connection. This is still experimental and may not work on all devices and requires the standalone app already installed.
- Various improvements and bug fixes

Version 2.4.5
- There is now an option to download an offline version of the site, which can be used without an internet connection. This is still experimental and may not work on all devices and required the standalone app already installed.

Version 2.4
- Downloadable versions should be functioning now
- New icon for the site, which is also used in the downloadable versions

Version 2.3
- Computer Graphics quiz style has been improved
- Computer Graphics now has a new default SFX Style, which can also be configued in the options
- Computer Graphics has a unique loading screen now
- Various Improvements
- EXPERIMENTAL: You can now download compiled versions for Windows, Linux and Android. These pull from the site and require an internet connection

Version 2.2
- Various enhancements to Online Party mode
  - You can now redo a quiz or choose a new quiz with the same party
  - Options have been added to disable seeing other's scores and locked in answers
  - There is now an "Early Bird" bonus, which gives 3 points for getting the right answer first. This can be disabled
- Computer Graphics midterm practice has been added, along with a new quiz theme and music
- Cloud Computing midterm practice has been added
- Intro to Computer Arch Midterm practice has been added
- Data Science midterm practice has been finished, along with a new quiz theme and music. This quiz features content from both the slideshow and general Blender how-to
- You can now choose what quiz theme you would like for all quizzes.
- The quiz music selector in the options menu now lists the sourced track

Version 2.1
- Various enhancements to Online Party mode
- Online Party mode can now have a lobby of up to 50 people
- Combo system now works correctly in party mode
- New music has been added to party mode
- General tweaks

Version 2.0
- Improved Cloud Computing Quiz 2
- Fixed music loop for Cloud Computing
- Party mode has been added! Play with up to 5 people and see who can get the most points!
- A new option has been added to all quizzes, allow you to set a timer per-question alongside a general quiz timer. How fast can you be?
- New combo system! The more correct anwsers you get, the more your combo increases. Can you keep a perfect combo?
- The win screen has been updated with various adjustments
- A scrollbar has been added to the quiz sidetab, for larger options on smaller screens
- A new options menu has been added, with options for reduced motion, text size, quiz view, fullscreen, music select and other toggles!
- A sociology exam 1 quiz has been added, with the new feature to select which section you would like to take. This quiz also allows for 100 and 150 minute time limit.
- A mysterious secret toggle has been hidden in the options menu... somehow, you have to get it started... if you dare

Version 1.6
- Added Cloud Computing Quiz based on Slide 4
- Cloud Computing now has unique music
- Added Software Engineering Lectures 1–6 practice with a visual twist, let's just say it's the one they play when the world gets loud!
- Returning to the menu is now faster, and skips the animations

Version 1.5
- Hexadecimal Operation practice now functions
- UI Updates
- Added Sociology Textbook Practice, focus on the entire textbook

Version 1.4
- Added Hexadecimal Practice, with options for Binary -> Hex, Hex -> Decimal, Decimal -> Hex and Hex -> Binary.
- Added Hexadecimal Practice for Operations, including Addition, Subtraction, Multiplication and Division
- Added Hexadecimal Practice Guide, to show the hexadecimal letter values for 10 through 15
- Added Manual next question button to Binary and Hexadecimal games, to allow review of correct anwser
- Changed time limit in Hexadecimal and Binary game to be for each individual question
- Added sorting on win screen for general quizzes, to allow you to just see correct and incorrect anwsers
- Added incorrect question retaking for general quizzes, to allow specific review of incorrect questions
- General Optimization
- Removed "in example" questions on Comp Arch
- Improved question wording flow

Version 1.3
- Fixed minor bugs
- Added Binary Arithmetic practice to Computer Arch, allowing you to practice binary to decimal and vise versa, as well as operations with binary!

Version 1.2
- Fixed back button through browser softlocking
- Mobile Adjustments, including fix to sound on mobile
- Added Data Science Test 1 Practice, including new music and 235 questions based on the slides!
- Adjusted Sound mixing

Version 1.1
- Fixed mobile presentation

Version 1.0
- Music and SFX have been added globally. They can be turned off with the buttons or by pressing M
- More course options available on Main Menu
- Added scrollable menu, to allow for expanded course selection
- Corrections to Comp Arch First Slide Quiz
- Added Cloud Computing, with practice quiz based on first slides
- Fixed bug where win screen would crash
- Fixed bug with Setup Menu in Mobile
- You can now use your keyboard for controlling elements of the page
- The date and time are now shown in the main menu
- You can now return to the main menu from the setup screen
- GFX have been improved
- You can now quit the win screen without needing to scroll down
- This patch notes menu now exists
- Removed Herobrine

Beta v0.1
- Inital release with Intro Comp Arch Quiz 1
`;

document.addEventListener("keydown", (event) => {
	document.documentElement.classList.add("keyboard-controls");
	if (event.key === "Tab") keyboardNavigation = true;
	const openModal = [
		document.getElementById("quizModal"),
		patchnotesModal,
		settingsModal,
		partyModeModal,
		partyNoConnectionModal,
		downloadAppModal,
	].find((modal) => modal.classList.contains("open"));
	const target = event.target instanceof Element ? event.target : document.body;
	const editableTarget = target.closest(
		'input,textarea,select,[contenteditable="true"]',
	);

	if (
		event.key.toLowerCase() === "o" &&
		!event.target.matches('input,textarea,select,[contenteditable="true"]')
	) {
		if (settingsModal.classList.contains("open")) {
			event.preventDefault();
			closeSettings();
			return;
		}
		if (!openModal) {
			event.preventDefault();
			optionsToggle.click();
			return;
		}
	}

	if (event.key === "Escape" && openModal) {
		event.preventDefault();
		if (openModal.id === "quizModal") closeQuizMenu();
		else if (openModal === patchnotesModal) closePatchnotes();
		else if (openModal === settingsModal) closeSettings();
		else if (openModal === downloadAppModal) closeDownloadAppModal();
		else openModal.querySelector(".party-mode-close")?.click();
		return;
	}

	if (event.key === "Tab" && openModal) {
		const dialog = openModal.matches('[role="dialog"]')
			? openModal
			: openModal.querySelector('[role="dialog"]');
		const focusable = [
			...dialog.querySelectorAll(
				'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',
			),
		].filter(
			(element) =>
				!element.closest("[hidden]") &&
				element.getAttribute("aria-hidden") !== "true" &&
				element.getClientRects().length > 0,
		);
		if (focusable.length) {
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (
				event.shiftKey &&
				(document.activeElement === first ||
					!dialog.contains(document.activeElement))
			) {
				event.preventDefault();
				last.focus();
			} else if (
				!event.shiftKey &&
				(document.activeElement === last ||
					!dialog.contains(document.activeElement))
			) {
				event.preventDefault();
				first.focus();
			}
		}
		return;
	}

	if (
		!openModal &&
		event.key.toLowerCase() === "p" &&
		!event.target.matches('input,textarea,select,[contenteditable="true"]')
	) {
		event.preventDefault();
		partyModeToggle.click();
		return;
	}

	if (event.key === "Escape") {
		const modal = document.getElementById("quizModal");
		if (modal.classList.contains("open")) closeQuizMenu();
		if (patchnotesModal.classList.contains("open")) closePatchnotes();
		if (settingsModal.classList.contains("open")) closeSettings();
		return;
	}

	if (
		event.target.tagName === "INPUT" ||
		document.getElementById("quizModal").classList.contains("open") ||
		patchnotesModal.classList.contains("open") ||
		settingsModal.classList.contains("open") ||
		partyModeModal.classList.contains("open") ||
		downloadAppModal.classList.contains("open")
	)
		return;

	const pageCards = getCurrentMenuCards();
	const activeIndex = pageCards.indexOf(document.activeElement);
	if (
		![
			"ArrowLeft",
			"ArrowRight",
			"ArrowUp",
			"ArrowDown",
			"PageUp",
			"PageDown",
		].includes(event.key)
	)
		return;

	event.preventDefault();
	keyboardNavigation = true;
	if (event.key === "PageUp" || event.key === "PageDown") {
		if (isCoverMenuDisplay()) {
			const cards = getCurrentMenuCards();
			cards[event.key === "PageUp" ? 0 : cards.length - 1]?.focus();
			return;
		}
		const nextPage = event.key === "PageUp" ? menuPage - 1 : menuPage + 1;
		playSound("arrow");
		showMenuPage(nextPage);
		getCurrentMenuCards()[0]?.focus();
		return;
	}

	if (activeIndex < 0) {
		pageCards[0]?.focus();
		return;
	}

	if (isCoverMenuDisplay()) {
		const column = activeIndex % 2;
		let nextIndex = activeIndex;
		if (event.key === "ArrowLeft" && column > 0) nextIndex--;
		if (event.key === "ArrowRight" && column === 0) nextIndex++;
		if (event.key === "ArrowUp" && activeIndex >= 2) nextIndex -= 2;
		if (event.key === "ArrowDown" && activeIndex + 2 < pageCards.length)
			nextIndex += 2;
		pageCards[nextIndex]?.focus();
		return;
	}

	const column = activeIndex % 3;
	let nextIndex = activeIndex;
	if (event.key === "ArrowUp")
		nextIndex = (activeIndex - 3 + pageCards.length) % pageCards.length;
	if (event.key === "ArrowDown")
		nextIndex = (activeIndex + 3) % pageCards.length;
	if (event.key === "ArrowLeft") {
		if (column === 0) {
			playSound("arrow");
			showMenuPage(menuPage - 1);
			menuPages[(menuPage + menuPages.length - 1) % menuPages.length]
				.querySelector(".course-card:last-child")
				?.focus();
			return;
		}
		nextIndex = activeIndex - 1;
	}
	if (event.key === "ArrowRight") {
		if (column === 2) {
			playSound("arrow");
			showMenuPage(menuPage + 1);
			menuPages[(menuPage + 1) % menuPages.length]
				.querySelector(".course-card")
				?.focus();
			return;
		}
		nextIndex = activeIndex + 1;
	}
	pageCards[nextIndex]?.focus();
});
document.addEventListener("pointerdown", () => {
	document.documentElement.classList.remove("keyboard-controls");
});

const stemTitle = document.querySelector("h1");
const clamshellViewport = window.matchMedia("(max-width: 760px)");
let currentBrandingKey = null;
let dsTitleClickCount = 0;
let dsTitleClickTimeout = null;
const dsTitleSound = new Audio(resolveAssetUrl("sfx/DS.wav"));
dsTitleSound.preload = "auto";
let dsTitleSoundPending = false;
function tryPlayDSTitleSound() {
	if (!dsTitleSoundPending || soundsMuted) return;
	dsTitleSound.currentTime = 0;
	dsTitleSound
		.play()
		.then(() => {
			dsTitleSoundPending = false;
		})
		.catch((error) => {
			if (error.name !== "NotAllowedError") {
				dsTitleSoundPending = false;
				console.warn("Could not play the DS title sound:", error);
			}
		});
}
function handleDSTitleClick(dsTitle) {
	if (window.quizHubPreferences.dsPuristMode) {
		dsTitleClickCount = 0;
		clearTimeout(dsTitleClickTimeout);
		window.quizHubPreferences.setDSPuristMode(false);
		dsTitle.setAttribute("aria-pressed", "false");
		dsTitle.setAttribute(
			"aria-label",
			"Enable DS Purist Mode by clicking three times",
		);
		dsTitle.title = "Click three times to enable DS Purist Mode";
		return;
	}
	dsTitleClickCount += 1;
	clearTimeout(dsTitleClickTimeout);
	dsTitleClickTimeout = setTimeout(() => {
		dsTitleClickCount = 0;
	}, 1500);
	if (dsTitleClickCount < 3) return;
	dsTitleClickCount = 0;
	clearTimeout(dsTitleClickTimeout);
	window.quizHubPreferences.setDSPuristMode(true);
	dsTitle.setAttribute("aria-pressed", "true");
	dsTitle.setAttribute("aria-label", "DS Purist Mode enabled");
	dsTitle.title = "Click once to disable DS Purist Mode";
}
function updateBranding() {
	const secretMode = window.quizHubPreferences.secretMode;
	const clamshellMode =
		window.quizHubPreferences.clamshellMode &&
		(clamshellViewport.matches || isForcedMobileDisplay());
	const brandingKey = `${secretMode}:${clamshellMode}`;
	if (brandingKey === currentBrandingKey) return;
	currentBrandingKey = brandingKey;
	const title = secretMode ? "Hub?" : clamshellMode ? "Quiz Hub " : "QUIZ Hub!";
	const titleLetters = [...title].map((character) => {
		const letter = document.createElement("span");
		letter.className = "stem-letter";
		letter.textContent = character;
		return letter;
	});
	if (clamshellMode) {
		const dsTitle = document.createElement("span");
		dsTitle.className = "ds-title";
		dsTitle.textContent = "DS";
		dsTitle.setAttribute("role", "button");
		dsTitle.setAttribute("tabindex", "0");
		dsTitle.title = window.quizHubPreferences.dsPuristMode
			? "Click once to disable DS Purist Mode"
			: "Click three times to enable DS Purist Mode";
		dsTitle.setAttribute(
			"aria-pressed",
			String(window.quizHubPreferences.dsPuristMode),
		);
		dsTitle.setAttribute(
			"aria-label",
			window.quizHubPreferences.dsPuristMode
				? "DS Purist Mode enabled"
				: "Enable DS Purist Mode by clicking three times",
		);
		dsTitle.addEventListener("click", () => handleDSTitleClick(dsTitle));
		dsTitle.addEventListener("keydown", (event) => {
			if (event.key !== "Enter" && event.key !== " ") return;
			event.preventDefault();
			handleDSTitleClick(dsTitle);
		});
		dsTitle.addEventListener("animationstart", (event) => {
			if (event.animationName === "dsTitleFade") {
				dsTitleSoundPending = true;
				tryPlayDSTitleSound();
			}
		});
		titleLetters.push(dsTitle);
	}
	stemTitle.replaceChildren(...titleLetters);
	universityName.textContent = secretMode
		? "???"
		: "Lakehead University - Barrie STEM Hub";
	stemTitle.setAttribute(
		"aria-label",
		secretMode ? "Hub?" : clamshellMode ? "Quiz Hub DS" : "Lakehead STEM Hub",
	);
	document.documentElement.classList.toggle(
		"clamshell-branding",
		clamshellMode && !secretMode,
	);
	document.title = secretMode
		? "Hub?"
		: clamshellMode
			? "Quiz Hub DS"
			: "Quiz Hub";
}
window.addEventListener("quizhub:preferenceschange", updateBranding);
clamshellViewport.addEventListener("change", updateBranding);
window.addEventListener("quizhub:display-modechange", updateBranding);
updateBranding();
const titleEndSound = new Audio(soundFiles.titleEnd);
let titleEndPending = false;
function tryPlayTitleEnd() {
	if (!titleEndPending || soundsMuted) return;
	titleEndSound.src = window.quizHubPreferences.resolveSfx(
		"titleEnd",
		soundFiles.titleEnd,
	);
	titleEndSound.currentTime = 0;
	titleEndSound
		.play()
		.then(() => {
			titleEndPending = false;
		})
		.catch(() => {});
}
stemTitle.addEventListener("animationstart", (event) => {
	const lastVisibleLetter = [...stemTitle.querySelectorAll(".stem-letter")].at(
		-1,
	);
	if (
		event.animationName === "titleEntrance" &&
		event.target === lastVisibleLetter
	) {
		titleEndPending = true;
		tryPlayTitleEnd();
	}
});
document.addEventListener("pointerdown", tryPlayTitleEnd);
document.addEventListener("pointerdown", tryPlayDSTitleSound);
function pulseStem() {
	if (leaving) return;
	stemTitle.classList.remove("animating");
	void stemTitle.offsetWidth;
	stemTitle.classList.add("animating");
}

window.addEventListener("pageshow", (event) => {
	if (
		!event.persisted &&
		!document.body.classList.contains("leaving") &&
		!document.body.classList.contains("motion-fade-leaving") &&
		!document.body.classList.contains("library-leaving")
	)
		return;
	leaving = false;
	welcomeVisible = false;
	quizLoaded = false;
	navigationTarget = "";
	document.body.classList.remove(
		"leaving",
		"motion-fade-leaving",
		"library-leaving",
		"show-welcome",
		"welcome-out",
	);
	document.querySelectorAll(".card").forEach((card) => {
		card.disabled = false;
	});
	if (preloadFrame) {
		preloadFrame.remove();
		preloadFrame = null;
	}
	menuVisible = true;
	document.body.classList.add("intro-complete", "menu-visible");
	startMenuMusic();
});

const returnParams = new URLSearchParams(window.location.search);
const returningFromSetup = returnParams.get("fromSetup") === "1";
const returningFromWin = returnParams.get("fromWin") === "1";
if (returningFromSetup || returningFromWin) {
	const cleanUrl = new URL(window.location.href);
	cleanUrl.searchParams.delete(returningFromSetup ? "fromSetup" : "fromWin");
	window.history.replaceState(null, "", cleanUrl);
}

if (returningFromSetup) {
	menuVisible = true;
	document.body.classList.add(
		"menu-return-setup",
		"skip-title-intro",
		"intro-complete",
		"menu-visible",
	);
	startMenuMusic(true);
} else if (returningFromWin) {
	document.body.classList.add(
		"menu-return-win",
		"skip-title-intro",
		"intro-complete",
	);
	setTimeout(() => {
		menuVisible = true;
		document.body.classList.add("menu-visible");
		startMenuMusic();
	}, 1450);
} else {
	// Animated title entrance first; only after it finishes is the full menu revealed.
	setTimeout(() => document.body.classList.add("intro-complete"), 1450);
	setTimeout(() => {
		menuVisible = true;
		document.body.classList.add("menu-visible");
		startMenuMusic();
	}, 2550);
}

if (new URLSearchParams(window.location.search).get("devScene") === "options") {
	openSettings();
}

// First title bounce occurs 15 seconds after the initial menu reveal, then every 15 seconds.
setTimeout(() => {
	pulseStem();
	setInterval(pulseStem, 15000);
}, 15000);
