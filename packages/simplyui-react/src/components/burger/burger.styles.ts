import { cva } from 'class-variance-authority';

export const burgerStyles = cva(
  [
    'inline-flex',
    'flex-col',
    'justify-center',
    'items-center',
    'select-none',
    'overflow-hidden',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-primary-9',

    'enabled:active:scale-95',

    'disabled:opacity-40',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        xs: ['h-6', 'w-6', 'rounded-xs'],
        sm: ['h-8', 'w-8', 'rounded-sm'],
        md: ['h-10', 'w-10', 'rounded-md'],
        lg: ['h-12', 'w-12', 'rounded-lg'],
        xl: ['h-14', 'w-14', 'rounded-xl'],
      },
      rounded: {
        none: ['rounded-none'],
        xs: ['rounded-xs'],
        sm: ['rounded-sm'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        xl: ['rounded-xl'],
        full: ['rounded-full'],
      },
      variant: {
        subtle: ['bg-transparent'],
        transparent: ['bg-transparent'],
      },
      color: {
        neutral: [''],
        primary: [''],
        secondary: [''],
        info: [''],
        success: [''],
        warning: [''],
        error: [''],
      },
    },
    compoundVariants: [
      {
        color: 'neutral',
        variant: 'subtle',
        className: [
          'enabled:hover:bg-neutral-4',
          'enabled:active:bg-neutral-5',

          'focus-visible:bg-neutral-5',
        ],
      },
      {
        color: 'primary',
        variant: 'subtle',
        className: [
          'enabled:hover:bg-primary-4',
          'enabled:active:bg-primary-5',

          'focus-visible:bg-primary-5',
        ],
      },
      {
        color: 'secondary',
        variant: 'subtle',
        className: [
          'enabled:hover:bg-secondary-4',
          'enabled:active:bg-secondary-5',

          'focus-visible:bg-secondary-5',
        ],
      },
      {
        color: 'info',
        variant: 'subtle',
        className: [
          'enabled:hover:bg-info-4',
          'enabled:active:bg-info-5',

          'focus-visible:bg-info-5',
        ],
      },
      {
        color: 'success',
        variant: 'subtle',
        className: [
          'enabled:hover:bg-success-4',
          'enabled:active:bg-success-5',

          'focus-visible:bg-success-5',
        ],
      },
      {
        color: 'warning',
        variant: 'subtle',
        className: [
          'enabled:hover:bg-warning-4',
          'enabled:active:bg-warning-5',

          'focus-visible:bg-warning-5',
        ],
      },
      {
        color: 'error',
        variant: 'subtle',
        className: [
          'enabled:hover:bg-error-4',
          'enabled:active:bg-error-5',

          'focus-visible:bg-error-5',
        ],
      },
    ],
  }
);
