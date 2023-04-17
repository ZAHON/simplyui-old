import type { InputHTMLAttributes } from 'react';
import type { Size, Rounded, Color } from '../../types';

type HTMLAttributesToOmit = 'size';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, HTMLAttributesToOmit> {
  /**
   * The size of the text input.
   * @default "md"
   */
  size?: Size;

  /**
   * The variant of the text input.
   * @default "filled"
   */
  variant?: 'filled' | 'outline' | 'underlined';

  /**
   * The color of the text inside text input.
   * @default "neutral"
   */
  color?: Color;

  /**
   * The color of the text input placeholder.
   * @default "neutral"
   */
  placeholderColor?: Color;

  /**
   * The border color when the text input is focused.
   * @default "primary"
   */
  focusBorderColor?: Color;

  /**
   * The border radius value of the text input. This property override border radius determined by `size` property.
   */
  rounded?: Rounded;

  /**
   * If true, the text input will be disabled and have `data-disabled` attribute.
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, the text input will be invalid. In this state component will have `data-invalid` attribute and `aria-invalid` attribute set to `true`.
   * @default false
   */
  invalid?: boolean;

  /**
   * If true, the text input will be required and have `aria-required` attribute set to `true`.
   * @default false
   */
  required?: boolean;

  /**
   * The native HTML `size` attribute to be passed to the text input.
   */
  htmlSize?: number;
}
