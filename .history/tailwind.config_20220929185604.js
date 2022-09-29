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
        'move-right-1': 'move 1s linear',
        'move-right-2': 'move 1s linear .2s',
        'move-right-3': 'move .6s linear .4s',
      },
      keyframes: {
        fade: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        move: {
          'from': { opacity: '0', transform: 'translateX(-50%)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}