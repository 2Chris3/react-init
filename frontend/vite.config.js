import fs from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],

  server: {
    https: {
      key: fs.readFileSync('/Users/chris/Library/Application Support/mkcert/rootCA-key.pem'),
      cert: fs.readFileSync('/Users/chris/Library/Application Support/mkcert/rootCA.pem'),
    },
    port: 5173,
  },
})