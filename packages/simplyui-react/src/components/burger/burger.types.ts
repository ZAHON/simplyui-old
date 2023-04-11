import type { ButtonHTMLAttributes, CSSProperties } from 'react';
import type { Size, Rounded, Color } from '../../types';

type HTMLAttributesToOmit = 'type' | 'children';

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
   *
   * A number of bars in burger icon.
   * @default 3
   */
  bars?: 2 | 3;

  /**
   * If `true`, the burger icon bars will be rounded.
   * @default true
   */
  roundedBars?: boolean;

  /**
   * The size of the burger.
   * @default "md"
   */
  size?: Size;

  /**
   * The size of the burger icon. This property override icon size determined by `size` property.
   */
  iconSize?: Size;

  /**
   * The color of the burger.
   * @default "neutral"
   */
  color?: Color;

  /**
   * The variant of the burger.
   * @default "subtle"
   */
  variant?: 'subtle' | 'transparent';

  /**
   * The border radius value of the burger. This property override border radius determined by `size` property.
   * @default undefined
   */
  rounded?: Rounded;

  /**
   * The transition duration of burger icon when `opened` property change in ms.
   * @default 300
   */
  transitionDuration?: number;

  /**
   * Override burger default styles.
   */
  className?: string;

  /**
   * Override burger default inline style.
   */
  style?: CSSProperties;

  /**
   * Override burger icon default styles.
   */
  iconClassName?: string;

  /**
   * Override burger icon default inline style.
   */
  iconStyle?: CSSProperties;
}
