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
        'galaxyFHD': "url('/public/fundo_full_hd.jpg')",
        'galaxy4k': "url('/src/')"
      }
    },
  },
  plugins: [],
}