/// <reference types="vitest" />

import { defineConfig } from 'vite';
import { path } from 'path';
import alias from '@rollup/plugin-alias';

export default defineConfig({
  plugins: [
    alias({
      entries: {
        'blakprint/*': path.resolve(__dirname, './dist/*'),
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
});
