(function () {
	"use strict";

	async function startQuiz() {
		await window.quizHubNetHubQuizPromise;
		if (window.quizHubNetHubQuizError) {
			const message = document.createElement("p");
			message.setAttribute("role", "alert");
			message.textContent = `Could not load this NetHub quiz: ${window.quizHubNetHubQuizError}`;
			Object.assign(message.style, {
				fontFamily: "system-ui, sans-serif",
				fontSize: "1.25rem",
				margin: "15vh auto",
				maxWidth: "40rem",
				padding: "2rem",
				textAlign: "center",
			});
			document.body.replaceChildren(message);
			return;
		}

		const script = document.createElement("script");
		script.src = "./js/quiz.js?v=party-score-fade-uploaded-music-blob-url";
		script.addEventListener("error", () => {
			console.error("Could not load the quiz runtime.");
		});
		document.body.appendChild(script);
	}

	startQuiz().catch((error) => {
		console.error("Could not start the quiz:", error);
	});
})();
