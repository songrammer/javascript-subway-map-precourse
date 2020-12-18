module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    semi: "error",
    "no-new": "off",
    "no-console": "off",
    "no-alert": "off",
    "no-var": "error",
    "import/prefer-default-export": "off",
    "no-self-assign": "error",
    "import/extensions": "off",
    props: true,
    indent: ["error", 2],
  },
};
