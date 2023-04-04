const plugin = require('tailwindcss/plugin');

const darkTheme = require('./themes/dark');
const lightTheme = require('./themes/light');
const colors = require('./colors');
const base = require('./base');
const borderRadius = require('./border-radius');
const backgroundImage = require('./background-image');
const animation = require('./animation');

module.exports = plugin(
  function ({ addBase, addUtilities }) {
    addBase({
      ...base,
    });
    addUtilities({
      ...darkTheme,
      ...lightTheme,
    });
  },
  {
    theme: {
      extend: {
        ...colors,
        ...borderRadius,
        ...backgroundImage,
        ...animation,
      },
    },
  }
);
