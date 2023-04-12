import { cva } from 'class-variance-authority';

export const skeletonStyles = cva(
  [
    'relative',
    'bg-transparent',

    '[&>*]:data-[visible]:invisible',

    'data-[visible]:select-none',
    'data-[visible]:pointer-events-none',
    'data-[visible]:overflow-hidden',

    'data-[visible]:before:content-[""]',
    'data-[visible]:before:absolute',
    'data-[visible]:before:inset-0',
    'data-[visible]:before:bg-neutral-4',

    'data-[visible]:after:content-[""]',
    'data-[visible]:after:absolute',
    'data-[visible]:after:inset-0',
    'data-[visible]:after:bg-neutral-6',

    'data-[animated]:after:animate-skeleton-fade',

    'motion-safe:[--skeleton-animation-duration:var(--skeleton-safe-animation-duration)]',
    'motion-reduce:[--skeleton-animation-duration:var(--skeleton-reduce-animation-duration)]',
  ],
  {
    variants: {
      fitContent: {
        true: ['w-fit'],
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
    },
  }
);
