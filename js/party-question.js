(function (root, factory) {
	const api = factory();
	if (typeof module === "object" && module.exports) module.exports = api;
	if (root) root.QuizHubPartyQuestion = api;
})(typeof window === "undefined" ? null : window, function () {
	"use strict";

	function seededShuffle(items, seedText) {
		let seed = Array.from(seedText).reduce(
			(value, character) =>
				Math.imul(value ^ character.charCodeAt(0), 16777619) >>> 0,
			2166136261,
		);
		for (let index = items.length - 1; index > 0; index--) {
			seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
			const swap = seed % (index + 1);
			[items[index], items[swap]] = [items[swap], items[index]];
		}
		return items;
	}

	function getNetworkQuestion(question, bank, questionIndex, partyRoomCode) {
		const answerEntries = question.a
			.map((answer, index) => ({ answer, index }))
			.filter((entry) => entry.answer !== "BLANK");
		const correctPosition = answerEntries.findIndex(
			(entry) => entry.index === question.c,
		);
		if (correctPosition < 0) {
			throw new Error(
				"Could not locate the correct answer for an online party question.",
			);
		}
		const answers = answerEntries.map((entry) => entry.answer);
		if (answers.length > 4) {
			throw new Error(
				"Online party questions cannot have more than four answer choices.",
			);
		}
		if (
			answers.length === 2 &&
			new Set(answers.map((answer) => answer.trim().toLowerCase())).size === 2 &&
			answers.some((answer) => answer.trim().toLowerCase() === "true") &&
			answers.some((answer) => answer.trim().toLowerCase() === "false")
		) {
			return { ...question, a: answers, c: correctPosition };
		}
		if (answers.length === 4) return { ...question, a: answers, c: correctPosition };

		const seen = new Set(answers.map((answer) => answer.trim().toLowerCase()));
		const candidates = [];
		bank.forEach((entry) => {
			if (!entry || !Array.isArray(entry.a)) return;
			entry.a.forEach((answer) => {
				if (typeof answer !== "string" || answer === "BLANK") return;
				const key = answer.trim().toLowerCase();
				if (key && !seen.has(key)) {
					seen.add(key);
					candidates.push(answer);
				}
			});
		});
		if (candidates.length < 4 - answers.length) {
			throw new Error(
				"Could not find enough answer choices to build an A–D question.",
			);
		}
		seededShuffle(candidates, `${partyRoomCode}:${questionIndex}`);
		return {
			...question,
			a: [...answers, ...candidates.slice(0, 4 - answers.length)],
			c: correctPosition,
		};
	}

	function isValidAnswerOrder(question, answerOrder) {
		const availableIndexes = question.a.flatMap((answer, index) =>
			answer === "BLANK" ? [] : [index],
		);
		return (
			Array.isArray(answerOrder) &&
			answerOrder.length === availableIndexes.length &&
			answerOrder.length >= 2 &&
			answerOrder.length <= 4 &&
			new Set(answerOrder).size === answerOrder.length &&
			answerOrder.every(
				(index) =>
					Number.isInteger(index) && availableIndexes.includes(index),
			)
		);
	}

	function getAnswerButtonText(answerLabel, answer, hideAnswerText) {
		return hideAnswerText ? answerLabel : `${answerLabel}. ${answer}`;
	}

	function getPlayerStanding(players, playerId) {
		if (!Array.isArray(players)) return null;
		const player = players.find((entry) => entry?.id === playerId);
		if (!player) return null;
		const score = Number.isFinite(Number(player.score))
			? Number(player.score)
			: 0;
		const playersAhead = players.filter(
			(entry) =>
				entry?.id !== playerId &&
				Number.isFinite(Number(entry?.score)) &&
				Number(entry.score) > score,
		).length;
		return { score, place: playersAhead + 1 };
	}

	function getPlayerStandings(players, scoreKey = "score") {
		if (!Array.isArray(players)) return [];
		const standings = players.map((player, index) => ({
			player,
			score: Number.isFinite(Number(player?.[scoreKey]))
				? Math.max(0, Number(player[scoreKey]))
				: 0,
			index,
		}));
		standings.sort((first, second) => second.score - first.score || first.index - second.index);
		let place = 0;
		let previousScore = null;
		return standings.map((entry, index) => {
			if (entry.score !== previousScore) place = index + 1;
			previousScore = entry.score;
			return { player: entry.player, score: entry.score, place };
		});
	}

	function isTrueFalseQuestion(question) {
		if (!question || !Array.isArray(question.a)) return false;
		const answers = question.a.filter((answer) => answer !== "BLANK");
		if (answers.length !== 2) return false;
		const normalized = answers.map((answer) =>
			typeof answer === "string" ? answer.trim().toLowerCase() : "",
		);
		return normalized.includes("true") && normalized.includes("false");
	}

	return {
		getNetworkQuestion,
		isValidAnswerOrder,
		getAnswerButtonText,
		getPlayerStanding,
		getPlayerStandings,
		isTrueFalseQuestion,
	};
});
