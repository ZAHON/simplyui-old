import { cva } from 'class-variance-authority';

export const codeStyles = cva(['inline-block', , 'py-1', 'px-2', 'font-mono'], {
  variants: {
    size: {
      inherit: [''],
      xs: ['text-xs'],
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-lg'],
      xl: ['text-xl'],
    },
    color: {
      neutral: ['text-neutral-12'],
      primary: ['text-primary-11'],
      secondary: ['text-secondary-11'],
      info: ['text-info-11'],
      success: ['text-success-11'],
      warning: ['text-warning-11'],
      error: ['text-error-11'],
    },
    backgroundColor: {
      neutral: ['bg-neutral-3', 'border-neutral-6'],
      primary: ['bg-primary-3', 'border-primary-6'],
      secondary: ['bg-secondary-3', 'border-secondary-6'],
      info: ['bg-info-3', 'border-info-6'],
      success: ['bg-success-3', 'border-success-6'],
      warning: ['bg-warning-3', 'border-warning-6'],
      error: ['bg-error-3', 'border-error-6'],
    },
    accent: {
      top: ['border-t-4'],
      right: ['border-r-4'],
      bottom: ['border-b-4'],
      left: ['border-l-4'],
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
});
