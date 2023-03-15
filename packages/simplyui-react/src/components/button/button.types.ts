import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { Size, Rounded, Color } from '../../types';
import type { LoaderProps } from '../loader/loader.types';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the Button.
   */
  children?: ReactNode;

  /**
   * The size of the Button.
   * @default "md"
   */
  size?: Size;

  /**
   * The variant of the Button.
   * @default "filled"
   */
  variant?: 'filled' | 'light' | 'outline' | 'subtle';

  /**
   * The color of the Button.
   * @default "primary"
   */
  color?: Color;

  /**
   * Sets Button width to 100% of parent element.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Sets the border radius of the Button, overwrites the value specified by size prop.
   * @default undefined
   */
  rounded?: Rounded;

  /**
   * Set text-transform to uppercase.
   * @default false
   */
  uppercase?: boolean;

  /**
   * The type of the Button.
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * If true, the Button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, the Button will show a Loader.
   * @default false
   */
  loading?: boolean;

  /**
   * The label to show in the Button when loading is true If text is passed override the Button content.
   * @default undefined
   */
  loadingText?: string;

  /**
   * The Loader position relative to Button content.
   * @default "left"
   */
  loaderPosition?: 'left' | 'right';

  /**
   * The Props spread to Loader component.
   * @default undefined
   */
  loaderProps?: LoaderProps;

  /**
   * If added, the Button will show an icon before the Button's content.
   * @default undefined
   */
  leftIcon?: ReactNode;

  /**
   * If added, the Button will show an icon after the Button's content.
   * @default undefined
   */
  rightIcon?: ReactNode;

  /**
   * Override Button default styles.
   */
  className?: string;
}
