import { cva } from 'class-variance-authority';

export const sliderLabelStyles = cva(
  [
    'absolute',
    'top-[-2.25rem]',
    'left-1/2',
    'translate-x-[-50%]',
    'text-xs',
    'rounded-xs',
    'p-1.5',
    'pointer-events-none',
    'select-none',
    'touch-none',
    'whitespace-nowrap',

    'group-hover:data-[disabled]:opacity-0',
    'data-[disabled]:opacity-0',

    'shadow-md',
    'dark:shadow-none',
    'shadow-neutral-light-12/10',

    'bg-white',
    'text-neutral-light-12',

    'dark:text-neutral-dark-12',
    'dark:bg-neutral-dark-3',
  ],
  {
    variants: {
      showLabel: {
        always: [''],
        'on-hover': [
          'motion-safe:transition-opacity',
          'motion-safe:duration-150',
          'opacity-0',
          'group-hover:opacity-100',
          'group-focus-within:opacity-100',
        ],
        none: [''],
      },
    },
  }
);
