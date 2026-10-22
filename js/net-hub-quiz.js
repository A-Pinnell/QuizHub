(function () {
	"use strict";

	async function loadNetHubQuiz() {
		const params = new URLSearchParams(window.location.search);
		const quizId = params.get("netHubQuiz");
		if (!quizId) return;
		const quizKey = params.get("quiz");
		if (
			!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(quizId) ||
			!quizKey ||
			!/^nethub_[a-f0-9]{32}$/.test(quizKey)
		) {
			throw new Error("The uploaded quiz link is invalid.");
		}

		let quiz = null;
		if (params.get("partyMode") !== "true") {
			try {
				quiz = JSON.parse(
					sessionStorage.getItem(`quizHubNetHubQuiz:${quizId}`) || "null",
				);
			} catch (error) {
				console.error("Could not restore the saved NetHub quiz:", error);
			}
		}
		if (
			!quiz ||
			typeof quiz.courseKey !== "string" ||
			!Array.isArray(quiz.questions)
		) {
			const localHosts = new Set(["localhost", "127.0.0.1", "::1"]);
			const apiBase = window.QUIZHUB_PARTY_SERVER_URL ||
				(localHosts.has(window.location.hostname)
					? window.location.origin
					: "https://quizhub-party-server.onrender.com");
			const response = await fetch(
				`${apiBase}/api/nethub/quizzes/${encodeURIComponent(quizId)}`,
				{ cache: "no-store" },
			);
			const payload = await response.json();
			if (!response.ok) {
				throw new Error(payload.error || "Could not load the uploaded quiz.");
			}
			quiz = payload.quiz;
		}
		if (
			!quiz ||
			typeof quiz.courseKey !== "string" ||
			!Array.isArray(quiz.questions)
		) {
			throw new Error("The uploaded quiz data is invalid.");
		}

		const bank = window.questionBank || (window.questionBank = {});
		const category = params.get("category") === "NetHub" ? "NetHub" : quiz.courseKey;
		const course = bank[category] || (bank[category] = {});
		course[quizKey] = quiz.questions;
		window.quizHubNetHubQuiz = quiz;
		if (quiz.music?.upload && !quiz.music.upload.data) {
			const storageKey = quiz.music.upload.storageKey;
			if (typeof storageKey !== "string" || !window.QuizHubNetHubStorage) {
				throw new Error("The saved quiz music is not available on this device.");
			}
			quiz.music.upload.sourceUrl = await window.QuizHubNetHubStorage.getMusicUrl(storageKey);
		}
	}

	window.quizHubNetHubQuizPromise = loadNetHubQuiz().catch((error) => {
		console.error("Could not load the NetHub quiz:", error);
		window.quizHubNetHubQuizError = error.message;
	});
})();
