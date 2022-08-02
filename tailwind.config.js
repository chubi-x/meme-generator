/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        purple1: "#6422ad",
        blue: "#094479",
        purple2: "#7700ff",
      },
    },
  },
  plugins: [require("tailwindcss-gradient")],
};

