import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { Color } from '../../../types';

export interface TabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The content of the trigger.
   */
  children: ReactNode;

  /**
   * A unique value that associates the trigger with a content.
   */
  value: string;

  /**
   * The color of the trigger.
   */
  color?: Color;

  /**
   * The outline color when the trigger is focused.
   */
  focusOutlineColor?: Color;

  /**
   * If added, the trigger will show left section before the trigger's content.
   */
  leftSection?: ReactNode;

  /**
   * If added, the trigger will show right section after the trigger's content.
   */
  rightSection?: ReactNode;

  /**
   * When `true`, prevents the user from interacting with the trigger.
   * @default false
   */
  disabled?: boolean;
}
