import type { LoaderProps, LoaderStyle } from './loader.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { loaderStyles } from './loader.styles';

export const defaultProps: Partial<LoaderProps> = {
  variant: 'oval',
  size: 'md',
  color: 'primary',
  speed: 800,
  label: 'Loading...',
};

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(function Loader(props, ref) {
  const { variant, size, color, speed, label, style, className, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  const loaderStyle: LoaderStyle = {
    '--loader-animation-duration': `${speed}ms`,
  };

  return (
    <div
      {...others}
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
