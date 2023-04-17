import type { NativeSelectProps } from './native-select.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { NativeSelectWrapper } from './native-select-wrapper/native-select-wrapper';
import { NativeSelectRightSectionWrapper } from './native-select-right-section-wrapper/native-select-right-section-wrapper';
import { NativeSelectIcon } from './native-select-icon/native-select-icon';
import { nativeSelectStyles } from './native-select.styles';

const defaultProps: Partial<NativeSelectProps> = {
  size: 'md',
  variant: 'filled',
  focusBorderColor: 'primary',
};

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(function NativeSelect(
  props,
  ref
) {
  const {
    placeholder,
    size,
    variant,
    focusBorderColor,
    rounded,
    disabled,
    invalid,
    required,
    className,
    iconSize,
    rightSection,
    wrapperProps,
    rightSectionWrapperProps,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const dataSet = {
    'data-disabled': disabled ? '' : undefined,
    'data-invalid': invalid ? '' : undefined,
  };

  return (
    <NativeSelectWrapper {...dataSet} {...wrapperProps}>
      <select
        ref={ref}
        disabled={disabled}
        aria-required={required ? true : undefined}
        aria-invalid={invalid ? true : undefined}
        className={twMerge(
          nativeSelectStyles({
            size,
            variant,
            focusBorderColor,
            rounded,
          }),
          className
        )}
        {...dataSet}
        {...others}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
      <NativeSelectRightSectionWrapper size={size} {...dataSet} {...rightSectionWrapperProps}>
        {rightSection ?? <NativeSelectIcon size={size} iconSize={iconSize} />}
      </NativeSelectRightSectionWrapper>
    </NativeSelectWrapper>
  );
});

NativeSelect.displayName = 'NativeSelect';
