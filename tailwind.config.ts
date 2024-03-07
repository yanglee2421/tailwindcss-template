// Tailwind Imports
import { Config } from "tailwindcss";

export default defineConfig();

function defineConfig(): Config {
  return {
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
      colors: {
        "el-bg-color": "var(--el-bg-color)",
        "el-text-color-regular": "var(--el-text-color-regular)",
        "el-border-color": "var(--el-border-color)",
        "el-color-primary": "var(--el-color-primary)",
      },
    },
    darkMode: ["selector", ".dark"],
    plugins: [],
    corePlugins: {
      preflight: false,
    },
    // prefix: "shopeo-",
    // important: "#root",
  };
}
