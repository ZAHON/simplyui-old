import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import type { ActionIconLoaderProps } from './action-icon-loader/action-icon-loader.types';
import type { Size, Rounded, Color } from '../../types';

export interface ActionIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The icon to be used in the button.
   */
  children: ReactNode;

  /**
   * The size of the action icon.
   * @default "md"
   */
  size?: Size;

  /**
   * The variant of the action icon.
   * @default "subtle"
   */
  variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'transparent';

  /**
   * The color of the action icon.
   * @default "neutral"
   */
  color?: Color;

  /**
   * The border radius value of the action icon. This property override border radius value provided by `size` proporty.
   */
  rounded?: Extract<Rounded, 'none' | 'squared' | 'full'>;

  /**
   * The type of the button.
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * If `true`, the action icon will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the action icon will show a loader.
   * @default false
   */
  loading?: boolean;

  /**
   * Replace the loader component when `loading` is set to `true`.
   */
  loader?: ReactNode;

  /**
   * Properties spread to loader component.
   */
  loaderProps?: Omit<ActionIconLoaderProps, 'settings'>;

  /**
   * Override action icon default styles.
   */
  className?: string;

  /**
   * Override action icon default inline style.
   */
  style?: CSSProperties;
}
