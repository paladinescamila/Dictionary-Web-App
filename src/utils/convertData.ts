/**
 * Converts the API response data into a format suitable for the application.
 * @param data - The raw response data from the API.
 * @returns A structured WordData object containing the word, phonetic, audio, and meanings.
 */
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
