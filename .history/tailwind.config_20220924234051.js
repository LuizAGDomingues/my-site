/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        'galaxy4k': "url('/static/fundo_4k.jpg')"
      }
    },
  },
  plugins: [],
}