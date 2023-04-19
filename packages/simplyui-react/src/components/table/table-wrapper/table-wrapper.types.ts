import type { HTMLAttributes, ReactNode } from 'react';

export interface TableWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the table wrapper - Table component.
   */
  children: ReactNode;
}
