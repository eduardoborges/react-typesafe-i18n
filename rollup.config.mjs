import { readPackageSync } from 'read-pkg';

import { swc } from 'rollup-plugin-swc3';
import dts from 'rollup-plugin-dts';

const pkg = readPackageSync();

const input = 'src/index.ts';
const external = Object.keys({ ...pkg.dependencies, ...pkg.peerDependencies });

/** @type import('rollup').RollupOptions[] */
export default [
  {
    input,
    external,
    plugins: [
      swc({ sourceMaps: true }),
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
