'use strict';

const babel = require('rollup-plugin-babel');

module.exports = {
  input: './src/piece',
  output: {
    file: 'dist/piece.js',
    format: 'esm',
  },
  external: [
    // all dependencies should go here!
  ],
  plugins: [babel({ exclude: 'node_modules/**' })],
};
