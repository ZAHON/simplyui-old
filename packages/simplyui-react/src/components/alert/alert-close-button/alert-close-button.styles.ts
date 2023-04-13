import { cva } from 'class-variance-authority';

export const alertCloseButtonStyles = cva(['flex-shrink-0', 'ml-auto'], {
  variants: {
    alertSize: {
      xs: ['h-4', 'w-4'],
      sm: ['h-5', 'w-5'],
      md: ['h-6', 'w-6'],
      lg: ['h-7', 'w-7'],
      xl: ['h-7', 'w-7'],
    },
  },
});
