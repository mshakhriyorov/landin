const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      'xs': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
