import { cva } from 'class-variance-authority';

export const iconButtonStyles = cva([''], {
  variants: {
    size: {
      xs: ['[--loader-size:1rem]', '[--loader-border:0.125rem]'],
      sm: ['[--loader-size:1.5rem]', '[--loader-border:0.125rem]'],
      md: ['[--loader-size:2rem]', '[--loader-border:0.1875rem]'],
      lg: ['[--loader-size:2.5rem]', '[--loader-border:0.25rem]'],
      xl: ['[--loader-size:3rem]', '[--loader-border:0.375rem]'],
    },
  },
});
