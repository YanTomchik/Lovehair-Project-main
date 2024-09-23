const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production', // Используйте 'development' для разработки
  entry: './public/assets/scripts/main.js', // Указываем путь к файлу main.js
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Все собранные файлы будут находиться в папке dist
    clean: true, // Очищаем папку dist перед новой сборкой
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Для работы с CSS файлами
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Транспиляция JS с использованием Babel
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pages/about.html', // Указываем путь к вашему основному HTML-файлу
      filename: 'index.html', // Имя выходного файла в папке dist
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Собранный файл CSS
    }),
  ],
  devServer: {
    static: './dist', // Сервируем файлы из папки dist в режиме разработки
    open: true, // Автоматически открывать браузер после запуска сервера
  },
};
