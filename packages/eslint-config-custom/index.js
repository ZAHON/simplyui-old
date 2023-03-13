module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'next',
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
