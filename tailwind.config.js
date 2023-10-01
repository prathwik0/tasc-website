/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand' : '#5E20AB',
        'primary-dark': '#000015',
        'primary-light': '#ECCAFF',
        'secondary-dark': '#000020',
        'secondary-light': '#F3E1FF',
        'muted-dark': '#121928',
        'muted-light': '#F3E7FB',
        'white': '#FFFFFF',
        'black': '#000000',
      }
    },
  },
  plugins: [],
}

