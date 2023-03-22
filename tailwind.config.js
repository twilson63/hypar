import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
        'mono': ['Roboto Mono', ...defaultTheme.fontFamily.mono]
      }
    },
  },
  plugins: [typography, daisyui],
}
