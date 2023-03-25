import type { HTMLAttributes, ReactNode } from 'react';
import type { Color } from '../../../types';

export interface LabelDescriptionProps extends HTMLAttributes<HTMLSpanElement> {
  color?: Exclude<Color, 'neutral'> | 'default';
  children: ReactNode;
}
