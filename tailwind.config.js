/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      markazi: ['Markazi Text', 'serif'],
      karla: ['Karla', 'sans-serif'],
    },
    extend: {
      colors: {
        primary_1: '#495e57',
        primary_2: '#f4ce14',
        secondary_1: '#ee9972',
        secondary_2: '#fbdabb',
        highlight_1: '#edefee',
        highlight_2: '#333333',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
