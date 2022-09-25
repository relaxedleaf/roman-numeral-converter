const checkbox = document.getElementById('checkbox');

const DARK_THEME = 'dark';
const THEME_KEY = 'theme';

const theme = localStorage.getItem(THEME_KEY);
if (theme === DARK_THEME) {
	document.body.classList.add(DARK_THEME);
	checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
	const isDark = document.body.classList.contains(DARK_THEME);
	if (isDark) {
		document.body.classList.remove(DARK_THEME);
		localStorage.removeItem(THEME_KEY);
	} else {
		document.body.classList.add(DARK_THEME);
		localStorage.setItem(THEME_KEY, DARK_THEME);
	}
});
