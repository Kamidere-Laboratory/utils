module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  globals: {
    NodeJS: true,
    BigInt: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ["@typescript-eslint", "prettier", "simple-import-sort", "unused-imports"],
  rules: {
    "prettier/prettier": "error",
    "no-cond-assign": [2, "except-parens"],
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "prefer-const": [
      "warn",
      {
        destructuring: "all",
      },
    ],
    "spaced-comment": "warn",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [["^\\u0000"], ["^(node:)\\w", "^@?\\w"], ["^\\."]],
      },
    ],
    "no-redeclare": "off",
  },
};
