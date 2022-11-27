module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    semi: ['error', 'always'],
    'prettier/prettier': ['error', { semi: true }],
  },
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
};
