var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // mode: "production", // "production" | "development" | "none"
  entry: './js/lms.js',
  output: {
    path: __dirname + '/src/',
    filename: 'lms.min.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react', '@babel/env'],
          plugins: [
            'react-html-attrs',
            'transform-class-properties',
            ['@babel/plugin-proposal-function-bind'],
            [
              "@babel/plugin-proposal-decorators",
              {
                "legacy": true
              }
            ]
          ],
        }
      },
      {
        test: /\.scss$/,
        use: [
            { loader: MiniCssExtractPlugin.loader, options: { hmr: debug } },
            { loader: 'css-loader', options: { url: false, sourceMap: true } },
            { loader: 'sass-loader', options: { includePaths: ['src/sass'], sourceMap: true } },
        ]
      }
    ]
  },
  devtool: debug ? 'source-map' : null,
  devServer: {
    historyApiFallback: true,
  },
  context: path.join(__dirname, 'src'),
  plugins: debug
   ? [
    new MiniCssExtractPlugin({ filename: "lms.min.css" })
   ] : [
    new MiniCssExtractPlugin({ filename: "lms.min.css" }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
};