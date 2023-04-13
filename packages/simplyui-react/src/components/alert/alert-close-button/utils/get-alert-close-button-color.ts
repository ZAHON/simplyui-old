import type { AlertCloseButtonProps } from '../alert-close-button.types';

type AlertVariant = AlertCloseButtonProps['alertVariant'];
type AlertColor = AlertCloseButtonProps['alertColor'];

type GetAlertCloseButtonColorArgs = {
  alertVariant: AlertVariant;
  alertColor: AlertColor;
};

export function getAlertCloseButtonColor(args: GetAlertCloseButtonColorArgs): AlertColor {
  const { alertVariant, alertColor } = args;

  if (alertVariant === 'filled') {
    return 'neutral';
  }

  return alertColor;
}
