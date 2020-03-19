const merge = require('webpack-merge');

const { SRC } = require('./webpackConfig/paths');
const fontRules = require('./webpackConfig/rules/fonts');
const javaScriptRules = require('./webpackConfig/rules/javascript');
const mediaRules = require('./webpackConfig/rules/media');
const styleRules = require('./webpackConfig/rules/styles');
const alias = require('./webpackConfig/alias');

const prodConfig = require('./webpackConfig/config.prod');
const devConfig = require('./webpackConfig/config.dev');

const env = process.env.NODE_ENV;
const config = {
  context: SRC,
  module: {
    rules: [
      ...fontRules,
      ...javaScriptRules,
      ...styleRules,
      ...mediaRules,
    ],
  },

  resolve: {
    alias,
    modules: ['src', 'node_modules'],
    extensions: ['.mjs', '.js', '.json', '.jsx', '.ts', '.tsx'],
  },
};


module.exports = env === 'production' ? merge(config, prodConfig) : merge(config, devConfig);
