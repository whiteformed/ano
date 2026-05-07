type Theme = 'light' | 'dark';

export const themeStore = $state<Theme>('light');

export const toggleTheme = () => {
	const root = document.documentElement;
	const currentTheme = root.dataset.theme as Theme | undefined;
	const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
	root.setAttribute('data-theme', newTheme);
};
