const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'build/js'),
    publicPath: 'build/js',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;