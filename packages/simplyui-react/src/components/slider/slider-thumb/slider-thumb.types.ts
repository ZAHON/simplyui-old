import type { HTMLAttributes } from 'react';
import type { SliderProps } from '../slider.types';

export interface SliderThumbProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The color of the slider thumb.
   */
  color: SliderProps['color'];

  /**
   * The size of the slider thumb.
   */
  size: SliderProps['size'];

  /**
   * The outline color when the slider thumb is focused.
   */
  focusOutlineColor: SliderProps['focusOutlineColor'];
}
