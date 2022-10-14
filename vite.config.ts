import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let outDir = "";
  let assetsDir = "";
  let target = "";
  switch (mode) {
    case "home":
      outDir = "test";
      assetsDir = "test/assets";
      target = "http://192.168.3.9:1818";
      break;
    default:
      outDir = "dist";
      target = "http://10.32.16.160:1818";
      assetsDir = "assets";
  }
  const config: UserConfig = {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/index.scss";',
        },
      },
    },
    server: {
      proxy: {
        "/api": {
          target,
          rewrite: (path) => path.replace(/^\/api/, ""),
          changeOrigin: true,
          ws: true,
        },
        "/HPImageArchive.aspx": {
          target: "http://cn.bing.com",
          changeOrigin: true,
          ws: true,
        },
      },
    },
    build: {
      outDir,
      assetsDir,
    },
  };
  return config;
});
