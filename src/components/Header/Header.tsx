import {useState} from 'react';
import LogoIcon from '../../assets/logo.svg';
import {useUIStore} from '../../stores/uiStore';
import {FONTS, FONTS_NAMES} from '../../constants/Fonts';
import MoonIcon from '../../assets/MoonIcon';
import ArrowDownIcon from '../../assets/icon-arrow-down.svg';
import './Header.scss';

export default function Header() {
	const {fontFamily, setFontFamily, theme, setTheme} = useUIStore();

	const [fontSelectorIsVisible, setFontSelectorIsVisible] = useState<boolean>(false);

	return (
		<header className='header'>
			<nav>
				<img src={LogoIcon} alt='Logo Diccionario' />
				<div className='settings'>
					<div className='font-family'>
						<button
							className='font-family-label'
							onClick={() => setFontSelectorIsVisible((prev) => !prev)}>
							<p>{FONTS_NAMES[fontFamily]}</p>
							<img src={ArrowDownIcon} alt='Arrow Down Icon' />
						</button>
						{fontSelectorIsVisible ? (
							<div className='font-family-options'>
								{FONTS.map((font) => (
									<div
										key={font}
										className={`font-family-option--${font}`}
										onClick={() => setFontFamily(font)}>
										{FONTS_NAMES[font]}
									</div>
								))}
							</div>
						) : null}
					</div>
					<div className='divider'></div>
					<input
						type='checkbox'
						id='dark-mode-toggle'
						checked={theme === 'dark'}
						onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
					/>
					<label htmlFor='dark-mode-toggle' className='dark-mode-toggle'>
						<span className={`toggle-switch--${theme}`}>
							<span className='toggle-knob'></span>
						</span>
						<MoonIcon color={theme === 'dark' ? '#a445ed' : '#757575'} />
					</label>
				</div>
			</nav>
		</header>
	);
}
