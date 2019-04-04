module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "object-curly-newline": ["error", {
      "ExportDeclaration": { "multiline": true, "minProperties": 5 }
    }],
    "max-len": [2, {"code": 150, "tabWidth": 4, "ignoreUrls": true}]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
