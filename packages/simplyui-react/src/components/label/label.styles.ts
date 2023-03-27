import { cva } from 'class-variance-authority';

export const labelStyles = cva(
  [
    'text-neutral-12',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'data-[disabled]:opacity-40',
    'data-[disabled]:select-none',
  ],
  {
    variants: {
      size: {
        xs: ['text-xs'],
        sm: ['text-xs'],
        md: ['text-sm'],
        lg: ['text-base'],
        xl: ['text-lg'],
      },
    },
  }
);
