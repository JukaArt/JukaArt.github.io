const path = require('path');

module.exports = {
  // parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions'
    },
    'postcss-mixins': {
      mixinsDir: path.join(__dirname, './src/stylesheets/mixins'),
    },
    'postcss-sorting': {},
    'postcss-short': {},
    'precss': {},

    'postcss-reporter': {},
  }
};
