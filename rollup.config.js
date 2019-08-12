import dts from "rollup-plugin-dts"
import typescript from 'rollup-plugin-typescript'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { uglify } from "rollup-plugin-uglify"
import babel from 'rollup-plugin-babel'

const rollConfig = {
  input: 'index.tsx',
  perf: true,
  output: {
    file: 'dist/index.js',
    format: 'iife',
    // format: 'cjs',
    name: 'transform',
    exports: 'named',
    sourcemap: true
  },
  // output: {
  //   file: 'dist/index.js',
  //   format: 'umd',
  //   name: 'transform',
  //   exports: 'named',
  //   sourcemap: true
  // },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules/'
      },
      extensions: [ '.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
    }),
    typescript(),
    commonjs({
      include: 'node_modules/**',
    }),
    babel({
      babelrc: false,
      presets: [
        ['@babel/preset-env', {
          loose: true,
          modules: false,
          debug: false,
        }]
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread'
      ]
    }),
    // uglify({
    //   compress: {
    //     arguments: false,
    //     assignments: false,
    //   },
    //   output: {
    //     beautify: true,
    //     comments: false,
    //   }
    // }),
  ]
}

export default rollConfig
