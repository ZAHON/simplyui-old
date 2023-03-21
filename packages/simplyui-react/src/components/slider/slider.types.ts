import type { HTMLAttributes, ReactNode } from 'react';
import type { Size, Color, Rounded } from '../../types';

export interface SliderProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'size' | 'onChange' | 'dir'> {
  /**
   * The slider thumb aria-label.
   */
  thumbArialabel?: string;

  /**
   * The way the slider label is to be displayed.
   * @default "on-hover"
   */
  showLabel?: 'always' | 'on-hover' | 'none';

  /**
   * Function to generate label or any react node to render instead.
   */
  label?: ReactNode | ((value: number) => ReactNode);

  /**
   * If added, icon or any react node will render inside slider thumb.
   */
  thumbIcon?: ReactNode;

  /**
   * Sets the border radius of the slider, overwrites the value specified by size prop.
   */
  rounded?: Exclude<Rounded, 'full'>;

  /**
   * The size of the slider.
   * @default "md"
   */
  size?: Size;

  /**
   * The color oth the slider.
   * @default "primary"
   */
  color?: Exclude<Color, 'neutral'>;

  /**
   * The value of the slider when initially rendered. Use when you do not need to control the state of the slider.
   */
  defaultValue?: number;

  /**
   * The controlled value of the slider. Must be used in conjunction with onChange.
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
   * The name of the slider. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * When true, prevents the user from interacting with the slider.
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the slider is visually inverted.
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
   * Override slider root default styles.
   */
  rootClassName?: string;

  /**
   * Override slider track default styles.
   */
  trackClassName?: string;

  /**
   * Override slider range default styles.
   */
  rangeClassName?: string;

  /**
   * Override slider thumb default styles.
   */
  thumbClassName?: string;

  /**
   * Override slider label default styles.
   */
  labelClassName?: string;
}
