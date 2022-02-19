import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 4000,
  },
  plugins: [react()],
});
