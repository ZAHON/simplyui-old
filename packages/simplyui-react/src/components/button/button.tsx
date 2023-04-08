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
    leftIconClassName,
    leftIconStyle,
    rightIconClassName,
    rightIconStyle,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const loaderComponent = loader ? loader : <ButtonLoader {...loaderProps} settings={{ size }} />;
  const buttonLoader = loading ? loaderComponent : null;

  const buttonLeftIcon = leftIcon ? (
    <span style={leftIconStyle} className={twMerge(leftIconClassName)}>
      {leftIcon}
    </span>
  ) : null;

  const buttonRightIcon = rightIcon ? (
    <span style={rightIconStyle} className={twMerge(rightIconClassName)}>
      {rightIcon}
    </span>
  ) : null;

  return (
    <button
      {...others}
      ref={ref}
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
