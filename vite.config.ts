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
          additionalData: '@use "@/assets/css/index.scss" as *;',
        },
      },
    },
    /* server: {
      proxy: {
        "/api": {
          target: "http://10.32.16.160",
          rewrite: (path) => path.replace(/^\/api/, ""),
          changeOrigin: true,
          ws: true,
        },
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
    }, */
  };
});
