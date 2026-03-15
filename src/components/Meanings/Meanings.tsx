import {useWordStore} from '../../stores/wordStore';
import './Meanings.scss';

export default function Meanings() {
	const {data, searchWord} = useWordStore();

	if (!data) return null;

	const onClickSynonym = (synonym: string) => searchWord(synonym);

	return (
		<ul className='meanings'>
			{data.meanings.map((meaning) => (
				<li key={meaning.partOfSpeech} className='meaning'>
					<h2 className='meaning__part-of-speech'>
						<span className='meaning__part-of-speech-text'>{meaning.partOfSpeech}</span>
						<div className='meaning__part-of-speech-line' />
					</h2>
					<div className='meaning__content'>
						<h3 className='meaning__title'>Meaning</h3>
						<ul className='meaning__list'>
							{meaning.definitions.map(({definition, sample}, index) => (
								<li key={index} className='meaning__list-item'>
									<p className='meaning__definition'>{definition}</p>
									{sample && <p className='meaning__sample'>“{sample}”</p>}
								</li>
							))}
						</ul>
					</div>
					{meaning.synonyms.length > 0 && (
						<p className='meaning__synonyms'>
							<span className='meaning__synonyms-label'>Synonyms</span>
							{meaning.synonyms.map((synonym, index) => (
								<a
									key={index}
									className='meaning__synonym-link'
									href='#'
									onClick={(e) => {
										e.preventDefault();
										onClickSynonym(synonym);
									}}>
									{synonym}
								</a>
							))}
						</p>
					)}
				</li>
			))}
		</ul>
	);
}
