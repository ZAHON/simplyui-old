import type { HTMLAttributes, CSSProperties, ReactNode } from 'react';
import type { Size } from '../../types';

export interface FieldErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The content of the field error message.
   */
  children: ReactNode;

  /**
   * If true, the field error message will have `data-disabled` attribute.
   * @default false
   */
  disabled?: boolean;

  /**
   * The font size of the text inside field error message.
   * @default "md"
   */
  size?: Size;

  /**
   * Override field error message default styles.
   */
  className?: string;

  /**
   * Override field error message default inline style.
   */
  style?: CSSProperties;
}
