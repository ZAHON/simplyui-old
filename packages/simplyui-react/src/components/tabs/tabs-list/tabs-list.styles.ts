import { cva } from 'class-variance-authority';

export const tabsListStyles = cva(['flex', 'flex-wrap'], {
  variants: {
    variant: {
      default: ['border-b-2', 'border-b-neutral-6'],
      pills: ['gap-x-2.5'],
    },
    size: {
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-md'],
      lg: ['text-lg'],
      xl: ['text-xl'],
    },
    grow: {
      true: ['[&>*]:flex-1'],
    },
    position: {
      left: ['justify-start'],
      right: ['justify-end'],
      center: ['justify-center'],
      apart: ['justify-between'],
    },
  },
});
