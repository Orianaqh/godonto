/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray: '#F8F9FD',
        darkGray: '#9397A5',
        grayNeutral: '#DFE3E6',
        rosa: '#F33799',
        green: '#CCE954',
        blue: '#76A5EE',
      },
      fontFamily: {
        'menu1': ['Barlow Condensed'],
        'menu': ['PT Sans Narrow'],
      },
    },
  },
  plugins: [],
}