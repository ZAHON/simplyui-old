import { cva } from 'class-variance-authority';

export const sliderStyles = cva(
  [
    'group',
    'cursor-pointer',
    'relative',
    'flex',
    'items-center',
    'select-none',
    'touch-none',
    'w-full',

    'motion-safe:transition-opacity',
    'motion-safe:duration-150',

    'data-[disabled]:opacity-40',
    'data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        xs: ['h-4'],
        sm: ['h-5'],
        md: ['h-6'],
        lg: ['h-7'],
        xl: ['h-8'],
      },
    },
  }
);
