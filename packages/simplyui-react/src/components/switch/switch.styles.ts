import { cva } from 'class-variance-authority';

export const switchStyles = cva(
  [
    'relative',
    'appearance-none',
    'cursor-pointer',
    'border-2',

    'before:content-[""]',
    'before:absolute',
    'before:top-0.5',
    'before:left-0.5',
    'before:motion-safe:transition',
    'before:motion-safe:duration-150',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-primary-9',

    'disabled:opacity-40',
    'disabled:cursor-not-allowed',

    'data-[invalid]:[&:not(:checked)]:border-error-9',
  ],
  {
    variants: {
      variant: {
        filled: ['bg-neutral-5', 'border-neutral-5', 'before:bg-layout-background'],
        outline: [
          'bg-transparent',
          'border-neutral-7',

          'before:bg-neutral-7',

          'enabled:hover:border-neutral-8',
          'enabled:hover:before:bg-neutral-8',

          'checked:before:bg-layout-background',
          'checked:enabled:hover:before:bg-layout-background',
        ],
      },
      size: {
        xs: ['h-5', 'w-8', 'before:h-3', 'before:w-3', 'checked:before:translate-x-3'],
        sm: ['h-6', 'w-10', 'before:h-4', 'before:w-4', 'checked:before:translate-x-4'],
        md: ['h-7', 'w-11', 'before:h-5', 'before:w-5', 'checked:before:translate-x-4'],
        lg: ['h-8', 'w-14', 'before:h-6', 'before:w-6', 'checked:before:translate-x-6'],
        xl: ['h-9', 'w-16', 'before:h-7', 'before:w-7', 'checked:before:translate-x-7'],
      },
      color: {
        primary: [
          'checked:bg-primary-9',
          'checked:border-primary-9',
          'checked:enabled:hover:bg-primary-10',
          'checked:enabled:hover:border-primary-10',
        ],
        secondary: [
          'checked:bg-secondary-9',
          'checked:border-secondary-9',
          'checked:enabled:hover:bg-secondary-10',
          'checked:enabled:hover:border-secondary-10',
        ],
        success: [
          'checked:bg-success-9',
          'checked:border-success-9',
          'checked:enabled:hover:bg-success-10',
          'checked:enabled:hover:border-success-10',
        ],
        warning: [
          'checked:bg-warning-9',
          'checked:border-warning-9',
          'checked:enabled:hover:bg-warning-10',
          'checked:enabled:hover:border-warning-10',
        ],
        error: [
          'checked:bg-error-9',
          'checked:border-error-9',
          'checked:enabled:hover:bg-error-10',
          'checked:enabled:hover:border-error-10',
        ],
      },
      rounded: {
        none: ['rounded-none', 'before:rounded-none'],
        squared: ['rounded-[2px]', 'before:rounded-[2px]'],
        full: ['rounded-full', 'before:rounded-full'],
      },
    },
  }
);
