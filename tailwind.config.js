/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px'
    },
    colors: {
      'almostWhite': '#FAFAFA',
      'lightGrey': '#ADADAD',
      'mediumGrey': '#686868',
      'black': '#151515',
      'colorOne': '#726CEE',
      'colorTwo': '#4BB1DA',
      'colorThree': '#EDD556',
      'colorFour': '#8E4CB6',
      'pureWhite': '#FFFFFF'
    },
    fontFamily: {
      'sans': ['Epilogue', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
