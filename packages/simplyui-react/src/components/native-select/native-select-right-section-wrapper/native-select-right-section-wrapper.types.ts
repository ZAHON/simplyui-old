import type { HTMLAttributes, ReactNode } from 'react';
import type { NativeSelectProps } from '../native-select.types';

export interface NativeSelectRightSectionWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the native select right section wrapper.
   */
  children: ReactNode;

  /**
   * The size of the native select right section wrapper.
   * @default "md"
   */
  size: NativeSelectProps['size'];
}
