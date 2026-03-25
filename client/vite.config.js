import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Use root path locally, GitHub Pages path for production build/deploy.
  base: command === 'build' ? '/Portfolio/' : '/',
  build: {
    chunkSizeWarningLimit: 1000,
  },
}));
