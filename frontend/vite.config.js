import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-init/', // set repo name for github pages rendering
  plugins: [
    react()
  ]
})