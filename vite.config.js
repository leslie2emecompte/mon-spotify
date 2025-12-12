import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // NOUVEAU: Le chemin de base pour le déploiement GitHub Pages
  base: "/mon-spotify/", 
})