import {useWordStore} from '../../stores/wordStore';
import {toggleAudio} from '../../utils/ui';
import './Phonetic.scss';

export default function Phonetic() {
	const {data} = useWordStore();

	if (!data) return null;

	const playAudio = () => toggleAudio(data.audio);

	return (
		<header className='phonetic'>
			<div className='phonetic__content'>
				<h1 className='phonetic__word'>{data.word}</h1>
				<p className='phonetic__transcription'>{data.phonethic}</p>
			</div>
			<button
				aria-label='Play audio'
				type='button'
				onClick={playAudio}
				className='phonetic__play'>
				<div className='phonetic__play-icon' />
			</button>
		</header>
	);
}
