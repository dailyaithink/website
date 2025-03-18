import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  server: {
    port: 4000,
    strictPort: true,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js'
      }
    },
    cssMinify: true,
    cssCodeSplit: true,
    minifyInternalViteHtml: true
  },
  logLevel: 'info'
}) 