module.exports = {
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jquery": true
  },
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': ['error', 'always'],
    'indent': 0,
    'space-before-function-paren': 0,
    "new-cap": 0,
    "eol-last": 0
  }
}
