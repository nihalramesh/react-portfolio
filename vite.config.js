import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/',
  build: {
    outDir: 'dist', // Ensure dist folder is generated
  },
})
