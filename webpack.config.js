const path = require('path');

module.exports = {
  entry: './frontend/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]', // для обработки ассетов в Webpack 5
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|mp4|webm|ogg)$/, // Обработка изображений и видео
        type: 'asset/resource', // Для Webpack 5, объединяет file-loader и url-loader
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  devtool: 'source-map',
  mode: 'development',
  stats: {
    errorDetails: true, // Включение подробной информации об ошибках
  },
};
