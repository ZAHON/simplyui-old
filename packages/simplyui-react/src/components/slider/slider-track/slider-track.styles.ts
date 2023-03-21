import { cva } from 'class-variance-authority';

export const sliderTrackStyles = cva(
  ['relative', 'grow', 'rounded-full', 'bg-neutral-light-5', 'dark:bg-neutral-dark-5'],
  {
    variants: {
      size: {
        xs: ['h-0.5'],
        sm: ['h-[0.1875rem]'],
        md: ['h-1'],
        lg: ['h-[0.3125rem]'],
        xl: ['h-1.5'],
      },
      rounded: {
        none: ['rounded-none'],
      },
    },
  }
);
