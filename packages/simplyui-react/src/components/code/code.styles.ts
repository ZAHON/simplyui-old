import { cva } from 'class-variance-authority';

export const codeStyles = cva(
  ['inline-block', , 'py-1', 'px-2', 'font-mono', 'whitespace-nowrap'],
  {
    variants: {
      size: {
        inherit: [''],
        xs: ['text-xs'],
        sm: ['text-sm'],
        md: ['text-base'],
        lg: ['text-lg'],
        xl: ['text-xl'],
      },
      color: {
        text: ['text-layout-text'],
        neutral: ['text-neutral-11'],
        primary: ['text-primary-11'],
        secondary: ['text-secondary-11'],
        info: ['text-info-11'],
        success: ['text-success-11'],
        warning: ['text-warning-11'],
        error: ['text-error-11'],
      },
      backgroundColor: {
        neutral: ['bg-neutral-3'],
        primary: ['bg-primary-3'],
        secondary: ['bg-secondary-3'],
        info: ['bg-info-3'],
        success: ['bg-success-3'],
        warning: ['bg-warning-3'],
        error: ['bg-error-3'],
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
