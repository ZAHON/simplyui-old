import { cva } from 'class-variance-authority';

export const nativeSelectIconStyles = cva([''], {
  variants: {
    size: {
      xs: ['h-3', 'w-3'],
      sm: ['h-3.5', 'w-3.5'],
      md: ['h-4', 'w-4'],
      lg: ['h-[1.125rem]', 'w-[1.125rem]'],
      xl: ['h-5', 'w-5'],
    },
  },
});
