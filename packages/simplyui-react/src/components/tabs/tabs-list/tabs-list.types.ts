import type { HTMLAttributes, ReactNode } from 'react';
import type { Size } from '../../../types';

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the list - TabsTrigger components.
   */
  children: ReactNode;

  /**
   * The font size of the list content.
   */
  size?: Size;

  /**
   * If `true`, the triggers will take whole space.
   * @default false
   */
  grow?: boolean;

  /**
   * The alignment of the triggers.
   * @default "left"
   */
  position?: 'left' | 'right' | 'center' | 'apart';

  /**
   * When true, keyboard navigation will loop from last trigger to first, and vice versa.
   * @default true
   */
  loop?: boolean;
}
