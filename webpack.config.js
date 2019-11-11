const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new MiniCssExtractPlugin({ filename: 'css/styles.css' });

  return {
    entry: './src/js/app.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: 'build',
      filename: 'js/app.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          loader: 'file-loader',
          options: {
            outputPath: '/img',
          },
        }
      ]
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx'
      ]
    },
    plugins: [
			CSSExtract
		],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      historyApiFallback: true
    }
  };
}

module.exports = config;