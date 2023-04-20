import type { SwitchProps } from './switch.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { switchStyles } from './switch.styles';

const defaultProps: Partial<SwitchProps> = {
  color: 'primary',
  focusOutlineColor: 'primary',
  size: 'md',
  rounded: 'full',
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(props, ref) {
  const {
    color,
    focusOutlineColor,
    size,
    rounded,
    disabled,
    required,
    invalid,
    className,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  return (
    <input
      ref={ref}
      type="checkbox"
      role="switch"
      disabled={disabled}
      aria-required={required ? true : undefined}
      aria-invalid={invalid ? true : undefined}
      data-disabled={disabled ? '' : undefined}
      data-invalid={invalid ? '' : undefined}
      className={twMerge(switchStyles({ color, focusOutlineColor, size, rounded }), className)}
      {...others}
    />
  );
});

Switch.displayName = 'Switch';
