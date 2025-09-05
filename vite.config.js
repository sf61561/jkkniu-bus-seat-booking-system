import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // When deploying to GitHub Pages for a project site, set base to
  // the repository name so asset URLs are generated correctly.
  base: '/jkkniu-bus-seat-booking-system/',
  plugins: [react(), tailwindcss()],
})
