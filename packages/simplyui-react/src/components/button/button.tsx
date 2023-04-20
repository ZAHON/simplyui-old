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
  focusOutlineColor: 'primary',
  type: 'button',
  loaderPosition: 'left',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const {
    size,
    variant,
    color,
    focusOutlineColor,
    fullWidth,
    rounded,
    uppercase,
    disabled,
    loading,
    loadingContent,
    loader,
    loaderProps,
    loaderPosition,
    leftSection,
    rightSection,
    className,
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
  const buttonLeftSection = leftSection && leftSection;
  const buttonRightSection = rightSection && rightSection;

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      data-disabled={dataDisabled}
      data-loading={dataLoading}
      className={twMerge(
        buttonStyles({ size, variant, color, focusOutlineColor, fullWidth, rounded, uppercase }),
        className
      )}
      {...others}
    >
      {loaderPosition === 'left' && loading ? buttonLoader : buttonLeftSection}
      {loading && loadingContent ? loadingContent : children}
      {loaderPosition === 'right' && loading ? buttonLoader : buttonRightSection}
    </button>
  );
});

Button.displayName = 'Button';
