import { cva } from 'class-variance-authority';

export const progressTrackStyles = cva(['overflow-hidden'], {
  variants: {
    size: {
      xs: ['h-1'],
      sm: ['h-2'],
      md: ['h-4'],
      lg: ['h-6'],
      xl: ['h-7'],
    },
    backgroundColor: {
      neutral: ['bg-neutral-5'],
      primary: ['bg-primary-5'],
      secondary: ['bg-secondary-5'],
      info: ['bg-info-5'],
      success: ['bg-success-5'],
      warning: ['bg-warning-5'],
      error: ['bg-error-5'],
    },
    rounded: {
      none: ['rounded-none'],
      squared: ['rounded-[2px]'],
      full: ['rounded-full'],
    },
  },
});

export const progressIndicatorStyles = cva(
  [
    'overflow-hidden',
    'h-full',
    'w-full',

    'data-[animated]:motion-safe:transition-transform',
    'data-[animated]:motion-safe:ease-linear',
    'data-[animated]:motion-safe:duration-[var(--progress-width-transition-duration)]',

    'data-[animated-stripes]:motion-safe:animate-progress-stripes',

    'data-[indeterminate]:animate-progress-indeterminate',
    'data-[indeterminate]:!w-1/2',
    'data-[indeterminate]:rounded-inherit',

    'data-[striped]:bg-progress-stripes',
    'data-[striped]:[background-size:1.25rem_1.25rem]',

    'motion-safe:[--progress-indeterminate-animation-duration:var(--progress-indeterminate-safe-animation-duration)]',
    'motion-reduce:[--progress-indeterminate-animation-duration:var(--progress-indeterminate-reduce-animation-duration)]',
  ],
  {
    variants: {
      color: {
        primary: ['bg-primary-9'],
        secondary: ['bg-secondary-9'],
        info: ['bg-info-9'],
        success: ['bg-success-9'],
        warning: ['bg-warning-9'],
        error: ['bg-error-9'],
      },
      roundedIndicatorEdge: {
        true: ['last-of-type:rounded-r-inherit'],
        false: ['last-of-type:rounded-r-none'],
      },
    },
  }
);

export const progressLabelWrapperStyles = cva(
  ['mb-1.5', 'px-1', , 'flex', 'justify-between', 'text-neutral-12', 'cursor-default'],
  {
    variants: {
      size: {
        xs: ['text-xs'],
        sm: ['text-sm'],
        md: ['text-base'],
        lg: ['text-lg'],
        xl: ['text-xl'],
      },
    },
  }
);
