import type { Config } from "tailwindcss";

export default defineConfig();

function defineConfig(): Config {
  return {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
      extend: {},
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    darkMode: ["selector", ".dark"],
    plugins: [],
    corePlugins: {
      preflight: true,
    },
    // prefix: "shopeo-",
    // important: "#root",
  };
}
