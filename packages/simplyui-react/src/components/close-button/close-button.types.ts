import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { Size, Rounded, Color } from '../../types';

export interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * A label that describes the close button content.
   */
  'aria-label': string;

  /**
   * Replace default icon.
   */
  children?: ReactNode;

  /**
   * The width and weight of the X icon.
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
   * @default "primary"
   */
  color?: Color;

  /**
   * Sets the border radius of the close button, overwrites the value specified by size prop.
   * @default undefined
   */
  rounded?: Rounded;

  /**
   * The type of the close button.
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * If true, the close button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Override close button default styles.
   */
  className?: string;
}
