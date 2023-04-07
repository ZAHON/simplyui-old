import { cva } from 'class-variance-authority';

export const burgerRootStyles = cva(
  [
    'p-1.5',
    'inline-flex',
    'flex-col',
    'justify-center',
    'items-center',
    'select-none',
    'overflow-hidden',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-primary-9',

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
        xs: ['rounded-xs'],
        sm: ['rounded-sm'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        xl: ['rounded-xl'],
        '2xl': ['rounded-2xl'],
        '3xl': ['rounded-3xl'],
        squared: ['rounded-squared'],
        full: ['rounded-full'],
      },
    },
  }
);

export const burgerIconStyles = cva(
  [
    'relative',
    'w-full',
    'motion-safe:transition-colors',
    'motion-safe:duration-[var(--burger-transition-duration)]',
    'data-[opened]:bg-transparent',

    'before:content-[""]',
    'before:absolute',
    'before:left-0',
    'before:w-full',
    'before:motion-safe:transition-transform',
    'before:motion-safe:duration-[var(--burger-transition-duration)]',
    'data-[opened]:before:rotate-45',

    'after:content-[""]',
    'after:absolute',
    'after:left-0',
    'after:w-full',
    'after:motion-safe:transition-transform',
    'after:motion-safe:duration-[var(--burger-transition-duration)]',
    'data-[opened]:after:-rotate-45',
  ],
  {
    variants: {
      size: {
        xs: [
          'h-px',

          'before:-top-1',
          'before:h-px',
          'data-[opened]:before:translate-y-1',

          'after:top-1',
          'after:h-px',
          'data-[opened]:after:-translate-y-1',
        ],
        sm: [
          'h-px',

          'before:-top-1.5',
          'before:h-px',
          'data-[opened]:before:translate-y-1.5',

          'after:top-1.5',
          'after:h-px',
          'data-[opened]:after:-translate-y-1.5',
        ],
        md: [
          'h-0.5',

          'before:-top-2',
          'before:h-0.5',
          'data-[opened]:before:translate-y-2',

          'after:top-2',
          'after:h-0.5',
          'data-[opened]:after:-translate-y-2',
        ],
        lg: [
          'h-[3px]',

          'before:-top-2.5',
          'before:h-[3px]',
          'data-[opened]:before:translate-y-2.5',

          'after:top-2.5',
          'after:h-[3px]',
          'data-[opened]:after:-translate-y-2.5',
        ],
        xl: [
          'h-1',

          'before:-top-3',
          'before:h-1',
          'data-[opened]:before:translate-y-3',

          'after:top-3',
          'after:h-1',
          'data-[opened]:after:-translate-y-3',
        ],
      },
      color: {
        text: ['bg-layout-text', 'before:bg-layout-text', 'after:bg-layout-text'],
        neutral: ['bg-neutral-11', 'before:bg-neutral-11', 'after:bg-neutral-11'],
        primary: ['bg-primary-11', 'before:bg-primary-11', 'after:bg-primary-11'],
        secondary: ['bg-secondary-11', 'before:bg-secondary-11', 'after:bg-secondary-11'],
        info: ['bg-info-11', 'before:bg-info-11', 'after:bg-info-11'],
        success: ['bg-success-11', 'before:bg-success-11', 'after:bg-success-11'],
        warning: ['bg-warning-11', 'before:bg-warning-11', 'after:bg-warning-11'],
        error: ['bg-error-11', 'before:bg-error-11', 'after:bg-error-11'],
      },
      roundedIconBars: {
        true: ['rounded-full', 'before:rounded-full', 'after:rounded-full'],
      },
    },
  }
);
