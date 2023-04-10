import type { CloseButtonProps } from '../close-button.types';

export interface CloseButtonIconProps {
  /**
   * The type of the icon.
   */
  iconType?: 'x-mark' | 'x-circle';

  /**
   * Override icon size determined by `size` property.
   */
  iconSize?: number | string;

  /**
   * The size of the icon.
   */
  size: CloseButtonProps['size'];
}
