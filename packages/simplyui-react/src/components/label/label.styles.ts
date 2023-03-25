import { cva } from 'class-variance-authority';

export const labelStyles = cva(
  [
    'motion-safe:transition',
    'motion-safe:duration-150',

    'data-[disabled]:opacity-40',
    'data-[disabled]:select-none',
  ],
  {
    variants: {
      size: {
        xs: ['text-xs'],
        sm: ['text-xs'],
        md: ['text-sm'],
        lg: ['text-base'],
        xl: ['text-lg'],
      },
      color: {
        default: ['text-neutral-12'],
        primary: ['text-primary-11'],
        secondary: ['text-secondary-11'],
        success: ['text-success-11'],
        warning: ['text-warning-11'],
        error: ['text-error-11'],
      },
    },
  }
);
