import type { LabelHTMLAttributes, ReactNode } from 'react';
import type { LabelRequiredIndicatorProps } from './label-required-indicator/label-required-indicator.types';
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
   * If true, the label will look like disabled and have `data-disabled` attribute, also required indicator element will have `data-disabled` attribute.
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
   * Props to forward to the required indicator element.
   */
  requiredIndicatorProps?: Omit<LabelRequiredIndicatorProps, 'children'>;
}
