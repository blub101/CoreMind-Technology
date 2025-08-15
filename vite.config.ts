import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  root: path.resolve(__dirname, "client"), // tell Vite where your frontend source is
  build: {
    outDir: path.resolve(__dirname, "dist"), // final output is dist/
    emptyOutDir: true
  }
});
