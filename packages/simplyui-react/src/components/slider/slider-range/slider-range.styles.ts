import { cva } from 'class-variance-authority';

export const sliderRangeStyles = cva(['absolute', 'rounded-full'], {
  variants: {
    orientation: {
      horizontal: ['h-full'],
      vertical: ['w-full'],
    },
    color: {
      primary: ['bg-primary-9'],
      secondary: ['bg-secondary-9'],
      info: ['bg-info-9'],
      success: ['bg-success-9'],
      warning: ['bg-warning-9'],
      error: ['bg-error-9'],
    },
    showRange: {
      false: ['bg-transparent'],
    },
  },
});
