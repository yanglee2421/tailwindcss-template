import { defineConfig, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";

// https://vitejs.dev/config/
export default defineConfig((ConfigEnv) => ({
  plugins: [vue()],
  resolve: {
    alias: { "@": resolve(__dirname, "./src") },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/index.scss" as *;`,
      },
    },
  },
  envDir: resolve(__dirname, "./config"),
  base: base(ConfigEnv),
  build: build(ConfigEnv),
  server: server(),
}));

function base({ mode }: ConfigEnv): UserConfig["base"] {
  return "/vite-vue/";
}

function build({ mode }: ConfigEnv): UserConfig["build"] {
  let outDir = mode === "gitee" ? "docs" : "vue-app";
  return { outDir };
}

function server(): UserConfig["server"] {
  return {
    port: 5174,
    https: {
      key: readFileSync(resolve(__dirname, "./config/localhost+1-key.pem")),
      cert: readFileSync(resolve(__dirname, "./config/localhost+1.pem")),
    },
    proxy: {
      "/dev": {
        target: "http://192.168.1.4",
        rewrite: (path) => path.replace(/^\/dev/, ""),
        changeOrigin: true,
        ws: true,
      },
    },
  };
}
