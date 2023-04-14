import type { ButtonLoaderProps } from './button-loader.types';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { Loader } from '../../loader/loader';
import { buttonLoaderStyles } from './button-loader.styles';

const defaultProps: Partial<ButtonLoaderProps> = {
  color: 'currentColor',
};

export function ButtonLoader(props: ButtonLoaderProps) {
  const { buttonSize, className, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Loader {...others} className={twMerge(buttonLoaderStyles({ size: buttonSize }), className)} />
  );
}
