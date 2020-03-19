const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

const fontRules = require('./rules/fonts');
const javaScriptRules = require('./rules/javascript');
const mediaRules = require('./rules/media');
const styleRules = require('./rules/styles');
const alias = require('./alias');

const { DIST, SRC } = require('./paths');

module.exports = {
  mode: 'development',
  context: SRC,

  resolve: {
    alias,
    modules: ['src', 'node_modules'],
    extensions: ['.mjs', '.js', '.json', '.jsx', '.ts', '.tsx', '.css'],
  },

  entry: {
    main: [
      'whatwg-fetch',
      './scripts/index',
    ],
  },

  module: {
    rules: [
      ...fontRules,
      ...javaScriptRules,
      ...styleRules,
      ...mediaRules,
    ],
  },

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[chunkhash].bundle.js',
    path: DIST,
    publicPath: '/',
    pathinfo: true,
  },

  devtool: 'cheap-module-source-map',

  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    hot: true
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      favicon: `${SRC}/favicon.ico`,
      template: `${SRC}/index.html`,
      title: 'Insense Dev',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files: ['**/*.css'],
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerHost: '0.0.0.0',
    // }),
  ],
};
