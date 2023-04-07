import type { ButtonHTMLAttributes, CSSProperties } from 'react';
import type { Size, Rounded, Color } from '../../types';

type HTMLAttributesToOmit = 'className' | 'style' | 'type' | 'children';

export interface BurgerProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, HTMLAttributesToOmit> {
  /**
   * A burger state.
   */
  opened: boolean;

  /**
   * If `true`, the burger will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the burger icon bars will be rounded.
   * @default true
   */
  roundedIconBars?: boolean;

  /**
   * The size of the burger.
   * @default "md"
   */
  size?: Size;

  /**
   * The color of the burger icon bars.
   * @default "text"
   */
  color?: 'text' | Color;

  /**
   * The border radius value of the burger root element. This property override border radius value provided by `size` proporty.
   * @default undefined
   */
  rounded?: Rounded;

  /**
   * The transition duration in ms.
   * @default 300
   */
  transitionDuration?: number;

  /**
   * Override burger root element default styles.
   */
  rootClassName?: string;

  /**
   * Override burger root element default inline style.
   */
  rootStyle?: CSSProperties;

  /**
   * Override burger icon element default styles.
   */
  iconClassName?: string;

  /**
   * Override burger icon element default inline style.
   */
  iconStyle?: CSSProperties;
}

export interface BurgerRootStyle extends CSSProperties {
  '--burger-transition-duration': string;
}
