import {useWordStore} from '../../stores/wordStore';
import NewWindowIcon from '../../assets/icon-new-window.svg';
import './Footer.scss';

export default function Footer() {
	const {data} = useWordStore();

	if (!data) return null;

	return (
		<footer className='footer'>
			<p className='footer__label'>Source</p>
			<div className='footer__source'>
				<a
					className='footer__link'
					href={`https://en.wiktionary.org/wiki/${data.word}`}
					target='_blank'
					rel='noopener noreferrer'>
					https://en.wiktionary.org/wiki/{data.word}
				</a>
				<img className='footer__icon' src={NewWindowIcon} alt='Open in new window' />
			</div>
		</footer>
	);
}
