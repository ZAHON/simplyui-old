import type { HTMLAttributes } from 'react';
import type { SliderTrackProps } from './slider-track/slider-track.types';
import type { SliderRangeProps } from './slider-range/slider-range.types';
import type { SliderThumbProps } from './slider-thumb/slider-thumb.types';
import type { Color, Size } from '../../types';

type HTMLAttributesToOmit = 'onChange' | 'dir';

export interface SliderProps extends Omit<HTMLAttributes<HTMLSpanElement>, HTMLAttributesToOmit> {
  /**
   * The value of the slider when initially rendered. Use when you do not need to control the state of the slider.
   */
  defaultValue?: number;

  /**
   * The controlled value of the slider. Must be used in conjunction with `onChange`.
   */
  value?: number;

  /**
   * Event handler called when the value changes.
   */
  onChange?: (value: number) => void;

  /**
   * Event handler called when the value changes at the end of an interaction. Useful when you only need to capture a final value e.g. to update a backend service.
   */
  onChangeEnd?: (value: number) => void;

  /**
   * The orientation of the slider.
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * The name of the slider. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * If `true`, prevents the user from interacting with the slider.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the slider is visually inverted.
   * @default false
   */
  inverted?: boolean;

  /**
   * The minimum value for the range.
   * @default 0
   */
  min?: number;

  /**
   * The maximum value for the range.
   * @default 100
   */
  max?: number;

  /**
   * The stepping interval.
   * @default 1
   */
  step?: number;

  /**
   * The size of the slider.
   * @default "md"
   */
  size?: Size;

  /**
   * The color of the slider.
   * @default "primary"
   */
  color?: Exclude<Color, 'neutral'>;

  /**
   * The outline color when the thumb is focused.
   * @default "primary"
   */
  focusOutlineColor?: Color;

  /**
   * The thumb element aria-label attribute.
   */
  thumbLabel?: string;

  /**
   * If `true`, slider range will be visible.
   * @default true
   */
  showRange?: boolean;

  /**
   * Props to forward to the slider track element.
   */
  trackProps?: Omit<SliderTrackProps, 'children' | 'szie' | 'orientation'>;

  /**
   * Props to forward to the slider range element.
   */
  rangeProps?: Omit<SliderRangeProps, 'children' | 'color' | 'orientation' | 'showRange'>;

  /**
   * Props to forward to the slider thumb element.
   */
  thumbProps?: Omit<SliderThumbProps, 'children' | 'size' | 'color' | 'focusOutlineColor'>;
}
