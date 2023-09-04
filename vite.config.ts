// Vite Imports
import { defineConfig, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// NodeJs Imports
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig((ConfigEnv) => ({
  plugins: [vue()],

  // Path Alias
  resolve: {
    alias: { "@": resolve(__dirname, "./src") },
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

  base: "/vite-vue",
  // envDir: resolve(__dirname, "./config"),
  build: build(ConfigEnv),
  server: server(ConfigEnv),
}));

function build({ mode }: ConfigEnv): UserConfig["build"] {
  void mode;

  return {
    outDir: "docs",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const isVue = id.includes("node_modules/vue");
          if (isVue) return "vue";
          const isAxios = id.includes("node_modules/axios");
          if (isAxios) return "axios";
        },
      },
    },
  };
}

function server({ mode }: ConfigEnv): UserConfig["server"] {
  void mode;

  return {
    https: false,
    fs: { allow: ["./"] },
    port: 3004,
    proxy: {
      "/dev": {
        ws: true,
        changeOrigin: true,
        target: "http://localhost",
        rewrite(path) {
          return path.replace(/^\/dev/, "");
        },
      },
    },
  };
}
