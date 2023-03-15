import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { Size, Rounded, Color } from '../../types';
import type { LoaderProps } from '../loader/loader.types';

export interface ActionIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * A label that describes the ActionIcon content.
   */
  'aria-label': string;

  /**
   * The icon to be used in the ActionIcon.
   */
  children?: ReactNode;

  /**
   * The size of the ActionIcon.
   * @default "md"
   */
  size?: Size;

  /**
   * The variant of the ActionIcon.
   * @default "subtle"
   */
  variant?: 'filled' | 'light' | 'outline' | 'subtle' | 'transparent';

  /**
   * The color of the ActionIcon.
   * @default "primary"
   */
  color?: Color;

  /**
   * Sets the border radius of the ActionIcon, overwrites the value specified by size prop.
   * @default undefined
   */
  rounded?: Rounded;

  /**
   * The type of the ActionIcon.
   * @default "button"
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * If true, the ActionIcon will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, the ActionIcon will show a Loader.
   * @default false
   */
  loading?: boolean;

  /**
   * The Props spread to Loader component.
   * @default undefined
   */
  loaderProps?: LoaderProps;

  /**
   * Override ActionIcon default styles.
   */
  className?: string;
}
