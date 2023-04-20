import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonLoaderProps } from './button-loader/button-loader.types';
import type { Size, Rounded, Color } from '../../types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the button.
   */
  children: ReactNode;

  /**
   * The size of the button.
   * @default "md"
   */
  size?: Size;

  /**
   * The variant of the button.
   * @default "filled"
   */
  variant?: 'filled' | 'light' | 'outline' | 'subtle';

  /**
   * The color of the button.
   * @default "primary"
   */
  color?: Color;

  /**
   * The outline color when the button is focused.
   * @default "primary"
   */
  focusOutlineColor?: Color;

  /**
   * If `true`, the button will have 100% width of his parent.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * The border radius value of the button. This property override border radius determined by `size` property.
   */
  rounded?: Rounded;

  /**
   * If `true`, the text inside button will be uppercase.
   * @default false
   */
  uppercase?: boolean;

  /**
   * If `true`, the button will show a loader.
   * @default false
   */
  loading?: boolean;

  /**
   * The content to show in the button when `loading` is `true`.
   */
  loadingContent?: ReactNode;

  /**
   * Replace the loader component when `loading` is set to `true`.
   */
  loader?: ReactNode;

  /**
   * Properties spread to loader component.
   */
  loaderProps?: Omit<ButtonLoaderProps, 'buttonSize'>;

  /**
   * The loader component position relative to button content
   * @default "left"
   */
  loaderPosition?: 'left' | 'right';

  /**
   * The type of the button.
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * If true, the button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If added, the button will show left section before the button's content.
   */
  leftSection?: ReactNode;

  /**
   * If added, the button will show right section after the button's content.
   */
  rightSection?: ReactNode;
}
