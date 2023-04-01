import type { LoaderProps, LoaderStyle } from './loader.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { loaderStyles } from './loader.styles';

export const defaultProps: Partial<LoaderProps> = {
  variant: 'oval',
  size: 'md',
  color: 'primary',
  speed: 750,
  reduceSpeed: 1500,
  label: 'Loading...',
};

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(function Loader(props, ref) {
  const { variant, size, color, speed, reduceSpeed, label, style, className, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  const loaderStyle: LoaderStyle = {
    '--loader-animation-duration': `${speed}ms`,
    '--loader-reduce-animation-duration': `${reduceSpeed}ms`,
  };

  return (
    <div
      {...others}
      key={variant}
      ref={ref}
      role="status"
      style={{ ...style, ...loaderStyle }}
      className={twMerge(loaderStyles({ variant, size, color }), className)}
    >
      <span className="sr-only">{label}</span>
    </div>
  );
});

Loader.displayName = 'Loader';
