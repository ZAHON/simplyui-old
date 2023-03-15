import type { ButtonLoaderProps } from './button-loader.types';
import { twMerge } from 'tailwind-merge';
import { Loader } from '../../loader';
import { buttonLoaderStyles } from './button-loader.styles';

export function ButtonLoader(props: ButtonLoaderProps) {
  const { size, loaderProps } = props;

  return (
    <Loader
      label={loaderProps?.label}
      variant={loaderProps?.variant}
      size={loaderProps?.size}
      color={loaderProps?.color || 'currentColor'}
      className={twMerge(buttonLoaderStyles({ size }), loaderProps?.className)}
    />
  );
}
