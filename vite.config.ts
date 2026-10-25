import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/birthdaygift/', // Hosted under https://rajbahakriwaj-wq.github.io/birthdaygift/
  server: {
    port: 5173,
    host: true,
  },
});
