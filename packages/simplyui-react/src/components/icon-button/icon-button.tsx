import type { IconButtonProps } from './icon-button.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { IconButtonLoader } from './icon-button-loader/icon-button-loader';
import { iconButtonStyles } from './action-icon.styles';

const defaultProps: Partial<IconButtonProps> = {
  size: 'md',
  variant: 'subtle',
  color: 'neutral',
  focusOutlineColor: 'primary',
  type: 'button',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  props,
  ref
) {
  const {
    size,
    variant,
    color,
    focusOutlineColor,
    rounded,
    disabled,
    loading,
    loader,
    loaderProps,
    className,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const dataDisabled = disabled ? '' : undefined;
  const dataLoading = loading ? '' : undefined;

  const loaderComponent = loader ? (
    loader
  ) : (
    <IconButtonLoader iconButtonSize={size} data-disabled={dataDisabled} {...loaderProps} />
  );
  const iconButtonLoader = loading ? loaderComponent : null;

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      data-disabled={dataDisabled}
      data-loading={dataLoading}
      className={twMerge(
        iconButtonStyles({ size, variant, color, focusOutlineColor, rounded }),
        className
      )}
      {...others}
    >
      {loading ? iconButtonLoader : children}
    </button>
  );
});

IconButton.displayName = 'IconButton';
