import {create} from 'zustand';
import {getWordData} from '../utils/getWordData';

interface WordStore {
	search: string;
	setSearch: (search: string) => void;

	data: WordData | null;
	loading: boolean;
	notFound: boolean;

	searchWord: (customSearch: string) => void;

	searchIsEmpty: boolean;
	setSearchIsEmpty: (isEmpty: boolean) => void;
}

const useStore = create<WordStore>((set, get) => ({
	search: 'keyboard',
	setSearch: (search) => set({search}),

	data: null,
	loading: true,
	notFound: false,

	searchWord: (customSearch) => {
		const search = (customSearch || get().search).trim().replace(/\s+/g, ' ');

		if (!search) return;

		set({loading: true, notFound: false, search});

		getWordData(search).then((data) => {
			if (data) set({data, notFound: false, loading: false});
			else set({data: null, notFound: true, loading: false});
		});
	},

	searchIsEmpty: false,

	setSearchIsEmpty: (isEmpty) =>
		set({searchIsEmpty: isEmpty, data: null, notFound: false, loading: false}),
}));

export const useWordStore = () => useStore((state) => state);
