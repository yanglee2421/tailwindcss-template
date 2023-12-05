// Vite Imports
import { defineConfig, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// NodeJs Imports
import { dirname, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig((ConfigEnv) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const isBuild = ConfigEnv.command === "build";

  return {
    plugins: [vue()],

    // Path Alias
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    // ** CSS
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@use "@/assets/scss" as *;` },
      },
      modules: {
        localsConvention: "camelCaseOnly",
      },
    },

    base: isBuild ? "./" : "/vue-ele",
    // envDir: resolve(__dirname, "./config"),

    // ** Build
    build: build(ConfigEnv),

    // DEV Server
    server: server(ConfigEnv),

    // Env file directory
    envDir: resolve(__dirname, "./"),
  };
});

// Build Config
function build({ mode }: ConfigEnv): UserConfig["build"] {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  void mode;

  return {
    outDir: "docs",
    emptyOutDir: true,
    manifest: false,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
      },
      output: {
        manualChunks(id) {
          const isCropperjs = id.includes("node_modules/cropperjs");
          if (isCropperjs) return "cropperjs";
          const isFabric = id.includes("node_modules/fabric");
          if (isFabric) return "fabric";
        },
        // entryFileNames: "assets/wp-vite-main.js",
        // assetFileNames: "assets/[name][extname]",
        // chunkFileNames: "assets/[name]-[hash].js",
      },
    },
  };
}

// Server Config
function server({ mode }: ConfigEnv): UserConfig["server"] {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  void mode;

  return {
    fs: { allow: [resolve(__dirname, "../../")] },
    port: 3007,
    proxy: {
      "/dev": {
        ws: true,
        changeOrigin: true,
        target: "http://localhost:5173",
        rewrite(path) {
          return path.replace(/^\/dev/, "");
        },
      },
    },
  };
}
