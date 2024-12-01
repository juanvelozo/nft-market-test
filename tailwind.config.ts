import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
