import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  base: '/react-init/',
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'tsl-certificates', 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'tsl-certificates', 'localhost.pem')),
    },
    host: 'localhost',
    port: 5173,
  },
})
