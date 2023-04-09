import type { ActionIconLoaderProps } from './action-icon-loader.types';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils/applay-component-default-props';
import { Loader } from '../../loader/loader';
import { actionIconStyles } from './action-icon-loader.styles';

const defaultProps: Partial<ActionIconLoaderProps> = {
  color: 'currentColor',
};

export function ActionIconLoader(props: ActionIconLoaderProps) {
  const { settings, className, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Loader {...others} className={twMerge(actionIconStyles({ size: settings.size }), className)} />
  );
}
