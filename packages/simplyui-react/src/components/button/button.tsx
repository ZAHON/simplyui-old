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
    loadingContent,
    loader,
    loaderProps,
    loaderPosition,
    leftIcon,
    rightIcon,
    className,
    leftIconWrapperClassName,
    leftIconWrapperStyle,
    rightIconWrapperClassName,
    rightIconWrapperStyle,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const dataDisabled = disabled ? '' : undefined;
  const dataLoading = loading ? '' : undefined;

  const loaderComponent = loader ? (
    loader
  ) : (
    <ButtonLoader {...loaderProps} data-disabled={dataDisabled} buttonSize={size} />
  );
  const buttonLoader = loading ? loaderComponent : null;

  const buttonLeftIcon = leftIcon && (
    <span
      data-disabled={dataDisabled}
      data-loading={dataLoading}
      style={leftIconWrapperStyle}
      className={twMerge(leftIconWrapperClassName)}
    >
      {leftIcon}
    </span>
  );

  const buttonRightIcon = rightIcon && (
    <span
      data-disabled={dataDisabled}
      data-loading={dataLoading}
      style={rightIconWrapperStyle}
      className={twMerge(rightIconWrapperClassName)}
    >
      {rightIcon}
    </span>
  );

  return (
    <button
      {...others}
      ref={ref}
      data-disabled={dataDisabled}
      data-loading={dataLoading}
      disabled={disabled || loading}
      className={twMerge(
        buttonStyles({ size, variant, color, fullWidth, rounded, uppercase }),
        className
      )}
    >
      {loaderPosition === 'left' && loading ? buttonLoader : buttonLeftIcon}
      {loading && loadingContent ? loadingContent : children}
      {loaderPosition === 'right' && loading ? buttonLoader : buttonRightIcon}
    </button>
  );
});

Button.displayName = 'Button';
