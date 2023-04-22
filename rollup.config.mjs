import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

/** @type import('rollup').RollupOptions[] */
export default [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    plugins: [
      esbuild({ minify: false }),
    ],
    output: [
      { file: 'dist/index.js', format: 'esm', sourcemap: true },
      { file: 'dist/index.cjs', format: 'cjs', sourcemap: true },
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
