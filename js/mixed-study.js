(function (root, factory) {
	const api = factory();
	if (typeof module === "object" && module.exports) module.exports = api;
	if (root) root.QuizHubMixedStudy = api;
})(typeof window === "undefined" ? null : window, function () {
	"use strict";

	const courseNames = {
		CompArch: "Computer Architecture",
		CloudComp: "Cloud Computing",
		SocIndi: "Tech Soc Indi People Can",
		DataSci: "Data Science",
		SoftEngi: "Software Engineering",
		CompGFX: "Computer Graphics",
	};
	const sources = [
		["CompArch", "quiz1", null, "First Slides Practice"],
		["CompArch", "test1", null, "Midterm Practice", true],
		["CloudComp", "quiz1", null, "First Slides Practice"],
		["CloudComp", "quiz2", null, "Week 4 Slides Practice"],
		["CloudComp", "test1", null, "Midterm Practice", true],
		["SocIndi", "textbookQuiz", null, "Textbook Quiz"],
		["SocIndi", "reviewQuiz", "CHAPTER 1", "Chapter 1", true],
		["SocIndi", "reviewQuiz", "CHAPTER 2", "Chapter 2", true],
		["SocIndi", "reviewQuiz", "CHAPTER 4", "Chapter 4", true],
		["SocIndi", "reviewQuiz", "CHAPTER 10", "Chapter 10", true],
		["SocIndi", "reviewQuiz", "Tharakan Article", "Tharakan Article", true],
		["SocIndi", "reviewQuiz", "Young Article", "Young Article", true],
		["SocIndi", "reviewQuiz", "Chapter 1 and 4 Review", "Chapters 1 and 4 Review", true],
		["SocIndi", "reviewQuiz", "Chapter 2 and 10 Review", "Chapters 2 and 10 Review", true],
		["DataSci", "test1", null, "Test 1 Practice", true],
		["SoftEngi", "quiz1", null, "Lectures 1–6 Practice"],
		["CompGFX", "test1", null, "Midterm Practice", true],
	].map(([category, quiz, section, label, midtermReview = false]) => ({
		category,
		quiz,
		...(section ? { section } : {}),
		label,
		midtermReview,
	}));
	const sourceKey = (source) =>
		`${source.category}|${source.quiz}|${source.section || ""}`;
	const catalogByKey = new Map(sources.map((source) => [sourceKey(source), source]));

	function normalizeSources(selected) {
		if (!Array.isArray(selected) || selected.length < 1) {
			throw new Error("Choose at least one question bank.");
		}
		const seen = new Set();
		const normalized = selected.map((source) => {
			if (!source || typeof source !== "object" || Array.isArray(source)) {
				throw new Error("A selected question bank is invalid.");
			}
			const candidate = {
				category: source.category,
				quiz: source.quiz,
				...(typeof source.section === "string" ? { section: source.section } : {}),
			};
			const key = sourceKey(candidate);
			const catalogEntry = catalogByKey.get(key);
			if (!catalogEntry) throw new Error("A selected question bank is not available.");
			if (seen.has(key)) throw new Error("A question bank was selected more than once.");
			seen.add(key);
			return catalogEntry;
		});
		return sources.filter((source) => seen.has(sourceKey(source))).map((source) => ({
			category: source.category,
			quiz: source.quiz,
			...(source.section ? { section: source.section } : {}),
		}));
	}

	function getSourceQuestions(questionBank, source) {
		const course = questionBank[source.category];
		if (!course) return [];
		if (source.category === "SocIndi") {
			if (source.quiz === "textbookQuiz") {
				return Array.isArray(course.textbook) ? course.textbook : [];
			}
			return Array.isArray(course.review?.[source.section])
				? course.review[source.section]
				: [];
		}
		if (Array.isArray(course)) return source.quiz === "test1" ? course : [];
		return Array.isArray(course[source.quiz]) ? course[source.quiz] : [];
	}

	function getPresetSources(preset) {
		if (preset === "none") return [];
		if (preset === "all") {
			return sources.map(({ category, quiz, section }) => ({
				category,
				quiz,
				...(section ? { section } : {}),
			}));
		}
		if (preset === "midterm") {
			return sources
				.filter((source) => source.midtermReview)
				.map(({ category, quiz, section }) => ({
					category,
					quiz,
					...(section ? { section } : {}),
				}));
		}
		throw new Error("Choose a valid Mixed Study preset.");
	}

	function buildQuestionBank(questionBank, selected) {
		const normalized = normalizeSources(selected);
		const combined = [];
		normalized.forEach((source) => {
			const name = courseNames[source.category];
			const questions = getSourceQuestions(questionBank, source);
			if (!questions.length) {
				throw new Error(`No questions are available for ${name}: ${source.quiz}.`);
			}
			questions.forEach((question) => {
				if (
					!question ||
					typeof question.q !== "string" ||
					!Array.isArray(question.a)
				) {
					throw new Error(`A question in ${name} is not formatted correctly.`);
				}
				combined.push({
					...question,
					q: `For ${name}, ${question.q}`,
					mixedSource: {
						category: source.category,
						quiz: source.quiz,
						...(source.section ? { section: source.section } : {}),
					},
				});
			});
		});
		return combined;
	}

	function renderSourceChoices(container, selected = []) {
		const selectedKeys = new Set(
			selected.length ? normalizeSources(selected).map(sourceKey) : [],
		);
		container.replaceChildren();
		const presets = document.createElement("div");
		presets.className = "mixed-source-presets";
		presets.setAttribute("aria-label", "Mixed Study presets");
		[
			["none", "None"],
			["midterm", "Midterm Reviews"],
			["all", "All"],
		].forEach(([preset, label]) => {
			const button = document.createElement("button");
			button.type = "button";
			button.className = "mixed-source-preset";
			button.dataset.preset = preset;
			button.textContent = label;
			button.setAttribute("aria-pressed", "false");
			presets.appendChild(button);
		});
		const options = document.createElement("div");
		options.className = "mixed-source-options";
		sources.forEach((source) => {
			const label = document.createElement("label");
			label.className = "mixed-source-choice";
			const checkbox = document.createElement("input");
			checkbox.type = "checkbox";
			checkbox.value = sourceKey(source);
			checkbox.checked = selectedKeys.has(sourceKey(source));
			checkbox.dataset.category = source.category;
			checkbox.dataset.quiz = source.quiz;
			if (source.section) checkbox.dataset.section = source.section;
			const text = document.createElement("span");
			const title = document.createElement("strong");
			title.textContent = source.label;
			const course = document.createElement("small");
			course.textContent = courseNames[source.category];
			text.append(title, course);
			label.append(checkbox, text);
			options.appendChild(label);
		});
		container.append(presets, options);
		const updatePresetState = () => {
			const checked = new Set(
				[...options.querySelectorAll("input:checked")].map((input) => input.value),
			);
			const allKeys = sources.map(sourceKey);
			const midtermKeys = sources.filter((source) => source.midtermReview).map(sourceKey);
			presets.querySelectorAll("button").forEach((button) => {
				const expected = button.dataset.preset === "none"
					? []
					: button.dataset.preset === "all"
						? allKeys
						: midtermKeys;
				const active = checked.size === expected.length &&
					expected.every((key) => checked.has(key));
				button.setAttribute("aria-pressed", String(active));
			});
		};
		presets.addEventListener("click", (event) => {
			const button = event.target.closest("button[data-preset]");
			if (!button) return;
			const presetSources = getPresetSources(button.dataset.preset);
			const presetKeys = new Set(presetSources.map(sourceKey));
			options.querySelectorAll("input").forEach((input) => {
				input.checked = presetKeys.has(input.value);
			});
			updatePresetState();
		});
		options.addEventListener("change", updatePresetState);
		updatePresetState();
	}

	function readSourceChoices(container) {
		return normalizeSources(
			[...container.querySelectorAll("input[type=checkbox]:checked")].map(
				(input) => ({
					category: input.dataset.category,
					quiz: input.dataset.quiz,
					...(input.dataset.section ? { section: input.dataset.section } : {}),
				}),
			),
		);
	}

	return {
		sources,
		courseNames,
		sourceKey,
		normalizeSources,
		buildQuestionBank,
		getPresetSources,
		renderSourceChoices,
		readSourceChoices,
	};
});
