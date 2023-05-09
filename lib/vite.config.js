import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-plugin-tsconfig-paths';
import dts from 'vite-plugin-dts';
import dynamicImport from 'vite-plugin-dynamic-import'

export default defineConfig({
  plugins: [react(), tsconfigPaths(), dts(), dynamicImport()],
  build: {
    outDir: "dist",

    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      name: 't4-navbar-react',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
    sourcemap: true,
  },
});
