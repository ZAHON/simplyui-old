import type { CloseButtonProps } from './close-button.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { CloseIcon } from './close-icon';
import { closeButtonStyles } from './close-button.styles';

const defaultProps: Partial<CloseButtonProps> = {
  size: 'md',
  variant: 'subtle',
  color: 'primary',
  type: 'button',
};

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(function Button(
  props,
  ref
) {
  const { size, iconSize, variant, color, rounded, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <button
      {...others}
      ref={ref}
      className={twMerge(closeButtonStyles({ size, variant, color, rounded }), className)}
    >
      <span>{children || <CloseIcon size={iconSize || size} />}</span>
    </button>
  );
});

CloseButton.displayName = 'CloseButton';
