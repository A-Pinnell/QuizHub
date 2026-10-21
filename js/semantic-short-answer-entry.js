import { env, pipeline, Tensor } from "./transformers-web.js";

const modelPath = "Xenova/all-MiniLM-L6-v2";
let extractorPromise;
let vocabularyPromise;

env.allowRemoteModels = false;
env.allowLocalModels = true;
env.localModelPath = new URL("./assets/models/", window.location.href).href;
env.backends.onnx.wasm.wasmPaths = new URL(
	"./assets/models/onnx-runtime/",
	window.location.href,
).href;
env.backends.onnx.wasm.numThreads = 1;

async function initialize() {
	extractorPromise ??= pipeline("feature-extraction", modelPath, {
		device: "wasm",
		dtype: "q8",
	});
	return extractorPromise;
}

async function loadVocabulary() {
	vocabularyPromise ??= fetch(
		new URL("./assets/models/Xenova/all-MiniLM-L6-v2/vocab.txt", window.location.href),
	)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`Could not load the local tokenizer vocabulary (${response.status}).`);
			}
			return response.text();
		})
		.then((contents) => new Map(contents.split(/\r?\n/).map((token, index) => [token, index])));
	return vocabularyPromise;
}

function tokenizeText(text, vocabulary) {
	const normalized = text
		.normalize("NFD")
		.replace(/\p{M}/gu, "")
		.toLowerCase();
	const words = normalized.match(/[\p{L}\p{N}]+|[^\s\p{L}\p{N}]/gu) || [];
	const tokens = [];

	for (const word of words) {
		if (Array.from(word).length > 100) {
			tokens.push("[UNK]");
			continue;
		}
		let start = 0;
		const wordPieces = [];
		while (start < word.length) {
			let end = word.length;
			let piece;
			while (start < end) {
				const candidate = `${start ? "##" : ""}${word.slice(start, end)}`;
				if (vocabulary.has(candidate)) {
					piece = candidate;
					break;
				}
				end--;
			}
			if (!piece) {
				wordPieces.length = 0;
				wordPieces.push("[UNK]");
				break;
			}
			wordPieces.push(piece);
			start = end;
		}
		tokens.push(...wordPieces);
	}
	return tokens;
}

async function getSimilarity(answer, correctAnswer) {
	const [extractor, vocabulary] = await Promise.all([
		initialize(),
		loadVocabulary(),
	]);
	const specialTokenIds = ["[PAD]", "[UNK]", "[CLS]", "[SEP]"].map((token) => {
		const id = vocabulary.get(token);
		if (id === undefined) throw new Error(`The local tokenizer vocabulary is missing ${token}.`);
		return id;
	});
	const [padTokenId, , clsTokenId, sepTokenId] = specialTokenIds;
	const sequences = [answer, correctAnswer].map((text) => [
		clsTokenId,
		...tokenizeText(text, vocabulary)
			.slice(0, 126)
			.map((token) => vocabulary.get(token) ?? vocabulary.get("[UNK]")),
		sepTokenId,
	]);
	const sequenceLength = Math.max(...sequences.map((sequence) => sequence.length));
	const paddedSequences = sequences.map((sequence) => [
		...sequence,
		...new Array(sequenceLength - sequence.length).fill(padTokenId),
	]);
	const inputIds = new Tensor(
		"int64",
		BigInt64Array.from(paddedSequences.flat(), BigInt),
		[sequences.length, sequenceLength],
	);
	const attentionMask = new Tensor(
		"int64",
		BigInt64Array.from(
			sequences.flatMap((sequence) => [
				...new Array(sequence.length).fill(1n),
				...new Array(sequenceLength - sequence.length).fill(0n),
			]),
		),
		[sequences.length, sequenceLength],
	);
	const tokenTypeIds = new Tensor(
		"int64",
		new BigInt64Array(sequences.length * sequenceLength),
		[sequences.length, sequenceLength],
	);
	const modelOutputs = await extractor.model({
		input_ids: inputIds,
		attention_mask: attentionMask,
		token_type_ids: tokenTypeIds,
	});
	const hiddenStates = modelOutputs.last_hidden_state.tolist();
	const attentionMasks = attentionMask.tolist();
	const normalizedEmbeddings = hiddenStates.map((tokens, batchIndex) => {
		const sequence = sequences[batchIndex];
		const embedding = tokens[0].map((_, columnIndex) =>
			tokens.reduce(
				(total, token, tokenIndex) =>
					total +
					token[columnIndex] * Number(attentionMasks[batchIndex][tokenIndex]),
				0,
			) / sequence.length,
		);
		const magnitude = Math.sqrt(
			embedding.reduce((total, value) => total + value * value, 0),
		);
		return embedding.map((value) => value / magnitude);
	});
	const [answerEmbedding, correctEmbedding] = normalizedEmbeddings;
	const similarity = answerEmbedding.reduce(
		(similarity, value, index) => similarity + value * correctEmbedding[index],
		0,
	);
	return Math.max(-1, Math.min(1, similarity));
}

window.QuizHubSemanticShortAnswer = { initialize, getSimilarity };
