import {initializeUI} from './utils/ui';
import {useWordStore} from './stores/wordStore';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Phonetic from './components/Phonetic/Phonetic';
import Meanings from './components/Meanings/Meanings';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

initializeUI();

function App() {
	const {notFound} = useWordStore();

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
