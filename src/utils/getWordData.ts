import axios from 'axios';
import {convertData} from './convertData';

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
