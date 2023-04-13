import type { AlertCloseButtonProps } from './alert-close-button.types';
import { twMerge } from 'tailwind-merge';
import { CloseButton } from '../../close-button/close-button';
import { getAlertCloseButtonColor, getAlertCloseButtonIconSize } from './utils';
import { alertCloseButtonStyles } from './alert-close-button.styles';

export function AlertCloseButton(props: AlertCloseButtonProps) {
  const { alertVariant, alertColor, alertSize, className, ...others } = props;

  const iconSize = getAlertCloseButtonIconSize(alertSize);
  const color = getAlertCloseButtonColor({ alertVariant, alertColor });

  return (
    <CloseButton
      variant="transparent"
      color={color}
      iconSize={iconSize}
      rounded="xs"
      className={twMerge(alertCloseButtonStyles({ alertSize }), className)}
      {...others}
    />
  );
}
