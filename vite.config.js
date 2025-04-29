import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/

const repositoryName = 'auto-parts-website2';
export default defineConfig({
  plugins: [react()],
  base: `/${repositoryName}/`,
});
