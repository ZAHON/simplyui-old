import { cva } from 'class-variance-authority';

export const actionIconStyles = cva(
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
        xl: ['h-16', 'w-16', 'rounded-xl'],
      },
      rounded: {
        none: ['rounded-none'],
        squared: ['rounded-squared'],
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
        info: [''],
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
          'bg-neutral-9',

          'enabled:hover:bg-neutral-10',

          'focus-visible:bg-neutral-10',
        ],
      },
      {
        color: 'neutral',
        variant: 'light',
        className: [
          'text-neutral-12',
          'bg-neutral-4',

          'enabled:hover:bg-neutral-5',
          'enabled:focus-visible:bg-neutral-5',
          'enabled:active:bg-neutral-6',
        ],
      },
      {
        color: 'neutral',
        variant: 'outline',
        className: [
          'text-neutral-12',
          'bg-neutral-1',
          'border-neutral-7',

          'enabled:hover:text-white',
          'enabled:hover:bg-neutral-9',
          'enabled:hover:border-neutral-9',

          'focus-visible:text-white',
          'focus-visible:bg-neutral-9',
          'focus-visible:border-neutral-9',
        ],
      },
      {
        color: 'neutral',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-neutral-12',
          'enabled:hover:bg-neutral-4',
          'enabled:active:bg-neutral-5',

          'focus-visible:bg-neutral-4',
          'focus-visible:bg-neutral-5',
        ],
      },
      {
        color: 'neutral',
        variant: 'transparent',
        className: ['bg-transparent', 'text-neutral-12'],
      },

      // color primary
      {
        color: 'primary',
        variant: 'filled',
        className: [
          'text-white',
          'bg-primary-9',

          'enabled:hover:bg-primary-10',

          'focus-visible:bg-primary-10',
        ],
      },
      {
        color: 'primary',
        variant: 'light',
        className: [
          'text-primary-11',
          'bg-primary-4',

          'enabled:hover:bg-primary-5',
          'enabled:focus-visible:bg-primary-5',
          'enabled:active:bg-primary-6',
        ],
      },
      {
        color: 'primary',
        variant: 'outline',
        className: [
          'text-primary-11',
          'bg-primary-1',
          'border-primary-7',

          'enabled:hover:text-white',
          'enabled:hover:bg-primary-9',
          'enabled:hover:border-primary-9',

          'focus-visible:text-white',
          'focus-visible:bg-primary-9',
          'focus-visible:border-primary-9',
        ],
      },
      {
        color: 'primary',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-primary-11',
          'enabled:hover:bg-primary-4',
          'enabled:active:bg-primary-5',

          'focus-visible:bg-primary-4',
          'focus-visible:bg-primary-5',
        ],
      },
      {
        color: 'primary',
        variant: 'transparent',
        className: ['bg-transparent', 'text-primary-11'],
      },

      // color secondary
      {
        color: 'secondary',
        variant: 'filled',
        className: [
          'text-white',
          'bg-secondary-9',

          'enabled:hover:bg-secondary-10',

          'focus-visible:bg-secondary-10',
        ],
      },
      {
        color: 'secondary',
        variant: 'light',
        className: [
          'text-secondary-11',
          'bg-secondary-4',

          'enabled:hover:bg-secondary-5',
          'enabled:focus-visible:bg-secondary-5',
          'enabled:active:bg-secondary-6',
        ],
      },
      {
        color: 'secondary',
        variant: 'outline',
        className: [
          'text-secondary-11',
          'bg-secondary-1',
          'border-secondary-7',

          'enabled:hover:text-white',
          'enabled:hover:bg-secondary-9',
          'enabled:hover:border-secondary-9',

          'focus-visible:text-white',
          'focus-visible:bg-secondary-9',
          'focus-visible:border-secondary-9',
        ],
      },
      {
        color: 'secondary',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-secondary-11',
          'enabled:hover:bg-secondary-4',
          'enabled:active:bg-secondary-5',

          'focus-visible:bg-secondary-4',
          'focus-visible:bg-secondary-5',
        ],
      },
      {
        color: 'secondary',
        variant: 'transparent',
        className: ['bg-transparent', 'text-secondary-11'],
      },

      // color info
      {
        color: 'info',
        variant: 'filled',
        className: [
          'text-black',
          'bg-info-9',

          'enabled:hover:bg-info-10',

          'focus-visible:bg-info-10',
        ],
      },
      {
        color: 'info',
        variant: 'light',
        className: [
          'text-info-11',
          'bg-info-4',

          'enabled:hover:bg-info-5',
          'enabled:focus-visible:bg-info-5',
          'enabled:active:bg-info-6',
        ],
      },
      {
        color: 'info',
        variant: 'outline',
        className: [
          'text-info-11',
          'bg-info-1',
          'border-info-7',

          'enabled:hover:text-black',
          'enabled:hover:bg-info-9',
          'enabled:hover:border-info-9',

          'focus-visible:text-black',
          'focus-visible:bg-info-9',
          'focus-visible:border-info-9',
        ],
      },
      {
        color: 'info',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-info-11',
          'enabled:hover:bg-info-4',
          'enabled:active:bg-info-5',

          'focus-visible:bg-info-4',
          'focus-visible:bg-info-5',
        ],
      },
      {
        color: 'info',
        variant: 'transparent',
        className: ['bg-transparent', 'text-info-11'],
      },

      // color success
      {
        color: 'success',
        variant: 'filled',
        className: [
          'text-white',
          'bg-success-9',

          'enabled:hover:bg-success-10',

          'focus-visible:bg-success-10',
        ],
      },
      {
        color: 'success',
        variant: 'light',
        className: [
          'text-success-11',
          'bg-success-4',

          'enabled:hover:bg-success-5',
          'enabled:focus-visible:bg-success-5',
          'enabled:active:bg-success-6',
        ],
      },
      {
        color: 'success',
        variant: 'outline',
        className: [
          'text-success-11',
          'bg-success-1',
          'border-success-7',

          'enabled:hover:text-white',
          'enabled:hover:bg-success-9',
          'enabled:hover:border-success-9',

          'focus-visible:text-white',
          'focus-visible:bg-success-9',
          'focus-visible:border-success-9',
        ],
      },
      {
        color: 'success',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-success-11',
          'enabled:hover:bg-success-4',
          'enabled:active:bg-success-5',

          'focus-visible:bg-success-4',
          'focus-visible:bg-success-5',
        ],
      },
      {
        color: 'success',
        variant: 'transparent',
        className: ['bg-transparent', 'text-success-11'],
      },

      // color warning
      {
        color: 'warning',
        variant: 'filled',
        className: [
          'text-black',
          'bg-warning-9',

          'enabled:hover:bg-warning-10',

          'focus-visible:bg-warning-10',
        ],
      },
      {
        color: 'warning',
        variant: 'light',
        className: [
          'text-warning-11',
          'bg-warning-4',

          'enabled:hover:bg-warning-5',
          'enabled:focus-visible:bg-warning-5',
          'enabled:active:bg-warning-6',
        ],
      },
      {
        color: 'warning',
        variant: 'outline',
        className: [
          'text-warning-11',
          'bg-warning-1',
          'border-warning-7',

          'enabled:hover:text-black',
          'enabled:hover:bg-warning-9',
          'enabled:hover:border-warning-9',

          'focus-visible:text-black',
          'focus-visible:bg-warning-9',
          'focus-visible:border-warning-9',
        ],
      },
      {
        color: 'warning',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-warning-11',
          'enabled:hover:bg-warning-4',
          'enabled:active:bg-warning-5',

          'focus-visible:bg-warning-4',
          'focus-visible:bg-warning-5',
        ],
      },
      {
        color: 'warning',
        variant: 'transparent',
        className: ['bg-transparent', 'text-warning-11'],
      },

      // color error
      {
        color: 'error',
        variant: 'filled',
        className: [
          'text-white',
          'bg-error-9',

          'enabled:hover:bg-error-10',

          'focus-visible:bg-error-10',
        ],
      },
      {
        color: 'error',
        variant: 'light',
        className: [
          'text-error-11',
          'bg-error-4',

          'enabled:hover:bg-error-5',
          'enabled:focus-visible:bg-error-5',
          'enabled:active:bg-error-6',
        ],
      },
      {
        color: 'error',
        variant: 'outline',
        className: [
          'text-error-11',
          'bg-error-1',
          'border-error-7',

          'enabled:hover:text-white',
          'enabled:hover:bg-error-9',
          'enabled:hover:border-error-9',

          'focus-visible:text-white',
          'focus-visible:bg-error-9',
          'focus-visible:border-error-9',
        ],
      },
      {
        color: 'error',
        variant: 'subtle',
        className: [
          'bg-transparent',

          'text-error-11',
          'enabled:hover:bg-error-4',
          'enabled:active:bg-error-5',

          'focus-visible:bg-error-4',
          'focus-visible:bg-error-5',
        ],
      },
      {
        color: 'error',
        variant: 'transparent',
        className: ['bg-transparent', 'text-error-11'],
      },
    ],
  }
);
