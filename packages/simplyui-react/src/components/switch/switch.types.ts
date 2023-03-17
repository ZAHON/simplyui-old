import type { ReactNode, ButtonHTMLAttributes } from 'react';
import type { Size, Rounded, Color } from '../../types';

export interface SwitchProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Icon for both status on/off
   */
  icon?: ReactNode;

  /**
   * Icon for on status.
   */
  iconOn?: ReactNode;

  /**
   * Icon for off status.
   */
  iconOff?: ReactNode;

  /**
   * The variant of the Switch.
   * @default "filled"
   */
  variant?: 'filled' | 'outline';

  /**
   * The size of the Switch.
   * @default "md"
   */
  size?: Size;

  /**
   * The color of the Switch.
   * @default "primary"
   */
  color?: Exclude<Color, 'neutral'>;

  /**
   * Sets the border radius of the Switch, overwrites the value specified by size prop.
   * @default undefined
   */
  rounded?: Exclude<Rounded, '2xl' | '3xl'>;

  /**
   * The state of the Switch when it is initially rendered. Use when you do not need to control its state.
   */
  defaultChecked?: boolean;

  /**
   * The controlled state of the Switch. Must be used in conjunction with onChange.
   */
  checked?: boolean;

  /**
   * Event handler called when the state of the Switch changes.
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * When true, prevents the user from interacting with the Switch.
   */
  disabled?: boolean;

  /**
   * When true, indicates that the user must check the Switch before the owning form can be submitted.
   */
  required?: boolean;

  /**
   * The name of the Switch. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * The value given as data when submitted with a name.
   * @default "on"
   */
  value?: string;

  /**
   * Override Switch default styles.
   */
  className?: string;

  /**
   * Override Switch Thumb default styles.
   */
  thumbClassName?: string;
}
