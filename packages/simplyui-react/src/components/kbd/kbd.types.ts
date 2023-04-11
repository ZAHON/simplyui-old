import type { HTMLAttributes, CSSProperties, ReactNode } from 'react';
import type { Size, Rounded } from '../../types';

export interface KbdProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the kbd.
   */
  children: ReactNode;

  /**
   * The font size of the kbd content.
   * @default "md"
   */
  size?: 'inherit' | Size;

  /**
   * The value of the kbd border radius.
   * @default "xs"
   */
  rounded?: Rounded;

  /**
   * Override kbd default styles.
   */
  className?: string;

  /**
   * Override kbd default inline style.
   */
  style?: CSSProperties;
}
