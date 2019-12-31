module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['standard', 'plugin:prettier/recommended', 'standard-jsx'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    camelcase: [
      2,
      {
        properties: 'never',
      },
    ],
    'consistent-return': 0,
    'array-callback-return': 0,
    'no-return-assign': 0,
    'max-len': 0,
    'no-undef': 0,
    'no-param-reassign': 0,
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    'no-underscore-dangle': 0,
    'prefer-destructuring': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
  },
  parser: 'babel-eslint',
};
