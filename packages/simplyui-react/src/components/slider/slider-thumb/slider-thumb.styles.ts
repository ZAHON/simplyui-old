import { cva } from 'class-variance-authority';

// .SliderThumb:focus {
//   outline: none;
//   box-shadow: 0 0 0 5px var(--blackA8);
// }

export const sliderThumbStyles = cva(
  [
    'block',
    'rounded-full',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-primary-9',
  ],
  {
    variants: {
      size: {
        xs: ['h-3', 'w-3'],
        sm: ['h-4', 'w-4'],
        md: ['h-5', 'w-5'],
        lg: ['h-6', 'w-6'],
        xl: ['h-7', 'w-7'],
      },
      color: {
        primary: ['bg-primary-9'],
        secondary: ['bg-secondary-9'],
        info: ['bg-info-9'],
        success: ['bg-success-9'],
        warning: ['bg-warning-9'],
        error: ['bg-error-9'],
      },
      focusOutlineColor: {
        neutral: ['focus-visible:outline-neutral-9'],
        primary: ['focus-visible:outline-primary-9'],
        secondary: ['focus-visible:outline-secondary-9'],
        info: ['focus-visible:outline-info-9'],
        success: ['focus-visible:outline-success-9'],
        warning: ['focus-visible:outline-warning-9'],
        error: ['focus-visible:outline-error-9'],
      },
    },
  }
);
