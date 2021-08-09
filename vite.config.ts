import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

import path from 'path';
import typescript from '@rollup/plugin-typescript';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const resolvePath = (str: string) => path.resolve(__dirname, str);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: resolvePath('/src/index.ts'),
      name: 'index',
      fileName: () => 'index.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          React: 'React',
        },
      },
      plugins: [
        typescript({
          target: 'es2020',
          rootDir: resolvePath('src'),
          declaration: true,
          declarationDir: resolvePath('dist'),
          exclude: resolvePath('node_modules/**'),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
});
