import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/",
  build: {
    chunkSizeWarningLimit: 1000, // Increase limit to 1000kB
  }, // 🔹 Replace with your GitHub repository name
});

