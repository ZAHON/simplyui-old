module.exports = {
  printWidth: 100,
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 999,
      },
    },
  ],
};
