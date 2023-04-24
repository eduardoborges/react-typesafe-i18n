import { readPackageSync } from 'read-pkg';

import esbuild from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

const pkg = readPackageSync();

const input = 'src/index.ts';
const external = Object.keys(pkg.peerDependencies);

/** @type import('rollup').RollupOptions[] */
export default [
  {
    input,
    external,
    plugins: [
      esbuild({ minify: false }),
    ],
    output: [
      { file: 'dist/index.js', format: 'esm', sourcemap: true },
      { file: 'dist/index.cjs', format: 'cjs', sourcemap: true },
    ],
  },
  {
    input,
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
