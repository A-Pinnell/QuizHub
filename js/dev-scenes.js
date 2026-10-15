(function (root, factory) {
	const api = factory();
	if (typeof module === "object" && module.exports) module.exports = api;
	if (root) root.QuizHubDevScenes = api;
})(typeof window === "undefined" ? null : window, function () {
	"use strict";

	const quizCatalog = {
		CompArch: [
			{ id: "quiz1", label: "First Slides Practice", detail: "for Sept 23" },
			{ id: "test1", label: "Midterm Practice", detail: "for Oct 21" },
			{
				id: "binary-quiz",
				label: "Binary Practice",
				detail: "Standalone binary practice",
				external: "binary-quiz.html",
			},
			{
				id: "hexadecimal-quiz",
				label: "Hexadecimal Practice",
				detail: "Standalone hexadecimal practice",
				external: "hexadecimal-quiz.html",
			},
		],
		CloudComp: [
			{ id: "quiz1", label: "First Slides Practice", detail: "for Sept 24" },
			{ id: "quiz2", label: "Week 4 Slides Practice", detail: "for Oct 8" },
			{ id: "test1", label: "Midterm Practice", detail: "for Oct 22" },
		],
		SocIndi: [
			{
				id: "reviewQuiz",
				label: "Exam 1 Quiz",
				detail: "Based on expected Exam 1 material",
			},
			{
				id: "textbookQuiz",
				label: "Textbook Quiz",
				detail: "Based on textbook contents",
			},
		],
		CompGFX: [
			{ id: "test1", label: "Midterm Practice", detail: "for Oct 21" },
			{ id: "lautest", label: "Dr. Lau's Practice", detail: "for Midterm" },
		],
		DataSci: [
			{ id: "test1", label: "Midterm Practice", detail: "for Oct 22" },
			{ id: "lautest", label: "Dr. Lau's Practice", detail: "for Midterm" },
		],
		SoftEngi: [
			{ id: "quiz1", label: "Lectures 1–6 Practice", detail: "Question bank" },
			{ id: "test1", label: "Lectures 1–6 Practice", detail: "for Oct 8" },
		],
	};
	const categoryNames = {
		CompArch: "Computer Architecture",
		CloudComp: "Cloud Computing",
		SocIndi: "Tech Society and Indigenous People",
		CompGFX: "Computer Graphics",
		DataSci: "Data Science",
		SoftEngi: "Software Engineering",
	};
	const pageScenes = [
		{ id: "party-join", label: "Party Join Screen", href: "party-join.html" },
		{ id: "party-lobby", label: "Party Lobby", href: "party-lobby.html" },
		{
			id: "win-passed",
			label: "Win Screen — Passed",
			href: "win.html",
			result: "passed",
		},
		{
			id: "win-failed",
			label: "Win Screen — Failed",
			href: "win.html",
			result: "failed",
		},
		{
			id: "perfect-win",
			label: "Perfect Score Win Screen",
			href: "perfect-win.html",
			result: "perfect",
		},
		{
			id: "party-win",
			label: "Party Win Screen",
			href: "party-win.html",
			result: "party",
		},
		{
			id: "secret-message",
			label: "Secret Message Screen",
			href: "secret-message.html?returnTo=index.html",
		},
		{ id: "dev-menu", label: "Standalone Developer Menu", href: "dev-menu.html" },
	];

	function getSceneGroups() {
		const quizScenes = Object.entries(quizCatalog).flatMap(
			([category, quizzes]) =>
				quizzes.map((quiz) => ({
					id: `quiz:${category}:${quiz.id}`,
					label: `${categoryNames[category]} — ${quiz.label}`,
					category,
					quiz: quiz.id,
					...(quiz.external ? { href: quiz.external } : {}),
				})),
		);
		quizScenes.push({
			id: "quiz:MixedStudy:mixed",
			label: "Mixed Study — Sample Quiz",
			category: "MixedStudy",
			quiz: "mixed",
		});
		const groups = [
			{
				label: "Menu",
				scenes: [
					{ id: "main-menu", label: "Main Menu", href: "index.html" },
					{
						id: "options-menu",
						label: "Options Menu",
						href: "index.html",
					},
				],
			},
			{
				label: "Quizzes",
				scenes: quizScenes,
			},
			{ label: "Other Screens", scenes: pageScenes },
		];
		return groups.map((group) => ({ ...group, scenes: [...group.scenes] }));
	}

	function createResults(kind) {
		if (kind === "perfect") {
			const questionCount = 255;
			return {
				category: "DataSci",
				quizType: "test1",
				longestCombo: questionCount,
				total: questionCount,
				completed: true,
				partyMode: false,
				score: questionCount,
				history: Array.from({ length: questionCount }, (_, questionIndex) => ({
					question: `Sample perfect-run question ${questionIndex + 1}`,
					selected: "Data and information",
					correctAnswer: "Data and information",
					correct: true,
					questionIndex,
				})),
			};
		}
		const base = {
			category: "DataSci",
			quizType: "test1",
			longestCombo: 1,
			total: 2,
			completed: false,
			partyMode: false,
			history: [
				{
					question: "Sample question: What does data science study?",
					selected: "Data and information",
					correctAnswer: "Data and information",
					correct: true,
					questionIndex: 0,
				},
			],
		};
		if (kind === "failed") {
			base.history[0].correct = false;
			base.history[0].selected = "A different answer";
			base.score = 0;
		} else {
			base.history.push({
				question: "Sample question: Is this a preview?",
				selected: "No",
				correctAnswer: "Yes",
				correct: false,
				questionIndex: 1,
			});
			base.score = 1;
		}
		return base;
	}

	function makeTarget(scene, currentUrl) {
		const target = new URL(scene.href || "quiz.html", currentUrl);
		if (scene.id === "options-menu") {
			target.searchParams.set("devScene", "options");
		} else if (scene.id === "main-menu") {
			target.searchParams.delete("devScene");
		} else if (scene.id.startsWith("quiz:")) {
			target.searchParams.set("category", scene.category);
			target.searchParams.set("quiz", scene.quiz);
			if (scene.category === "MixedStudy") {
				target.searchParams.set(
					"mixedSources",
					JSON.stringify([{ category: "CompArch", quiz: "test1" }]),
				);
			}
		} else if (scene.result === "passed" || scene.result === "failed") {
			target.searchParams.set("results", JSON.stringify(createResults(scene.result)));
		} else if (scene.result === "perfect") {
			target.searchParams.set("results", JSON.stringify(createResults("perfect")));
		} else if (scene.result === "party") {
			window.sessionStorage.setItem(
				"lakeheadQuizResults",
				JSON.stringify({
					category: "DataSci",
					quizType: "test1",
					partyMode: true,
					partyCurrentPlayerId: "scene-player-1",
					partyPlayers: [
						{
							id: "scene-player-1",
							name: "Scene Player",
							color: "#e8505b",
							score: 4,
							longestCombo: 2,
						},
						{
							id: "scene-player-2",
							name: "Guest Player",
							color: "#3686e8",
							score: 3,
							longestCombo: 1,
						},
					],
				}),
			);
		}
		return target;
	}

	function navigate(sceneId, currentUrl = window.location.href) {
		const scene = getSceneGroups()
			.flatMap((group) => group.scenes)
			.find((entry) => entry.id === sceneId);
		if (!scene) throw new Error("Choose a valid scene to open.");
		const baseUrl = new URL(".", currentUrl);
		const target = makeTarget(scene, baseUrl);
		window.location.assign(target.href);
	}

	return { getSceneGroups, navigate, quizCatalog };
});
