import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Cambiar carpeta base: no vamos a ponerlo en root de webserver porque ya
  // está la página autogenerada por PLCNext: vamos a ponerlo en /custweb
  base: "/custweb"
})
