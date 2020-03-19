const path = require('path');

const { SRC } = require('../paths');

const env = process.env.NODE_ENV;

const fileName = env === 'development'
  ? path.join('[path]', '[name].[ext]')
  : path.join('[path]', '[name].[hash:8].[ext]');

module.exports = [
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    include: SRC,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: fileName,
          limit: 20000,
        },
      },
    ],
  },
];
