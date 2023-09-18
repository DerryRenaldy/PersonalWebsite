/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#C49B66",
        background: "#080808",
        navbar: "#1D1D1D",
        primary: {
          50: "#F4F4F4",
          100: "#E9E9E9",
          200: "#C8C8C8",
          300: "#A7A7A7",
          400: "#646464",
          500: "#222222",
          600: "#1F1F1F",
          700: "#141414",
          800: "#0F0F0F",
          900: "#0A0A0A",
        },
        secondary: "#1c1c1c",
        accent: "#4A536A",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
