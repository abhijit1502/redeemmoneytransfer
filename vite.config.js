import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    
    // Environment configuration
    envPrefix: 'VITE_',
    define: {
      'process.env': env,
      __API_URL__: JSON.stringify(env.VITE_API_BASE_URL),
    },

    // Server configuration
    server: {
      host: true,
      port: 3000,
      strictPort: true,
      proxy: env.VITE_USE_PROXY === 'true' ? {
        '/api': {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api/, ''),
          headers: {
            'Host': new URL(env.VITE_API_BASE_URL).hostname,
            'X-Forwarded-Host': env.VITE_SITE_URL
          }
        }
      } : undefined,
    },

    // Build configuration
    build: {
      sourcemap: env.GENERATE_SOURCEMAP === 'true',
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        external: ['jquery'],
        output: {
          globals: {
            jquery: 'jQuery',
          },
        },
      },
    },
  };
});