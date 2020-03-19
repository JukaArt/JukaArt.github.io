const path = require('path');

const ROOT = path.resolve(__dirname, '../');
const resolvePath = relativePath => path.resolve(ROOT, relativePath);

module.exports = {
  ROOT,
  SRC: resolvePath('src'),
  TOOLS: resolvePath('tools'),
  DIST: resolvePath('dist'),
  NODE_MODULES: resolvePath('node_modules'),
};
