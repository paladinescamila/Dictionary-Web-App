import {useEffect, useState} from 'react';
import {getWordData} from './utils/getWordData';
import './index.css';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Phonetic from './components/Phonetic/Phonetic';
import Meaning from './components/Meaning/Meaning';
import Footer from './components/Footer/Footer';

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

	const onSearch = () => getWordData(search).then(afterSearch);

	useEffect(() => {
		getWordData('keyboard').then(afterSearch);
	}, []);

	return (
		<>
			<Header />

			<main>
				<SearchBar {...{search, setSearch, onSearch}} />

				{data && (
					<article>
						<Phonetic {...{data}} />

						{data.meanings.map((meaning) => (
							<Meaning key={meaning.partOfSpeech} {...{meaning}} />
						))}
					</article>
				)}
			</main>

			{data && <Footer word={data.word} />}
		</>
	);
}

export default App;
