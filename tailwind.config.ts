import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#22c55e",
        primary: "#3b82f6",
        darkBg: "#0f172a",
        cardBg: "rgba(30, 41, 59, 0.5)",
      },
      fontFamily: {
        heading: ["var(--font-archivo)"],
        body: ["var(--font-space-grotesk)"],
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90deg, rgba(15, 23, 42, 0.9) 0%, rgba(2, 6, 23, 0.8) 100%)",
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
