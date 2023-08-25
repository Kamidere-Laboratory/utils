## Recommended:

```js
module.exports = {
  root: true,
  env: {
    commonjs: false,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ["@kamidere/eslint-config"],
  ignorePatterns: [".eslintrc.cjs"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false,
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  globals: {
    NodeJS: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
};
```
