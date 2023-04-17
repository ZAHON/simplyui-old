import { cva } from 'class-variance-authority';

export const nativeSelectStyles = cva(
  [
    'appearance-none',
    'w-full',
    'px-2.5',
    'text-neutral-12',

    'focus:outline-none',

    'placeholder:opacity-60',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'disabled:opacity-40',
    'disabled:cursor-not-allowed',

    'data-[invalid]:border-error-9',
  ],
  {
    variants: {
      size: {
        xs: ['h-6', 'pr-6', 'rounded-xs', 'text-xs'],
        sm: ['h-8', 'pr-8', 'rounded-sm', 'text-sm'],
        md: ['h-10', 'pr-10', 'rounded-md', 'text-base'],
        lg: ['h-12', 'pr-12', 'rounded-lg', 'text-lg'],
        xl: ['h-14', 'pr-14', 'rounded-xl', 'text-xl'],
      },
      rounded: {
        none: ['rounded-none'],
        xs: ['rounded-xs'],
        sm: ['rounded-sm'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        xl: ['rounded-xl'],
        full: ['rounded-full'],
      },
      variant: {
        filled: ['border-2', 'bg-neutral-5', 'border-neutral-5'],
        outline: ['border-2', 'bg-transparent', 'border-neutral-7', '[&>*]:bg-neutral-5'],
        underlined: [
          'border-b-2',
          'bg-transparent',
          'border-b-neutral-7',
          'rounded-none',
          '[&>*]:bg-neutral-5',
        ],
      },
      focusBorderColor: {
        neutral: ['focus:border-neutral-9'],
        primary: ['focus:border-primary-9'],
        secondary: ['focus:border-secondary-9'],
        info: ['focus:border-info-9'],
        success: ['focus:border-success-9'],
        warning: ['focus:border-warning-9'],
        error: ['focus:border-error-9'],
      },
    },
  }
);
