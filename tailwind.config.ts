import type { Config } from "tailwindcss";
import tailwindStandartColors from "tailwindcss/colors";
const colors = {
  ...tailwindStandartColors,
  black: "#01010D",
  "black-inactive": "#C2C6CF",
  primary: "#7A57E2",
  "primary-light": "#F2F0FC",
  secondary: "#5AC97F",
  "bg-color": "#FAF9FC",
  "main-bg": "#F9F9FB",
  "border-color": "#E9E7FA",
  "error-color": "#F05568",

  warning: "#F1D399",
};
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    extend: {
      fontSize: {
        xs: "0.82rem",
        sm: "0.98rem",
        base: "1.15rem",
        lg: "1.22rem",
        xl: "1.36rem",
        "1.5xl": "1.5rem",
        "2xl": "1.725rem",
        "3xl": "2.155rem",
        "4xl": "2.58rem",
        "5xl": "3.45rem",
        "6xl": "4.3rem",
        "7xl": "5.17rem",
        "8xl": "6.9rem",
        "9xl": "9.2rem",
      },
      keyframes: {
        animationOpacity: {
          from: { opacity: "0.2" },
          to: { opacity: "1" },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "50%": {
            opacity: "0.3",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
      animation: {
        opacity: "animationOpacity 0.7s ease-in-out",
        scaleIn: "scaleIn .35s ease-in-out",
      },
      gridTemplateColumns: {
        // Простая сетка из 16 столбцов
        16: "repeat(16, minmax(0, 1fr))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        "4/3": "16 / 11",
      },
    },
  },
  plugins: [],
};
export default config;
