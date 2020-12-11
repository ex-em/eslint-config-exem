module.exports = {
  rules: {
    'no-plusplus': 'off',
    'linebreak-style': ['error', 'windows'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
  },
};
