module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'semi': 'off',
    'max-len': ['error', { 'code': 100 }],
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'operator-linebreak': 'off',
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': ['error', 'unix'],
  },
}
