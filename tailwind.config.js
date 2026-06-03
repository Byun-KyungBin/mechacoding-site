/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Noto Sans KR", "sans-serif"],
      },
      colors: {
        primary: "#000000",
        secondary: "#666666",
        dark: "#0a0a0a",
        surface: "#fafafa",
      },
    },
  },
  plugins: [],
};
