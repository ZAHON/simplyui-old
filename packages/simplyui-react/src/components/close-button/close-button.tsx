import type { CloseButtonProps } from './close-button.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { CloseButtonIcon } from './close-button-icon/close-button-icon';
import { closeButtonStyles } from './close-button.styles';

const defaultProps: Partial<CloseButtonProps> = {
  iconType: 'x-mark',
  size: 'md',
  variant: 'subtle',
  color: 'neutral',
};

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(function CloseButton(
  props,
  ref
) {
  const { iconType, iconSize, size, variant, color, rounded, className, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <button
      {...others}
      ref={ref}
      type="button"
      className={twMerge(closeButtonStyles({ size, variant, color, rounded }), className)}
    >
      <CloseButtonIcon iconType={iconType} iconSize={iconSize} size={size} />
    </button>
  );
});

CloseButton.displayName = 'CloseButton';
