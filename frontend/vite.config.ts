import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Set base based on mode (prod or local)
  base: mode === 'production' ? '/resumeCLI/' : '/',
}));

