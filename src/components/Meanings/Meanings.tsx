import {useWordStore} from '../../stores/wordStore';

export default function Meanings() {
	const {data} = useWordStore();

	if (!data) return null;

	return data.meanings.map((meaning) => (
		<section key={meaning.partOfSpeech}>
			<h2>{meaning.partOfSpeech}</h2>
			<h3>Meaning</h3>
			<ul>
				{meaning.definitions.map(({definition, sample}, index) => (
					<li key={index}>
						<p>{definition}</p>
						{sample && <p>"{sample}"</p>}
					</li>
				))}
			</ul>
			{meaning.synonyms.length > 0 && (
				<p>
					Synonyms{' '}
					{meaning.synonyms.map((synonym, index) => (
						<strong key={index}>{synonym}</strong>
					))}
				</p>
			)}
		</section>
	));
}
