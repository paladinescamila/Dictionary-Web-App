export default function Header() {
	return (
		<header>
			<nav>
				<img src='logo.svg' alt='Logo Diccionario' />
				<div>
					<label htmlFor='font-family'>Sans Serif</label>
					<select id='font-family'>
						<option value='sans-serif'>Sans Serif</option>
						<option value='serif'>Serif</option>
						<option value='mono'>Mono</option>
					</select>
					<input type='checkbox' id='dark-mode-toggle' />
					<label htmlFor='dark-mode-toggle'>Modo Oscuro</label>
				</div>
			</nav>
		</header>
	);
}
