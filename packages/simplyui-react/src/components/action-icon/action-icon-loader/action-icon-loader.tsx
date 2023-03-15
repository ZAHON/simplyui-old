import type { ActionIconLoaderProps } from './action-icon-loader.types';
import { twMerge } from 'tailwind-merge';
import { Loader } from '../../loader/loader';
import { actionIconLoaderStyles } from './action-icon-loader.styles';

export function ActionIconLoader(props: ActionIconLoaderProps) {
  const { size, loaderProps } = props;

  return (
    <Loader
      label={loaderProps?.label}
      variant={loaderProps?.variant}
      size={loaderProps?.size}
      color={loaderProps?.color || 'currentColor'}
      className={twMerge(actionIconLoaderStyles({ size }), loaderProps?.className)}
    />
  );
}
