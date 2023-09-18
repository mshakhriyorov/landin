const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '2xs': ['8px', '10px'],
      },
      maxWidth: {
        '2xs': '200px',
        '3xs': '350px'
      },
      maxHeight: {
        'img96': '22rem',
        'img100': '28rem'
      }
    },
    screens: {
      'xs': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      '2.5xl': {'min': '1290px', 'max': '1600px'},
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
