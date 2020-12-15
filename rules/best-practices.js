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

    "wrap-iife": ["error", "inside", { functionPrototypeMethods: false }],
    // "wrap-iife": ["error", "outside", { functionPrototypeMethods: false }], //airbnb

    "curly": "error",
    // curly: ["error", "multi-line"],
  },
};
