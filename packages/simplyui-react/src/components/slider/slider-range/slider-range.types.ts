import type { HTMLAttributes } from 'react';
import type { SliderProps } from '../slider.types';

export interface SliderRangeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The color of the slider range.
   */
  color: SliderProps['color'];

  /**
   * The orientation of the slider range.
   */
  orientation: SliderProps['orientation'];

  /**
   * If `true`, slider range will be visible.
   */
  showRange: SliderProps['showRange'];
}
