import type { LabelHTMLAttributes, ReactNode } from 'react';
import type { Size } from '../../../types';

export interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * The id of the element the field label is associated with.
   */
  htmlFor: string;

  /**
   * The content of the field label.
   */
  children: ReactNode;

  /**
   * If true, the field label will be disabled and have "data-disabled" attribute.
   * @default false
   */
  disabled?: boolean;

  /**
   * The content of the required indicator.
   * @default " *"
   */
  requiredIndicator?: ReactNode;

  /**
   * If true, add required indicator after field label content.
   * @default false
   */
  withRequiredIndicator?: boolean;

  /**
   * The size of the field label.
   * @default "md"
   */
  size?: Size;

  /**
   * Override field label default styles.
   */
  className?: string;

  /**
   * Override required indicator default styles.
   */
  requiredIndicatorClassName?: string;
}
