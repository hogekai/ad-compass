/// <reference types="vitest" />
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path, { resolve } from "path";
import { fileURLToPath } from "url";
import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import autoprefixer from "autoprefixer";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import terser from "@rollup/plugin-terser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  build: {
    emptyOutDir: false,
    minify: false,
    lib: {
      entry: resolve(__dirname, "src/ad-compass.ts"),
      name: "AdCompass",
      fileName: "ad-compass",
    },
    rollupOptions: {
      external: [],
      output: {
        plugins: [
          getBabelOutputPlugin({
            allowAllFormats: true,
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "> 0.25%, not dead, IE 11",
                  useBuiltIns: "usage",
                  modules: false,
                  corejs: false,
                },
              ],
            ],
          }),
          terser({
            mangle: true,
            toplevel: true,
            compress: {
              unused: true,
            },
          }),
        ],
      },
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    alias: {
      "@/": path.resolve(__dirname, "./src/"),
    },
  },
  plugins: [tsconfigPaths(), libInjectCss()],
});
