import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Frontend lives in /client
  root: path.resolve(__dirname, 'client'),

  // Make "@/..." imports work
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client', 'src'),
      '@shared': path.resolve(__dirname, 'shared'),
    },
  },

  // Build to /dist at the repo root (what Vercel serves)
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },

  // Dev-only — ignored on Vercel
  server: {
    port: 3000,
  },
});
