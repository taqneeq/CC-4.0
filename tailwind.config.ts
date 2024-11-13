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
      },
      fontFamily: {
        retro: ["var(--font-retro-tech)", "sans-serif"],
        code: ["var(--font-ibm)", "monospace"],
        lcd: ["var(--font-lcd)", "monospace"],
      },
      animation: {
        grid: "grid 15s linear infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
