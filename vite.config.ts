import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // css预处理器
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/index.scss";'
      }
    }
  },
  // 开发服务器代理
  server: {
    proxy: {
      "/api": {
        target: "http://10.32.16.160:1818",
        // target: "http://192.168.3.9:1818",
        rewrite: path => path.replace(/^\/api/, ""),
        changeOrigin: true,
        ws: true,
      }
    },
  },
})
