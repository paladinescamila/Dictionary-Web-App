import {useEffect, useState} from 'react';
import {getWordData} from './utils/getWordData';
import './index.css';

function App() {
	const [search, setSearch] = useState<string>('');
	const [fontFamily, setFontFamily] = useState<FontFamily>('sans');
	const [theme, setTheme] = useState<Theme>('light');

	const [data, setData] = useState<WordData | null>(null);
	const [notFound, setNotFound] = useState<boolean>(false);

	const afterSearch = (data: WordData | null) => {
		if (data) {
			setData(data);
			setNotFound(false);
		} else {
			setData(null);
			setNotFound(true);
		}
	};

	const onSearch = async () => {
		getWordData(search).then(afterSearch);
	};

	useEffect(() => {
		getWordData('keyboard').then(afterSearch);
	}, []);

	return (
		<>
			<header>
				<nav>
					<img src='logo.svg' alt='Logo Diccionario' />
					<div>
						<label htmlFor='font-family'>Sans Serif</label>
						<select id='font-family'>
							<option value='sans-serif'>Sans Serif</option>
							<option value='serif'>Serif</option>
							<option value='mono'>Mono</option>
						</select>
						<input type='checkbox' id='dark-mode-toggle' />
						<label htmlFor='dark-mode-toggle'>Modo Oscuro</label>
					</div>
				</nav>
			</header>

			<main>
				<section aria-label='Buscador'>
					<form role='search'>
						<input
							type='search'
							placeholder='keyboard'
							aria-label='Search word'
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button type='button' onClick={onSearch}>
							Search
						</button>
					</form>
				</section>

				<article>
					<header>
						<div>
							<h1>{data?.word}</h1>
							<p>{data?.phonethic}</p>
						</div>
						<button aria-label='Reproducir pronunciación'>Play</button>
					</header>

					{data?.meanings.map((meaning) => (
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
					))}
				</article>
			</main>

			<footer>
				<p>
					Source{' '}
					<a
						href={`https://en.wiktionary.org/wiki/${data?.word}`}
						target='_blank'
						rel='noopener noreferrer'>
						https://en.wiktionary.org/wiki/{data?.word}
					</a>
				</p>
			</footer>
		</>
	);
}

export default App;
