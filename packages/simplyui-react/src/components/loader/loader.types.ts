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
   * The color of the loader.
   * @default "primary"
   */
  color?: 'currentColor' | Color;

  /**
   * The speed of the loader animation in ms. On browsers that support `prefers-reduced-motion`, and where the user has not explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), this value will be used as the duration of the animation.
   * @default 750
   */
  speed?: number;

  /**
   * The reduce speed of the loader animation in ms. On browsers that support `prefers-reduced-motion`, and where the user has explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: reduce`), this value will be used as the duration of the animation.
   * @default 1500
   */
  reduceSpeed?: number;

  /**
   * For accessibility, it is important to add a fallback loading text. This text will be visible to screen readers.
   * @default "Loading..."
   */
  label?: string;

  /**
   * Override loader default styles.
   */
  className?: string;
}

export interface LoaderStyle extends CSSProperties {
  '--loader-animation-duration'?: string;
  '--loader-reduce-animation-duration'?: string;
}
