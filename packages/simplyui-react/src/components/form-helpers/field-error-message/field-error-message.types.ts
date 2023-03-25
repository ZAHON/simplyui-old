import type { HTMLAttributes, ReactNode } from 'react';

export interface FieldErrorMessageProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'aria-live'> {
  /**
   * The content of the field error message.
   */
  children: ReactNode;

  /**
   * If true, the field error message will be disabled and have "data-disabled" attribute.
   * @default false
   */
  disabled?: boolean;

  /**
   * Override field error message default styles.
   */
  className?: string;
}
