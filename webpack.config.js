const path = require('path');

const port = process.env.PORT || 3000;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = (env) => {
  return {
    mode: env.production ? 'production' : 'development', 
    entry: './src/index.js', 
    output: {
      filename: 'bundle.[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true,
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        hash: true,
        favicon: "favicon/favicon.ico",
      }),
      new Dotenv({
        path: env.production ? './config/.prod.env' : './config/.devel.env'
      }),
    ],
    resolve: {
      extensions: ['.es6', '.js', '.jsx'],
      modules: ['node_modules'],
      alias: {
        '@': path.resolve(__dirname, './src'),  // ./ 경로를 @으로 설정
        'Images': path.resolve(__dirname, './images'),
        extensions: ['.ts', '.tsx', '.js', '.json'],
      },
    },
    devServer: {
      host: 'localhost',
      port: port,
      open: true,
    },
  };
};