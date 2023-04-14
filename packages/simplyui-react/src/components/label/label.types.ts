import type { LabelHTMLAttributes, ReactNode, CSSProperties } from 'react';
import type { Size } from '../../types';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * The id of the element the label is associated with.
   */
  htmlFor?: string;

  /**
   * The content of the label.
   */
  children: ReactNode;

  /**
   * If true, the label will be disabled and have "data-disabled" attribute.
   * @default false
   */
  disabled?: boolean;

  /**
   * The content of the required indicator.
   * @default " *"
   */
  requiredIndicator?: ReactNode;

  /**
   * If true, add required indicator after label content.
   * @default false
   */
  withRequiredIndicator?: boolean;

  /**
   * The font size of the text inside label.
   * @default "md"
   */
  size?: Size;

  /**
   * Override label default styles.
   */
  className?: string;

  /**
   * Override label default inline style.
   */
  style?: CSSProperties;

  /**
   * Override label required indicator default styles.
   */
  requiredIndicatorClassName?: string;

  /**
   * Override label required indicator default inline style.
   */
  requiredIndicatorStyle?: CSSProperties;
}
