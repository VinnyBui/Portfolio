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
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
      },
      fontFamily: {
        clash: ["var(--font-clash)", "sans-serif"],
        chubbo: ["var(--font-chubbo)", "sans-serif"],
        boska: ["Boska", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
