import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "./",
  server: {
    host: "0.0.0.0",
    cors: true,
    port: 3366,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
