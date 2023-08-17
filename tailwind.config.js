/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#04142E',
        secondary: '#E43D4E',
      }
    },
  },
  plugins: [require("daisyui")],
}

