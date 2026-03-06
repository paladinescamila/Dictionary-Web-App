import {create} from 'zustand';

interface UIStore {
	fontFamily: FontFamily;
	setFontFamily: (fontFamily: FontFamily) => void;
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const useStore = create<UIStore>((set) => ({
	fontFamily: 'sans',
	setFontFamily: (fontFamily: FontFamily) => set({fontFamily}),
	theme: 'light',
	setTheme: (theme: Theme) => set({theme}),
}));

export const useUIStore = () => useStore((state) => state);
