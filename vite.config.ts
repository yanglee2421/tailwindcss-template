import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  /**
   * 打包路径
   */
  let base = "/";
  switch (mode) {
    case "gitee":
      base = "./";
      break;
    default:
      base = "/vue/";
  }
  /**
   * 输出目录
   */
  let outDir = "dist";
  switch (mode) {
    case "gitee":
      outDir = "docs";
      break;
    default:
      outDir = "vue-app";
  }
  return {
    plugins: [vue()],
    // 路径别名
    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
    },
    // CSS预处理器
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/index.scss" as *;`,
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
    base,
    // 构建
    build: { outDir },
    // env 变量
    envDir: path.resolve(__dirname, "./config"),
  };
});
