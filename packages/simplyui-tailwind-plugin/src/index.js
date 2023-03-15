const plugin = require('tailwindcss/plugin');
const baseStyles = require('./base-styles');
const colors = require('./colors');
const borderRadius = require('./border-radius');

module.exports = plugin.withOptions(
  function () {
    return function ({ config, theme, addBase }) {
      addBase({
        ...baseStyles(config, theme),
      });
    };
  },
  function () {
    return {
      theme: {
        extend: {
          colors: {
            ...colors,
          },
        },
        ...borderRadius,
      },
    };
  }
);
