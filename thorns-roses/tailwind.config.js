/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,jsx,ts,tsx}`],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nanum Myeongjo'],
        receipt: [`Caveat`]
      },
      colors: {
        primary: '#DEC9C0',
        secondary:'#9F8B5D',
        third: '#3C4A1C',
        fourth: '#86BFE8',
        fifth: '#6BAADC'
      }
    },
  },
  plugins: [],
}
