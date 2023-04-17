import type { SelectHTMLAttributes, ReactNode } from 'react';
import type { NativeSelectRightSectionWrapperProps } from './native-select-right-section-wrapper/native-select-right-section-wrapper.types';
import type { NativeSelectWrapperProps } from './native-select-wrapper/native-select-wrapper.types';
import type { Size, Rounded, Color } from '../../types';

type HTMLAttributesToOmit = 'size';

export interface NativeSelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, HTMLAttributesToOmit> {
  /**
   * The content of the native select - HTML option element or HTML optgroup element.
   */
  children: ReactNode;

  /**
   * If added, the native select will have placeholder.
   */
  placeholder?: string;

  /**
   * The size of the native select.
   * @default "md"
   */
  size?: Size;

  /**
   * The variant of the native select.
   * @default "filled"
   */
  variant?: 'filled' | 'outline' | 'underlined';

  /**
   * The border color when the native select is focused.
   * @default "primary"
   */
  focusBorderColor?: Color;

  /**
   * The border radius value of the native select. This property override border radius determined by `size` property.
   */
  rounded?: Rounded;

  /**
   * If `true`, the native select will be disabled and have `data-disabled` attribute.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the native select will be invalid. In this state component will have `data-invalid` attribute and `aria-invalid` attribute set to `true`.
   * @default false
   */
  invalid?: boolean;

  /**
   * If `true`, the native select will be required and have `aria-required` attribute set to `true`.
   * @default false
   */
  required?: boolean;

  /**
   * The size of the icon used inside right section wrapper element. This property override icon size determined by `size` property.
   */
  iconSize?: number | string;

  /**
   * If added, will replace default right section icon.
   */
  rightSection?: ReactNode;

  /**
   * Props to forward to the native select wrapper element. This element includes select and rightSectionWrapper.
   */
  wrapperProps?: Omit<NativeSelectWrapperProps, 'children'>;

  /**
   * Props to forward to the native select right section wrapper element. This element includes rightSectionWrapper.
   */
  rightSectionWrapperProps?: Omit<NativeSelectRightSectionWrapperProps, 'children'>;
}
