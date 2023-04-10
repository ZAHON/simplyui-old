import { cva } from 'class-variance-authority';

export const closeButtonIconStyles = cva(['overflow-hidden', 'flex-grow-0'], {
  variants: {
    size: {
      xs: ['h-4', 'w-4'],
      sm: ['h-6', 'w-6'],
      md: ['h-8', 'w-8'],
      lg: ['h-10', 'w-10'],
      xl: ['h-12', 'w-12'],
    },
  },
});
