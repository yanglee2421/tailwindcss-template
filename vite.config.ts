// Vite Imports
import { defineConfig, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// NodeJs Imports
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig((ConfigEnv) => ({
  plugins: [vue()],
  resolve: {
    alias: { "@": resolve(__dirname, "./src") },
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@use "@yanglee2421/scss/src" as *;` },
    },
  },

  base: "/vite-vue",
  // envDir: resolve(__dirname, "./config"),
  build: build(ConfigEnv),
  server: server(ConfigEnv),
}));

function build({ mode }: ConfigEnv): UserConfig["build"] {
  void mode;

  return { outDir: "docs" };
}

function server({ mode }: ConfigEnv): UserConfig["server"] {
  void mode;

  return {
    https: false,
    fs: { allow: ["./"] },
    port: 5174,
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
