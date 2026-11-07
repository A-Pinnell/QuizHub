(function () {
	"use strict";

	function attach({
		button,
		isSoundEnabled,
		isMusicEnabled,
		onSelectionStart,
		onTrackSelected,
	}) {
		const dialog = document.createElement("dialog");
		dialog.className = "quiz-music-picker";
		dialog.setAttribute("aria-labelledby", "quizMusicPickerTitle");
		dialog.innerHTML = `
			<div class="quiz-music-picker-header">
				<div>
					<p>QUIZ AUDIO</p>
					<h2 id="quizMusicPickerTitle">Choose a song</h2>
				</div>
				<button type="button" class="quiz-music-picker-close" aria-label="Close song selector">×</button>
			</div>
			<div class="quiz-music-picker-categories" role="tablist" aria-label="Music categories">
				<button type="button" class="quiz-music-picker-category" id="quizMusicCategoryQuizHub" role="tab" aria-selected="true" aria-controls="quizMusicPickerOptions" data-category="QuizHub OST">QuizHub OST</button>
				<button type="button" class="quiz-music-picker-category" id="quizMusicCategoryNetHub" role="tab" aria-selected="false" aria-controls="quizMusicPickerOptions" data-category="NetHub OST" tabindex="-1">NetHub OST</button>
				<button type="button" class="quiz-music-picker-category" id="quizMusicCategoryRotation" role="tab" aria-selected="false" aria-controls="quizMusicPickerOptions" data-category="Rotation" tabindex="-1">Rotation</button>
			</div>
			<div class="quiz-music-picker-options" id="quizMusicPickerOptions" role="tabpanel" aria-labelledby="quizMusicCategoryQuizHub" aria-label="QuizHub OST options"></div>
			<p class="quiz-music-picker-status" aria-live="polite"></p>
		`;
		document.body.append(dialog);

		const options = dialog.querySelector(".quiz-music-picker-options");
		const categoryTabs = [
			...dialog.querySelectorAll(".quiz-music-picker-category"),
		];
		const status = dialog.querySelector(".quiz-music-picker-status");
		const closeButton = dialog.querySelector(".quiz-music-picker-close");
		const closeDialog = () => {
			if (dialog.open) dialog.close();
			button.focus();
		};
		const updateButtonLabel = () => {
			const currentName = window.quizHubPreferences.getQuizMusicName();
			button.setAttribute(
				"aria-label",
				`Choose quiz song (currently ${currentName})`,
			);
			button.title = `Choose quiz song (currently ${currentName})`;
		};
		const discLoadSound = new Audio(
			new URL("./sfx/Confirm.wav", window.location.href).toString(),
		);
		discLoadSound.preload = "auto";
		discLoadSound.volume = 0.55;
		let selectionId = 0;
		let activeCategory = "QuizHub OST";
		let alternateTrack9Held = false;

		document.addEventListener("keydown", (event) => {
			if (event.key.toLowerCase() === "a") alternateTrack9Held = true;
		});
		document.addEventListener("keyup", (event) => {
			if (event.key.toLowerCase() === "a") alternateTrack9Held = false;
		});
		window.addEventListener("blur", () => {
			alternateTrack9Held = false;
		});

		function renderOptions() {
			const selected = window.quizHubPreferences.quizMusic;
			options.replaceChildren();
			categoryTabs.forEach((tab) => {
				const active = tab.dataset.category === activeCategory;
				tab.setAttribute("aria-selected", String(active));
				tab.tabIndex = active ? 0 : -1;
				if (active) {
					options.setAttribute("aria-labelledby", tab.id);
					options.setAttribute(
						"aria-label",
						`${activeCategory} options`,
					);
				}
			});
			const tracks = window.quizHubPreferences.getQuizMusicOptions();
			tracks
				.filter((track) => track.category === activeCategory)
				.forEach((track) => {
					const trackButton = document.createElement("button");
					trackButton.type = "button";
					trackButton.className = "quiz-music-picker-option";
					trackButton.textContent = track.label;
					trackButton.setAttribute(
						"aria-pressed",
						String(track.value === selected),
					);
					trackButton.addEventListener("click", () =>
						selectTrack(track.value, alternateTrack9Held),
					);
					options.append(trackButton);
			});
		}

		function selectCategory(category) {
			activeCategory = category;
			renderOptions();
		}

		function selectTrack(value, useAlternateTrack9 = false) {
			const alternateTrack9 =
				value === "NetHubBonus9" && useAlternateTrack9;
			const reshuffle =
				window.quizHubPreferences.isQuizMusicRotationValue(value) &&
				value === window.quizHubPreferences.quizMusic;
			if (
				value === window.quizHubPreferences.quizMusic &&
				!reshuffle &&
				!alternateTrack9
			) {
				closeDialog();
				return;
			}

			if (!reshuffle) window.quizHubPreferences.setQuizMusic(value);
			updateButtonLabel();
			renderOptions();
			status.textContent = "Loading selected disc…";
			options.querySelectorAll("button").forEach((option) => {
				option.disabled = true;
			});
			const currentSelection = ++selectionId;
			onSelectionStart();

			discLoadSound.src = new URL(
				alternateTrack9 ? "./secret/Loading.mp3" : "./sfx/Confirm.wav",
				window.location.href,
			).toString();
			discLoadSound.load();
			const startSelectedTrack = () => {
				discLoadSound.removeEventListener("ended", startSelectedTrack);
				discLoadSound.removeEventListener("error", startSelectedTrack);
				if (currentSelection !== selectionId) return;
				discLoadSound.pause();
				discLoadSound.currentTime = 0;
				onTrackSelected(
					isMusicEnabled(),
					reshuffle,
					value,
					alternateTrack9,
				);
				closeDialog();
			};
			if (!isSoundEnabled()) {
				startSelectedTrack();
				return;
			}

			discLoadSound.addEventListener("ended", startSelectedTrack);
			discLoadSound.addEventListener("error", startSelectedTrack);
			discLoadSound.currentTime = 0;
			discLoadSound.play().catch((error) => {
				console.warn("Could not play the disc loading sound:", error);
				startSelectedTrack();
			});
		}

		button.addEventListener("click", () => {
			const selectedTrack = window.quizHubPreferences
				.getQuizMusicOptions()
				.find((track) => track.value === window.quizHubPreferences.quizMusic);
			activeCategory = selectedTrack?.category || "QuizHub OST";
			renderOptions();
			status.textContent = "";
			dialog.showModal();
			dialog.querySelector(".quiz-music-picker-option")?.focus();
		});
		categoryTabs.forEach((tab, index) => {
			tab.addEventListener("click", () => selectCategory(tab.dataset.category));
			tab.addEventListener("keydown", (event) => {
				let nextIndex;
				switch (event.key) {
					case "ArrowRight":
						nextIndex = (index + 1) % categoryTabs.length;
						break;
					case "ArrowLeft":
						nextIndex = (index - 1 + categoryTabs.length) % categoryTabs.length;
						break;
					case "Home":
						nextIndex = 0;
						break;
					case "End":
						nextIndex = categoryTabs.length - 1;
						break;
					default:
						return;
				}
				event.preventDefault();
				const nextTab = categoryTabs[nextIndex];
				selectCategory(nextTab.dataset.category);
				nextTab.focus();
			});
		});
		closeButton.addEventListener("click", closeDialog);
		dialog.addEventListener("click", (event) => {
			if (event.target === dialog) closeDialog();
		});
		updateButtonLabel();
	}

	window.QuizHubMusicPicker = { attach };
})();
