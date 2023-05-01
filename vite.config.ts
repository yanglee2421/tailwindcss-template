import { defineConfig, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";
import gzip from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig((ConfigEnv) => ({
  plugins: [vue(), gzip({ deleteOriginFile: false })],
  resolve: {
    alias: { "@": resolve(__dirname, "./src") },
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@use "@yanglee2421/scss/src" as *;` },
    },
  },
  base: "/vite-vue/",
  // envDir: resolve(__dirname, "./config"),
  build: build(ConfigEnv),
  server: server(ConfigEnv),
}));

function build({ mode }: ConfigEnv): UserConfig["build"] {
  const outDir = mode === "gitee" ? "docs" : "vue-app";
  return { outDir };
}

function server({ mode }: ConfigEnv): UserConfig["server"] {
  const isGitee = mode === "gitee";
  const https = isGitee && {
    key: readFileSync(resolve(__dirname, "./config/localhost+1-key.pem")),
    cert: readFileSync(resolve(__dirname, "./config/localhost+1.pem")),
  };

  return {
    https,
    port: 5174,
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
