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
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#00ADB5",
          black: "#08090D",
          darker: "#0C0E14",
          gray: "#161922",
          white: "#EEEEEE",
        },
      },
      boxShadow: {
        'bezel': 'inset 0 1px 1px rgba(255, 255, 255, 0.12), 0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 50px -10px rgba(0, 173, 181, 0.25)',
      },
    },
  },
  plugins: [],
};
