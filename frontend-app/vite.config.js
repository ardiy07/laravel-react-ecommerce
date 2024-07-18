import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; 
          }
          return 'main';
        },
        chunkFileNames: '[hash]/[hash].js',
        entryFileNames: '[hash]/[hash].js',
        assetFileNames: 'assets/[ext]/[hash].[ext]',
      },
    },
  },
  envPrefix: 'APP_'
})
