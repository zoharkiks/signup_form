/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black':'#000000',
      'gray-text':'BEBCBC',
      'gray-bg': '#CBCBCB',
      'gray-light': '#F3F3F3',
      'gray-checkbox':'CAC7C7',
      'blue':'#3BADCD',
      'green':'#3BADCD'
    },
    extend: {
      fontFamily: {
        hum: ["HUM777", "cursive"],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}
