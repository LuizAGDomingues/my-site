/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        'galaxy': "url('/fundo_4k.jpg')"
      },
      animation: {
        'fade': 'fade .5s linear',
        'move-right': 'moveRight .5s linear',
        'move-left': 'moveLeft .6s linear',
      },
      keyframes: {
        fade: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        moveRight: {
          'from': { opacity: '0', transform: 'translateX(-50%)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        moveLeft: {
          'from': { opacity: '0', transform: 'translateX(50%)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}