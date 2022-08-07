import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'

export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
}
