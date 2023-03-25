import { cva } from 'class-variance-authority';

export const labelDescriptionStyles = cva(
  [
    'text-xs',
    'leading-3',
    'cursor-default',
    'font-light',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'data-[disabled]:opacity-40',
    'data-[disabled]:select-none',
  ],
  {
    variants: {
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
