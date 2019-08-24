const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './app/client/index.js'),
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [],
};
