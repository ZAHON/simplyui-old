import type { HTMLAttributes, CSSProperties, ReactNode } from 'react';
import type { Size, Rounded } from '../../types';

export interface KbdProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the kbd.
   */
  children: ReactNode;

  /**
   * The size of the kbd.
   * @default "sm"
   */
  size?: Size;

  /**
   * The value of the kbd border radius.
   * @default xs
   */
  rounded?: Exclude<Rounded, '2xl' | '3xl'>;

  /**
   * Override kbd default styles.
   */
  className?: string;

  /**
   * Override kbd default inline style.
   */
  style?: CSSProperties;
}
