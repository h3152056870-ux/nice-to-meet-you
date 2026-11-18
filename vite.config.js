import { defineConfig } from 'vite';
export default defineConfig({
  base: './',
  server: { host: '127.0.0.1', port: 5193, strictPort: true },
  build: { outDir: 'dist', assetsInlineLimit: 128 * 1024, target: 'es2020' }
});
