import type { HTMLAttributes, ReactNode } from 'react';
import type { SliderProps } from '../slider.types';

export interface SliderTrackProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The SliderRange component.
   */
  children: ReactNode;

  /**
   * The size of the slider track.
   */
  size: SliderProps['size'];

  /**
   * The orientation of the slider track.
   */
  orientation: SliderProps['orientation'];
}
