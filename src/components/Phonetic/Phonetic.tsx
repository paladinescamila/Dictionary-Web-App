import {useWordStore} from '../../stores/wordStore';
import './Phonetic.scss';

export default function Phonetic() {
	const {data} = useWordStore();

	if (!data) return null;

	const playAudio = () => {
		const audio = new Audio(data.audio);
		audio.play();
	};

	return (
		<header className='phonetic'>
			<div>
				<h1>{data.word}</h1>
				<p>{data.phonethic}</p>
			</div>
			<button aria-label='Reproducir pronunciación' onClick={playAudio} className='play'>
				<div />
			</button>
		</header>
	);
}
