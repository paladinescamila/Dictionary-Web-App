interface WordData {
	word: string;
	phonethic: string;
	audio: string;
	meanings: {
		partOfSpeech: string;
		definitions: {definition: string; sample?: string}[];
		synonyms: string[];
	}[];
}
