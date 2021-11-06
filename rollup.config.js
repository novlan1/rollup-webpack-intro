import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import replace from '@rollup/plugin-replace'
import {terser} from 'rollup-plugin-terser'
import pkg from './package.json'
import virtualModule from './src/plugin/virtual-module'
import removeConsole from './src/plugin/remove-console';

const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${new Date().getFullYear()} Mike
 * @license MIT
 */`

const footer = `/*!
 * This is footer!
 */`


export default [{
  input: ['./src/index.js'],
  output: {
    banner,
    footer,
    intro: '// This is intro.',
    outro: '// This is outro.',
    file: './dist/bundle.js',
    format: 'umd',
    name: 'mybundle'
  },
  plugins: [
    replace({
      preventAssignment: true,
      values: {
        __VERSION__: JSON.stringify(pkg.version),
      },
    }),
    json(),
    resolve(),
    commonjs(), 
    babel(), 
    // terser(),
    virtualModule(),
    removeConsole()
  ],
  external: ['axios'],
  onwarn (warning) {
    console.log('warning',warning)
    // // 跳过某些警告
    if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
  
    // 抛出异常
    if (warning.code === 'NON_EXISTENT_EXPORT') throw new Error(warning.message);
  
    // 控制台打印一切警告
    console.warn(warning.message);
  }
}]