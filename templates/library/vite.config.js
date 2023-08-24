import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'


export default defineConfig({
  plugins: [react(), dts(),  viteStaticCopy({
    targets: [
      {
        src:  'src', 
        dest: './', 
      },
    ],
  })],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs', 'umd'],
      name: 'blakprint',
      fileName: (format) => `index.${format}.js`,
    },
    resolve: {
      alias: {
        'src':  path.resolve(__dirname, 'src'),
      }
    },
    rollupOptions: {
    external: [/^src.*/, /^src*/],
    },
    sourcemap: true,
  },

});
