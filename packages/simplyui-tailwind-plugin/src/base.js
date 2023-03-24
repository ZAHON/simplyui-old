module.exports = {
  html: {
    '-webkit-tap-highlight-color': 'transparent',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  ':root, [data-theme]': {
    color: 'hsl(var(--color-text))',
    backgroundColor: 'hsl(var(--color-background))',
  },
  '::selection': {
    color: 'hsl(var(--color-selection-text))',
    backgroundColor: 'hsl(var(--color-selection-background))',
  },
};
