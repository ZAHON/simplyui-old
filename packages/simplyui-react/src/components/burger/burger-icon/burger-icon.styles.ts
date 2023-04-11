import { cva } from 'class-variance-authority';

export const burgerIconStyles = cva(
  [
    'relative',
    'w-full',
    'motion-safe:transition-colors',
    'motion-safe:duration-[var(--burger-icon-transition-duration)]',
    'data-[opened]:bg-transparent',

    'before:content-[""]',
    'before:absolute',
    'before:left-0',
    'before:h-full',
    'before:w-full',
    'before:motion-safe:transition-transform',
    'before:motion-safe:duration-[var(--burger-icon-transition-duration)]',
    'data-[opened]:before:rotate-45',

    'after:content-[""]',
    'after:absolute',
    'after:left-0',
    'after:h-full',
    'after:w-full',
    'after:motion-safe:transition-transform',
    'after:motion-safe:duration-[var(--burger-icon-transition-duration)]',
    'data-[opened]:after:-rotate-45',
  ],

  {
    variants: {
      size: {
        xs: ['h-px', 'w-[0.5625rem]'],
        sm: ['h-px', 'w-[0.8125rem]'],
        md: ['h-0.5', 'w-[1.125rem]'],
        lg: ['h-[0.1875rem]', 'w-[1.5625rem]'],
        xl: ['h-1', 'w-7'],
      },
      color: {
        neutral: ['bg-neutral-12', 'before:bg-neutral-12', 'after:bg-neutral-12'],
        primary: ['bg-primary-11', 'before:bg-primary-11', 'after:bg-primary-11'],
        secondary: ['bg-secondary-11', 'before:bg-secondary-11', 'after:bg-secondary-11'],
        info: ['bg-info-11', 'before:bg-info-11', 'after:bg-info-11'],
        success: ['bg-success-11', 'before:bg-success-11', 'after:bg-success-11'],
        warning: ['bg-warning-11', 'before:bg-warning-11', 'after:bg-warning-11'],
        error: ['bg-error-11', 'before:bg-error-11', 'after:bg-error-11'],
      },
      bars: {
        2: ['bg-transparent'],
        3: [''],
      },
      roundedBars: {
        true: ['rounded-full', 'before:rounded-full', 'after:rounded-full'],
      },
    },
    compoundVariants: [
      // size xs
      {
        size: 'xs',
        bars: 2,
        className: [
          'before:-top-0.5',
          'data-[opened]:before:translate-y-0.5',

          'after:top-0.5',
          'data-[opened]:after:-translate-y-0.5',
        ],
      },
      {
        size: 'xs',
        bars: 3,
        className: [
          'before:-top-1',
          'data-[opened]:before:translate-y-1',

          'after:top-1',
          'data-[opened]:after:-translate-y-1',
        ],
      },

      // size sm
      {
        size: 'sm',
        bars: 2,
        className: [
          'before:-top-[3px]',
          'data-[opened]:before:translate-y-[3px]',

          'after:top-[3px]',
          'data-[opened]:after:-translate-y-[3px]',
        ],
      },
      {
        size: 'sm',
        bars: 3,
        className: [
          'before:-top-1.5',
          'data-[opened]:before:translate-y-1.5',

          'after:top-1.5',
          'data-[opened]:after:-translate-y-1.5',
        ],
      },

      // size md
      {
        size: 'md',
        bars: 2,
        className: [
          'before:-top-1',
          'data-[opened]:before:translate-y-1',

          'after:top-1',
          'data-[opened]:after:-translate-y-1',
        ],
      },
      {
        size: 'md',
        bars: 3,
        className: [
          'before:-top-2',
          'data-[opened]:before:translate-y-2',

          'after:top-2',
          'data-[opened]:after:-translate-y-2',
        ],
      },

      // size lg
      {
        size: 'lg',
        bars: 2,
        className: [
          'before:-top-[5px]',
          'data-[opened]:before:translate-y-[5px]',

          'after:top-[5px]',
          'data-[opened]:after:-translate-y-[5px]',
        ],
      },
      {
        size: 'lg',
        bars: 3,
        className: [
          'before:-top-2.5',
          'data-[opened]:before:translate-y-2.5',

          'after:top-2.5',
          'data-[opened]:after:-translate-y-2.5',
        ],
      },

      // size xl
      {
        size: 'xl',
        bars: 2,
        className: [
          'before:-top-1.5',
          'data-[opened]:before:translate-y-1.5',

          'after:top-1.5',
          'data-[opened]:after:-translate-y-1.5',
        ],
      },
      {
        size: 'xl',
        bars: 3,
        className: [
          'before:-top-3',
          'data-[opened]:before:translate-y-3',

          'after:top-3',
          'data-[opened]:after:-translate-y-3',
        ],
      },
    ],
  }
);
