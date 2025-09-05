import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/jkkniu-bus-seat-booking-system/",
  plugins: [react(),tailwindcss()],
})
