import type { LabelHTMLAttributes } from 'react';
import type { Size } from '../../types';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * The id of the element the label is associated with.
   */
  htmlFor: string;

  /**
   * The content of the label.
   */
  children: string;

  /**
   * If true, add asterisk after label content.
   * @default false
   */
  withAsterisk?: boolean;

  /**
   * The size of the label.
   * @default "md"
   */
  size?: Size;

  /**
   * Override label default styles.
   */
  className?: string;

  /**
   * Override label asterisk default styles.
   */
  asteriskClassName?: string;
}
