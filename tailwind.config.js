/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#EAD09F",
          DEFAULT: "#C5A059",
          dark: "#8B7344",
          soft: "rgba(197, 160, 89, 0.1)",
        },
        black: {
          pure: "#000000",
          DEFAULT: "#050505",
          lighter: "#0F1115",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Source Serif Pro", "serif"],
      },
      boxShadow: {
        'premium': '0 4px 50px 0 rgba(0, 0, 0, 0.3)',
        'gold-soft': '0 0 20px 0 rgba(197, 160, 89, 0.1)',
      },
      backgroundImage: {
        'edtech-gradient': "radial-gradient(circle at 50% 0%, #1e293b 0%, #050505 100%)",
      }
    },
  },
  plugins: [],
};