const { SRC } = require('../paths');

module.exports = [
  {
    test: /\.(js|mjs|jsx)$/,
    include: SRC,
    use: [
      {
        loader: 'babel-loader',
        options: {
          plugins: [],
        },
      },
    ],
  },

  {
    test: /\.(js|mjs|jsx)$/,
    include: SRC,
    enforce: 'pre',
    use: [
      {
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  },

  {
    test: /\.flow$/,
    loader: 'ignore-loader',
  },

  {
    test: /\.tsx?$/,
    include: SRC,
    use: [
      {
        loader: 'babel-loader',
        options: {
          plugins: [],
          "presets": [
            ["@babel/preset-env", { "targets": { "node": "current" } }],
            "@babel/preset-react",
            "@babel/preset-typescript"
          ],
        }
      },
      { loader: 'ts-loader', options: { transpileOnly: true } },
    ],
  }
];
