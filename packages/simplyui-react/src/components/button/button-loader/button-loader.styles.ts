import { cva } from 'class-variance-authority';

export const buttonLoaderStyles = cva([''], {
  variants: {
    size: {
      xs: ['[--loader-size:0.75rem]'],
      sm: ['[--loader-size:0.875rem]'],
      md: ['[--loader-size:1rem]'],
      lg: ['[--loader-size:1.125rem]'],
      xl: ['[--loader-size:1.5rem]'],
    },
  },
});
