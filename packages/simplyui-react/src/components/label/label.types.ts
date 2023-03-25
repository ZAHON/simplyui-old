import type { LabelHTMLAttributes, ReactNode } from 'react';
import type { Size, Color } from '../../types';

export interface LabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'className'> {
  /**
   * The id of the element the label is associated with.
   */
  htmlFor: string;

  /**
   * The content of the label.
   */
  children: ReactNode;

  description?: ReactNode;

  disabled?: boolean;

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
   * The color of the label.
   * @default "default"
   */
  color?: Exclude<Color, 'neutral'> | 'default';

  rootClassName?: string;

  /**
   * Override label default styles.
   */
  labelClassName?: string;

  /**
   * Override label asterisk default styles.
   */
  asteriskClassName?: string;

  descriptionClassName?: string;
}
