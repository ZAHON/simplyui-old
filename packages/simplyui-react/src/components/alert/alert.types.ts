import type { HTMLAttributes, ReactNode, CSSProperties } from 'react';
import type { CloseButtonProps } from '../close-button/close-button.types';
import type { Color, Rounded, Size } from '../../types';

type HTMLAttributesToOmit = 'role' | 'title';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit> {
  /**
   * The description of the alert.
   */
  children?: ReactNode;

  /**
   * The title of the alert.
   */
  title?: string;

  /**
   * The font size of the text inside alert.
   * @default "md"
   */
  size?: Size;

  /**
   * If added, the alert will have close button.
   * @default false
   */
  closeButton?: boolean;

  /**
   * The type of the icon used inside close button.
   * @default "x-mark"
   */
  closeButtonIconType?: CloseButtonProps['iconType'];

  /**
   * The value of the close button aria-label attribute.
   * @default "Close alert"
   */
  closeButtonLabel?: string;

  /**
   * The event handler called when close button clicked.
   */
  onClose?: () => void;

  /**
   * The variant of the alert.
   * @default "light"
   */
  variant?: 'filled' | 'light' | 'outline';

  /**
   * The color of the alert.
   * @default "error"
   */
  color?: Color;

  /**
   * If added, the alert will have decorative border. Color of this decorative border border is determined by `color` property. Only available when `variant` property is set to `light`.
   */
  accent?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * The border radius value of the alert.
   * @default "md"
   */
  rounded?: Exclude<Rounded, 'full'>;

  /**
   * If added, icon will be show next to the alert content.
   */
  icon?: ReactNode;

  /**
   * Override alert default styles.
   */
  className?: string;

  /**
   * Override alert default inline style.
   */
  style?: CSSProperties;

  /**
   * Override alert title default styles.
   */
  titleClassName?: string;

  /**
   * Override alert title default inline style.
   */
  titleStyle?: CSSProperties;

  /**
   * Override alert description default styles.
   */
  descriptionClassName?: string;

  /**
   * Override alert description default inline style.
   */
  descriptionStyle?: CSSProperties;

  /**
   * Override alert content wrapper default styles. This element contains alert title and description.
   */
  contentWrapperClassName?: string;

  /**
   * Override alert content wrapper default inline style. This element contains alert title and description.
   */
  contentWrapperStyle?: CSSProperties;

  /**
   * Override alert icon wrapper default styles. This element contains alert icon.
   */
  iconWrapperClassName?: string;

  /**
   * Override alert icon wrapper default inline style. This element contains alert title and description.
   */
  iconWrapperStyle?: CSSProperties;

  /**
   * Override alert close button default styles.
   */
  closeButtonClassName?: string;

  /**
   * Override alert close button default inline style.
   */
  closeButtonStyle?: CSSProperties;
}
