import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brandRed: "#F53B40",
        brandYellow: "#F88E04",
        brandPurple: "#6D4CBD",
        brandOrange: "#F88E04",
      },
      fontFamily: {
        retro: ["var(--font-retro-tech)", "sans-serif"],
        code: ["var(--font-ibm)", "monospace"],
        lcd: ["var(--font-lcd)", "monospace"],
      },
      animation: {
        grid: "grid 15s linear infinite",
        "tilt-infinite": "tilt-left-right 2s ease-in-out infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "tilt-left-right": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-5deg)" },
          "75%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      fontSize: {
        title: "10rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
