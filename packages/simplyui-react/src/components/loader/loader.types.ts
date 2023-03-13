import type { HTMLAttributes, CSSProperties } from 'react';
import type { Size, Color, BrightColor, GrayColor } from '../../types';

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The variant of the Loader.
   * @default "oval"
   */
  variant?: 'border' | 'oval' | 'spinner';

  /**
   * The size of the Loader.
   * @default "md"
   */
  size?: Size;

  /**
   * The color of the Loader.
   * @default "blue"
   */
  color?: 'currentColor' | Color | BrightColor | GrayColor;

  /**
   * The speed of the Loader in ms.
   * @default 800
   */
  speed?: number;

  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   * @default "Loading..."
   */
  label?: string;

  /**
   * Override Loader default styles.
   *
   * If you want to use a custom size add this CSS variables.
   * @example
   * ```jsx
   * <Spinner className="[--loader-size:100px] [--loader-border:10px]"/>
   * ```
   */
  className?: string;
}

export interface LoaderStyle extends CSSProperties {
  '--loader-animation-duration'?: string;
}
