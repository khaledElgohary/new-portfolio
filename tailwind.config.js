/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "web-m": "#38BDF8",
        "web-back": "#18181b",
        "header-back": "rgba(24, 24, 27, 0.75)",

      },
    },
  },
  plugins: [tailwindcssAnimate],
};
