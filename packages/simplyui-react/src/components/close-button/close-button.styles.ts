import { cva } from 'class-variance-authority';

export const closeButtonStyles = cva(
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
        filled: [''],
        light: [''],
        outline: ['bg-transparent', 'border-2'],
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
          'enabled:active:bg-neutral-6',

          'focus-visible:bg-neutral-5',
        ],
      },
      {
        color: 'neutral',
        variant: 'outline',
        className: [
          'text-neutral-12',
          'border-neutral-12',

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
          'text-neutral-12',

          'enabled:hover:bg-neutral-4',
          'enabled:active:bg-neutral-5',

          'focus-visible:bg-neutral-5',
        ],
      },
      {
        color: 'neutral',
        variant: 'transparent',
        className: ['text-neutral-12'],
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
          'enabled:active:bg-primary-6',

          'focus-visible:bg-primary-5',
        ],
      },
      {
        color: 'primary',
        variant: 'outline',
        className: [
          'text-primary-9',
          'border-primary-9',

          'enabled:hover:text-white',
          'enabled:hover:bg-primary-9',

          'focus-visible:text-white',
          'focus-visible:bg-primary-9',
        ],
      },
      {
        color: 'primary',
        variant: 'subtle',
        className: [
          'text-primary-11',

          'enabled:hover:bg-primary-4',
          'enabled:active:bg-primary-5',

          'focus-visible:bg-primary-4',
        ],
      },
      {
        color: 'primary',
        variant: 'transparent',
        className: ['text-primary-11'],
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
          'enabled:active:bg-secondary-6',

          'focus-visible:bg-secondary-5',
        ],
      },
      {
        color: 'secondary',
        variant: 'outline',
        className: [
          'text-secondary-9',
          'border-secondary-9',

          'enabled:hover:text-white',
          'enabled:hover:bg-secondary-9',

          'focus-visible:text-white',
          'focus-visible:bg-secondary-9',
        ],
      },
      {
        color: 'secondary',
        variant: 'subtle',
        className: [
          'text-secondary-11',

          'enabled:hover:bg-secondary-4',
          'enabled:active:bg-secondary-5',

          'focus-visible:bg-secondary-4',
        ],
      },
      {
        color: 'secondary',
        variant: 'transparent',
        className: ['text-secondary-11'],
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
          'enabled:active:bg-info-6',

          'focus-visible:bg-info-5',
        ],
      },
      {
        color: 'info',
        variant: 'outline',
        className: [
          'text-info-9',
          'border-info-9',

          'enabled:hover:text-black',
          'enabled:hover:bg-info-9',

          'focus-visible:text-black',
          'focus-visible:bg-info-9',
        ],
      },
      {
        color: 'info',
        variant: 'subtle',
        className: [
          'text-info-11',

          'enabled:hover:bg-info-4',
          'enabled:active:bg-info-5',

          'focus-visible:bg-info-4',
        ],
      },
      {
        color: 'info',
        variant: 'transparent',
        className: ['text-info-11'],
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
          'enabled:active:bg-success-6',

          'focus-visible:bg-success-5',
        ],
      },
      {
        color: 'success',
        variant: 'outline',
        className: [
          'text-success-9',
          'border-success-9',

          'enabled:hover:text-white',
          'enabled:hover:bg-success-9',

          'focus-visible:text-white',
          'focus-visible:bg-success-9',
        ],
      },
      {
        color: 'success',
        variant: 'subtle',
        className: [
          'text-success-11',

          'enabled:hover:bg-success-4',
          'enabled:active:bg-success-5',

          'focus-visible:bg-success-4',
        ],
      },
      {
        color: 'success',
        variant: 'transparent',
        className: ['text-success-11'],
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
          'enabled:active:bg-warning-6',

          'focus-visible:bg-warning-5',
        ],
      },
      {
        color: 'warning',
        variant: 'outline',
        className: [
          'text-warning-9',
          'border-warning-9',

          'enabled:hover:text-black',
          'enabled:hover:bg-warning-9',

          'focus-visible:text-black',
          'focus-visible:bg-warning-9',
        ],
      },
      {
        color: 'warning',
        variant: 'subtle',
        className: [
          'text-warning-11',

          'enabled:hover:bg-warning-4',
          'enabled:active:bg-warning-5',

          'focus-visible:bg-warning-4',
        ],
      },
      {
        color: 'warning',
        variant: 'transparent',
        className: ['text-warning-11'],
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
          'enabled:active:bg-error-6',

          'focus-visible:bg-error-5',
        ],
      },
      {
        color: 'error',
        variant: 'outline',
        className: [
          'text-error-9',
          'border-error-9',

          'enabled:hover:text-white',
          'enabled:hover:bg-error-9',

          'focus-visible:text-white',
          'focus-visible:bg-error-9',
        ],
      },
      {
        color: 'error',
        variant: 'subtle',
        className: [
          'text-error-11',

          'enabled:hover:bg-error-4',
          'enabled:active:bg-error-5',

          'focus-visible:bg-error-4',
        ],
      },
      {
        color: 'error',
        variant: 'transparent',
        className: ['text-error-11'],
      },
    ],
  }
);
