import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/index.scss";'
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
})
