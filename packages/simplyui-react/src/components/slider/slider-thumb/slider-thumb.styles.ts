import { cva } from 'class-variance-authority';

export const sliderThumbStyles = cva(
  [
    'relative',
    'flex',
    'justify-center',
    'items-center',
    'rounded-full',
    'bg-white',
    'border-2',
    'border-transparent',
    'text-black',

    'shadow',
    'dark:shadow-none',
    'shadow-neutral-light-12/40',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'active:scale-110',
    'data-[disabled]:active:scale-100',

    'focus:outline-none',
  ],
  {
    variants: {
      size: {
        xs: ['h-4', 'w-4'],
        sm: ['h-5', 'w-5'],
        md: ['h-6', 'w-6'],
        lg: ['h-7', 'w-7'],
        xl: ['h-8', 'w-8'],
      },
      color: {
        primary: ['focus:border-primary-light-9', 'dark:focus:border-primary-dark-9'],
        secondary: ['focus:border-secondary-light-9', 'dark:focus:border-secondary-dark-9'],
        success: ['focus:border-success-light-9', 'dark:focus:border-success-dark-9'],
        warning: ['focus:border-warning-light-9', 'dark:focus:border-warning-dark-9'],
        error: ['focus:border-error-light-9', 'dark:focus:border-error-dark-9'],
      },
      rounded: {
        none: ['rounded-none'],
      },
    },
  }
);
