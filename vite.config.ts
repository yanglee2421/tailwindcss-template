// Vite Imports
import { defineConfig, ConfigEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// NodeJs Imports
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
      scss: { additionalData: `@use "@yanglee2421/scss/src" as *;` },
    },
  },
  base: "/vite-vue",
  // envDir: resolve(__dirname, "./config"),
  build: build(ConfigEnv),
  server: server(ConfigEnv),
}));

function build({ mode }: ConfigEnv): UserConfig["build"] {
  let outDir = "dist";
  switch (mode) {
    case "live":
      outDir = "dist";
  }

  return {
    outDir,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: "assets/vite-app.js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  };
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
        // target: "https://gjcx.whsybj.cn:8443",
        target: "http://localhost",
        rewrite: (path) => path.replace(/^\/dev/, ""),
        changeOrigin: true,
        ws: true,
      },
    },
  };
}
