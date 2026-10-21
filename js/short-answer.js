(function (root, factory) {
	const api = factory();
	if (typeof module === "object" && module.exports) module.exports = api;
	if (root) root.QuizHubShortAnswer = api;
})(typeof window === "undefined" ? null : window, function () {
	"use strict";

	function normalizeAnswer(value) {
		if (typeof value !== "string") return "";
		return value
			.normalize("NFD")
			.replace(/\p{Diacritic}/gu, "")
			.toLowerCase()
			.replace(/[^\p{L}\p{N}\s]/gu, " ")
			.replace(/\b(a|an|the)\b/g, " ")
			.trim()
			.replace(/\s+/g, " ");
	}

	function getEditSimilarity(left, right) {
		const previousRow = Array.from(
			{ length: right.length + 1 },
			(_, index) => index,
		);
		for (let leftIndex = 1; leftIndex <= left.length; leftIndex++) {
			let diagonal = previousRow[0];
			previousRow[0] = leftIndex;
			for (let rightIndex = 1; rightIndex <= right.length; rightIndex++) {
				const previous = previousRow[rightIndex];
				previousRow[rightIndex] = Math.min(
					previousRow[rightIndex] + 1,
					previousRow[rightIndex - 1] + 1,
					diagonal + (left[leftIndex - 1] === right[rightIndex - 1] ? 0 : 1),
				);
				diagonal = previous;
			}
		}
		return 1 - previousRow[right.length] / Math.max(left.length, right.length);
	}

	function getAnswerSimilarity(answer, correctAnswer) {
		const normalizedAnswer = normalizeAnswer(answer);
		const normalizedCorrect = normalizeAnswer(correctAnswer);
		if (!normalizedAnswer || !normalizedCorrect) return 0;
		if (normalizedAnswer === normalizedCorrect) return 1;

		const answerWords = normalizedAnswer.split(" ");
		const correctWords = normalizedCorrect.split(" ");
		const correctWordCounts = new Map();
		for (const word of correctWords) {
			correctWordCounts.set(word, (correctWordCounts.get(word) || 0) + 1);
		}
		let matchingWords = 0;
		for (const word of answerWords) {
			const remaining = correctWordCounts.get(word) || 0;
			if (remaining > 0) {
				matchingWords++;
				correctWordCounts.set(word, remaining - 1);
			}
		}
		const wordSimilarity =
			(2 * matchingWords) / (answerWords.length + correctWords.length);
		return Math.max(
			getEditSimilarity(normalizedAnswer, normalizedCorrect),
			wordSimilarity,
		);
	}

	function getShortAnswerPoints(
		answer,
		correctAnswer,
		semanticSimilarity = null,
	) {
		const similarity = getAnswerSimilarity(answer, correctAnswer);
		const normalizedAnswer = normalizeAnswer(answer);
		const normalizedCorrect = normalizeAnswer(correctAnswer);
		if (
			/\b(only|solely|exclusively)\b/.test(normalizedAnswer) &&
			/\b(both|and)\b/.test(normalizedCorrect)
		) {
			return 0;
		}
		const textPoints =
			similarity >= 0.9 ? 3 : similarity >= 0.7 ? 2 : similarity >= 0.45 ? 1 : 0;
		const semanticPoints =
			Number.isFinite(semanticSimilarity) && semanticSimilarity >= 0
				? semanticSimilarity >= 0.78
					? 3
					: semanticSimilarity >= 0.62
						? 2
						: semanticSimilarity >= 0.48
							? 1
							: 0
				: 0;
		return Math.max(textPoints, semanticPoints);
	}

	return { getAnswerSimilarity, getShortAnswerPoints };
});
