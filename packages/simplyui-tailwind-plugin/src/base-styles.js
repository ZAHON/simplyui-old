const getDarkModeSelector = require('./get-dark-mode-selector');

module.exports = function baseStyles(config, theme) {
  const darkModeSelector = getDarkModeSelector(config);

  return {
    '::selection': {
      color: theme('colors.secondary.light.12'),
      backgroundColor: theme('colors.secondary.light.5'),
      [darkModeSelector]: {
        color: theme('colors.secondary.dark.12'),
        backgroundColor: theme('colors.secondary.dark.5'),
      },
    },
    body: {
      color: theme('colors.neutral.light.12'),
      backgroundColor: theme('colors.white'),
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      [darkModeSelector]: {
        color: theme('colors.neutral.dark.12'),
        backgroundColor: theme('colors.neutral.dark.1'),
      },
    },
  };
};
