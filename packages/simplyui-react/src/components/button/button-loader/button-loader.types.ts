import type { LoaderProps } from '../../loader/loader.types';
import type { ButtonProps } from '../button.types';

export interface ButtonLoaderProps extends LoaderProps {
  buttonSize?: ButtonProps['size'];
}
