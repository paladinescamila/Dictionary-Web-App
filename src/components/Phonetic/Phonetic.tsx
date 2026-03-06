import {useWordStore} from '../../stores/wordStore';

export default function Phonetic() {
	const {data} = useWordStore();

	if (!data) return null;

	return (
		<header>
			<div>
				<h1>{data.word}</h1>
				<p>{data.phonethic}</p>
			</div>
			<button aria-label='Reproducir pronunciación'>Play</button>
		</header>
	);
}
