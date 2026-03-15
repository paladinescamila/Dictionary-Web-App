import {useEffect, useState} from 'react';
import LogoIcon from '../../assets/logo.svg';
import {useUIStore} from '../../stores/uiStore';
import {FONTS, FONTS_NAMES} from '../../constants/Fonts';
import MoonIcon from '../../assets/MoonIcon';
import ArrowDownIcon from '../../assets/icon-arrow-down.svg';
import './Header.scss';

export default function Header() {
	const {fontFamily, setFontFamily, theme, setTheme} = useUIStore();
	const [fontSelectorIsVisible, setFontSelectorIsVisible] = useState<boolean>(false);

	const onSelectFontFamily = (font: FontFamily) => {
		setFontFamily(font);
		setFontSelectorIsVisible(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			if (!target.closest('.header__font-family')) setFontSelectorIsVisible(false);
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<header className='header'>
			<div className='header__nav'>
				<img className='header__logo' src={LogoIcon} alt='Logo Diccionario' />
				<div className='header__settings'>
					<div className='header__font-family'>
						<button
							type='button'
							className='header__font-family-label'
							onClick={() => setFontSelectorIsVisible((prev) => !prev)}>
							<span className='header__font-family-name'>
								{FONTS_NAMES[fontFamily]}
							</span>
							<img
								className='header__font-family-arrow'
								src={ArrowDownIcon}
								alt='Arrow Down Icon'
							/>
						</button>
						{fontSelectorIsVisible ? (
							<div className='header__font-family-options'>
								{FONTS.map((font) => (
									<div
										key={font}
										className={`header__font-family-option--${font}`}
										onClick={() => onSelectFontFamily(font)}>
										{FONTS_NAMES[font]}
									</div>
								))}
							</div>
						) : null}
					</div>
					<div className='header__divider'></div>
					<input
						className='header__dark-mode-input'
						type='checkbox'
						id='dark-mode-toggle'
						checked={theme === 'dark'}
						onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
					/>
					<label htmlFor='dark-mode-toggle' className='header__dark-mode-toggle'>
						<span className={`header__toggle-switch--${theme}`}>
							<span className='header__toggle-knob'></span>
						</span>
						<MoonIcon color={theme === 'dark' ? '#a445ed' : '#757575'} />
					</label>
				</div>
			</div>
		</header>
	);
}
