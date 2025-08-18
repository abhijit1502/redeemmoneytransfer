import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: 'Redeem Money Transfer',
            description: 'Secure global money transfer services',
            ogUrl: env.VITE_SITE_URL || 'https://redeemtransfer.net/',
            defaultImage: env.VITE_DEFAULT_IMAGE || 'https://redeemtransfer.net/assets/images/logo/logo.png'
          }
        }
      }),
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 80 },
        jpg: { quality: 80 },
        webp: { lossless: false },
        cache: true,
      })
    ],
    envPrefix: 'VITE_',
    define: {
      'process.env': env,
      __API_URL__: JSON.stringify(env.VITE_API_BASE_URL),
    },
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