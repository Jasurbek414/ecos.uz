import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: () => `assets/app-[hash]-${Date.now()}.js`,
        chunkFileNames: () => `assets/chunk-[hash]-${Date.now()}.js`,
        assetFileNames: () => `assets/style-[hash]-${Date.now()}.[ext]`,
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
