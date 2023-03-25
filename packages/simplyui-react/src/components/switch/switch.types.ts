import type { InputHTMLAttributes, ChangeEventHandler, ReactNode } from 'react';
import type { Size, Color, Rounded } from '../../types';

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'role' | 'className'> {
  /**
   * The state of the switch when it is initially rendered. Use when you do not need to control its state.
   */
  defaultChecked?: boolean;

  /**
   * The controlled state of the switch. Must be used in conjunction with onChange.
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
   * The value given as data when submitted with a name.
   */
  value?: string;

  /**
   * If true, the switch will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If true, the switch will be invalid.
   * @default false
   */
  invalid?: boolean;

  /**
   * If true, the switch will be required.
   * @default false
   */
  required?: boolean;

  /**
   * The variant of the switch.
   * @default "filled"
   */
  variant?: 'filled' | 'outline';

  /**
   * The size of the switch.
   * @default "md"
   */
  size?: Size;

  /**
   * The color of the switch.
   * @default "primary"
   */
  color?: Exclude<Color, 'neutral'>;

  /**
   * The position of the switch label.
   * @default "right"
   */
  labelPosition?: 'left' | 'right';

  /**
   * The content of the switch label.
   */
  label?: string;

  /**
   * The content of the required indicator.
   * @default " *"
   */
  requiredIndicator?: ReactNode;

  /**
   * The content of the switch description.
   */
  description?: ReactNode;

  /**
   * The content of the switch error message.
   */
  errorMessage?: ReactNode;

  /**
   * The value of the switch border-radius.
   * @default "full"
   */
  rounded?: Extract<Rounded, 'none' | 'squared' | 'full'>;

  /**
   * Override root element default styles. This element contains switch input and label wrapper.
   */
  rootClassName?: string;

  /**
   * Override input default styles.
   */
  inputClassName?: string;

  /**
   * Override label wrapper element default styles. This element contains label, description and errorMessage.
   */
  labelWrapperClassName?: string;

  /**
   * Override label default styles.
   */
  labelClassName?: string;

  /**
   * Override requiredIndicator default styles.
   */
  requiredIndicatorClassName?: string;

  /**
   * Override description default styles.
   */
  descriptionClassName?: string;

  /**
   * Override errorMessage default styles.
   */
  errorMessageClassName?: string;
}
