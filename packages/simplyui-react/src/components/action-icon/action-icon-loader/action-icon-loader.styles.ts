import { cva } from 'class-variance-authority';

export const actionIconStyles = cva([''], {
  variants: {
    size: {
      xs: ['[--loader-size:0.75rem]', '[--loader-border:0.125rem]'],
      sm: ['[--loader-size:1rem]', '[--loader-border:0.125rem]'],
      md: ['[--loader-size:1.25rem]', '[--loader-border:0.125rem]'],
      lg: ['[--loader-size:1.5rem]', '[--loader-border:0.125rem]'],
      xl: ['[--loader-size:1.75rem]', '[--loader-border:0.1875rem]'],
    },
  },
});
