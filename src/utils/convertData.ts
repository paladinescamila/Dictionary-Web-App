export const convertData = (data: Response): WordData => ({
	word: data.word,
	phonethic: data.phonetic,
	audio: data.phonetics.find((phonetic) => phonetic.audio)?.audio || '',
	meanings: data.meanings.map((meaning) => ({
		partOfSpeech: meaning.partOfSpeech,
		definitions: meaning.definitions.map((definition) => ({
			definition: definition.definition,
			sample: definition.example,
		})),
		synonyms: meaning.synonyms,
	})),
});
