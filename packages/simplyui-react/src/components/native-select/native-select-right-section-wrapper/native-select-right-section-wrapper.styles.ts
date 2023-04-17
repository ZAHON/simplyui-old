import { cva } from 'class-variance-authority';

export const nativeSelectRightSectionWrapperStyles = cva(
  [
    'absolute',
    'top-0',
    'right-0',
    'flex',
    'justify-center',
    'items-center',
    'pointer-events-none',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'data-[disabled]:opacity-40',
  ],
  {
    variants: {
      size: {
        xs: ['h-6', 'w-6'],
        sm: ['h-8', 'w-8'],
        md: ['h-10', 'w-10'],
        lg: ['h-12', 'w-12'],
        xl: ['h-14', 'w-14'],
      },
    },
  }
);
