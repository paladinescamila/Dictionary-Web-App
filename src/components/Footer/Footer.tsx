export default function Footer({word}: {word: string}) {
	return (
		<footer>
			<p>
				Source{' '}
				<a
					href={`https://en.wiktionary.org/wiki/${word}`}
					target='_blank'
					rel='noopener noreferrer'>
					https://en.wiktionary.org/wiki/{word}
				</a>
			</p>
		</footer>
	);
}
