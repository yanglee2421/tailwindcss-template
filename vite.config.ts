import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/index.scss";',
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
});
