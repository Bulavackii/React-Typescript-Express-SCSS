const path = require('path');

module.exports = {
  entry: './src/server.ts',
  target: 'node',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
