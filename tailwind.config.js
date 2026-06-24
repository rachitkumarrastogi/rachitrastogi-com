/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        paper: "#faf8f5",
        surface: "#ffffff",
        ink: "#1a1a18",
        muted: "#6b6560",
        line: "#e5e0d8",
        slate: {
          850: "#1a1f2b",
          950: "#0c0f14",
        },
        gold: {
          DEFAULT: "#a67c00",
          light: "#c9a227",
          dim: "#7a5e10",
        },
        cream: "#f4f0e6",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
