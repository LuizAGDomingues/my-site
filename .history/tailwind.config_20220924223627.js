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
        'galaxyFHD': "url('/src/assets/fundo_full_hd.JPG')",
        'galaxy4k': "url('/src/assets/fundo_4k.jpg')"
      }
    },
  },
  plugins: [],
}