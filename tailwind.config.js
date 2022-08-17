/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    
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
    extend: {
      gridTemplateColumns: {
        'desktop': 'minmax(auto, 165px) 540px auto 480px minmax(auto, 130px)',
        'dropdown': '16px auto'
      },
      screens: {
        sm: '375px',
        xl: '1440px'
      }
    },
  },
  plugins: [],
}
