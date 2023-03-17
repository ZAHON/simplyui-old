import { cva } from 'class-variance-authority';

export const switchThumbstyles = cva(
  [
    'absolute',
    'rounded-full',
    'top-0',
    'left-0',

    'flex',
    'justify-center',
    'items-center',

    'motion-safe:transition-transform',
    'motion-safe:duration-150',
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
        filled: ['translate-x-1', 'translate-y-1', 'bg-white', 'text-black'],
        outline: [
          'translate-x-0.5',
          'translate-y-0.5',

          'text-black',
          'bg-neutral-light-6',
          'data-[state=checked]:bg-white',

          'dark:text-white',
          'dark:bg-neutral-dark-6',
          'dark:data-[state=checked]:bg-white',
          'dark:data-[state=checked]:text-black',
        ],
      },
      size: {
        xs: ['h-3', 'w-3'],
        sm: ['h-4', 'w-4'],
        md: ['h-5', 'w-5'],
        lg: ['h-6', 'w-6'],
        xl: ['h-7', 'w-7'],
      },
    },
    compoundVariants: [
      // size xs
      {
        size: 'xs',
        variant: 'filled',
        className: ['data-[state=checked]:translate-x-4'],
      },
      {
        size: 'xs',
        variant: 'outline',
        className: ['data-[state=checked]:translate-x-3.5'],
      },

      // size sm
      {
        size: 'sm',
        variant: 'filled',
        className: ['data-[state=checked]:translate-x-5'],
      },
      {
        size: 'sm',
        variant: 'outline',
        className: ['data-[state=checked]:translate-x-[1.125rem]'],
      },

      // size md
      {
        size: 'md',
        variant: 'filled',
        className: ['data-[state=checked]:translate-x-5'],
      },
      {
        size: 'md',
        variant: 'outline',
        className: ['data-[state=checked]:translate-x-[1.125rem]'],
      },

      // size lg
      {
        size: 'lg',
        variant: 'filled',
        className: ['data-[state=checked]:translate-x-7'],
      },
      {
        size: 'lg',
        variant: 'outline',
        className: ['data-[state=checked]:translate-x-[1.625rem]'],
      },

      // size xl
      {
        size: 'xl',
        variant: 'filled',
        className: ['data-[state=checked]:translate-x-8'],
      },
      {
        size: 'xl',
        variant: 'outline',
        className: ['data-[state=checked]:translate-x-[1.875rem]'],
      },
    ],
  }
);
