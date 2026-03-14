import {useWordStore} from '../../stores/wordStore';
import NewWindowIcon from '../../assets/icon-new-window.svg';
import './Footer.scss';

export default function Footer() {
	const {data} = useWordStore();

	if (!data) return null;

	return (
		<footer>
			<p>Source</p>
			<a
				href={`https://en.wiktionary.org/wiki/${data.word}`}
				target='_blank'
				rel='noopener noreferrer'>
				https://en.wiktionary.org/wiki/{data.word}
			</a>
			<img src={NewWindowIcon} alt='Open in new window' />
		</footer>
	);
}
