import babel from '@rollup/plugin-babel';
import localResolve from 'rollup-plugin-local-resolve';

const config = {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    babel({babelHelpers: 'bundled'}),
    localResolve(),
  ],
};

export default config;
