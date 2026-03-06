import {useState, useEffect} from 'react';
import {getWordData} from '../../utils/getWordData';
import {useWordStore} from '../../stores/wordStore';

export default function SearchBar() {
	const [search, setSearch] = useState<string>('');
	const {setData, setNotFound} = useWordStore();

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section aria-label='Search'>
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
	);
}
