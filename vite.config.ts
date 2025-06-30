import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    historyApiFallback: true,
  },
  // This ensures that the router works properly when accessing routes directly
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});