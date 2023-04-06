import { cva } from 'class-variance-authority';

export const kbdStyles = cva(
  [
    'inline-flex',
    'justify-center',
    'items-center',
    'py-1',
    'px-2',
    'font-mono',
    'text-layout-text',
    'bg-layout-background',
    'shadow-kbd',
  ],
  {
    variants: {
      size: {
        xs: ['text-xs'],
        sm: ['text-sm'],
        md: ['text-base'],
        lg: ['text-lg'],
        xl: ['text-xl'],
      },
      rounded: {
        none: ['rounded-none'],
        xs: ['rounded-xs'],
        sm: ['rounded-sm'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
        xl: ['rounded-xl'],
        squared: ['rounded-squared'],
        full: ['rounded-full'],
      },
    },
  }
);
