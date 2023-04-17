import type { SVGAttributes } from 'react';
import type { NativeSelectProps } from '../native-select.types';

export interface NativeSelectIconProps extends SVGAttributes<HTMLOrSVGElement> {
  /**
   * The size of the native select icon.
   * @default "md"
   */
  size: NativeSelectProps['size'];

  /**
   * The size of the native select icon. This property override icon size determined by `size` property.
   */
  iconSize: NativeSelectProps['iconSize'];
}
