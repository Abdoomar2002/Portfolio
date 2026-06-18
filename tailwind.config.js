/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#05060a",
        surface: "#080a12",
        primary: "#2dd4bf",
        secondary: "#7c5cff",
        accent: "#ff4d8d",
        sky: "#38bdf8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(45,212,191,0.45)",
        "glow-violet": "0 0 40px -10px rgba(124,92,255,0.5)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
