/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Poppins", "sans-serif"],
        "rouge-script": ["Rouge Script", "cursive"],
      },
      fontSize: {},
      colors: {
        text: "var(--text-color)",
        text2: "var(--text-color2)",
        background1: "var(--background1-color)",
        background2: "var(--background2-color)",
        background3: "var(--background3-color)",
        accent: "var(--accent-color)",
        secondary: "var(--secondary-color)",
        highlight: "var(--highlight-color)",
        border: "var(--border-style)",
        shadow: "var(--shadow-color)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
