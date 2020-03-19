const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const { DIST, SRC } = require('./paths');

module.exports = {
  mode: 'production',
  context: SRC,

  entry: {
    main: [
      'regenerator-runtime/runtime',
      './scripts/index',
    ],
    vendor: ['react', 'react-router-dom', 'react-dom', 'lodash'],
  },

  output: {
    filename: '[chunkhash].bundle.js',
    chunkFilename: '[chunkhash].bundle.js',
    path: DIST,
    publicPath: '/',
  },


  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    }),
    new webpack.HashedModuleIdsPlugin({
      hashDigestLength: 8,
    }),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /en|ru/,
    ),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.html`,
      favicon: `${SRC}/favicon.ico`,
      title: 'Insense',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
    new ImageminPlugin({
      gifsicle: {
        interlaced: true,
      },
      jpegtran: {
        progressive: true,
      },
    }),
  ],
};
