const getDarkModeSelector = require('./get-dark-mode-selector');

module.exports = function baseStyles(config, theme) {
  const darkModeSelector = getDarkModeSelector(config);

  return {
    '::selection': {
      color: theme('colors.violet.12'),
      backgroundColor: theme('colors.violet.5'),
      [darkModeSelector]: {
        color: theme('colors.violet-dark.12'),
        backgroundColor: theme('colors.violet-dark.5'),
      },
    },
    body: {
      color: theme('colors.slate.12'),
      backgroundColor: theme('colors.white'),
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      [darkModeSelector]: {
        color: theme('colors.slate-dark.12'),
        backgroundColor: theme('colors.mauve-dark.1'),
      },
    },
  };
};
