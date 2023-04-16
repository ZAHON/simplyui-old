import type { HTMLAttributes, CSSProperties } from 'react';

export interface LabelRequiredIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Override required indicator default styles.
   */
  className?: string;

  /**
   * Override required indicator default inline style.
   */
  style?: CSSProperties;
}
