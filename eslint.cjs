module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [
    "dist",
    ".eslintrc.cjs",
    "vite.config.ts",
    "commitlint.config.ts",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "jsx-a11y/control-has-associated-label": [
      "off",
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: "both",
        depth: 25,
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        components: [],
        required: {
          some: ["nesting", "id"],
        },
        allowChildren: false,
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE"],
      },
      {
        selector: "function",
        format: ["camelCase"],
      },
      {
        selector: "class",
        format: ["PascalCase"],
      },
      {
        selector: "enum",
        format: ["PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["UPPER_CASE"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase", "snake_case"],
      },
      {
        selector: "property",
        format: ["camelCase"],
        modifiers: ["public"],
      },
      {
        selector: "method",
        format: ["camelCase"],
        modifiers: ["public"],
      },
      {
        selector: "parameter",
        format: ["camelCase", "snake_case"],
      },
      {
        selector: "variable",
        modifiers: ["const"],
        format: ["UPPER_CASE"],
      },
      {
        selector: "typeParameter",
        format: ["PascalCase", "snake_case"],
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false,
        trailingComma: "all",
      },
    ],
  },
};
