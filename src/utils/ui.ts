import {DEFAULT_FONT_FAMILY, DEFAULT_THEME} from '../constants/Defaults';

/**
 * Apply the given font family to the document body by updating the class list.
 * @param fontFamily - The font family to apply (e.g., 'sans', 'serif', 'mono').
 */
export const applyFontFamily = (fontFamily: FontFamily) => {
	document.body.classList.remove('font-sans', 'font-serif', 'font-mono');
	document.body.classList.add(`font-${fontFamily}`);
};

/**
 * Apply the given theme to the document body by updating the class list.
 * @param theme - The theme to apply (e.g., 'light', 'dark').
 */
export const applyTheme = (theme: Theme) => {
	document.body.classList.remove('theme--light', 'theme--dark');
	document.body.classList.add(`theme--${theme}`);
};

/**
 * Initialize the UI by applying the default font family and theme based on user preferences or system settings.
 */
export const initializeUI = () => {
	applyFontFamily(DEFAULT_FONT_FAMILY);
	applyTheme(DEFAULT_THEME);
};

/**
 * Play the audio from the given URL.
 * @param audioUrl - The URL of the audio to play.
 */
export const toggleAudio = (audioUrl: string) => {
	const audio = new Audio(audioUrl);
	audio.play();
};
