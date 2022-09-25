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
        'galaxyFHD': "url('/public/fundo-full-hd.jpg')",
        'galaxy4k': "url('/public/fundo-4k.jpg.jpg')"
      }
    },
  },
  plugins: [],
}