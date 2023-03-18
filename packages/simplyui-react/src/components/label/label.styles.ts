import { cva } from 'class-variance-authority';

export const labelStyles = cva(['font-medium', 'text-black', 'dark:text-white'], {
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-base'],
      xl: ['text-lg'],
    },
  },
});
