const plugin = require('tailwindcss/plugin');
const baseStyles = require('./base-styles');
const transformRadixColors = require('./transform-radix-colors');

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
            ...transformRadixColors(),
          },
        },
      },
    };
  }
);
