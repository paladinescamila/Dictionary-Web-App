import {useEffect} from 'react';
import {useWordStore} from '../../stores/wordStore';
import SearchIcon from '../../assets/icon-search.svg';
import './SearchBar.scss';

export default function SearchBar() {
	const {search, setSearch, searchWord} = useWordStore();

	const onSearch = () => searchWord(search);

	useEffect(() => {
		onSearch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section aria-label='Search' className='search-bar'>
			<form role='search'>
				<input
					type='search'
					placeholder='keyboard'
					aria-label='Search word'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onSubmit={onSearch}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							e.preventDefault();
							onSearch();
						}
					}}
				/>
				<button type='button' onClick={onSearch}>
					<img
						src={SearchIcon}
						alt='Search'
						aria-hidden='true'
						className='search-bar__icon'
					/>
				</button>
			</form>
		</section>
	);
}
