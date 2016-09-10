module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'chariyski/configurations/es6',
  rules: {
    'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
    "require-jsdoc": 0, // TODO remove
  },
  'globals': {
    Promise: true
  }
};
