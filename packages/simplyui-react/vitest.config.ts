/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup.ts',
    css: true,
    coverage: {
      provider: 'c8',
      reporter: ['text', 'html'],
    },
  },
});
