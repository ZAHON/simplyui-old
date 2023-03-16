import './tailwind-output.css';
import { withThemeByDataAttribute } from '@storybook/addon-styling';

export const parameters = {
  cssUserPrefs: {
    'prefers-reduced-motion': 'no-preference',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
];
