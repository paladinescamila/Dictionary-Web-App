import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Phonetic from './components/Phonetic/Phonetic';
import Meanings from './components/Meanings/Meanings';
import Footer from './components/Footer/Footer';

import './index.css';

function App() {
	return (
		<>
			<Header />
			<main>
				<SearchBar />
				<article>
					<Phonetic />
					<Meanings />
				</article>
			</main>

			<Footer />
		</>
	);
}

export default App;
