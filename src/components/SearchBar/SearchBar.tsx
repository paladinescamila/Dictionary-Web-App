export default function SearchBar({
	search,
	setSearch,
	onSearch,
}: {
	search: string;
	setSearch: (search: string) => void;
	onSearch: () => void;
}) {
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
