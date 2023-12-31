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
          'border-[length:var(--loader-thickness)]',
          'border-current',
          'border-r-transparent',
          'motion-safe:animate-[spin_var(--loader-safe-animation-duration)_linear_infinite]',
          'motion-reduce:animate-[spin_var(--loader-reduce-animation-duration)_linear_infinite]',
        ],
        oval: [
          'before:content-[""]',
          'before:absolute',
          'before:top-0',
          'before:h-full',
          'before:w-full',
          'before:rounded-full',
          'before:border-[length:var(--loader-thickness)]',
          'before:border-transparent',
          'before:border-b-current',
          'before:motion-safe:animate-[spin_var(--loader-safe-animation-duration)_linear_infinite]',
          'before:motion-reduce:animate-[spin_var(--loader-reduce-animation-duration)_linear_infinite]',

          'after:content-[""]',
          'after:absolute',
          'after:top-0',
          'after:h-full',
          'after:w-full',
          'after:rounded-full',
          'after:opacity-50',
          'after:border-[length:var(--loader-thickness)]',
          'after:border-current',
        ],
        spinner: [
          'before:content-[""]',
          'before:absolute',
          'before:top-0',
          'before:h-full',
          'before:w-full',
          'before:rounded-full',
          'before:border-[length:var(--loader-thickness)]',
          'before:border-transparent',
          'before:border-b-current',
          'before:motion-safe:animate-[spin_var(--loader-safe-animation-duration)_ease_infinite]',
          'before:motion-reduce:animate-[spin_var(--loader-reduce-animation-duration)_ease_infinite]',

          'after:content-[""]',
          'after:absolute',
          'after:top-0',
          'after:h-full',
          'after:w-full',
          'after:rounded-full',
          'after:opacity-50',
          'after:border-[length:var(--loader-thickness)]',
          'after:border-dotted',
          'after:border-transparent',
          'after:border-b-current',
          'after:motion-safe:animate-[spin_var(--loader-safe-animation-duration)_linear_infinite]',
          'after:motion-reduce:animate-[spin_var(--loader-reduce-animation-duration)_linear_infinite]',
        ],
      },
      size: {
        xs: ['[--loader-size:1rem]', '[--loader-thickness:0.125rem]'],
        sm: ['[--loader-size:1.5rem]', '[--loader-thickness:0.125rem]'],
        md: ['[--loader-size:2rem]', '[--loader-thickness:0.1875rem]'],
        lg: ['[--loader-size:2.5rem]', '[--loader-thickness:0.25rem]'],
        xl: ['[--loader-size:3rem]', '[--loader-thickness:0.3125rem]'],
      },
      color: {
        currentColor: ['text-current'],
        neutral: ['text-neutral-9'],
        primary: ['text-primary-9'],
        secondary: ['text-secondary-9'],
        info: ['text-info-9'],
        success: ['text-success-9'],
        warning: ['text-warning-9'],
        error: ['text-error-9'],
      },
    },
  }
);
