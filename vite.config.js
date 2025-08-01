import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  server: {
    proxy: {
      // Proxy setup
      '/api': {
        target: 'https://redeemmoneytransfer.com/prod/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Fixing the rewrite
      },
    },
  },

  base: '/',

  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],

  build: {
    sourcemap: false,
    rollupOptions: {
      external: ['jquery'], // Keeping jQuery external if used via CDN
      output: {
        globals: {
          jquery: 'jQuery',
        },
      },
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'], 
    exclude: ['jquery'],
  },
  
});
