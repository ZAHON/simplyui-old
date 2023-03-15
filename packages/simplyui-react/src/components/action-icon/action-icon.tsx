import type { ActionIconProps } from './action-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { ActionIconLoader } from './action-icon-loader/action-icon-loader';
import { buttonStyles } from './action-icon.styles';

const defaultProps: Partial<ActionIconProps> = {
  size: 'md',
  variant: 'subtle',
  color: 'primary',
  type: 'button',
};

export const ActionIcon = forwardRef<HTMLButtonElement, ActionIconProps>(function Button(
  props,
  ref
) {
  const {
    size,
    variant,
    color,
    rounded,
    disabled,
    loading,
    loaderProps,
    className,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  return (
    <button
      {...others}
      ref={ref}
      disabled={disabled || loading}
      data-loading={loading}
      className={twMerge(buttonStyles({ size, variant, color, rounded }), className)}
    >
      <span>{loading ? <ActionIconLoader size={size} loaderProps={loaderProps} /> : children}</span>
    </button>
  );
});

ActionIcon.displayName = 'ActionIcon';
