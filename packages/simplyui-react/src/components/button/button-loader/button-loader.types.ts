import type { LoaderProps } from '../../loader/loader.types';
import type { ButtonProps } from '../button.types';

export interface ButtonLoaderProps extends LoaderProps {
  /**
   * The size of the parent Button component.
   */
  buttonSize?: ButtonProps['size'];
}
