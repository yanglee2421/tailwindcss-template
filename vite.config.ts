// Vite Imports
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// NodeJs Imports
import { dirname, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig((ConfigEnv) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const isBuild = ConfigEnv.command === "build";

  return {
    plugins: [vue()],

    // Path Alias
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    // ** CSS
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@use "@/assets/scss" as *;` },
      },
      modules: {
        localsConvention: "camelCaseOnly",
      },
    },

    base: isBuild ? "./" : "/vue-ele",

    // Env File Directory
    envDir: resolve(__dirname, "./"),

    // ** Build
    build: {
      outDir: "docs",
      emptyOutDir: true,

      manifest: false,
      sourcemap: false,
      chunkSizeWarningLimit: 500,

      rollupOptions: {
        input: {
          main: resolve(__dirname, "./index.html"),
        },
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/cropperjs")) {
              return "cropperjs";
            }

            if (id.includes("node_modules/fabric")) {
              return "fabric";
            }

            if (id.includes("node_modules/element-plus")) {
              return "element-plus";
            }
          },
          entryFileNames: "assets/[name]-[hash].js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash][extname]",
        },
      },

      target: "modules",
      minify: "esbuild",

      cssTarget: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
      cssMinify: "esbuild",
      cssCodeSplit: true,
    },

    // Dev Server
    server: {
      port: 3007,
      strictPort: true,
      hmr: {
        port: 3007,
      },
      proxy: {
        "/dev": {
          target: "http://localhost:5173",
          rewrite(path) {
            return path.replace(/^\/dev/, "");
          },
          changeOrigin: true,
          ws: true,
        },
      },
      fs: {
        allow: [resolve(__dirname, "./")],
      },
    },
  };
});
