/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1920px",
      "2xl": "1920px",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
