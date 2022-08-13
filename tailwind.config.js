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
          50: "#7492ff85",
          100: "#5378fe9c",
          200: "#3963fcb9",
          300: "#1e4df9dc",
          400: "#0138fff3",
          500: "#022EC7",
          600: "#0d35c6",
          700: "#092ca9",
          800: "#052390",
          900: "#0a206f",
          1000: "#05175b",
        },
        primary: {
          50: "#7492ff85",
          100: "#5378fe9c",
          200: "#3963fcb9",
          300: "#1e4df9dc",
          400: "#0138fff3",
          500: "#022EC7",
          600: "#0d35c6",
          700: "#092ca9",
          800: "#052390",
          900: "#0a206f",
          1000: "#05175b",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
