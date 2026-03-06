import {useWordStore} from '../../stores/wordStore';

export default function Footer() {
	const {data} = useWordStore();

	if (!data) return null;

	return (
		<footer>
			<p>
				Source{' '}
				<a
					href={`https://en.wiktionary.org/wiki/${data.word}`}
					target='_blank'
					rel='noopener noreferrer'>
					https://en.wiktionary.org/wiki/{data.word}
				</a>
			</p>
		</footer>
	);
}
