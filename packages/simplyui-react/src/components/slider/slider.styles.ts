import { cva } from 'class-variance-authority';

export const sliderStyles = cva(
  [
    'relative',
    'flex',
    'items-center',
    'select-none',
    'touch-none',
    'cursor-pointer',

    'motion-safe:transition-opacity',
    'motion-safe:duration-150',

    'data-[disabled]:opacity-40',
    'data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      orientation: {
        horizontal: ['w-full', 'flex-row'],
        vertical: ['h-full', 'flex-col'],
      },
      size: {
        xs: [''],
        sm: [''],
        md: [''],
        lg: [''],
        xl: [''],
      },
    },
    compoundVariants: [
      // size xs
      {
        size: 'xs',
        orientation: 'horizontal',
        className: ['h-3'],
      },
      {
        size: 'xs',
        orientation: 'vertical',
        className: ['w-3'],
      },

      // size sm
      {
        size: 'sm',
        orientation: 'horizontal',
        className: ['h-4'],
      },
      {
        size: 'sm',
        orientation: 'vertical',
        className: ['w-4'],
      },

      // size md
      {
        size: 'md',
        orientation: 'horizontal',
        className: ['h-5'],
      },
      {
        size: 'md',
        orientation: 'vertical',
        className: ['w-5'],
      },

      // size lg
      {
        size: 'lg',
        orientation: 'horizontal',
        className: ['h-6'],
      },
      {
        size: 'lg',
        orientation: 'vertical',
        className: ['w-6'],
      },

      // size xl
      {
        size: 'xl',
        orientation: 'horizontal',
        className: ['h-7'],
      },
      {
        size: 'xl',
        orientation: 'vertical',
        className: ['w-7'],
      },
    ],
  }
);
