import type { LoaderProps } from '../../loader/loader.types';
import type { IconButtonProps } from '../icon-button.types';

export interface IconButtonLoaderProps extends LoaderProps {
  /**
   * The size of the icon button parent element.
   */
  iconButtonSize: IconButtonProps['size'];
}
