import type { HTMLAttributes, CSSProperties, ReactNode } from 'react';
import type { Color, Size, Rounded } from '../../types';

export interface CodeProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the code.
   */
  children: ReactNode;

  /**
   * The font size of the text inside code.
   * @default "sm"
   */
  size?: 'inherit' | Size;

  /**
   * The color of the text inside code.
   * @default "text"
   */
  color?: 'text' | Color;

  /**
   * The background color of the code.
   * @default "neutral"
   */
  backgroundColor?: Color;

  /**
   * The border radius value of the code.
   * @default "xs"
   */
  rounded?: Exclude<Rounded, '2xl' | '3xl' | 'squared'>;

  /**
   * Override code default styles.
   */
  className?: string;

  /**
   * Override code default inline style.
   */
  style?: CSSProperties;
}
