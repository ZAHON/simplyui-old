import type { HTMLAttributes, CSSProperties } from 'react';
import type { Rounded } from '../../types';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the skeleton will be visible.
   * @default true
   */
  visible?: boolean;

  /**
   * If `true`, the skeleton will be animated.
   * @default true
   */
  animated?: boolean;

  /**
   * If `true`, the skeleton will take the width of it's children.
   * @default false
   */
  fitContent?: boolean;

  /**
   * The safe animation duration in ms. On browsers that support `prefers-reduced-motion`, and where the user has not explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: no-preference`), this value will be used as the duration of the animation.
   * @default 1500
   */
  speedSafe?: number;

  /**
   * The reduce animation duration in ms. On browsers that support `prefers-reduced-motion`, and where the user has explicitly signaled that they’d prefer reduced motion (i.e. where `prefers-reduced-motion: reduce`), this value will be used as the duration of the animation.
   * @default 3000
   */
  speedReduce?: number;

  /**
   * The value of the skeleton border radius.
   */
  rounded?: Rounded;

  /**
   * Override skeleton default styles.
   */
  className?: string;

  /**
   * Override skeleton default inline style.
   */
  style?: CSSProperties;
}

export interface SkeletonStyle extends CSSProperties {
  '--skeleton-safe-animation-duration': string;
  '--skeleton-reduce-animation-duration': string;
}
