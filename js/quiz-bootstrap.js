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

		await new Promise((resolve, reject) => {
			const quickBankScript = document.createElement("script");
			quickBankScript.src = "./js/questionBank-Quick.js?v=quick-play-bank-v4";
			quickBankScript.addEventListener("load", resolve, { once: true });
			quickBankScript.addEventListener(
				"error",
				() => reject(new Error("Could not load the Quick Play question bank.")),
				{ once: true },
			);
			document.head.appendChild(quickBankScript);
		});

		await new Promise((resolve, reject) => {
			const script = document.createElement("script");
			script.src = "./js/quiz.js?v=quick-play-bank-v4";
			script.addEventListener("load", resolve, { once: true });
			script.addEventListener(
				"error",
				() => reject(new Error("Could not load the quiz runtime.")),
				{ once: true },
			);
			document.body.appendChild(script);
		});
	}

	startQuiz().catch((error) => {
		console.error("Could not start the quiz:", error);
		const message = document.createElement("p");
		message.setAttribute("role", "alert");
		message.textContent = `Could not start the quiz: ${error.message}`;
		Object.assign(message.style, {
			fontFamily: "system-ui, sans-serif",
			fontSize: "1.25rem",
			margin: "15vh auto",
			maxWidth: "40rem",
			padding: "2rem",
			textAlign: "center",
		});
		document.body.replaceChildren(message);
	});
})();
