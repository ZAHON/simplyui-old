import type { ReactNode } from 'react';
import type { Size, Rounded } from '../../../types';

export type SwitchThumbProps = {
  variant?: 'filled' | 'outline';
  size?: Size;
  rounded?: Exclude<Rounded, '2xl' | '3xl'>;
  className?: string;
  children?: ReactNode;
};
