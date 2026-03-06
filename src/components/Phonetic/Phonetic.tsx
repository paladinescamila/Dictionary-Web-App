export default function Phonetic({data}: {data: WordData}) {
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
