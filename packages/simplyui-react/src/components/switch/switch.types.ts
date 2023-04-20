import type { InputHTMLAttributes, ChangeEventHandler } from 'react';
import type { Size, Color, Rounded } from '../../types';

type HTMLAttributesToOmit = 'size' | 'type' | 'role';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, HTMLAttributesToOmit> {
  /**
   * The state of the switch when it is initially rendered. Use when you do not need to control its state.
   */
  defaultChecked?: boolean;

  /**
   * The controlled state of the switch. Must be used in conjunction with `onChange` property.
   */
  checked?: boolean;

  /**
   * Event handler called when the state of the switch changes.
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;

  /**
   * The name of the switch. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * The value given as data when submitted with a `name`.
   */
  value?: string;

  /**
   * If `true`, the switch will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the switch will be invalid.
   * @default false
   */
  invalid?: boolean;

  /**
   * If `true`, the switch will be required.
   * @default false
   */
  required?: boolean;

  /**
   * The color of the switch.
   * @default "primary"
   */
  color?: Exclude<Color, 'neutral'>;

  /**
   * The outline color when the switch is focused.
   * @default "primary"
   */
  focusOutlineColor?: Color;

  /**
   * The size of the switch.
   * @default "md"
   */
  size?: Size;

  /**
   * The value of the switch border radius.
   * @default "full"
   */
  rounded?: Rounded;
}
