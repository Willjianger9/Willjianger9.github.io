import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Willjianger9.github.io/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|webp/.test(extType)) {
            return `assets/images/[name].[ext]`;
          }
          return `assets/[name].[ext]`;
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
