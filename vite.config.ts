import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/wendso-portfolio/', // ← très important
  plugins: [react()],
});
