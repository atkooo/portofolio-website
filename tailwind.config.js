/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html,css}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00ADB5",
          black: "#222831",
          gray: "#393E46",
          white: "#EEEEEE",
        },
      },
    },
  },
  plugins: [],
};
