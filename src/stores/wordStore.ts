import {create} from 'zustand';

interface WordStore {
	data: WordData | null;
	setData: (data: WordData | null) => void;
	notFound: boolean;
	setNotFound: (notFound: boolean) => void;
}

const useStore = create<WordStore>((set) => ({
	data: null,
	setData: (data) => set({data}),
	notFound: false,
	setNotFound: (notFound) => set({notFound}),
}));

export const useWordStore = () => useStore((state) => state);
