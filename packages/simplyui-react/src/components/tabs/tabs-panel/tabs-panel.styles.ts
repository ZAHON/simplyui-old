import { cva } from 'class-variance-authority';

export const tabsPanelStyles = cva(['py-2.5'], {
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
