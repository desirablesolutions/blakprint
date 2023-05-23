import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

import path from 'path';

export default defineConfig({
  plugins: [react(), dts(),],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs', 'umd'],
      name: 'blakprint',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    sourcemap: true,
  },

});
