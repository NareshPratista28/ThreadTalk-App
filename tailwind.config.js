/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#ff3131',
        foreground: '#1c1c1c',
        background: '#212121',
        'gray-dark': '#66757f',
        'gray-light': '#edeff1',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem', // Because Tailwind doesn't have 72px by default
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        10: '10px',
      },
    },
  },
  plugins: [require('rippleui')],
};
