module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // "plugin:react/jsx-runtime",
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    // ecmaFeatures: {
    //   jsx: true,
    // },
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off'
  },
  ignorePatterns: ['build/*', 'node_modules/*'],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
