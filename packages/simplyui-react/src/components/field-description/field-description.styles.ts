import { cva } from 'class-variance-authority';

export const fieldDescriptionStyles = cva(
  [
    'text-neutral-12',
    'cursor-default',

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
        lg: ['text-sm'],
        xl: ['text-sm'],
      },
    },
  }
);
