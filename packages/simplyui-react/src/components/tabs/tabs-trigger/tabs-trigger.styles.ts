import { cva } from 'class-variance-authority';

export const tabsTriggerStyles = cva(
  [
    'relative',
    'flex',
    'justify-center',
    'items-center',
    'gap-x-2',
    'py-2',
    'px-4',
    'text-neutral-11',
    'select-none',

    'enabled:hover:bg-neutral-4',

    'data-[disabled]:opacity-40',
    'data-[disabled]:cursor-not-allowed',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
  ],
  {
    variants: {
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
        default: [
          'data-[state=active]:text-neutral-12',

          'bg-transparent',
          'rounded-none',

          'before:content-[""]',
          'before:absolute',
          'before:left-0',
          'before:-bottom-0.5',
          'before:h-0.5',
          'before:w-full',
          'before:bg-transparent',
          'before:motion-safe:transition',
          'before:motion-safe:duration-150',
        ],
        pills: [''],
      },
      color: {
        neutral: [''],
        primary: [''],
        secondary: [''],
        info: [''],
        success: [''],
        warning: [''],
        error: [''],
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
    compoundVariants: [
      // color neutral
      {
        color: 'neutral',
        variant: 'default',
        className: ['data-[state=active]:before:bg-neutral-9'],
      },
      {
        color: 'neutral',
        variant: 'pills',
        className: [
          'data-[state=active]:text-white',
          'data-[state=active]:bg-neutral-9',
          'data-[state=active]:enabled:hover:bg-neutral-9',
        ],
      },

      // color primary
      {
        color: 'primary',
        variant: 'default',
        className: ['data-[state=active]:before:bg-primary-9'],
      },
      {
        color: 'primary',
        variant: 'pills',
        className: [
          'data-[state=active]:text-white',
          'data-[state=active]:bg-primary-9',
          'data-[state=active]:enabled:hover:bg-primary-9',
        ],
      },

      // color secondary
      {
        color: 'secondary',
        variant: 'default',
        className: ['data-[state=active]:before:bg-secondary-9'],
      },
      {
        color: 'secondary',
        variant: 'pills',
        className: [
          'data-[state=active]:text-white',
          'data-[state=active]:bg-secondary-9',
          'data-[state=active]:enabled:hover:bg-secondary-9',
        ],
      },

      // color info
      {
        color: 'info',
        variant: 'default',
        className: ['data-[state=active]:before:bg-info-9'],
      },
      {
        color: 'info',
        variant: 'pills',
        className: [
          'data-[state=active]:text-black',
          'data-[state=active]:bg-info-9',
          'data-[state=active]:enabled:hover:bg-info-9',
        ],
      },

      // color success
      {
        color: 'success',
        variant: 'default',
        className: ['data-[state=active]:before:bg-success-9'],
      },
      {
        color: 'success',
        variant: 'pills',
        className: [
          'data-[state=active]:text-white',
          'data-[state=active]:bg-success-9',
          'data-[state=active]:enabled:hover:bg-success-9',
        ],
      },

      // color warning
      {
        color: 'warning',
        variant: 'default',
        className: ['data-[state=active]:before:bg-warning-9'],
      },
      {
        color: 'warning',
        variant: 'pills',
        className: [
          'data-[state=active]:text-black',
          'data-[state=active]:bg-warning-9',
          'data-[state=active]:enabled:hover:bg-warning-9',
        ],
      },

      // color error
      {
        color: 'error',
        variant: 'default',
        className: ['data-[state=active]:before:bg-error-9'],
      },
      {
        color: 'error',
        variant: 'pills',
        className: [
          'data-[state=active]:text-white',
          'data-[state=active]:bg-error-9',
          'data-[state=active]:enabled:hover:bg-error-9',
        ],
      },
    ],
  }
);
