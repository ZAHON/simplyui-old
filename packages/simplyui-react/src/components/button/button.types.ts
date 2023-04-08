import type { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';
import type { ButtonLoaderProps } from './button-loader/button-loader.types';
import type { Size, Rounded, Color } from '../../types';

type HTMLAttributesToOmit = 'className' | 'style';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, HTMLAttributesToOmit> {
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
   * If `true`, the button will have 100% width of his parent.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * The border radius value of the button. This property override border radius value provided by `size` proporty.
   */
  rounded?: Exclude<Rounded, 'squared'>;

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
  loaderProps?: Omit<ButtonLoaderProps, 'settings'>;

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
   * If added, the button will show an icon before the button's content.
   */
  leftIcon?: ReactNode;

  /**
   * If added, the button will show an icon after the button's content.
   */
  rightIcon?: ReactNode;

  /**
   * Override button default styles.
   */
  className?: string;

  /**
   * Override button default inline style.
   */
  style?: CSSProperties;

  /**
   * Override button left icon wrapper default styles.
   */
  leftIconClassName?: string;

  /**
   * Override button left icon wrapper default inline style.
   */
  leftIconStyle?: CSSProperties;

  /**
   * Override button right icon wrapper default styles.
   */
  rightIconClassName?: string;

  /**
   * Override button right icon wrapper default inline style.
   */
  rightIconStyle?: CSSProperties;
}
