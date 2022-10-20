import { defineConfig } from "vite";
import type { UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
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
          target: "http://127.0.0.1",
          rewrite: (path) => path.replace(/^\/api/, ""),
          changeOrigin: true,
          ws: true,
        },
      },
    },
    /* build: {
      outDir: "dist",
      assetsDir: "assets",
    }, */
  };
  return config;
});
