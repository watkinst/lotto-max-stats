var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development", // "production" | "development" | "none"
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
          presets: ['@babel/preset-react', '@babel/preset-env'],
        }
      },
      {
        test: /\.scss$/,
        use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  includePaths: ['src/sass']
                }
              }
            },
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