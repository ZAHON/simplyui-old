import type { ReactNode } from 'react';
import type { Size, Rounded } from '../../../types';

export type SwitchThumbProps = {
  variant?: 'filled' | 'outline';
  size?: Size;
  rounded?: Rounded;
  className?: string;
  children?: ReactNode;
};
