/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: '#5E20AB',

				// Used in NavBar
				'primary-dark': '#000000',
				'primary-light': '#ECCAFF', // '#F7ECFF',

				// Used as background
				'secondary-dark': '#090909',
				'secondary-light': '#FFFFFF',

				'muted-dark': '#121212',
				'muted-light': '#F3E7FB',

				// Used in boxes
				'accent-light': '#ECCAFF',
				'accent-dark': '#101F1F',

				// Nandan's theme
				// 'primary-dark': '#000015',
				// 'primary-light': '#ECCAFF',
				// 'secondary-dark': '#000029',
				// 'secondary-light': '#F3E1FF',
				// 'muted-dark': '#121928',
				// 'muted-light': '#F3E7FB',

				white: '#FFFFFF',
				black: '#000000'
			}
		}
	},
	plugins: []
};
