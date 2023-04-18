import type { HTMLAttributes, ReactNode } from 'react';
import type { Size } from '../../../types';

export interface TabsPanelProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the panel.
   */
  children: ReactNode;

  /**
   * A unique value that associates the panel with a trigger.
   */
  value: string;

  /**
   * The font size of the panel content.
   */
  size?: Size;

  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   * @default false
   */
  forceMount?: true;
}
