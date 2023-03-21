import { cva } from 'class-variance-authority';

export const sliderRangeStyles = cva(['absolute', 'rounded-full', 'h-full'], {
  variants: {
    color: {
      primary: ['bg-primary-light-9', 'dark:bg-primary-dark-9'],
      secondary: ['bg-secondary-light-9', 'dark:bg-secondary-dark-9'],
      success: ['bg-success-light-9', 'dark:bg-success-dark-9'],
      warning: ['bg-warning-light-9', 'dark:bg-warning-dark-9'],
      error: ['bg-error-light-9', 'dark:bg-error-dark-9'],
    },
    rounded: {
      none: ['rounded-none'],
    },
  },
});
