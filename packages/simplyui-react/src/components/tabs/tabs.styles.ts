import { cva } from 'class-variance-authority';

export const tabsStyles = cva([''], {
  variants: {
    size: {
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-md'],
      lg: ['text-lg'],
      xl: ['text-xl'],
    },
  },
});
