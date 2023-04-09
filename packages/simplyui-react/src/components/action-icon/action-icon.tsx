import type { ActionIconProps } from './action-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { ActionIconLoader } from './action-icon-loader/action-icon-loader';
import { actionIconStyles } from './action-icon.styles';

const defaultProps: Partial<ActionIconProps> = {
  size: 'md',
  variant: 'subtle',
  color: 'neutral',
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
    loader,
    loaderProps,
    className,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const loaderComponent = loader ? (
    loader
  ) : (
    <ActionIconLoader {...loaderProps} settings={{ size }} />
  );
  const actionIconLoader = loading ? loaderComponent : null;

  return (
    <button
      {...others}
      ref={ref}
      disabled={disabled || loading}
      className={twMerge(actionIconStyles({ size, variant, color, rounded }), className)}
    >
      <span>{loading ? actionIconLoader : children}</span>
    </button>
  );
});

ActionIcon.displayName = 'ActionIcon';
