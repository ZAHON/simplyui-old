import { cva } from 'class-variance-authority';

export const loaderStyles = cva(
  [
    'h-[var(--loader-size)]',
    'w-[var(--loader-size)]',
    'select-none',
    'relative',
    'flex',
    'justify-center',
    'items-center',
    'rounded-full',
    'bg-transparent',
  ],
  {
    variants: {
      variant: {
        border: [
          'border-[length:var(--loader-border)]',
          'border-current',
          'border-r-transparent',
          'animate-[spin_var(--loader-animation-duration)_linear_infinite]',
        ],
        oval: [
          'before:content-[""]',
          'before:absolute',
          'before:top-0',
          'before:h-full',
          'before:w-full',
          'before:rounded-full',
          'before:border-[length:var(--loader-border)]',
          'before:border-transparent',
          'before:border-b-current',
          'before:animate-[spin_var(--loader-animation-duration)_linear_infinite]',

          'after:content-[""]',
          'after:absolute',
          'after:top-0',
          'after:h-full',
          'after:w-full',
          'after:rounded-full',
          'after:opacity-50',
          'after:border-[length:var(--loader-border)]',
          'after:border-current',
        ],
        spinner: [
          'before:content-[""]',
          'before:absolute',
          'before:top-0',
          'before:h-full',
          'before:w-full',
          'before:rounded-full',
          'before:border-[length:var(--loader-border)]',
          'before:border-transparent',
          'before:border-b-current',
          'before:animate-[spin_var(--loader-animation-duration)_ease_infinite]',

          'after:content-[""]',
          'after:absolute',
          'after:top-0',
          'after:h-full',
          'after:w-full',
          'after:rounded-full',
          'after:opacity-50',
          'after:border-[length:var(--loader-border)]',
          'after:border-dotted',
          'after:border-transparent',
          'after:border-b-current',
          'after:animate-[spin_var(--loader-animation-duration)_linear_infinite]',
        ],
      },
      size: {
        xs: ['[--loader-size:1rem]', '[--loader-border:0.125rem]'],
        sm: ['[--loader-size:1.5rem]', '[--loader-border:0.125rem]'],
        md: ['[--loader-size:2rem]', '[--loader-border:0.1875rem]'],
        lg: ['[--loader-size:2.75rem]', '[--loader-border:0.25rem]'],
        xl: ['[--loader-size:4rem]', '[--loader-border:0.375rem]'],
      },
      color: {
        currentColor: ['text-current'],

        // Colors
        neutral: ['text-neutral-light-9', 'dark:text-neutral-dark-9'],
        primary: ['text-primary-light-9', 'dark:text-primary-dark-9'],
        secondary: ['text-secondary-light-9', 'dark:text-secondary-dark-9'],
        success: ['text-success-light-9', 'dark:text-success-dark-9'],
        warning: ['text-warning-light-9', 'dark:text-warning-dark-9'],
        error: ['text-error-light-9', 'dark:text-error-dark-9'],
      },
    },
  }
);
