import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
  port: 3001,
  proxy: {
    '/api': 'http://localhost:3000',
  },
},

  build: {
    outDir: './static/frontend',
    emptyOutDir: true,
  },
});