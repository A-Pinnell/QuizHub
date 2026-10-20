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
			<div class="quiz-music-picker-options" role="group" aria-label="Available quiz songs"></div>
			<p class="quiz-music-picker-status" aria-live="polite"></p>
		`;
		document.body.append(dialog);

		const options = dialog.querySelector(".quiz-music-picker-options");
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

		function renderOptions() {
			const selected = window.quizHubPreferences.quizMusic;
			options.replaceChildren();
			window.quizHubPreferences.getQuizMusicOptions().forEach((track) => {
				const trackButton = document.createElement("button");
				trackButton.type = "button";
				trackButton.className = "quiz-music-picker-option";
				trackButton.textContent = track.label;
				trackButton.setAttribute(
					"aria-pressed",
					String(track.value === selected),
				);
				trackButton.addEventListener("click", () => selectTrack(track.value));
				options.append(trackButton);
			});
		}

		function selectTrack(value) {
			if (value === window.quizHubPreferences.quizMusic) {
				closeDialog();
				return;
			}

			window.quizHubPreferences.setQuizMusic(value);
			updateButtonLabel();
			renderOptions();
			status.textContent = "Loading selected disc…";
			options.querySelectorAll("button").forEach((option) => {
				option.disabled = true;
			});
			const currentSelection = ++selectionId;
			onSelectionStart();

			const startSelectedTrack = () => {
				discLoadSound.removeEventListener("ended", startSelectedTrack);
				discLoadSound.removeEventListener("error", startSelectedTrack);
				if (currentSelection !== selectionId) return;
				discLoadSound.pause();
				discLoadSound.currentTime = 0;
				onTrackSelected(isMusicEnabled());
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
			renderOptions();
			status.textContent = "";
			dialog.showModal();
			dialog.querySelector(".quiz-music-picker-option")?.focus();
		});
		closeButton.addEventListener("click", closeDialog);
		dialog.addEventListener("click", (event) => {
			if (event.target === dialog) closeDialog();
		});
		updateButtonLabel();
	}

	window.QuizHubMusicPicker = { attach };
})();
