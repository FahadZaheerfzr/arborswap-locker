/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "gilroy": ["Gilroy", "GilroyBold"],
      },
      colors: {
        "dark": "#17181A",
      }
    },
  },
  plugins: [],
}
