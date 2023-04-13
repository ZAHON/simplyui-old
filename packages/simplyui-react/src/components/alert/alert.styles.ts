import { cva } from 'class-variance-authority';

export const alertStyles = cva(['flex', 'gap-x-4', 'p-4'], {
  variants: {
    variant: {
      filled: [''],
      light: [''],
      outline: ['border-2'],
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
    accent: {
      top: [''],
      right: [''],
      bottom: [''],
      left: [''],
    },
    size: {
      inherit: [''],
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-lg'],
      xl: ['text-xl'],
    },
    rounded: {
      none: ['rounded-none'],
      xs: ['rounded-xs'],
      sm: ['rounded-sm'],
      md: ['rounded-md'],
      lg: ['rounded-lg'],
      xl: ['rounded-xl'],
      squared: ['rounded-squared'],
      full: ['rounded-full'],
    },
  },
  compoundVariants: [
    // color neutral
    {
      color: 'neutral',
      variant: 'filled',
      className: ['text-white', 'bg-neutral-9'],
    },
    {
      color: 'neutral',
      variant: 'light',
      className: ['text-neutral-12', 'bg-neutral-2', 'border-neutral-6'],
    },
    {
      color: 'neutral',
      variant: 'outline',
      className: ['text-neutral-12', 'bg-neutral-1', 'border-neutral-7'],
    },

    // color primary
    {
      color: 'primary',
      variant: 'filled',
      className: ['text-white', 'bg-primary-9'],
    },
    {
      color: 'primary',
      variant: 'light',
      className: ['text-primary-11', 'bg-primary-2', 'border-primary-6'],
    },
    {
      color: 'primary',
      variant: 'outline',
      className: ['text-primary-11', 'bg-primary-1', 'border-primary-7'],
    },

    // color secondary
    {
      color: 'secondary',
      variant: 'filled',
      className: ['text-white', 'bg-secondary-9'],
    },
    {
      color: 'secondary',
      variant: 'light',
      className: ['text-secondary-11', 'bg-secondary-2', 'border-secondary-6'],
    },
    {
      color: 'secondary',
      variant: 'outline',
      className: ['text-secondary-11', 'bg-secondary-1', 'border-secondary-7'],
    },

    // color info
    {
      color: 'info',
      variant: 'filled',
      className: ['text-black', 'bg-info-9'],
    },
    {
      color: 'info',
      variant: 'light',
      className: ['text-info-11', 'bg-info-2', 'border-info-6'],
    },
    {
      color: 'info',
      variant: 'outline',
      className: ['text-info-11', 'bg-info-1', 'border-info-7'],
    },

    // color success
    {
      color: 'success',
      variant: 'filled',
      className: ['text-white', 'bg-success-9'],
    },
    {
      color: 'success',
      variant: 'light',
      className: ['text-success-11', 'bg-success-2', 'border-success-6'],
    },
    {
      color: 'success',
      variant: 'outline',
      className: ['text-success-11', 'bg-success-1', 'border-success-7'],
    },

    // color warning
    {
      color: 'warning',
      variant: 'filled',
      className: ['text-black', 'bg-warning-9'],
    },
    {
      color: 'warning',
      variant: 'light',
      className: ['text-warning-11', 'bg-warning-2', 'border-warning-6'],
    },
    {
      color: 'warning',
      variant: 'outline',
      className: ['text-warning-11', 'bg-warning-1', 'border-warning-7'],
    },

    // color error
    {
      color: 'error',
      variant: 'filled',
      className: ['text-white', 'bg-error-9'],
    },
    {
      color: 'error',
      variant: 'light',
      className: ['text-error-11', 'bg-error-2', 'border-error-6'],
    },
    {
      color: 'error',
      variant: 'outline',
      className: ['text-error-11', 'bg-error-1', 'border-error-7'],
    },

    // accent
    {
      accent: 'top',
      variant: 'light',
      className: ['border-t-4'],
    },
    {
      accent: 'right',
      variant: 'light',
      className: ['border-r-4'],
    },
    {
      accent: 'bottom',
      variant: 'light',
      className: ['border-b-4'],
    },
    {
      accent: 'left',
      variant: 'light',
      className: ['border-l-4'],
    },
  ],
});

export const alertTitleStyles = cva(['font-bold']);

export const alertContentWrapperStyles = cva(['flex', 'justify-center', 'flex-col', 'gap-y-2.5']);

export const alertIconWrapperStyles = cva(['flex', 'justify-center', 'items-center']);
