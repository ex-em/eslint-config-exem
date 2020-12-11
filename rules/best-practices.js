module.exports = {
  rules: {
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'options', // for webpack chain
          'config',
          'state', // for vuex state
          'e', // for e.returnvalue
        ],
      },
    ],
  },
};
