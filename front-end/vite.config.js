import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'

export default defineConfig({
   server: {
      // Enable HMR
      hmr: true,
   },
   plugins: [React({})],
})
