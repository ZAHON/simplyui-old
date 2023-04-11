import type { HTMLAttributes, CSSProperties } from 'react';
import type { Size, Color } from '../../../types';

export interface BurgerIconProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A burger icon state.
   */
  opened: boolean;

  /**
   * A number of bars in burger icon.
   */
  bars?: 2 | 3;

  /**
   * If `true`, the burger icon bars will be rounded.
   */
  roundedBars?: boolean;

  /**
   * The size of the burger icon.
   */
  size?: Size;

  /**
   * Override icon size determined by `size` property.
   */
  iconSize?: Size;

  /**
   * The color of the burger icon.
   */
  color?: Color;

  /**
   * The transition duration of burger icon when state change in ms.
   */
  transitionDuration?: number;

  /**
   * Override burger icon default styles.
   */
  className?: string;

  /**
   * Override burger icon default inline style.
   */
  style?: CSSProperties;
}

export interface BurgerIconStyle extends CSSProperties {
  '--burger-icon-transition-duration': string;
}
