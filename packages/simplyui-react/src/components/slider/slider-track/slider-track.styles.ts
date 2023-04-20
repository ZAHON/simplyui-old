import { cva } from 'class-variance-authority';

export const sliderTrackStyles = cva(['bg-neutral-7', 'relative', 'grow', 'rounded-full'], {
  variants: {
    orientation: {
      horizontal: [''],
      vertical: [''],
    },
    size: {
      xs: [''],
      sm: [''],
      md: [''],
      lg: [''],
      xl: [''],
    },
  },
  compoundVariants: [
    // size xs
    {
      size: 'xs',
      orientation: 'horizontal',
      className: ['h-px'],
    },
    {
      size: 'xs',
      orientation: 'vertical',
      className: ['w-px'],
    },

    // size sm
    {
      size: 'sm',
      orientation: 'horizontal',
      className: ['h-0.5'],
    },
    {
      size: 'sm',
      orientation: 'vertical',
      className: ['w-0.5'],
    },

    // size md
    {
      size: 'md',
      orientation: 'horizontal',
      className: ['h-1'],
    },
    {
      size: 'md',
      orientation: 'vertical',
      className: ['w-1'],
    },

    // size lg
    {
      size: 'lg',
      orientation: 'horizontal',
      className: ['h-1.5'],
    },
    {
      size: 'lg',
      orientation: 'vertical',
      className: ['w-1.5'],
    },

    // size xl
    {
      size: 'xl',
      orientation: 'horizontal',
      className: ['h-2'],
    },
    {
      size: 'xl',
      orientation: 'vertical',
      className: ['w-2'],
    },
  ],
});
