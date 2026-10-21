(function () {
	"use strict";

	const apiBase = window.QUIZHUB_PARTY_SERVER_URL || window.location.origin;
	const accountTokenKey = "quizHubNetHubToken";
	const accountNameKey = "quizHubNetHubUsername";
	const userMadeKey = "quizHubNetHubUserMade";
	const courseNames = {
		CompArch: "Intro Comp Arch",
		CompGFX: "Computer Graphics",
		SocIndi: "Tech Soc Indi People Can",
		CloudComp: "Cloud Computing",
		DataSci: "Intro Data Science",
		SoftEngi: "Software Engineering",
	};
	const createModal = document.getElementById("netHubCreateModal");
	const browseModal = document.getElementById("netHubBrowseModal");
	const codeStream = document.getElementById("netHubCodeStream");
	const accountModal = document.getElementById("netHubAccountModal");
	const createForm = document.getElementById("netHubCreateForm");
	const createStatus = document.getElementById("netHubCreateStatus");
	const browseStatus = document.getElementById("netHubBrowseStatus");
	const accountStatus = document.getElementById("netHubAccountStatus");
	const accountDashboard = document.getElementById("netHubAccountDashboard");
	const signInForm = document.getElementById("netHubSignInForm");
	const quizList = document.getElementById("netHubQuizList");
	const myQuizList = document.getElementById("netHubMyQuizList");
	const courseSelect = document.getElementById("netHubCourse");
	const newCourseField = document.getElementById("netHubNewCourseField");
	const newCourseInput = document.getElementById("netHubNewCourseName");
	const promptField = document.getElementById("netHubPrompt");
	const pastedQuestions = document.getElementById("netHubQuestions");
	const uploadButton = document.getElementById("netHubUploadButton");
	const musicTrackSelect = document.getElementById("netHubMusicTrack");
	const musicFileInput = document.getElementById("netHubMusicFile");
	const musicStatus = document.getElementById("netHubMusicStatus");
	const musicPreviewButton = document.getElementById("netHubMusicPreview");
	const maxQuizMusicBytes = 10 * 1024 * 1024;
	let activeBrowseTab = "community";
	let editingQuizId = "";
	let existingUploadedMusic = null;
	let musicPreview = null;
	let codeStreamTimer = null;
	let codeStreamRun = 0;
	const netHubCodeLines = [
		"const network = await NetHub.connect();",
		"const peers = await network.discover();",
		"interface QuizNode {",
		"  id: string;",
		"  owner: PeerAddress;",
		"  questions: Question[];",
		"  sharedAt: Timestamp;",
		"}",
		"",
		"for await (const peer of peers) {",
		"  const signal = await peer.ping();",
		"  if (!signal.available) continue;",
		"",
		"  const channel = peer.openChannel({",
		'    protocol: "quizhub/1",',
		"    encrypted: true,",
		"  });",
		"",
		"  channel.on('quiz:published', (event) => {",
		"    index.add(event.quiz);",
		"    graph.link(peer.id, event.quiz.id);",
		"  });",
		"}",
		"",
		"await index.sync({ scope: 'community' });",
		"status = 'connected';",
	];

	function stopCodeStream() {
		codeStreamRun += 1;
		if (codeStreamTimer !== null) {
			window.clearTimeout(codeStreamTimer);
			codeStreamTimer = null;
		}
	}

	function startCodeStream() {
		if (!codeStream) return;
		stopCodeStream();
		const run = codeStreamRun;
		const fullText = netHubCodeLines.join("\n");
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			codeStream.textContent = fullText;
			return;
		}
		codeStream.textContent = "";
		let lineIndex = 0;
		let characterIndex = 0;
		let scrollOnLineStart = false;
		function typeNext() {
			if (run !== codeStreamRun || !browseModal.classList.contains("open")) return;
			const line = netHubCodeLines[lineIndex];
			if (characterIndex < line.length) {
				codeStream.textContent += line[characterIndex];
				characterIndex += 1;
				if (scrollOnLineStart) {
					scrollOnLineStart = false;
					codeStream.parentElement.scrollTo({
						top: codeStream.parentElement.scrollHeight,
						behavior: "smooth",
					});
				}
				codeStreamTimer = window.setTimeout(typeNext, 34);
				return;
			}
			if (lineIndex < netHubCodeLines.length - 1) {
				codeStream.textContent += "\n";
				lineIndex += 1;
				characterIndex = 0;
				scrollOnLineStart = true;
				codeStreamTimer = window.setTimeout(typeNext, 430);
				return;
			}
			codeStreamTimer = window.setTimeout(() => {
				if (run !== codeStreamRun) return;
				codeStream.textContent = "";
				codeStream.parentElement.scrollTop = 0;
				lineIndex = 0;
				characterIndex = 0;
				scrollOnLineStart = false;
				codeStreamTimer = window.setTimeout(typeNext, 700);
			}, 4200);
		}
		typeNext();
	}

	const defaultCourseMusic = {
		CompArch: "./music/QuizMusic.wav",
		CompGFX: "./music/CompGFXMusic.wav",
		SocIndi: "./music/SocIndiMusic.wav",
		CloudComp: "./music/CloudCompMusic.wav",
		DataSci: "./music/DataSciMusic.wav",
		SoftEngi: "./music/SoftEngiMusic.wav",
	};

	function populateMusicTracks() {
		const preferences = window.quizHubPreferences;
		if (!preferences || !musicTrackSelect) return;
		musicTrackSelect.replaceChildren();
		preferences
			.getQuizMusicOptions()
			.filter((track) => !["rotation", "run"].includes(track.value))
			.forEach((track) => {
				const option = document.createElement("option");
				option.value = track.value;
				option.textContent = track.label;
				musicTrackSelect.appendChild(option);
			});
	}

	function stopMusicPreview() {
		if (!musicPreview) return;
		musicPreview.pause();
		musicPreview.currentTime = 0;
		if (musicPreview.src.startsWith("blob:"))
			URL.revokeObjectURL(musicPreview.src);
		musicPreview = null;
		musicPreviewButton.textContent = "Preview music";
		window.dispatchEvent(
			new CustomEvent("quizhub:nethubmusicpreview", {
				detail: { active: false },
			}),
		);
	}

	function selectedMusicSource() {
		const selectedFile = musicFileInput.files?.[0];
		if (selectedFile) return URL.createObjectURL(selectedFile);
		if (
			musicTrackSelect.value === "__uploaded" &&
			existingUploadedMusic?.data
		) {
			return existingUploadedMusic.data;
		}
		const defaultPath =
			defaultCourseMusic[courseSelect.value] || "./music/QuizMusic.wav";
		return window.quizHubPreferences.resolveQuizMusic(
			new URL(defaultPath, location.href).toString(),
			musicTrackSelect.value,
		);
	}

	function readSelectedMusic() {
		const file = musicFileInput.files?.[0];
		if (!file) {
			if (musicTrackSelect.value === "__uploaded" && existingUploadedMusic) {
				return Promise.resolve({ upload: existingUploadedMusic });
			}
			return Promise.resolve({ track: musicTrackSelect.value });
		}
		if (file.size > maxQuizMusicBytes) {
			return Promise.reject(
				new Error("Choose an MP3 or WAV file up to 10 MB."),
			);
		}
		const extension = file.name.toLowerCase().split(".").pop();
		const type =
			extension === "mp3"
				? "audio/mpeg"
				: extension === "wav"
					? "audio/wav"
					: "";
		if (!type) {
			return Promise.reject(
				new Error("Only MP3 and WAV music files are supported."),
			);
		}
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onerror = () =>
				reject(new Error("Could not read the selected music file."));
			reader.onload = () => {
				if (!(reader.result instanceof ArrayBuffer)) {
					reject(new Error("The selected music file could not be read."));
					return;
				}
				const bytes = new Uint8Array(reader.result);
				const isWav =
					type === "audio/wav" &&
					bytes.length >= 12 &&
					String.fromCharCode(...bytes.subarray(0, 4)) === "RIFF" &&
					String.fromCharCode(...bytes.subarray(8, 12)) === "WAVE";
				const isMp3 =
					type === "audio/mpeg" &&
					bytes.length >= 2 &&
					(String.fromCharCode(...bytes.subarray(0, 3)) === "ID3" ||
						(bytes[0] === 0xff && (bytes[1] & 0xe0) === 0xe0));
				if (!isWav && !isMp3) {
					reject(new Error("Choose a valid MP3 or WAV audio file."));
					return;
				}
				let binary = "";
				for (let offset = 0; offset < bytes.length; offset += 0x8000) {
					binary += String.fromCharCode(
						...bytes.subarray(offset, offset + 0x8000),
					);
				}
				resolve({
					upload: {
						name: file.name.slice(0, 120),
						type,
						data: `data:${type};base64,${btoa(binary)}`,
					},
				});
			};
			reader.readAsArrayBuffer(file);
		});
	}

	musicTrackSelect.addEventListener("change", () => {
		stopMusicPreview();
		if (musicTrackSelect.value !== "__uploaded") {
			existingUploadedMusic = null;
			musicTrackSelect.querySelector('option[value="__uploaded"]')?.remove();
			musicStatus.textContent = "The selected QuizHub track will be used.";
		} else {
			musicStatus.textContent = "Existing uploaded music will be kept.";
		}
	});
	musicFileInput.addEventListener("change", () => {
		stopMusicPreview();
		const file = musicFileInput.files?.[0];
		if (!file) {
			musicStatus.textContent = existingUploadedMusic
				? "Existing uploaded music will be kept."
				: "Use the selected QuizHub track.";
			return;
		}
		const extension = file.name.toLowerCase().split(".").pop();
		if (file.size > maxQuizMusicBytes) {
			musicStatus.textContent = "Choose an MP3 or WAV file up to 10 MB.";
			musicFileInput.value = "";
			return;
		}
		if (!["mp3", "wav"].includes(extension)) {
			musicStatus.textContent = "Only MP3 and WAV music files are supported.";
			musicFileInput.value = "";
			return;
		}
		existingUploadedMusic = null;
		if (musicTrackSelect.value === "__uploaded")
			musicTrackSelect.value = "default";
		musicTrackSelect.querySelector('option[value="__uploaded"]')?.remove();
		musicStatus.textContent = `${file.name} (${(file.size / 1024).toFixed(0)} KB)`;
	});
	musicPreviewButton.addEventListener("click", async () => {
		if (musicPreview) {
			stopMusicPreview();
			return;
		}
		try {
			musicPreview = new Audio(selectedMusicSource());
			const isUploadedMusic =
				Boolean(musicFileInput.files?.[0]) ||
				musicTrackSelect.value === "__uploaded";
			musicPreview.volume = 0.45 * (isUploadedMusic ? 10 ** (-12 / 20) : 1);
			musicPreview.addEventListener("ended", stopMusicPreview, { once: true });
			musicPreviewButton.textContent = "Stop preview";
			musicStatus.textContent = "Previewing selected music.";
			window.dispatchEvent(
				new CustomEvent("quizhub:nethubmusicpreview", {
					detail: { active: true },
				}),
			);
			await musicPreview.play();
		} catch (error) {
			stopMusicPreview();
			musicStatus.textContent = `Could not preview music: ${error.message}`;
		}
	});

	function apiUrl(path) {
		return `${apiBase}${path}`;
	}

	async function request(path, options = {}) {
		let response;
		try {
			response = await fetch(apiUrl(path), {
				...options,
				headers: {
					...(options.body ? { "Content-Type": "application/json" } : {}),
					...(localStorage.getItem(accountTokenKey)
						? {
								Authorization: `Bearer ${localStorage.getItem(accountTokenKey)}`,
							}
						: {}),
					...options.headers,
				},
			});
		} catch (error) {
			throw new Error(`Could not reach NetHub: ${error.message}`);
		}
		let payload;
		try {
			payload = await response.json();
		} catch {
			throw new Error(
				`NetHub returned an unreadable response (${response.status}).`,
			);
		}
		if (!response.ok)
			throw new Error(
				payload.error || `NetHub request failed (${response.status}).`,
			);
		return payload;
	}

	function openModal(modal, initialFocus) {
		modal.classList.add("open");
		modal.setAttribute("aria-hidden", "false");
		if (modal === browseModal) startCodeStream();
		document.body.classList.add("net-hub-open");
		const theme =
			modal === createModal ? "create" : modal === browseModal ? "nethub" : "";
		window.dispatchEvent(
			new CustomEvent("quizhub:menuthemechange", { detail: { theme } }),
		);
		requestAnimationFrame(() => initialFocus?.focus());
	}

	function closeModals() {
		stopCodeStream();
		stopMusicPreview();
		document.querySelectorAll(".net-hub-modal.open").forEach((modal) => {
			modal.classList.remove("open");
			modal.setAttribute("aria-hidden", "true");
		});
		document.body.classList.remove("net-hub-open");
		window.dispatchEvent(
			new CustomEvent("quizhub:menuthemechange", { detail: { theme: "" } }),
		);
	}

	function showCreateModal(quiz = null) {
		editingQuizId = quiz?.id || "";
		createForm.reset();
		stopMusicPreview();
		existingUploadedMusic = quiz?.music?.upload || null;
		musicTrackSelect.replaceChildren();
		populateMusicTracks();
		if (existingUploadedMusic) {
			const option = document.createElement("option");
			option.value = "__uploaded";
			option.textContent = `Uploaded: ${existingUploadedMusic.name}`;
			musicTrackSelect.appendChild(option);
			musicTrackSelect.value = "__uploaded";
			musicStatus.textContent = "Existing uploaded music will be kept.";
		} else {
			musicTrackSelect.value = "default";
			musicStatus.textContent = "Use the selected course’s default music.";
		}
		createStatus.textContent = "";
		document.getElementById("netHubUsername").value =
			localStorage.getItem(accountNameKey) || "";
		pastedQuestions.value = quiz ? JSON.stringify(quiz.questions, null, 2) : "";
		document.getElementById("netHubQuizTitle").value = quiz?.title || "";
		document.getElementById("netHubShortAnswer").checked =
			quiz?.allowShortAnswer === true;
		if (quiz?.courseKey && courseNames[quiz.courseKey]) {
			courseSelect.value = quiz.courseKey;
			newCourseInput.value = "";
		} else if (quiz?.courseName) {
			courseSelect.value = "__new";
			newCourseInput.value = quiz.courseName;
		}
		document.querySelectorAll('input[name="netHubTheme"]').forEach((input) => {
			input.checked = input.value === (quiz?.theme || "quizhub");
		});
		document.getElementById("netHubCreateTitle").textContent = quiz
			? "Edit Your Quiz"
			: "Create a Quiz";
		uploadButton.textContent = quiz ? "Save Quiz" : "Upload to NetHub";
		syncNewCourseField();
		updatePrompt();
		closeModals();
		openModal(createModal, document.getElementById("netHubQuizTitle"));
	}

	function syncNewCourseField() {
		const isNewCourse = courseSelect.value === "__new";
		newCourseField.hidden = !isNewCourse;
		newCourseInput.required = isNewCourse;
	}

	function selectedCourseName() {
		return courseSelect.value === "__new"
			? newCourseInput.value.trim() || "your new course"
			: courseNames[courseSelect.value] || courseSelect.value;
	}

	function updatePrompt() {
		const theme =
			document.querySelector('input[name="netHubTheme"]:checked')?.value ||
			"quizhub";
		const allowShortAnswer =
			document.getElementById("netHubShortAnswer").checked;
		const title =
			document.getElementById("netHubQuizTitle").value.trim() || "your quiz";
		const prompt = [
			`Create a JavaScript array of 8–15 multiple-choice questions for the QuizHub quiz "${title}", for ${selectedCourseName()}.`,
			"Use accurate, clear questions and four concise answer choices per question. Exactly one answer must be correct.",
			"Return only a JavaScript array literal. Do not include a variable declaration, Markdown fences, explanation, functions, or executable code.",
			"Match this QuizHub questionBank format exactly:",
			'[{ q: "Question text", a: ["Choice A", "Choice B", "Choice C", "Choice D"], c: 0 }]',
			"Each object must have q (question string), a (array of 2–4 answer strings), and c (zero-based index of the correct choice).",
			'Optional supported fields: i or image for a relative image path or HTTPS image URL; interaction for supported interactive formats, including mesh-table.',
			'For vertex tables, use interaction: { type: "mesh-table", table: "vertices", rowPrefix: "v", columnHeaders: ["X", "Y", "Z"], correctTable: [["0", "0", "0"]] }. For face tables, use table: "faces", rowPrefix: "f", one column header, and comma-separated vertex IDs in each row.',
			allowShortAnswer
				? "Make the correct answer understandable as a short written response too, since players may choose written or mixed presentation."
				: "The quiz is multiple choice only.",
			`Requested QuizHub theme: ${theme}.`,
			"Do not add HTML, executable code, or unrelated links. Include no optional fields unless they are supported by QuizHub.",
		].join("\n");
		promptField.value = prompt;
	}

	function parseQuestionArray(source) {
		let position = 0;
		function skipSpace() {
			while (position < source.length) {
				if (/\s/.test(source[position])) {
					position++;
				} else if (source.startsWith("//", position)) {
					const newline = source.indexOf("\n", position + 2);
					position = newline === -1 ? source.length : newline + 1;
				} else if (source.startsWith("/*", position)) {
					const end = source.indexOf("*/", position + 2);
					if (end === -1)
						throw new Error("A JavaScript comment is not closed.");
					position = end + 2;
				} else {
					break;
				}
			}
		}
		function expect(character) {
			skipSpace();
			if (source[position] !== character) {
				throw new Error(
					`Expected "${character}" near character ${position + 1}.`,
				);
			}
			position++;
		}
		function readString() {
			const quote = source[position++];
			let value = "";
			while (position < source.length) {
				const character = source[position++];
				if (character === quote) return value;
				if (character !== "\\") {
					value += character;
					continue;
				}
				if (position >= source.length)
					throw new Error("A string escape is incomplete.");
				const escaped = source[position++];
				const escapes = {
					n: "\n",
					r: "\r",
					t: "\t",
					b: "\b",
					f: "\f",
					v: "\v",
					0: "\0",
				};
				if (escaped === "u") {
					const code = source.slice(position, position + 4);
					if (!/^[0-9a-f]{4}$/i.test(code))
						throw new Error("A Unicode escape is invalid.");
					value += String.fromCharCode(Number.parseInt(code, 16));
					position += 4;
				} else if (escaped === "x") {
					const code = source.slice(position, position + 2);
					if (!/^[0-9a-f]{2}$/i.test(code))
						throw new Error("A hexadecimal escape is invalid.");
					value += String.fromCharCode(Number.parseInt(code, 16));
					position += 2;
				} else {
					value += escapes[escaped] ?? escaped;
				}
			}
			throw new Error("A string is not closed.");
		}
		function readIdentifier() {
			const match = /^[A-Za-z_$][\w$]*/.exec(source.slice(position));
			if (!match)
				throw new Error(`Expected a value near character ${position + 1}.`);
			position += match[0].length;
			return match[0];
		}
		function readValue(depth = 0) {
			if (depth > 20) throw new Error("Question data is nested too deeply.");
			skipSpace();
			const character = source[position];
			if (character === "'" || character === '"') return readString();
			if (character === "[") {
				position++;
				const values = [];
				skipSpace();
				while (source[position] !== "]") {
					if (position >= source.length)
						throw new Error("An array is not closed.");
					values.push(readValue(depth + 1));
					skipSpace();
					if (source[position] === "]") break;
					expect(",");
					skipSpace();
					if (source[position] === "]") break;
				}
				expect("]");
				return values;
			}
			if (character === "{") {
				position++;
				const object = Object.create(null);
				skipSpace();
				while (source[position] !== "}") {
					if (position >= source.length)
						throw new Error("An object is not closed.");
					const key =
						source[position] === "'" || source[position] === '"'
							? readString()
							: readIdentifier();
					if (["__proto__", "prototype", "constructor"].includes(key)) {
						throw new Error("That object key is not allowed.");
					}
					expect(":");
					object[key] = readValue(depth + 1);
					skipSpace();
					if (source[position] === "}") break;
					expect(",");
					skipSpace();
					if (source[position] === "}") break;
				}
				expect("}");
				return object;
			}
			const number = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?/.exec(
				source.slice(position),
			);
			if (number) {
				position += number[0].length;
				return Number(number[0]);
			}
			const identifier = readIdentifier();
			if (identifier === "true") return true;
			if (identifier === "false") return false;
			if (identifier === "null") return null;
			throw new Error(`Executable JavaScript is not accepted (${identifier}).`);
		}
		skipSpace();
		const value = readValue();
		skipSpace();
		if (source[position] === ";") {
			position++;
			skipSpace();
		}
		if (position !== source.length) {
			throw new Error(
				`Only a JavaScript array literal is accepted (unexpected text near character ${position + 1}).`,
			);
		}
		if (!Array.isArray(value) || value.length < 1 || value.length > 250) {
			throw new Error("Paste an array containing 1–250 question objects.");
		}
		return value.map((question, index) => {
			if (
				!question ||
				typeof question !== "object" ||
				Array.isArray(question)
			) {
				throw new Error(`Question ${index + 1} must be an object.`);
			}
			const q = typeof question.q === "string" ? question.q.trim() : "";
			const answers = question.a;
			if (!q || q.length > 1200) {
				throw new Error(
					`Question ${index + 1} needs text (up to 1,200 characters).`,
				);
			}
			if (
				!Array.isArray(answers) ||
				answers.length < 2 ||
				answers.length > 4 ||
				!answers.every(
					(answer) =>
						typeof answer === "string" && answer.trim() && answer.length <= 300,
				)
			) {
				throw new Error(
					`Question ${index + 1} needs 2–4 answer choices, each up to 300 characters.`,
				);
			}
			if (
				!Number.isInteger(question.c) ||
				question.c < 0 ||
				question.c >= answers.length
			) {
				throw new Error(
					`Question ${index + 1} has an invalid correct-answer index.`,
				);
			}
			const cleanQuestion = {
				q,
				a: answers.map((answer) => answer.trim()),
				c: question.c,
			};
			for (const imageKey of ["i", "image"]) {
				if (question[imageKey] === undefined) continue;
				if (
					typeof question[imageKey] !== "string" ||
					!question[imageKey].trim() ||
					question[imageKey].length > 2048
				) {
					throw new Error(`Question ${index + 1} has an invalid image URL.`);
				}
				cleanQuestion[imageKey] = question[imageKey].trim();
			}
			if (question.interaction !== undefined) {
				if (
					!question.interaction ||
					typeof question.interaction !== "object" ||
					Array.isArray(question.interaction)
				) {
					throw new Error(`Question ${index + 1} has invalid interaction data.`);
				}
				cleanQuestion.interaction = question.interaction;
			}
			return cleanQuestion;
		});
	}

	function selectedTheme() {
		return (
			document.querySelector('input[name="netHubTheme"]:checked')?.value ||
			"quizhub"
		);
	}

	function currentQuizPayload(questions, music) {
		const title = document.getElementById("netHubQuizTitle").value.trim();
		const newCourse = courseSelect.value === "__new";
		const courseKey = newCourse
			? `UserCourse_${crypto.randomUUID().replaceAll("-", "")}`
			: courseSelect.value;
		return {
			title,
			courseKey,
			courseName: newCourse
				? newCourseInput.value.trim()
				: courseNames[courseKey],
			theme: selectedTheme(),
			allowShortAnswer: document.getElementById("netHubShortAnswer").checked,
			music,
			questions,
		};
	}

	function saveAccount(payload) {
		localStorage.setItem(accountTokenKey, payload.token);
		localStorage.setItem(accountNameKey, payload.username);
	}

	async function authenticate(username, pin) {
		const result = await request("/api/nethub/auth", {
			method: "POST",
			body: JSON.stringify({ username, pin }),
		});
		saveAccount(result);
		return result;
	}

	function setBrowseTab(tab) {
		activeBrowseTab = tab;
		document.querySelectorAll("[data-net-hub-tab]").forEach((button) => {
			button.classList.toggle("active", button.dataset.netHubTab === tab);
			button.setAttribute(
				"aria-pressed",
				String(button.dataset.netHubTab === tab),
			);
		});
		renderBrowseList();
	}

	function getUserMadeQuizzes() {
		try {
			const quizzes = JSON.parse(localStorage.getItem(userMadeKey) || "[]");
			return Array.isArray(quizzes) ? quizzes : [];
		} catch (error) {
			console.error("Could not read saved NetHub quizzes:", error);
			browseStatus.textContent = `Could not load quizzes saved on this device: ${error.message}`;
			return [];
		}
	}

	function updateUserMadeTab() {
		document.getElementById("netHubUserMadeTab").hidden =
			getUserMadeQuizzes().length === 0;
	}

	function renderQuizCard(quiz, { owned = false, local = false } = {}) {
		const card = document.createElement("article");
		card.className = "net-hub-quiz-card";
		const title = document.createElement("h3");
		title.textContent = quiz.title;
		const metadata = document.createElement("p");
		metadata.textContent = `${quiz.courseName} · ${quiz.questionCount || quiz.questions?.length || 0} questions · ${quiz.author || "Saved on this device"}`;
		const theme = document.createElement("p");
		theme.textContent = `Theme: ${quiz.theme}${quiz.allowShortAnswer ? " · Short answers allowed" : ""}`;
		const actions = document.createElement("div");
		actions.className = "net-hub-quiz-actions";
		const addAction = (label, callback, className = "") => {
			const button = document.createElement("button");
			button.type = "button";
			button.className = `net-hub-quiz-action ${className}`.trim();
			button.textContent = label;
			button.addEventListener("click", callback);
			actions.appendChild(button);
		};
		addAction("Play", () => playQuiz(quiz.id, local ? quiz : null));
		addAction("Download", () => downloadQuiz(quiz));
		if (local) {
			addAction("Remove from Home Screen", () => removeFromHomeScreen(quiz.id));
		} else {
			addAction("Add to Home Screen", () => addToHomeScreen(quiz.id));
		}
		if (owned) {
			addAction("Edit", () => showCreateModal(quiz));
			addAction("Delete", () => deleteQuiz(quiz.id), "danger");
		}
		card.append(title, metadata, theme, actions);
		return card;
	}

	async function fetchQuiz(id) {
		const result = await request(
			`/api/nethub/quizzes/${encodeURIComponent(id)}`,
		);
		return result.quiz;
	}

	async function renderBrowseList() {
		quizList.replaceChildren();
		browseStatus.textContent = "";
		if (activeBrowseTab === "user-made") {
			const localQuizzes = getUserMadeQuizzes();
			if (!localQuizzes.length) {
				browseStatus.textContent =
					"No quizzes have been added to this device yet. Browse Community Quizzes and choose Add to Home Screen.";
				return;
			}
			localQuizzes.forEach((quiz) =>
				quizList.appendChild(renderQuizCard(quiz, { local: true })),
			);
			return;
		}
		browseStatus.textContent = "Loading community quizzes…";
		try {
			const result = await request("/api/nethub/quizzes");
			browseStatus.textContent = result.quizzes.length
				? `${result.quizzes.length} quiz${result.quizzes.length === 1 ? "" : "zes"} available`
				: "No community quizzes have been uploaded yet.";
			result.quizzes.forEach((quiz) =>
				quizList.appendChild(renderQuizCard(quiz)),
			);
		} catch (error) {
			browseStatus.textContent = error.message;
		}
	}

	async function renderMyQuizzes() {
		myQuizList.replaceChildren();
		accountStatus.textContent = "Loading your uploads…";
		try {
			const result = await request("/api/nethub/mine");
			accountStatus.textContent = result.quizzes.length
				? `${result.quizzes.length} quiz${result.quizzes.length === 1 ? "" : "zes"} uploaded`
				: "You have not uploaded any quizzes yet.";
			result.quizzes.forEach((quiz) =>
				myQuizList.appendChild(renderQuizCard(quiz, { owned: true })),
			);
		} catch (error) {
			accountStatus.textContent = error.message;
			if (error.message.includes("Sign in")) {
				localStorage.removeItem(accountTokenKey);
				accountDashboard.hidden = true;
				signInForm.hidden = false;
			}
		}
	}

	async function playQuiz(id, localQuiz = null) {
		try {
			const quiz = localQuiz || (await fetchQuiz(id));
			const playableQuiz = await storeQuizMusic(quiz);
			sessionStorage.setItem(
				`quizHubNetHubQuiz:${id}`,
				JSON.stringify(playableQuiz),
			);
			const params = new URLSearchParams({
				category: quiz.courseKey,
				quiz: `nethub_${id.replaceAll("-", "")}`,
				netHubQuiz: id,
			});
			location.href = `quiz.html?${params.toString()}`;
		} catch (error) {
			browseStatus.textContent = error.message;
		}
	}

	async function storeQuizMusic(quiz) {
		const upload = quiz.music?.upload;
		if (!upload) return quiz;
		const storageKey = upload.storageKey || quiz.id;
		if (upload.data) {
			await window.QuizHubNetHubStorage.saveMusic(storageKey, upload);
		}
		return {
			...quiz,
			music: {
				...quiz.music,
				upload: {
					name: upload.name,
					type: upload.type,
					storageKey,
				},
			},
		};
	}

	async function restoreQuizMusic(quiz) {
		const upload = quiz.music?.upload;
		if (!upload || upload.data) return quiz;
		if (!upload.storageKey) {
			throw new Error("The uploaded music is not saved on this device.");
		}
		const savedUpload = await window.QuizHubNetHubStorage.getMusic(
			upload.storageKey,
		);
		return {
			...quiz,
			music: { ...quiz.music, upload: savedUpload },
		};
	}

	async function downloadQuiz(quiz) {
		if (!Array.isArray(quiz.questions)) {
			try {
				quiz = await fetchQuiz(quiz.id);
			} catch (error) {
				browseStatus.textContent = error.message;
				return;
			}
		}
		try {
			quiz = await restoreQuizMusic(quiz);
		} catch (error) {
			browseStatus.textContent = error.message;
			return;
		}
		const file = new Blob([JSON.stringify(quiz, null, 2)], {
			type: "application/json",
		});
		const url = URL.createObjectURL(file);
		const link = document.createElement("a");
		link.href = url;
		link.download = `${quiz.title.replace(/[^a-z0-9_-]+/gi, "-").replace(/^-|-$/g, "") || "quizhub-quiz"}.json`;
		link.click();
		URL.revokeObjectURL(url);
	}

	async function addToHomeScreen(id) {
		browseStatus.textContent = "Adding quiz to this device…";
		try {
			const quiz = await fetchQuiz(id);
			const savedQuiz = await storeQuizMusic(quiz);
			const saved = getUserMadeQuizzes().filter((item) => item.id !== quiz.id);
			saved.unshift(savedQuiz);
			localStorage.setItem(userMadeKey, JSON.stringify(saved));
			updateUserMadeTab();
			browseStatus.textContent =
				"Added! Open the Saved NetHub Quizzes tab on the home screen to play it.";
		} catch (error) {
			browseStatus.textContent = error.message;
		}
	}

	async function removeFromHomeScreen(id) {
		let saved;
		try {
			saved = JSON.parse(localStorage.getItem(userMadeKey) || "[]");
			if (!Array.isArray(saved)) {
				throw new Error("Saved NetHub quizzes have an invalid format.");
			}
		} catch (error) {
			console.error("Could not read saved NetHub quizzes:", error);
			browseStatus.textContent = `Could not remove the saved quiz: ${error.message}`;
			return;
		}

		const quiz = saved.find((item) => item.id === id);
		if (!quiz) {
			browseStatus.textContent = "That quiz is no longer saved on this device.";
			updateUserMadeTab();
			renderBrowseList();
			return;
		}
		try {
			localStorage.setItem(
				userMadeKey,
				JSON.stringify(saved.filter((item) => item.id !== id)),
			);
		} catch (error) {
			console.error("Could not remove the saved NetHub quiz:", error);
			browseStatus.textContent = `Could not remove the saved quiz: ${error.message}`;
			return;
		}

		updateUserMadeTab();
		renderBrowseList();
		browseStatus.textContent = "Quiz removed from Saved NetHub Quizzes.";
		if (quiz.music?.upload?.storageKey) {
			try {
				await window.QuizHubNetHubStorage.deleteMusic(
					quiz.music.upload.storageKey,
				);
			} catch (error) {
				console.error("Could not remove the saved quiz music:", error);
				browseStatus.textContent = `Quiz removed, but its saved music could not be removed: ${error.message}`;
			}
		}
	}

	async function deleteQuiz(id) {
		if (!window.confirm("Delete this quiz from NetHub? This cannot be undone."))
			return;
		try {
			await request(`/api/nethub/quizzes/${encodeURIComponent(id)}`, {
				method: "DELETE",
			});
			await renderMyQuizzes();
		} catch (error) {
			accountStatus.textContent = error.message;
		}
	}

	function openAccountModal() {
		closeModals();
		const token = localStorage.getItem(accountTokenKey);
		accountDashboard.hidden = !token;
		signInForm.hidden = Boolean(token);
		document.getElementById("netHubSignedInName").textContent =
			localStorage.getItem(accountNameKey) || "";
		openModal(
			accountModal,
			token
				? document.getElementById("netHubSignOut")
				: document.getElementById("netHubSignInUsername"),
		);
		if (token) renderMyQuizzes();
	}

	document.addEventListener(
		"click",
		(event) => {
			const courseCard = event.target.closest(
				".course-card[data-net-hub-action]",
			);
			if (courseCard) {
				event.preventDefault();
				event.stopImmediatePropagation();
				if (courseCard.dataset.netHubAction === "create") showCreateModal();
				else {
					setBrowseTab("community");
					openModal(
						browseModal,
						document.querySelector('[data-net-hub-tab="community"]'),
					);
				}
			}
		},
		true,
	);
	document
		.getElementById("netHubAccountButton")
		.addEventListener("click", openAccountModal);
	document.getElementById("netHubUserMadeTab").addEventListener("click", () => {
		setBrowseTab("user-made");
		openModal(
			browseModal,
			document.querySelector('[data-net-hub-tab="user-made"]'),
		);
	});
	document
		.getElementById("netHubSignOut")
		.addEventListener("click", async () => {
			try {
				await request("/api/nethub/logout", { method: "POST", body: "{}" });
			} catch (error) {
				accountStatus.textContent = `Could not sign out cleanly: ${error.message}`;
				return;
			}
			localStorage.removeItem(accountTokenKey);
			localStorage.removeItem(accountNameKey);
			accountDashboard.hidden = true;
			signInForm.hidden = false;
			accountStatus.textContent = "Signed out.";
		});
	document.querySelectorAll("[data-close-net-hub]").forEach((button) => {
		button.addEventListener("click", closeModals);
	});
	document.querySelectorAll("[data-net-hub-tab]").forEach((button) => {
		button.addEventListener("click", () =>
			setBrowseTab(button.dataset.netHubTab),
		);
	});
	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") closeModals();
	});
	courseSelect.addEventListener("change", () => {
		syncNewCourseField();
		updatePrompt();
	});
	["netHubQuizTitle", "netHubShortAnswer", "netHubNewCourseName"].forEach(
		(id) => document.getElementById(id).addEventListener("input", updatePrompt),
	);
	document.querySelectorAll('input[name="netHubTheme"]').forEach((input) => {
		input.addEventListener("change", updatePrompt);
	});
	document
		.getElementById("netHubCopyPrompt")
		.addEventListener("click", async () => {
			try {
				await navigator.clipboard.writeText(promptField.value);
				createStatus.textContent = "AI prompt copied.";
			} catch (error) {
				promptField.focus();
				promptField.select();
				createStatus.textContent = `Could not copy automatically (${error.message}). Select and copy the prompt above.`;
			}
		});
	createForm.addEventListener("submit", async (event) => {
		event.preventDefault();
		createStatus.textContent = "";
		uploadButton.disabled = true;
		try {
			const questions = parseQuestionArray(pastedQuestions.value);
			const music = await readSelectedMusic();
			const username = document.getElementById("netHubUsername").value.trim();
			const pin = document.getElementById("netHubPin").value;
			const auth = await authenticate(username, pin);
			const quiz = currentQuizPayload(questions, music);
			const path = editingQuizId
				? `/api/nethub/quizzes/${encodeURIComponent(editingQuizId)}`
				: "/api/nethub/quizzes";
			await request(path, {
				method: editingQuizId ? "PUT" : "POST",
				body: JSON.stringify(quiz),
			});
			createStatus.textContent = auth.created
				? "Account created and quiz uploaded!"
				: editingQuizId
					? "Quiz updated."
					: "Quiz uploaded to NetHub!";
			editingQuizId = "";
			window.setTimeout(closeModals, 850);
		} catch (error) {
			createStatus.textContent = error.message;
		} finally {
			uploadButton.disabled = false;
		}
	});
	signInForm.addEventListener("submit", async (event) => {
		event.preventDefault();
		accountStatus.textContent = "Signing in…";
		const button = signInForm.querySelector('button[type="submit"]');
		button.disabled = true;
		try {
			const result = await authenticate(
				document.getElementById("netHubSignInUsername").value.trim(),
				document.getElementById("netHubSignInPin").value,
			);
			accountDashboard.hidden = false;
			signInForm.hidden = true;
			document.getElementById("netHubSignedInName").textContent =
				result.username;
			accountStatus.textContent = result.created
				? "Account created."
				: "Signed in.";
			renderMyQuizzes();
		} catch (error) {
			accountStatus.textContent = error.message;
		} finally {
			button.disabled = false;
		}
	});

	updateUserMadeTab();
	updatePrompt();
})();
