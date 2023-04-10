import type { ButtonHTMLAttributes, CSSProperties } from 'react';
import type { Size, Rounded, Color } from '../../types';

type HTMLAttributesToOmit = 'children' | 'type';

export interface CloseButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, HTMLAttributesToOmit> {
  /**
   * The type of the icon used inside close button.
   * @default "x-mark"
   */
  iconType?: 'x-mark' | 'x-circle';

  /**
   * The size of the icon used inside close button. This property override icon size determined by `size` property.
   */
  iconSize?: number | string;

  /**
   * The size of the close button.
   * @default "md"
   */
  size?: Size;

  /**
   * The variant of the close button.
   * @default "subtle"
   */
  variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'transparent';

  /**
   * The color of the close button.
   * @default "neutral"
   */
  color?: Color;

  /**
   * The border radius value of the close button. This property override border radius determined by `size` property.
   */
  rounded?: Rounded;

  /**
   * If `true`, the close button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Override close button default styles.
   */
  className?: string;

  /**
   * Override close button default inline style.
   */
  style?: CSSProperties;
}
