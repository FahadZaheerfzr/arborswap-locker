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
        "light": "#F5F6F7",
        "dark": "#17181A",
        "dark-1": "#202226",
        "dark-2": "#242322",
        "dark-3": "#2E2C28",
        "primary-green": "#00783F",
        "dark-text": "#464754",
        "light-text": "#EEF1F8",
        "dim-text": "#A69F9F",
        "dim-text-dark": "#6C717A",
      }
    },
  },
  plugins: [],
}
