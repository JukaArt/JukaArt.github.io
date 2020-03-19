const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { NODE_MODULES, SRC } = require('../paths');

const isEnvProduction = process.env.NODE_ENV === 'production';
const styleLoader = isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader';
const localIdentName = isEnvProduction ? '[hash:base64]' : '[name]__[local]__[hash:base64:5]';

module.exports = [
  {
    test: /\.css$/,
    include: [SRC],
    use: [
      styleLoader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            mode: 'local',
            localIdentName,
            context: path.resolve(__dirname, 'src'),
          },
          importLoaders: 1,
        },
      },
      'postcss-loader',
    ],
  },

  {
    test: /\.css$/,
    include: [NODE_MODULES],
    use: [
      'style-loader',
      MiniCssExtractPlugin.loader,
      'css-loader',
    ],
  },
];
