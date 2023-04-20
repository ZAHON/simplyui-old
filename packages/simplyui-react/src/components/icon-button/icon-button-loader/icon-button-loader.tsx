import type { IconButtonLoaderProps } from './icon-button-loader.types';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { Loader } from '../../loader/loader';
import { iconButtonStyles } from './icon-button-loader.styles';

const defaultProps: Partial<IconButtonLoaderProps> = {
  color: 'currentColor',
};

export function IconButtonLoader(props: IconButtonLoaderProps) {
  const { iconButtonSize, className, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Loader
      className={twMerge(iconButtonStyles({ size: iconButtonSize }), className)}
      {...others}
    />
  );
}
