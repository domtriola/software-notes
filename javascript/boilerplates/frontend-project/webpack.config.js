const path = require('path');

module.exports = {
  entry: './app/client/index',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
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
