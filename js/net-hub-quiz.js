(function () {
	"use strict";

	const params = new URLSearchParams(window.location.search);
	const quizId = params.get("netHubQuiz");
	if (!quizId) return;
	try {
		const quiz = JSON.parse(
			sessionStorage.getItem(`quizHubNetHubQuiz:${quizId}`) || "null",
		);
		if (
			!quiz ||
			typeof quiz.courseKey !== "string" ||
			!Array.isArray(quiz.questions)
		) {
			throw new Error("The uploaded quiz is not available in this browser session.");
		}
		const bank = window.questionBank || (window.questionBank = {});
		const course = bank[quiz.courseKey] || (bank[quiz.courseKey] = {});
		const quizKey = params.get("quiz");
		if (!quizKey || !/^nethub_[a-f0-9]{32}$/.test(quizKey)) {
			throw new Error("The uploaded quiz link is invalid.");
		}
		course[quizKey] = quiz.questions;
		window.quizHubNetHubQuiz = quiz;
		if (quiz.music?.upload && !quiz.music.upload.data) {
			const storageKey = quiz.music.upload.storageKey;
			if (typeof storageKey !== "string" || !window.QuizHubNetHubStorage) {
				throw new Error("The saved quiz music is not available.");
			}
			window.quizHubNetHubMusicPromise = window.QuizHubNetHubStorage
				.getMusicUrl(storageKey)
				.then((sourceUrl) => {
					quiz.music.upload.sourceUrl = sourceUrl;
					return sourceUrl;
				})
				.catch((error) => {
					window.quizHubNetHubQuizError = error.message;
					throw error;
				});
			window.quizHubNetHubMusicPromise.catch(() => {});
		} else {
			window.quizHubNetHubMusicPromise = Promise.resolve();
		}
	} catch (error) {
		console.error("Could not load the NetHub quiz:", error);
		window.quizHubNetHubQuizError = error.message;
	}
})();
