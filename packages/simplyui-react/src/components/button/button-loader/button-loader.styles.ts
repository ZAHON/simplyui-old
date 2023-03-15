import { cva } from 'class-variance-authority';

export const buttonLoaderStyles = cva([''], {
  variants: {
    size: {
      xs: ['[--loader-size:0.75rem]', '[--loader-border:0.125rem]'],
      sm: ['[--loader-size:0.875rem]', '[--loader-border:0.125rem]'],
      md: ['[--loader-size:0.875rem]', '[--loader-border:0.125rem]'],
      lg: ['[--loader-size:1rem]', '[--loader-border:0.125rem]'],
      xl: ['[--loader-size:1.125rem]', '[--loader-border:0.125rem]'],
    },
  },
});
