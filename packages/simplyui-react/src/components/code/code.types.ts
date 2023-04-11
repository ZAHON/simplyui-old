import type { HTMLAttributes, CSSProperties, ReactNode } from 'react';
import type { Color, Size, Rounded } from '../../types';

export interface CodeProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the code.
   */
  children: ReactNode;

  /**
   * If added, the code will have decorative border. Color of this decorative border border is determined by `backgroundColor` property.
   */
  accent?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * The font size of the text inside code.
   * @default "md"
   */
  size?: 'inherit' | Size;

  /**
   * The color of the text inside code.
   * @default "neutral"
   */
  color?: Color;

  /**
   * The background color of the code.
   * @default "neutral"
   */
  backgroundColor?: Color;

  /**
   * The border radius value of the code.
   * @default "xs"
   */
  rounded?: Rounded;

  /**
   * Override code default styles.
   */
  className?: string;

  /**
   * Override code default inline style.
   */
  style?: CSSProperties;
}
