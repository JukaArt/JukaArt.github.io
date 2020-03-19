const path = require('path');

const { SRC } = require('../paths');

const env = process.env.NODE_ENV;

const fileName = env === 'development'
  ? path.join('[path]', '[name].[ext]')
  : path.join('[path]', '[name].[hash:8].[ext]');

module.exports = [
  {
    test: /\.(gif|jpe?g|png|webp|svg)$/,
    include: SRC,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: fileName,
          limit: 10000,
          publicPath: '/',
        },
      },
    ],
  },

  {
    test: /\.(mp4|m4a|webm|ogv|oga|ogg|mp3|wav)$/,
    include: SRC,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: fileName,
          limit: 10000,
        },
      },
    ],
  },
];
