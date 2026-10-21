(function (root, factory) {
	const api = factory();
	if (typeof module === "object" && module.exports) module.exports = api;
	if (root) {
		root.QuizHubQuizExport = api;
		if (root.document) api.initialize(root);
	}
})(typeof window === "undefined" ? null : window, function () {
	"use strict";

	const pageWidth = 612;
	const pageHeight = 792;
	const margin = 54;
	const contentWidth = pageWidth - margin * 2;
	const lineBottom = 58;
	const courseNames = {
		CompArch: "Computer Architecture · COMP-2453",
		CloudComp: "Cloud Computing · COMP-4312",
		SocIndi: "Technology, Society and Indigenous People · SOCI-2755",
		CompGFX: "Computer Graphics · COMP-4471",
		DataSci: "Data Science · COMP-4112",
		SoftEngi: "Software Engineering · COMP-3415",
	};

	function plainText(value) {
		const replacements = {
			"\u00a0": " ",
			"\u2010": "-",
			"\u2011": "-",
			"\u2012": "-",
			"\u2013": "-",
			"\u2014": "-",
			"\u2212": "-",
			"\u2026": "...",
			"\u2018": "'",
			"\u2019": "'",
			"\u201c": '"',
			"\u201d": '"',
			"\u00d7": "x",
			"\u00f7": "/",
			"\u2192": "->",
			"\u2190": "<-",
			"\u2264": "<=",
			"\u2265": ">=",
			"\u2260": "!=",
			"\u03c0": "pi",
			"\u221a": "sqrt",
			"\u221e": "infinity",
			"\u2022": "-",
			"\u2610": "[ ]",
			"\u2713": "yes",
		};
		return String(value ?? "")
			.replace(/\r\n?/g, "\n")
			.replace(/[^\x00-\x7f]/g, (character) => replacements[character] ?? character)
			.normalize("NFKD")
			.replace(/\p{M}/gu, "")
			.replace(/[^\x20-\x7e\n]/g, "?");
	}

	function escapePdfText(value) {
		return plainText(value).replace(/[\\()]/g, "\\$&").replace(/\n/g, " ");
	}

	function wrapText(value, maxCharacters) {
		const lines = [];
		for (const paragraph of plainText(value).split("\n")) {
			if (!paragraph) {
				lines.push("");
				continue;
			}
			let line = "";
			for (const word of paragraph.split(/\s+/)) {
				if (word.length > maxCharacters) {
					if (line) lines.push(line);
					line = "";
					for (let index = 0; index < word.length; index += maxCharacters) {
						const chunk = word.slice(index, index + maxCharacters);
						if (chunk.length === maxCharacters) lines.push(chunk);
						else line = chunk;
					}
					continue;
				}
				const next = line ? `${line} ${word}` : word;
				if (next.length > maxCharacters) {
					lines.push(line);
					line = word;
				} else {
					line = next;
				}
			}
			if (line) lines.push(line);
		}
		return lines.length ? lines : [""];
	}

	function answerForQuestion(question) {
		const interaction = question?.interaction;
		if (Array.isArray(interaction?.correctTable)) {
			const prefix = interaction.rowPrefix || "Row ";
			return interaction.correctTable
				.map((row, index) => `${prefix}${index}: ${row.join(", ")}`)
				.join("\n");
		}
		if (interaction?.solution !== undefined) {
			return typeof interaction.solution === "string"
				? interaction.solution
				: JSON.stringify(interaction.solution);
		}
		if (
			!Array.isArray(question?.a) ||
			!Number.isInteger(question.c) ||
			question.c < 0 ||
			question.c >= question.a.length
		) {
			throw new Error("A question is missing its correct answer.");
		}
		const answer = question.a[question.c];
		if (typeof answer !== "string" && typeof answer !== "number") {
			throw new Error("A question has an unsupported correct-answer format.");
		}
		return String(answer);
	}

	function addText(operations, x, top, text, size = 10, font = "F1", color = "0 0 0") {
		operations.push(
			`BT /${font} ${size} Tf ${color} rg 1 0 0 1 ${x.toFixed(2)} ${(pageHeight - top).toFixed(2)} Tm (${escapePdfText(text)}) Tj ET`,
		);
	}

	function addRule(operations, x1, top, x2, color = "0.77 0.81 0.84") {
		const y = pageHeight - top;
		operations.push(
			`q ${color} RG 0.7 w ${x1.toFixed(2)} ${y.toFixed(2)} m ${x2.toFixed(2)} ${y.toFixed(2)} l S Q`,
		);
	}

	function makePdfDocument(title, course) {
		const pages = [];
		let page;
		let pageNumber = 0;
		let y = 0;

		function newPage(section, continued = false) {
			pageNumber += 1;
			page = [];
			pages.push(page);
			addText(page, margin, 38, "QUIZHUB  /  EXAM PAPER", 8, "F2", "0.17 0.34 0.38");
			addText(page, margin, 59, title, 17, "F2");
			addText(page, margin, 77, course, 9, "F3", "0.25 0.29 0.32");
			addRule(page, margin, 88, pageWidth - margin, "0.40 0.62 0.64");
			addText(
				page,
				margin,
				108,
				continued ? `${section}  /  CONTINUED` : section,
				10,
				"F2",
				"0.12 0.34 0.38",
			);
			addRule(page, margin, pageHeight - 42, pageWidth - margin);
			addText(page, margin, pageHeight - 27, "QuizHub printable study guide", 8, "F3", "0.35 0.38 0.4");
			addText(page, pageWidth - margin - 44, pageHeight - 27, `PAGE ${pageNumber}`, 8, "F2", "0.35 0.38 0.4");
			y = 124;
		}

		function textBlock(text, x, top, maxCharacters, size, font, color, lineHeight) {
			const lines = wrapText(text, maxCharacters);
			for (const line of lines) {
				addText(page, x, top, line, size, font, color);
				top += lineHeight;
			}
			return top;
		}

		newPage("QUESTIONS");
		addText(page, margin, y, "Name", 9, "F2");
		addRule(page, margin + 35, y + 2, margin + 285);
		addText(page, margin + 310, y, "Date", 9, "F2");
		addRule(page, margin + 340, y + 2, pageWidth - margin);
		y += 31;

		function ensureQuestionSpace(height) {
			if (y + height > pageHeight - 58) {
				newPage("QUESTIONS", true);
			}
		}

		function addQuestion(question, index) {
			const questionLines = wrapText(question.q, 89);
			const optionLines = (question.a || []).flatMap((answer, optionIndex) =>
				wrapText(`${String.fromCharCode(65 + optionIndex)}. ${answer}`, 82),
			);
			const totalHeight =
				questionLines.length * 13 +
				(question.a || []).length * 3 +
				optionLines.length * 12 +
				15;
			ensureQuestionSpace(totalHeight);
			addText(page, margin, y, `${index + 1}.`, 10, "F2", "0.12 0.34 0.38");
			y = textBlock(question.q, margin + 24, y, 89, 10, "F1", "0.08 0.1 0.12", 13);
			y += 3;
			(question.a || []).forEach((answer, optionIndex) => {
				y = textBlock(
					`${String.fromCharCode(65 + optionIndex)}. ${answer}`,
					margin + 32,
					y,
					82,
					9,
					"F1",
					"0.19 0.22 0.24",
					12,
				);
				y += 3;
			});
			y += 9;
			if (y > lineBottom) addRule(page, margin + 24, y - 3, pageWidth - margin, "0.88 0.89 0.9");
		}

		function addAnswerKey(questions) {
			newPage("ANSWER KEY");
			addText(
				page,
				margin,
				y,
				"Correct answers are listed in question order.",
				9,
				"F3",
				"0.25 0.29 0.32",
			);
			y += 24;
			const columnGap = 28;
			const columnWidth = (contentWidth - columnGap) / 2;
			const columns = [margin, margin + columnWidth + columnGap];
			let column = 0;
			for (let index = 0; index < questions.length; index += 1) {
				const question = questions[index];
				const answer = answerForQuestion(question);
				const letter =
					Array.isArray(question.a) && question.a.length > 1
						? `${String.fromCharCode(65 + question.c)}. `
						: "";
				const lines = wrapText(`${index + 1}. ${letter}${answer}`, 43);
				const height = lines.length * 12 + 5;
				if (y + height > pageHeight - 58) {
					if (column === 0) {
						column = 1;
						y = 148;
					} else {
						newPage("ANSWER KEY", true);
						addText(page, margin, y, "Correct answers continued.", 9, "F3", "0.25 0.29 0.32");
						y += 22;
						column = 0;
					}
				}
				let answerY = y;
				for (const line of lines) {
					addText(page, columns[column], answerY, line, 9, "F1", "0.08 0.1 0.12");
					answerY += 12;
				}
				y += height;
			}
		}

		function toBytes() {
			const objects = [];
			objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
			objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>";
			objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>";
			objects[5] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>";
			const pageReferences = [];
			pages.forEach((operations, index) => {
				const pageId = 6 + index * 2;
				const streamId = pageId + 1;
				pageReferences.push(`${pageId} 0 R`);
				const stream = operations.join("\n");
				objects[pageId] =
					`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] ` +
					`/Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents ${streamId} 0 R >>`;
				objects[streamId] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
			});
			objects[2] = `<< /Type /Pages /Kids [${pageReferences.join(" ")}] /Count ${pages.length} >>`;
			let output = "%PDF-1.4\n";
			const offsets = [0];
			for (let id = 1; id < objects.length; id += 1) {
				offsets[id] = output.length;
				output += `${id} 0 obj\n${objects[id]}\nendobj\n`;
			}
			const xrefOffset = output.length;
			output += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
			for (let id = 1; id < objects.length; id += 1) {
				output += `${String(offsets[id]).padStart(10, "0")} 00000 n \n`;
			}
			output += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
			return new TextEncoder().encode(output);
		}

		return { addQuestion, addAnswerKey, toBytes };
	}

	function createPdf(quiz) {
		if (quiz?.downloadable === false) {
			throw new Error("Downloads are disabled for this quiz.");
		}
		if (!quiz || typeof quiz.title !== "string" || !Array.isArray(quiz.questions) || !quiz.questions.length) {
			throw new Error("This quiz does not contain any questions to export.");
		}
		const course = plainText(quiz.courseName || quiz.course || "QuizHub");
		const document = makePdfDocument(plainText(quiz.title), course);
		quiz.questions.forEach((question, index) => {
			if (!question || typeof question.q !== "string" || !Array.isArray(question.a)) {
				throw new Error(`Question ${index + 1} has an unsupported format.`);
			}
			document.addQuestion(question, index);
		});
		document.addAnswerKey(quiz.questions);
		return document.toBytes();
	}

	function createJson(quiz) {
		if (quiz?.downloadable === false) {
			throw new Error("Downloads are disabled for this quiz.");
		}
		return JSON.stringify(
			{
				title: quiz.title,
				course: quiz.courseName || quiz.course || "QuizHub",
				source: quiz.source || "QuizHub",
				questions: quiz.questions.map((question) => ({
					...question,
					correctAnswer: answerForQuestion(question),
				})),
			},
			null,
			2,
		);
	}

	function initialize(windowObject) {
		const document = windowObject.document;
		const modal = document.getElementById("quizExportModal");
		const status = document.getElementById("quizExportStatus");
		const quizHubList = document.getElementById("quizExportQuizHubList");
		const netHubList = document.getElementById("quizExportNetHubList");
		if (!modal || !status || !quizHubList || !netHubList) return;

		let questionBankPromise;
		let activeTab = "quizhub";
		let netHubLoaded = false;

		function loadQuestionBank() {
			if (windowObject.questionBank) return Promise.resolve(windowObject.questionBank);
			if (questionBankPromise) return questionBankPromise;
			questionBankPromise = new Promise((resolve, reject) => {
				const script = document.createElement("script");
				script.src = new URL("./js/questionBank.js", windowObject.location.href).href;
				script.onload = () => {
					if (windowObject.questionBank) resolve(windowObject.questionBank);
					else reject(new Error("QuizHub question data did not load."));
				};
				script.onerror = () => reject(new Error("Could not load QuizHub question data."));
				document.head.appendChild(script);
			}).catch((error) => {
				questionBankPromise = null;
				throw error;
			});
			return questionBankPromise;
		}

		function quizQuestionsFor(bank, course, quizId) {
			const source = bank[course];
			if (!source || typeof source !== "object") return [];
			if (Array.isArray(source[quizId])) return source[quizId];
			if (quizId === "reviewQuiz") {
				if (Array.isArray(source.review)) return source.review;
				if (source.review && typeof source.review === "object") {
					return Object.values(source.review).flat();
				}
			}
			if (quizId === "textbookQuiz") {
				return Array.isArray(source.textbook)
					? source.textbook
					: Array.isArray(source.textbookQuestions)
						? source.textbookQuestions
						: [];
			}
			return [];
		}

		function addMessage(list, message) {
			const element = document.createElement("p");
			element.className = "quiz-export-empty";
			element.textContent = message;
			list.appendChild(element);
		}

		function makeButton(label, handler) {
			const button = document.createElement("button");
			button.type = "button";
			button.className = "net-hub-quiz-action";
			button.textContent = label;
			button.addEventListener("click", handler);
			return button;
		}

		function downloadBlob(blob, filename) {
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.download = filename;
			document.body.appendChild(link);
			link.click();
			link.remove();
			windowObject.setTimeout(() => URL.revokeObjectURL(url), 1000);
		}

		function filenameFor(quiz, extension) {
			const slug = plainText(quiz.title)
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, "-")
				.replace(/^-|-$/g, "") || "quiz";
			return `${slug}.${extension}`;
		}

		async function withButtonStatus(button, action) {
			const originalText = button.textContent;
			button.disabled = true;
			button.textContent = "Preparing...";
			status.textContent = "";
			try {
				await action();
			} catch (error) {
				status.textContent = error.message;
			} finally {
				button.disabled = false;
				button.textContent = originalText;
			}
		}

		function makeQuizCard(quiz, source, downloadable = true) {
			const card = document.createElement("article");
			card.className = "quiz-export-card";
			const details = document.createElement("div");
			const heading = document.createElement("h3");
			heading.textContent = quiz.title;
			const info = document.createElement("p");
			info.textContent = `${quiz.courseName || quiz.course || source} · ${quiz.questions.length} questions`;
			details.append(heading, info);
			card.appendChild(details);
			if (downloadable) {
				const actions = document.createElement("div");
				actions.className = "quiz-export-actions";
				const pdfButton = makeButton("Download PDF", () =>
					withButtonStatus(pdfButton, async () => {
						const bytes = createPdf(quiz);
						downloadBlob(new Blob([bytes], { type: "application/pdf" }), filenameFor(quiz, "pdf"));
						status.textContent = `Downloaded ${quiz.title} as a PDF.`;
					}),
				);
				const jsonButton = makeButton("Download JSON", () =>
					withButtonStatus(jsonButton, async () => {
						const json = createJson(quiz);
						downloadBlob(new Blob([json], { type: "application/json" }), filenameFor(quiz, "json"));
						status.textContent = `Downloaded ${quiz.title} question data.`;
					}),
				);
				actions.append(pdfButton, jsonButton);
				card.appendChild(actions);
			} else {
				const unavailable = document.createElement("p");
				unavailable.className = "quiz-export-empty";
				unavailable.textContent = "Downloads are disabled for this quiz.";
				card.appendChild(unavailable);
			}
			return card;
		}

		async function renderQuizHubList() {
			quizHubList.replaceChildren();
			status.textContent = "Loading QuizHub question banks...";
			try {
				const bank = await loadQuestionBank();
				const catalog = windowObject.QuizHubDevScenes?.quizCatalog;
				if (!catalog) throw new Error("The QuizHub quiz catalog is unavailable.");
				let available = 0;
				Object.entries(catalog).forEach(([course, quizzes]) => {
					const section = document.createElement("section");
					const heading = document.createElement("h3");
					heading.className = "quiz-export-course";
					heading.textContent = courseNames[course] || course;
					section.appendChild(heading);
					quizzes.forEach((entry) => {
						const questions = quizQuestionsFor(bank, course, entry.id);
						if (!questions.length) {
							const item = document.createElement("p");
							item.className = "quiz-export-empty";
							item.textContent = `${entry.label}: no fixed question bank is available to export.`;
							section.appendChild(item);
							return;
						}
						const downloadable = entry.downloadable !== false;
						if (downloadable) available += 1;
						section.appendChild(
							makeQuizCard(
								{
									title: entry.label,
									courseName: courseNames[course] || course,
									source: "QuizHub",
									downloadable,
									questions,
								},
								"QuizHub",
								downloadable,
							),
						);
					});
					quizHubList.appendChild(section);
				});
				status.textContent = `${available} QuizHub question banks available.`;
			} catch (error) {
				status.textContent = error.message;
			}
		}

		async function getNetHubQuizzes() {
			const apiBase = windowObject.QUIZHUB_PARTY_SERVER_URL || windowObject.location.origin;
			const response = await fetch(`${apiBase}/api/nethub/quizzes`);
			let payload;
			try {
				payload = await response.json();
			} catch {
				throw new Error(`NetHub returned an unreadable response (${response.status}).`);
			}
			if (!response.ok) throw new Error(payload.error || `NetHub request failed (${response.status}).`);
			if (!Array.isArray(payload.quizzes)) throw new Error("NetHub returned an invalid quiz list.");
			const quizzes = new Map(payload.quizzes.map((quiz) => [quiz.id, quiz]));
			let localWarning = "";
			try {
				const localQuizzes = JSON.parse(windowObject.localStorage.getItem("quizHubNetHubUserMade") || "[]");
				if (!Array.isArray(localQuizzes)) throw new Error("Saved NetHub quizzes are not a list.");
				localQuizzes.forEach((quiz) => {
					if (quiz?.id && Array.isArray(quiz.questions) && !quizzes.has(quiz.id)) {
						quizzes.set(quiz.id, { ...quiz, author: quiz.author || "Saved on this device" });
					}
				});
			} catch (error) {
				console.error("Could not load saved NetHub quizzes for export:", error);
				localWarning = `Could not read local quizzes: ${error.message}`;
			}
			return { quizzes: [...quizzes.values()], localWarning };
		}

		async function fetchNetHubQuiz(summary) {
			if (Array.isArray(summary.questions)) return summary;
			const apiBase = windowObject.QUIZHUB_PARTY_SERVER_URL || windowObject.location.origin;
			const response = await fetch(`${apiBase}/api/nethub/quizzes/${encodeURIComponent(summary.id)}`);
			let payload;
			try {
				payload = await response.json();
			} catch {
				throw new Error(`NetHub returned an unreadable quiz (${response.status}).`);
			}
			if (!response.ok) throw new Error(payload.error || `Could not load ${summary.title}.`);
			if (!Array.isArray(payload.quiz?.questions)) {
				throw new Error("NetHub returned a quiz without its question data.");
			}
			return payload.quiz;
		}

		async function renderNetHubList() {
			netHubList.replaceChildren();
			status.textContent = "Loading NetHub quizzes...";
			try {
				const { quizzes, localWarning } = await getNetHubQuizzes();
				if (!quizzes.length) {
					status.textContent = "No NetHub quizzes are available to export yet.";
					return;
				}
				quizzes.forEach((quiz) => {
					const card = document.createElement("article");
					card.className = "quiz-export-card";
					const details = document.createElement("div");
					const heading = document.createElement("h3");
					heading.textContent = quiz.title || "Untitled quiz";
					const info = document.createElement("p");
					info.textContent = `${quiz.courseName || quiz.courseKey || "NetHub"} · ${quiz.questionCount || quiz.questions?.length || 0} questions${quiz.author ? ` · ${quiz.author}` : ""}`;
					details.append(heading, info);
					const actions = document.createElement("div");
					actions.className = "quiz-export-actions";
					const exportQuiz = async (format) => {
						const completeQuiz = await fetchNetHubQuiz(quiz);
						const normalized = {
							...completeQuiz,
							source: "NetHub",
							courseName: completeQuiz.courseName || completeQuiz.courseKey || "NetHub",
						};
						if (format === "pdf") {
							downloadBlob(
								new Blob([createPdf(normalized)], { type: "application/pdf" }),
								filenameFor(normalized, "pdf"),
							);
							status.textContent = `Downloaded ${normalized.title} as a PDF.`;
						} else {
							downloadBlob(
								new Blob([createJson(normalized)], { type: "application/json" }),
								filenameFor(normalized, "json"),
							);
							status.textContent = `Downloaded ${normalized.title} question data.`;
						}
					};
					const pdfButton = makeButton("Download PDF", () =>
						withButtonStatus(pdfButton, () => exportQuiz("pdf")),
					);
					const jsonButton = makeButton("Download JSON", () =>
						withButtonStatus(jsonButton, () => exportQuiz("json")),
					);
					actions.append(pdfButton, jsonButton);
					card.append(details, actions);
					netHubList.appendChild(card);
				});
				status.textContent =
					`${quizzes.length} NetHub quiz${quizzes.length === 1 ? "" : "zes"} available.` +
					(localWarning ? ` ${localWarning}` : "");
				netHubLoaded = true;
			} catch (error) {
				status.textContent = error.message;
				netHubLoaded = false;
			}
		}

		function selectTab(tab) {
			activeTab = tab;
			document.querySelectorAll("[data-quiz-export-tab]").forEach((button) => {
				const selected = button.dataset.quizExportTab === tab;
				button.setAttribute("aria-selected", String(selected));
				button.tabIndex = selected ? 0 : -1;
			});
			quizHubList.hidden = tab !== "quizhub";
			netHubList.hidden = tab !== "nethub";
			if (tab === "quizhub" && !quizHubList.childElementCount) {
				renderQuizHubList();
			} else if (tab === "nethub" && !netHubLoaded) {
				renderNetHubList();
			} else {
				status.textContent = "";
			}
		}

		function closeModal() {
			modal.classList.remove("open");
			modal.setAttribute("aria-hidden", "true");
			document.getElementById("quizExportOpenButton")?.focus();
		}

		document.getElementById("quizExportOpenButton")?.addEventListener("click", () => {
			modal.classList.add("open");
			modal.setAttribute("aria-hidden", "false");
			netHubLoaded = false;
			selectTab(activeTab);
			modal.querySelector(".net-hub-close")?.focus();
		});
		modal.querySelectorAll("[data-close-quiz-export]").forEach((element) => {
			element.addEventListener("click", closeModal);
		});
		document.querySelectorAll("[data-quiz-export-tab]").forEach((button) => {
			button.addEventListener("click", () => selectTab(button.dataset.quizExportTab));
		});
		modal.addEventListener("keydown", (event) => {
			if (event.key === "Escape") closeModal();
			if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
				event.preventDefault();
				const nextTab = activeTab === "quizhub" ? "nethub" : "quizhub";
				selectTab(nextTab);
				document.querySelector(`[data-quiz-export-tab="${nextTab}"]`)?.focus();
			}
		});
	}

	return {
		answerForQuestion,
		createJson,
		createPdf,
		initialize,
		plainText,
		wrapText,
	};
});
