const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production', 
    entry: './main.js',
    context: path.resolve(__dirname, 'src'),
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist'), 
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.hbs$/,
          use: [
            {
              loader: 'handlebars-loader',
            },
          ]
        }
      ]
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './index.hbs', 
      }),
        new CleanWebpackPlugin(),
    ],
};