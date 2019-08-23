const path = require('path');

module.exports = {
  entry: './app',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.js?$/
        ],
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [],
};
