import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const buildTime = Date.now().toString(36);

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/app-[hash]-${buildTime}.js`,
        chunkFileNames: `assets/chunk-[hash]-${buildTime}.js`,
        assetFileNames: `assets/[name]-[hash]-${buildTime}.[ext]`,
      },
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});
