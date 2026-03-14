import {useEffect} from 'react';
import {useUIStore} from './stores/uiStore';
import {useWordStore} from './stores/wordStore';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Phonetic from './components/Phonetic/Phonetic';
import Meanings from './components/Meanings/Meanings';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

function App() {
	const {setFontFamily, setTheme} = useUIStore();
	const {notFound} = useWordStore();

	useEffect(() => {
		setFontFamily('sans');
		setTheme(
			window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light',
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='app'>
			<Header />
			<main>
				<SearchBar />
				<article>
					<Phonetic />
					<Meanings />
				</article>
			</main>
			<Footer />
			{notFound && <NotFound />}
		</div>
	);
}

export default App;
