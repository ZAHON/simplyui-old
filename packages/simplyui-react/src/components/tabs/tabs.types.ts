import type { HTMLAttributes, ReactNode } from 'react';
import type { Size, Color, Rounded } from '../../types';

type HTMLAttributesToOmit = 'dir';

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit> {
  /**
   * The content of the tabs - TabsList and TabsPanel components.
   */
  children: ReactNode;

  /**
   * The variant of the tabs.
   * @default "pills"
   */
  variant?: 'default' | 'pills';

  /**
   * The font size of the tabs content.
   * @default "md"
   */
  size?: Size;

  /**
   * The color of the tabs.
   * @default "primary"
   */
  color?: Color;

  /**
   * The outline color when the triggers is focused.
   * @default "primary"
   */
  focusOutlineColor?: Color;

  /**
   * The value of the trigger border radius. This property only works when `variant` property is set to `pills`.
   * @default "md"
   */
  rounded?: Rounded;

  /**
   * The value of the panel that should be active when initially rendered. Use when you do not need to control the state of the tabs.
   */
  defaultValue?: string;

  /**
   * The controlled value of the panel to activate. Should be used in conjunction with `onValueChange` property.
   */
  value?: string;

  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void;

  /**
   * The orientation of the component.
   * @default "horizontal"
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * When `automatic`, tabs are activated when receiving focus. When `manual`, tabs are activated when clicked.
   * @default "automatic"
   */
  activationMode?: 'automatic' | 'manual';
}
