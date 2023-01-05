import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
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
        additionalData: '@use "@/assets/index.scss" as *;',
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
  // 路由
  base: mode === "gitee" ? "./" : "/vue/",
  // 构建
  build: {
    outDir: mode === "gitee" ? "dist" : "vue-app",
  },
}));
