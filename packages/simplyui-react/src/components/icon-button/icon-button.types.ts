import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { IconButtonLoaderProps } from './icon-button-loader/icon-button-loader.types';
import type { Size, Rounded, Color } from '../../types';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The icon to be used in the icon button.
   */
  children: ReactNode;

  /**
   * The size of the icon button.
   * @default "md"
   */
  size?: Size;

  /**
   * The variant of the icon button.
   * @default "subtle"
   */
  variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'transparent';

  /**
   * The color of the icon button.
   * @default "neutral"
   */
  color?: Color;

  /**
   * The outline color when the icon button is focused.
   * @default "primary"
   */
  focusOutlineColor?: Color;

  /**
   * The border radius value of the icon button. This property override border radius value provided by `size` proporty.
   */
  rounded?: Rounded;

  /**
   * The type of the button.
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * If `true`, the icon button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the icon button will show a loader.
   * @default false
   */
  loading?: boolean;

  /**
   * Replace the Loader component when `loading` is set to `true`.
   */
  loader?: ReactNode;

  /**
   * Properties spread to Loader component.
   */
  loaderProps?: Omit<IconButtonLoaderProps, 'iconButtonSize'>;
}
