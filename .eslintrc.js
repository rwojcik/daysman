module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'react-app', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'react', 'only-warn'],
  rules: {
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/camelcase': 'off',

    'prettier/prettier': 'warn',
  },
};
