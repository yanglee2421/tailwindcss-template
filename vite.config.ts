import { defineConfig, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";
import { readFileSync } from "node:fs";
import gzip from "vite-plugin-compression";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig((ConfigEnv) => ({
  plugins: [
    vue(),
    gzip({ deleteOriginFile: false }),
    AutoImport({ resolvers: [ElementPlusResolver()] }),
    Components({ resolvers: [ElementPlusResolver()] }),
  ],
  resolve: {
    alias: { "@": resolve(__dirname, "./src") },
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@use "@/assets/index.scss" as *;` },
    },
  },
  base: "/vite-vue/",
  envDir: resolve(__dirname, "./config"),
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
