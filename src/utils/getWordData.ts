import axios from 'axios';
import {convertData} from './convertData';

/**
 * Fetches word data from the dictionary API and converts it to the desired format.
 * @param word The word to fetch data for.
 * @returns The converted word data or null if an error occurs.
 */
export const getWordData = async (word: string) => {
	const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

	try {
		const {data} = await axios.get(`${URL}${word}`);
		return convertData(data[0]);
	} catch (error) {
		console.error(error);
		return null;
	}
};
