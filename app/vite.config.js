import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import tailwindConfig from './tailwind.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    hmr: {
      clientPort: process.env.HMR_HOST ? 443 : 24678,
      host: process.env.HMR_HOST
        ? process.env.HMR_HOST.substring("https://".length)
        : "localhost",
    },
  },
  css: {
    postcss: {
      plugins: [tailwind(tailwindConfig), autoprefixer],
    }

  }
})
