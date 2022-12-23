import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue()],
    // 路径别名
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // CSS预处理器
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/index.scss" as *;',
        },
      },
    },
    // 开发服务器
    server: {
      port: 5174,
      proxy: {
        "/dev": {
          target: "http://192.168.1.4",
          rewrite: (path) => path.replace(/^\/dev/, ""),
          changeOrigin: true,
          ws: true,
        },
      },
    },
    base: "/vue/",
    build: {
      outDir: "vue-app",
    },
  };
});
