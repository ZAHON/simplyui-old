import type { HTMLAttributes, CSSProperties } from 'react';
import type { Size, Color } from '../../types';

export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The variant of the loader.
   * @default "oval"
   */
  variant?: 'border' | 'oval' | 'spinner';

  /**
   * The size of the loader.
   * @default "md"
   */
  size?: Size;

  /**
   * The custom size of the loader. This property override loader size determined by `size` property.
   */
  loaderSize?: number | string;

  /**
   * The custom thickness of the loader. This property override loader thickness determined by `size` property.
   */
  loaderThickness?: number | string;

  /**
   * The color of the loader.
   * @default "primary"
   */
  color?: 'currentColor' | Color;

  /**
   * The safe speed of the loader animation in ms. On browsers that support `prefers-reduced-motion`, and where the user has not explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), this value will be used as the duration of the animation.
   * @default 750
   */
  speedSafe?: number;

  /**
   * The reduce speed of the loader animation in ms. On browsers that support `prefers-reduced-motion`, and where the user has explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: reduce`), this value will be used as the duration of the animation.
   * @default 1500
   */
  speedReduce?: number;

  /**
   * For accessibility, it is important to add a fallback loading text. This text will be visible to screen readers.
   * @default "Loading..."
   */
  label?: string;

  /**
   * Override loader default styles.
   */
  className?: string;

  /**
   * Override loader default inline style.
   */
  style?: CSSProperties;
}

export interface LoaderStyle extends CSSProperties {
  '--loader-size'?: number | string;
  '--loader-thickness'?: number | string;
  '--loader-safe-animation-duration'?: string;
  '--loader-reduce-animation-duration'?: string;
}
