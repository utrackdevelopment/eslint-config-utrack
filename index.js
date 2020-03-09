module.exports = {
  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      classes: true,
      jsx: true
    }
  },

  plugins: ["react", "redux-saga", "jsx-a11y"],

  extends: ["eslint:recommended", "plugin:react/recommended", "airbnb-base"],

  rules: {
    "arrow-parens": ["error", "as-needed"],
    "arrow-body-style": ["error", "as-needed"],
    "comma-dangle": ["error", "only-multiline"],
    "object-curly-spacing": "off",
    "global-require": "off",
    "consistent-return": "off",
    "no-console": "warn",
    "no-shadow": "warn",
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "prefer-template": "error",
    "max-len": ["error", { code: 100 }],
    "newline-per-chained-call": "off",
    "no-confusing-arrow": "warn",
    "no-plusplus": "off",
    "quote-props": "off",
    quotes: "off",
    semi: 1,
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/label-has-for": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "redux-saga/no-yield-in-race": "error",
    "redux-saga/yield-effects": "error",
    "require-yield": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-filename-extension": "off",
    "react/jsx-no-target-blank": "off",
    "react/require-extension": "off",
    "react/require-default-props": "off",
    "import/no-webpack-loader-syntax": "off",
    "import/newline-after-import": "off",
    "import/no-dynamic-require": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "error",
    "import/prefer-default-export": "off"
  },
};
