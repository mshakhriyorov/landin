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
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
        move_card: {
          '0%': { transform: 'translateX(400px)' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        zoom: 'zoom 2s ease-in-out forwards',
        move_card: 'move_card 2s ease-out forwards',
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
