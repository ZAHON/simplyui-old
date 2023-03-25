import type { HTMLAttributes, ReactNode } from 'react';

export interface FieldDescriptionProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The content of the field description.
   */
  children: ReactNode;

  /**
   * If true, the field description will be disabled and have "data-disabled" attribute.
   * @default false
   */
  disabled?: boolean;

  /**
   * Override field description default styles.
   */
  className?: string;
}
