import type { HTMLAttributes, CSSProperties, ReactNode } from 'react';
import type { Size } from '../../types';

export interface FieldDescriptionProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The content of the field description.
   */
  children: ReactNode;

  /**
   * If true, the field description will have `data-disabled` attribute.
   * @default false
   */
  disabled?: boolean;

  /**
   * The font size of the text inside field description.
   * @default "md"
   */
  size?: Size;

  /**
   * Override field description default styles.
   */
  className?: string;

  /**
   * Override field description default inline style.
   */
  style?: CSSProperties;
}
