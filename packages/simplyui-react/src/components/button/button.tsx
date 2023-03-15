import type { ButtonProps } from './button.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { ButtonLoader } from './button-loader/button-loader';
import { buttonStyles } from './button.styles';

const defaultProps: Partial<ButtonProps> = {
  size: 'md',
  variant: 'filled',
  color: 'primary',
  type: 'button',
  loaderPosition: 'left',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const {
    size,
    variant,
    color,
    fullWidth,
    rounded,
    uppercase,
    disabled,
    loading,
    loadingText,
    loaderPosition,
    loaderProps,
    className,
    leftIcon,
    rightIcon,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const leftSection =
    loading && loaderPosition === 'left' ? (
      <ButtonLoader size={size} loaderProps={loaderProps} />
    ) : (
      leftIcon && <span>{leftIcon}</span>
    );

  const rightSection =
    loading && loaderPosition === 'right' ? (
      <ButtonLoader size={size} loaderProps={loaderProps} />
    ) : (
      rightIcon && <span>{rightIcon}</span>
    );

  return (
    <button
      {...others}
      ref={ref}
      disabled={disabled || loading}
      data-loading={loading}
      className={twMerge(
        buttonStyles({ size, variant, color, fullWidth, rounded, uppercase }),
        className
      )}
    >
      {leftSection}
      <span>{loading ? (loadingText ? loadingText : children) : children}</span>
      {rightSection}
    </button>
  );
});

Button.displayName = 'Button';
