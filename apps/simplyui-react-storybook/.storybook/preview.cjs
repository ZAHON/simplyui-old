import './tailwind-output.css';
import { themes } from '@storybook/theming';

export const parameters = {
  darkMode: {
    darkClass: 'dark',
    lightClass: 'light',
    classTarget: 'html',
    stylePreview: true,
    dark: { ...themes.dark },
    light: { ...themes.normal },
  },
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
