import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        screens: {
          'sm': '640px',
          'md': '768px',
        },
      },
      
      colors: {
        secondary: "#1E90FF",
        darkBg: "#131424",
      },
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(180deg, rgba(170, 54, 124, 0.7) 0%, rgba(74, 47, 189, 0.7) 100%)",
      },
      
      
    },
  },
  plugins: [],
};
export default config;
