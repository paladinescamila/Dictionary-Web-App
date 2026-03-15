import {useWordStore} from '../../stores/wordStore';
import {toggleAudio} from '../../utils/ui';
import './Phonetic.scss';

export default function Phonetic() {
	const {data} = useWordStore();

	if (!data) return null;

	const playAudio = () => toggleAudio(data.audio);

	return (
		<header className='phonetic'>
			<div>
				<h1>{data.word}</h1>
				<p>{data.phonethic}</p>
			</div>
			<button aria-label='Play audio' type='button' onClick={playAudio} className='play'>
				<div />
			</button>
		</header>
	);
}
