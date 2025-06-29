module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  env: {
    node: true,
  },
  ignorePatterns: ["dist", "node_modules", "*.js"],
  parserOptions: {
    project: ["./server/tsconfig.json", "./client/tsconfig.json"],
  },
  rules: {
    // Custom rule to only allow absolute paths or @/ syntax
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["./*", "../*"],
            message:
              "Relative imports are not allowed. Use absolute imports from node_modules or @/ syntax instead.",
          },
        ],
      },
    ],
  },
};
