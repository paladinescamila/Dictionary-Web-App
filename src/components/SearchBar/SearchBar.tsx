import {useEffect} from 'react';
import {useWordStore} from '../../stores/wordStore';
import SearchIcon from '../../assets/icon-search.svg';
import './SearchBar.scss';

export default function SearchBar() {
	const {search, setSearch, searchWord, searchIsEmpty, setSearchIsEmpty} = useWordStore();

	const onSearch = () => {
		if (search.trim() === '') {
			setSearchIsEmpty(true);
			return;
		}

		setSearchIsEmpty(false);
		searchWord(search);
	};

	useEffect(() => {
		onSearch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section aria-label='Search' className='search-bar'>
			<form
				role='search'
				className={`search-bar__form ${searchIsEmpty ? 'search-bar__form--error' : ''}`}>
				<input
					type='search'
					placeholder='Search for any word…'
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
					<span className='sr-only'>Search</span>
				</button>
			</form>

			{searchIsEmpty && (
				<p className='search-bar__error' role='alert'>
					Whoops, can’t be empty…
				</p>
			)}
		</section>
	);
}
