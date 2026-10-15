(function () {
	"use strict";

	const pageControls = [...document.querySelectorAll("[data-dev-page]")];
	const displayMode = document.getElementById("devDisplayMode");
	const mobileGestures = document.getElementById("devMobileGestures");
	const sceneSelect = document.getElementById("devSceneSelect");
	const openScene = document.getElementById("devOpenScene");
	const specialEvent = document.getElementById("devSpecialEvent");
	const offlineTest = document.getElementById("devOfflineTest");
	const slowLoading = document.getElementById("devSlowLoading");
	const showLoadingPercentage = document.getElementById(
		"devShowLoadingPercentage",
	);
	const activeUsers = document.getElementById("devActiveUsers");
	const fakePlayerCount = document.getElementById("devFakePlayerCount");
	const fakePlayerLimit = document.getElementById("devFakePlayerLimit");
	const addFakePlayers = document.getElementById("devAddFakePlayers");
	const removeFakePlayers = document.getElementById("devRemoveFakePlayers");
	const excludedQuizzes = document.getElementById("devEnableExcludedQuizzes");
	const quizJump = document.getElementById("devQuizJump");
	const quizSetup = document.getElementById("devQuizSetup");
	const quizModifiers = document.getElementById("devQuizModifiers");
	const modifierInputs = [...quizModifiers.querySelectorAll("input")];
	const menuStatus = document.getElementById("devMenuStatus");
	const closeButton = document.getElementById("devMenuClose");
	let page = "other";

	function sendAction(action, values = {}) {
		window.parent.postMessage(
			{ type: "quizhub-dev-action", action, ...values },
			location.origin === "null" ? "*" : location.origin,
		);
	}

	function setPageContext(context) {
		page = context.page || "other";
		pageControls.forEach((section) => {
			const scopes = section.dataset.devPage.split(/\s+/);
			section.hidden = !scopes.includes("any") && !scopes.includes(page);
		});
		displayMode.value = context.displayMode || "desktop";
		if ("mobileGesturesEnabled" in context)
			mobileGestures.checked = context.mobileGesturesEnabled;
		if (Array.isArray(context.scenes)) {
			const selectedScene = sceneSelect.value;
			sceneSelect.replaceChildren(new Option("Choose a scene", ""));
			context.scenes.forEach((group) => {
				const optgroup = document.createElement("optgroup");
				optgroup.label = group.label;
				group.scenes.forEach((scene) => {
					const option = new Option(scene.label, scene.id);
					optgroup.appendChild(option);
				});
				sceneSelect.appendChild(optgroup);
			});
			if ([...sceneSelect.options].some((option) => option.value === selectedScene))
				sceneSelect.value = selectedScene;
		}
		if ("specialEvent" in context) specialEvent.checked = context.specialEvent;
		if ("offlineTestMode" in context)
			offlineTest.checked = context.offlineTestMode;
		if ("slowLoading" in context)
			slowLoading.checked = context.slowLoading;
		if ("showLoadingPercentage" in context)
			showLoadingPercentage.checked = context.showLoadingPercentage;
		if ("activeSessions" in context) {
			activeUsers.textContent = context.activeSessions;
			activeUsers.setAttribute(
				"aria-label",
				context.activeSessions === "Unavailable"
					? "Active-session count unavailable"
					: `${context.activeSessions} active sessions`,
			);
		}
		if ("status" in context) menuStatus.textContent = context.status;
		if ("quizModifiersAvailable" in context) {
			quizModifiers.hidden = !context.quizModifiersAvailable;
		}
		if ("quizJumpAvailable" in context)
			quizJump.hidden = !context.quizJumpAvailable;
		if ("quizCanJump" in context)
			quizJump.disabled = !context.quizCanJump;
		if ("quizSetupAvailable" in context)
			quizSetup.hidden = !context.quizSetupAvailable;
		if ("quizCanModify" in context)
			modifierInputs.forEach((input) => {
				input.disabled = !context.quizCanModify;
			});
		if ("alwaysRight" in context)
			document.getElementById("devAlwaysRight").checked =
				context.alwaysRight;
		if ("perfectScore" in context)
			document.getElementById("devPerfectScore").checked =
				context.perfectScore;
		if ("disableComboLoss" in context)
			document.getElementById("devDisableComboLoss").checked =
				context.disableComboLoss;
		if ("rotation" in context)
			document.getElementById("devRotation").checked = context.rotation;
		if ("fakePlayerSummary" in context)
			fakePlayerLimit.textContent = context.fakePlayerSummary;
		if ("fakePlayerLimit" in context)
			fakePlayerCount.max = String(Math.max(0, context.fakePlayerLimit));
		if ("fakePlayerEnabled" in context) {
			fakePlayerCount.disabled = !context.fakePlayerEnabled;
			addFakePlayers.disabled = !context.fakePlayerEnabled;
		}
		if ("removeFakePlayersEnabled" in context)
			removeFakePlayers.disabled = !context.removeFakePlayersEnabled;
		if ("isHost" in context) {
			excludedQuizzes.disabled =
				!context.isHost || context.lobbyStage !== "lobby";
		}
		if ("excludedQuizzesEnabled" in context)
			excludedQuizzes.checked = context.excludedQuizzesEnabled;
	}

	window.addEventListener("message", (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== location.origin && location.protocol !== "file:")
			return;
		if (event.data?.type === "quizhub-dev-context")
			setPageContext(event.data.context);
	});

	displayMode.addEventListener("change", () =>
		sendAction("set-display-mode", { value: displayMode.value }),
	);
	mobileGestures.addEventListener("change", () =>
		sendAction("mobile-gestures", { value: mobileGestures.checked }),
	);
	specialEvent.addEventListener("change", () =>
		sendAction("special-event", { value: specialEvent.checked }),
	);
	offlineTest.addEventListener("change", () =>
		sendAction("offline-test", { value: offlineTest.checked }),
	);
	openScene.addEventListener("click", () => {
		if (!sceneSelect.value) {
			menuStatus.textContent = "Choose a scene first.";
			return;
		}
		if (window.parent === window) {
			try {
				window.QuizHubDevScenes.navigate(sceneSelect.value);
			} catch (error) {
				menuStatus.textContent = `Could not open the selected scene: ${error.message}`;
			}
			return;
		}
		sendAction("scene-select", { value: sceneSelect.value });
	});
	slowLoading.addEventListener("change", () =>
		sendAction("slow-loading", { value: slowLoading.checked }),
	);
	showLoadingPercentage.addEventListener("change", () =>
		sendAction("loading-percentage", {
			value: showLoadingPercentage.checked,
		}),
	);
	quizJump.addEventListener("click", () => sendAction("quiz-jump"));
	quizSetup.addEventListener("click", () => sendAction("quiz-show-setup"));
	document.getElementById("devAlwaysRight").addEventListener("change", (event) =>
		sendAction("quiz-modifier", {
			name: "always-right",
			value: event.currentTarget.checked,
		}),
	);
	document.getElementById("devPerfectScore").addEventListener("change", (event) =>
		sendAction("quiz-modifier", {
			name: "perfect-score",
			value: event.currentTarget.checked,
		}),
	);
	document
		.getElementById("devDisableComboLoss")
		.addEventListener("change", (event) =>
			sendAction("quiz-modifier", {
				name: "disable-combo-loss",
				value: event.currentTarget.checked,
			}),
		);
	document.getElementById("devRotation").addEventListener("change", (event) =>
		sendAction("quiz-modifier", {
			name: "rotation",
			value: event.currentTarget.checked,
		}),
	);
	addFakePlayers.addEventListener("click", () => {
		const count = Number(fakePlayerCount.value);
		if (!Number.isInteger(count) || count < 1) {
			menuStatus.textContent = "Enter a whole number of fake players to add.";
			return;
		}
		sendAction("add-fake-players", { count });
	});
	removeFakePlayers.addEventListener("click", () =>
		sendAction("remove-fake-players"),
	);
	excludedQuizzes.addEventListener("change", () =>
		sendAction("excluded-quizzes", { value: excludedQuizzes.checked }),
	);
	closeButton.addEventListener("click", () => sendAction("close"));
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			event.preventDefault();
			sendAction("close");
		}
	});
	document.getElementById("devMenu").addEventListener("click", (event) => {
		if (event.target === event.currentTarget) sendAction("close");
	});
	if (window.parent === window) {
		setPageContext({
			page: "index",
			displayMode: "desktop",
			scenes: window.QuizHubDevScenes.getSceneGroups(),
		});
	}
	window.parent.postMessage(
		{ type: "quizhub-dev-ready" },
		location.origin === "null" ? "*" : location.origin,
	);
	closeButton.focus();
})();
