import type { TextInputProps } from './text-input.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { textInputStyles } from './text-input.styles';

const defaultProps: Partial<TextInputProps> = {
  size: 'md',
  variant: 'filled',
  color: 'neutral',
  placeholderColor: 'neutral',
  focusBorderColor: 'primary',
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  props,
  ref
) {
  const {
    size,
    variant,
    color,
    placeholderColor,
    focusBorderColor,
    rounded,
    disabled,
    invalid,
    required,
    htmlSize,
    className,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  return (
    <input
      ref={ref}
      type="text"
      size={htmlSize}
      disabled={disabled}
      data-disabled={disabled ? '' : undefined}
      aria-required={required ? true : undefined}
      aria-invalid={invalid ? true : undefined}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(
        textInputStyles({ size, variant, color, placeholderColor, focusBorderColor, rounded }),
        className
      )}
      {...others}
    />
  );
});

TextInput.displayName = 'TextInput';
