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
        
      },
      keyframes: {
        fade: {
          'from': { trasnform: 'opacity(0)' },
          'to': {trasnform: 'opacity(1)'},
        },
      },
    },
  },
  plugins: [],
}