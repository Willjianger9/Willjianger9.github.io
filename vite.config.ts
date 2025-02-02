import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Willjianger9.github.io/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000,
    open: true
  }
});
