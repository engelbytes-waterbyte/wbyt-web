/** @type {import('tailwindcss').Config} */
const { join } = require("path");

module.exports = {
  content: [
    join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#80557BFF",
          100: "#990F43F6",
          200: "#B3073EFC",
          300: "#CC022EC7",
          400: "#073EFC",
          500: "#073EFC",
          600: "#022EC7",
          700: "#0838DE",
          800: "#022EC7",
          900: "#0428A4",
          1000: "#032084",
        },
        primary: {
          50: "#557BFF",
          100: "#0F43F6",
          200: "#073EFC",
          300: "#022EC7",
          400: "#073EFC",
          500: "#073EFC",
          600: "#022EC7",
          700: "#0838DE",
          800: "#022EC7",
          900: "#0428A4",
          1000: "#032084",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
