import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'font-medium',
    'select-none',
    'origin-center',
    'overflow-hidden',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-primary-light-9',
    'dark:focus-visible:outline-primary-dark-9',

    'enabled:active:scale-95',

    'disabled:opacity-40',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        xs: ['h-6', 'w-6', 'rounded-xs', 'text-xs'],
        sm: ['h-8', 'w-8', 'rounded-sm', 'text-sm'],
        md: ['h-10', 'w-10', 'rounded-md', 'text-sm'],
        lg: ['h-12', 'w-12', 'rounded-lg', 'text-base'],
        xl: ['h-16', 'w-16', 'rounded-xl', 'text-lg'],
      },
      rounded: {
        none: ['rounded-none'],
        xs: ['rounded-xs'],
        sm: ['rounded-sm'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        xl: ['rounded-xl'],
        '2xl': ['rounded-2xl'],
        '3xl': ['rounded-3xl'],
        full: ['rounded-full'],
      },
      variant: {
        filled: [''],
        light: [''],
        outline: ['border-2'],
        subtle: [''],
        transparent: [''],
      },
      color: {
        neutral: [''],
        primary: [''],
        secondary: [''],
        success: [''],
        warning: [''],
        error: [''],
      },
    },
    compoundVariants: [
      // color neutral
      {
        color: 'neutral',
        variant: 'filled',
        className: [
          'text-white',
          'bg-neutral-light-9',
          'enabled:hover:bg-neutral-light-10',

          'dark:bg-neutral-dark-9',
          'dark:enabled:hover:bg-neutral-dark-10',
        ],
      },
      {
        color: 'neutral',
        variant: 'light',
        className: [
          'text-neutral-light-11',
          'bg-neutral-light-4',
          'enabled:hover:bg-neutral-light-5',
          'enabled:active:bg-neutral-light-6',

          'dark:text-neutral-dark-11',
          'dark:bg-neutral-dark-4',
          'dark:enabled:hover:bg-neutral-dark-5',
          'dark:enabled:active:bg-neutral-dark-6',
        ],
      },
      {
        color: 'neutral',
        variant: 'outline',
        className: [
          'text-neutral-light-11',
          'bg-neutral-light-1',
          'border-neutral-light-7',
          'enabled:hover:border-neutral-light-8',

          'dark:text-neutral-dark-11',
          'dark:bg-neutral-dark-1',
          'dark:border-neutral-dark-7',
          'dark:enabled:hover:border-neutral-dark-8',
        ],
      },
      {
        color: 'neutral',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-neutral-light-11',
          'enabled:hover:bg-neutral-light-4',
          'enabled:active:bg-neutral-light-5',

          'dark:text-neutral-dark-11',
          'dark:enabled:hover:bg-neutral-dark-4',
          'dark:enabled:active:bg-neutral-dark-5',
        ],
      },
      {
        color: 'neutral',
        variant: 'transparent',
        className: ['bg-transparent', 'text-neutral-light-11', 'dark:text-neutral-dark-11'],
      },

      // color primary
      {
        color: 'primary',
        variant: 'filled',
        className: [
          'text-white',
          'bg-primary-light-9',
          'enabled:hover:bg-primary-light-10',

          'dark:bg-primary-dark-9',
          'dark:enabled:hover:bg-primary-dark-10',
        ],
      },
      {
        color: 'primary',
        variant: 'light',
        className: [
          'text-primary-light-11',
          'bg-primary-light-4',
          'enabled:hover:bg-primary-light-5',
          'enabled:active:bg-primary-light-6',

          'dark:text-primary-dark-11',
          'dark:bg-primary-dark-4',
          'dark:enabled:hover:bg-primary-dark-5',
          'dark:enabled:active:bg-primary-dark-6',
        ],
      },
      {
        color: 'primary',
        variant: 'outline',
        className: [
          'text-primary-light-11',
          'bg-primary-light-1',
          'border-primary-light-7',
          'enabled:hover:border-primary-light-8',

          'dark:text-primary-dark-11',
          'dark:bg-primary-dark-1',
          'dark:border-primary-dark-7',
          'dark:enabled:hover:border-primary-dark-8',
        ],
      },
      {
        color: 'primary',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-primary-light-11',
          'enabled:hover:bg-primary-light-4',
          'enabled:active:bg-primary-light-5',

          'dark:text-primary-dark-11',
          'dark:enabled:hover:bg-primary-dark-4',
          'dark:enabled:active:bg-primary-dark-5',
        ],
      },
      {
        color: 'primary',
        variant: 'transparent',
        className: ['bg-transparent', 'text-primary-light-11', 'dark:text-primary-dark-11'],
      },

      // color secondary
      {
        color: 'secondary',
        variant: 'filled',
        className: [
          'text-white',
          'bg-secondary-light-9',
          'enabled:hover:bg-secondary-light-10',

          'dark:bg-secondary-dark-9',
          'dark:enabled:hover:bg-secondary-dark-10',
        ],
      },
      {
        color: 'secondary',
        variant: 'light',
        className: [
          'text-secondary-light-11',
          'bg-secondary-light-4',
          'enabled:hover:bg-secondary-light-5',
          'enabled:active:bg-secondary-light-6',

          'dark:text-secondary-dark-11',
          'dark:bg-secondary-dark-4',
          'dark:enabled:hover:bg-secondary-dark-5',
          'dark:enabled:active:bg-secondary-dark-6',
        ],
      },
      {
        color: 'secondary',
        variant: 'outline',
        className: [
          'text-secondary-light-11',
          'bg-secondary-light-1',
          'border-secondary-light-7',
          'enabled:hover:border-secondary-light-8',

          'dark:text-secondary-dark-11',
          'dark:bg-secondary-dark-1',
          'dark:border-secondary-dark-7',
          'dark:enabled:hover:border-secondary-dark-8',
        ],
      },
      {
        color: 'secondary',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-secondary-light-11',
          'enabled:hover:bg-secondary-light-4',
          'enabled:active:bg-secondary-light-5',

          'dark:text-secondary-dark-11',
          'dark:enabled:hover:bg-secondary-dark-4',
          'dark:enabled:active:bg-secondary-dark-5',
        ],
      },
      {
        color: 'secondary',
        variant: 'transparent',
        className: ['bg-transparent', 'text-secondary-light-11', 'dark:text-secondary-dark-11'],
      },

      // color success
      {
        color: 'success',
        variant: 'filled',
        className: [
          'text-white',
          'bg-success-light-9',
          'enabled:hover:bg-success-light-10',

          'dark:bg-success-dark-9',
          'dark:enabled:hover:bg-success-dark-10',
        ],
      },
      {
        color: 'success',
        variant: 'light',
        className: [
          'text-success-light-11',
          'bg-success-light-4',
          'enabled:hover:bg-success-light-5',
          'enabled:active:bg-success-light-6',

          'dark:text-success-dark-11',
          'dark:bg-success-dark-4',
          'dark:enabled:hover:bg-success-dark-5',
          'dark:enabled:active:bg-success-dark-6',
        ],
      },
      {
        color: 'success',
        variant: 'outline',
        className: [
          'text-success-light-11',
          'bg-success-light-1',
          'border-success-light-7',
          'enabled:hover:border-success-light-8',

          'dark:text-success-dark-11',
          'dark:bg-success-dark-1',
          'dark:border-success-dark-7',
          'dark:enabled:hover:border-success-dark-8',
        ],
      },
      {
        color: 'success',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-success-light-11',
          'enabled:hover:bg-success-light-4',
          'enabled:active:bg-success-light-5',

          'dark:text-success-dark-11',
          'dark:enabled:hover:bg-success-dark-4',
          'dark:enabled:active:bg-success-dark-5',
        ],
      },
      {
        color: 'success',
        variant: 'transparent',
        className: ['bg-transparent', 'text-success-light-11', 'dark:text-success-dark-11'],
      },

      // color warning
      {
        color: 'warning',
        variant: 'filled',
        className: [
          'text-white',
          'bg-warning-light-9',
          'enabled:hover:bg-warning-light-10',

          'dark:bg-warning-dark-9',
          'dark:enabled:hover:bg-warning-dark-10',
        ],
      },
      {
        color: 'warning',
        variant: 'light',
        className: [
          'text-warning-light-11',
          'bg-warning-light-4',
          'enabled:hover:bg-warning-light-5',
          'enabled:active:bg-warning-light-6',

          'dark:text-warning-dark-11',
          'dark:bg-warning-dark-4',
          'dark:enabled:hover:bg-warning-dark-5',
          'dark:enabled:active:bg-warning-dark-6',
        ],
      },
      {
        color: 'warning',
        variant: 'outline',
        className: [
          'text-warning-light-11',
          'bg-warning-light-1',
          'border-warning-light-7',
          'enabled:hover:border-warning-light-8',

          'dark:text-warning-dark-11',
          'dark:bg-warning-dark-1',
          'dark:border-warning-dark-7',
          'dark:enabled:hover:border-warning-dark-8',
        ],
      },
      {
        color: 'warning',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-warning-light-11',
          'enabled:hover:bg-warning-light-4',
          'enabled:active:bg-warning-light-5',

          'dark:text-warning-dark-11',
          'dark:enabled:hover:bg-warning-dark-4',
          'dark:enabled:active:bg-warning-dark-5',
        ],
      },
      {
        color: 'warning',
        variant: 'transparent',
        className: ['bg-transparent', 'text-warning-light-11', 'dark:text-warning-dark-11'],
      },

      // color error
      {
        color: 'error',
        variant: 'filled',
        className: [
          'text-white',
          'bg-error-light-9',
          'enabled:hover:bg-error-light-10',

          'dark:bg-error-dark-9',
          'dark:enabled:hover:bg-error-dark-10',
        ],
      },
      {
        color: 'error',
        variant: 'light',
        className: [
          'text-error-light-11',
          'bg-error-light-4',
          'enabled:hover:bg-error-light-5',
          'enabled:active:bg-error-light-6',

          'dark:text-error-dark-11',
          'dark:bg-error-dark-4',
          'dark:enabled:hover:bg-error-dark-5',
          'dark:enabled:active:bg-error-dark-6',
        ],
      },
      {
        color: 'error',
        variant: 'outline',
        className: [
          'text-error-light-11',
          'bg-error-light-1',
          'border-error-light-7',
          'enabled:hover:border-error-light-8',

          'dark:text-error-dark-11',
          'dark:bg-error-dark-1',
          'dark:border-error-dark-7',
          'dark:enabled:hover:border-error-dark-8',
        ],
      },
      {
        color: 'error',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-error-light-11',
          'enabled:hover:bg-error-light-4',
          'enabled:active:bg-error-light-5',

          'dark:text-error-dark-11',
          'dark:enabled:hover:bg-error-dark-4',
          'dark:enabled:active:bg-error-dark-5',
        ],
      },
      {
        color: 'error',
        variant: 'transparent',
        className: ['bg-transparent', 'text-error-light-11', 'dark:text-error-dark-11'],
      },
    ],
  }
);
