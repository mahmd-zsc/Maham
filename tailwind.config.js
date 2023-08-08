/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainRed: "#ff4d39",
        mainDark: "#0f172a",
        secondDark: "#1e293b",
        LightDark: "#293548",
        lightBlue: "#2d4258",
      },
    },
  },

  plugins: [],
};
