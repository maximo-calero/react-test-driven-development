const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
 mode: "development",
 module: {
  rules: [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader'}]},
 entry: {
  app: './src/index.js',
 },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebPackPlugin({
      title: 'Development',
      template: './src/index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
