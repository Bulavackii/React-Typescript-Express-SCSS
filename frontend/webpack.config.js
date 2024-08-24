const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Входная точка приложения
  output: {
    path: path.resolve(__dirname, 'build'), // Путь к папке для собранных файлов
    filename: '[name].[contenthash].js', // Использование хэшей для уникальности имен файлов
    publicPath: '/', // Путь к статическим ресурсам на сервере
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'], // Расширения файлов для автоматического разрешения
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Обработка файлов TypeScript
        use: 'ts-loader', // Лоадер для TypeScript
        exclude: /node_modules/, // Исключение папки node_modules
      },
      {
        test: /\.scss$/, // Обработка файлов SCSS
        use: [
          'style-loader', // Вставляет стили в DOM
          'css-loader', // Обрабатывает CSS-файлы
          'sass-loader', // Компилирует SCSS в CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Обработка изображений
        use: [
          {
            loader: 'url-loader', // Загрузка изображений
            options: {
              limit: 8192, // Встраивание изображений размером до 8kb
              name: 'assets/[name].[hash].[ext]', // Путь и имя выходного файла
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Обработка шрифтов
        use: [
          {
            loader: 'file-loader', // Загрузка шрифтов
            options: {
              name: 'fonts/[name].[hash].[ext]', // Путь и имя выходного файла
            },
          },
        ],
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // Обработка видео и аудио файлов
        use: [
          {
            loader: 'file-loader', // Загрузка медиа файлов
            options: {
              name: 'media/[name].[hash].[ext]', // Путь и имя выходного файла
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'), // Папка для статических файлов
    historyApiFallback: true, // Позволяет использовать History API для SPA
    hot: true, // Включение поддержки горячей перезагрузки
    open: true, // Автоматическое открытие браузера после запуска dev-сервера
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // Разделение кода на чанки для оптимизации
    },
    runtimeChunk: 'single', // Выделение отдельного чанка для runtime
  },
};
