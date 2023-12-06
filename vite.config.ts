// Vite Imports
import { defineConfig, UserConfig } from "vite";
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

    // ** Build
    build: build(),

    // DEV Server
    server: server(),

    // Env file directory
    envDir: resolve(__dirname, "./"),
  };
});

// Build Config
function build(): UserConfig["build"] {
  const __dirname = dirname(fileURLToPath(import.meta.url));

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
          if (id.includes("node_modules/cropperjs")) {
            return "cropperjs";
          }

          if (id.includes("node_modules/fabric")) {
            return "fabric";
          }
        },
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
      },
    },
  };
}

// Server Config
function server(): UserConfig["server"] {
  const __dirname = dirname(fileURLToPath(import.meta.url));

  return {
    fs: { allow: [resolve(__dirname, "./")] },
    port: 3007,
    strictPort: true,
    hmr: {
      port: 3007,
    },
    proxy: {
      "/dev": {
        target: "http://localhost:5173",
        rewrite(path) {
          return path.replace(/^\/dev/, "");
        },
        changeOrigin: true,
        ws: true,
      },
    },
  };
}
