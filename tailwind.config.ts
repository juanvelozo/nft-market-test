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
        white: "var(--white)",
        foreground: "var(--foreground)",
        grayText: "var(--gray-text)",
        grayBackground: "var(--gray-background)",
        primary: "var(--primary)",
      },
    },
  },
  plugins: [],
} satisfies Config;
