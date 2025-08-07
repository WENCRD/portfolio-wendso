import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio-wendso/', // ← chemin du sous-dossier GitHub Pages
  plugins: [react()],
});
