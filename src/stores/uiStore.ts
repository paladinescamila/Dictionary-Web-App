import {create} from 'zustand';
import {DEFAULT_FONT_FAMILY, DEFAULT_THEME} from '../constants/Defaults';

interface UIStore {
	fontFamily: FontFamily;
	setFontFamily: (fontFamily: FontFamily) => void;
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const useStore = create<UIStore>((set) => ({
	fontFamily: DEFAULT_FONT_FAMILY,
	setFontFamily: (fontFamily: FontFamily) => {
		set({fontFamily});
		document.body.classList.remove('font-sans', 'font-serif', 'font-mono');
		document.body.classList.add(`font-${fontFamily}`);
	},
	theme: DEFAULT_THEME,
	setTheme: (theme: Theme) => {
		set({theme});
		document.body.classList.remove('theme--light');
		document.body.classList.remove('theme--dark');
		document.body.classList.add(`theme--${theme}`);
	},
}));

export const useUIStore = () => useStore((state) => state);
