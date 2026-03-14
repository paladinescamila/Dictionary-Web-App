import './NotFound.scss';

export default function NotFound() {
	return (
		<div className='not-found'>
			<p className='not-found__icon'>😕</p>
			<p className='not-found__title'>No Definitions Found</p>
			<p className='not-found__description'>
				Sorry pal, we couldn't find definitions for the word you were looking for. You can
				try the search again at later time or head to the web instead.
			</p>
		</div>
	);
}
