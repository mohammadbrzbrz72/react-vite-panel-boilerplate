module.exports = {
  // root: true is a generally good ESLint practice to indicate this file is the root-level one used by the project and ESLint should not search beyond this directory for config files.
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    // By extending from a plugin config, we can get recommended rules without having to add them manually.
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-type-checked",
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    "eslint-config-prettier",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    // This is required for a typescript project.
    // "project": ["./tsconfig.json"]
    // or bottom way
    project: true,
    tsconfigRootDir: __dirname,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: "detect",
    },
    "import/ignore": [],
    "import/resolver": {
      // Tells eslint how to resolve imports from built-in and third party packages
      node: {
        baseUrl: "./",
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      // Tells eslint how to resolve imports from alias
      alias: {
        map: [["@", "./src"]], // Adjust the path accordingly
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    },
  },
  // Add your own rules here to override ones from the extended configs.
  rules: {
    // With no-unused-vars we will ensure that any unused variable will trigger an error.
    "no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
      },
    ],
    // "off": ESLint won't enforce the import of React in files with JSX (import React from 'react').
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
