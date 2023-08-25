/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "import"],
  rules: {
    "no-dupe-class-members": "off",
    "prettier/prettier": "error",
    "no-cond-assign": [2, "except-parens"],
    "no-unused-vars": 0,
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
    "import/no-unresolved": "error",
    "import/order": [
      2,
      {
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
      },
    ],
    // Typescript
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
        disallowTypeAnnotations: true,
        fixStyle: "separate-type-imports",
      },
    ],
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
  },
};
