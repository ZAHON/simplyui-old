import type { LoaderProps } from '../../loader/loader.types';
import type { ActionIconProps } from '../action-icon.types';

export interface ActionIconLoaderProps extends Omit<LoaderProps, 'size'> {
  settings: {
    size: ActionIconProps['size'];
  };
}
