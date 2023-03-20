import { cva } from 'class-variance-authority';

export const switchStyles = cva(
  [
    'relative',
    'rounded-full',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-primary-light-9',
    'dark:focus-visible:outline-primary-dark-9',

    'disabled:opacity-40',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      rounded: {
        none: ['rounded-none'],
        full: ['rounded-full'],
      },
      variant: {
        filled: ['bg-neutral-light-5', 'dark:bg-neutral-dark-5'],
        outline: [
          'bg-transparent',
          'border-2',
          'border-neutral-light-6',
          'dark:border-neutral-dark-6',
        ],
      },
      size: {
        xs: ['h-5', 'w-8'],
        sm: ['h-6', 'w-10'],
        md: ['h-7', 'w-11'],
        lg: ['h-8', 'w-14'],
        xl: ['h-9', 'w-16'],
      },
      color: {
        primary: [''],
        secondary: [''],
        success: [''],
        warning: [''],
        error: [''],
      },
    },
    compoundVariants: [
      // color primary
      {
        color: 'primary',
        variant: 'filled',
        className: [
          'data-[state=checked]:bg-primary-light-9',
          'data-[state=checked]:enabled:hover:bg-primary-light-10',

          'dark:data-[state=checked]:bg-primary-dark-9',
          'dark:data-[state=checked]:enabled:hover:bg-primary-dark-10',
        ],
      },
      {
        color: 'primary',
        variant: 'outline',
        className: [
          'enabled:hover:border-primary-light-9',
          'data-[state=checked]:border-primary-light-9',
          'data-[state=checked]:enabled:hover:border-primary-light-10',
          'data-[state=checked]:bg-primary-light-9',
          'data-[state=checked]:enabled:hover:bg-primary-light-10',

          'dark:enabled:hover:border-primary-dark-9',
          'dark:data-[state=checked]:border-primary-dark-9',
          'dark:data-[state=checked]:enabled:hover:border-primary-dark-10',
          'dark:data-[state=checked]:bg-primary-dark-9',
          'dark:data-[state=checked]:enabled:hover:bg-primary-dark-10',
        ],
      },

      // color secondary
      {
        color: 'secondary',
        variant: 'filled',
        className: [
          'data-[state=checked]:bg-secondary-light-9',
          'data-[state=checked]:enabled:hover:bg-secondary-light-10',

          'dark:data-[state=checked]:bg-secondary-dark-9',
          'dark:data-[state=checked]:enabled:hover:bg-secondary-dark-10',
        ],
      },
      {
        color: 'secondary',
        variant: 'outline',
        className: [
          'enabled:hover:border-secondary-light-9',
          'data-[state=checked]:border-secondary-light-9',
          'data-[state=checked]:enabled:hover:border-secondary-light-10',
          'data-[state=checked]:bg-secondary-light-9',
          'data-[state=checked]:enabled:hover:bg-secondary-light-10',

          'dark:enabled:hover:border-secondary-dark-9',
          'dark:data-[state=checked]:border-secondary-dark-9',
          'dark:data-[state=checked]:enabled:hover:border-secondary-dark-10',
          'dark:data-[state=checked]:bg-secondary-dark-9',
          'dark:data-[state=checked]:enabled:hover:bg-secondary-dark-10',
        ],
      },

      // color success
      {
        color: 'success',
        variant: 'filled',
        className: [
          'data-[state=checked]:bg-success-light-9',
          'data-[state=checked]:enabled:hover:bg-success-light-10',

          'dark:data-[state=checked]:bg-success-dark-9',
          'dark:data-[state=checked]:enabled:hover:bg-success-dark-10',
        ],
      },
      {
        color: 'success',
        variant: 'outline',
        className: [
          'enabled:hover:border-success-light-9',
          'data-[state=checked]:border-success-light-9',
          'data-[state=checked]:enabled:hover:border-success-light-10',
          'data-[state=checked]:bg-success-light-9',
          'data-[state=checked]:enabled:hover:bg-success-light-10',

          'dark:enabled:hover:border-success-dark-9',
          'dark:data-[state=checked]:border-success-dark-9',
          'dark:data-[state=checked]:enabled:hover:border-success-dark-10',
          'dark:data-[state=checked]:bg-success-dark-9',
          'dark:data-[state=checked]:enabled:hover:bg-success-dark-10',
        ],
      },

      // color warning
      {
        color: 'warning',
        variant: 'filled',
        className: [
          'data-[state=checked]:bg-warning-light-9',
          'data-[state=checked]:enabled:hover:bg-warning-light-10',

          'dark:data-[state=checked]:bg-warning-dark-9',
          'dark:data-[state=checked]:enabled:hover:bg-warning-dark-10',
        ],
      },
      {
        color: 'warning',
        variant: 'outline',
        className: [
          'enabled:hover:border-warning-light-9',
          'data-[state=checked]:border-warning-light-9',
          'data-[state=checked]:enabled:hover:border-warning-light-10',
          'data-[state=checked]:bg-warning-light-9',
          'data-[state=checked]:enabled:hover:bg-warning-light-10',

          'dark:enabled:hover:border-warning-dark-9',
          'dark:data-[state=checked]:border-warning-dark-9',
          'dark:data-[state=checked]:enabled:hover:border-warning-dark-10',
          'dark:data-[state=checked]:bg-warning-dark-9',
          'dark:data-[state=checked]:enabled:hover:bg-warning-dark-10',
        ],
      },

      // color error
      {
        color: 'error',
        variant: 'filled',
        className: [
          'data-[state=checked]:bg-error-light-9',
          'data-[state=checked]:enabled:hover:bg-error-light-10',

          'dark:data-[state=checked]:bg-error-dark-9',
          'dark:data-[state=checked]:enabled:hover:bg-error-dark-10',
        ],
      },
      {
        color: 'error',
        variant: 'outline',
        className: [
          'enabled:hover:border-error-light-9',
          'data-[state=checked]:border-error-light-9',
          'data-[state=checked]:enabled:hover:border-error-light-10',
          'data-[state=checked]:bg-error-light-9',
          'data-[state=checked]:enabled:hover:bg-error-light-10',

          'dark:enabled:hover:border-error-dark-9',
          'dark:data-[state=checked]:border-error-dark-9',
          'dark:data-[state=checked]:enabled:hover:border-error-dark-10',
          'dark:data-[state=checked]:bg-error-dark-9',
          'dark:data-[state=checked]:enabled:hover:bg-error-dark-10',
        ],
      },
    ],
  }
);
