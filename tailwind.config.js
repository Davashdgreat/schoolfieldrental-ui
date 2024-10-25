/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#9e8464",
        secondary: "#414141",
        placeholder: "#d0d0d0",
        description: "#686868",
        title: "#2e2e2e",
        disabled: "#939393",
      }
    },
  },
  plugins: [],
}

