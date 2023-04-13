import type { AlertCloseButtonProps } from '../alert-close-button.types';

type AlertSize = AlertCloseButtonProps['alertSize'];

export function getAlertCloseButtonIconSize(alertSize: AlertSize) {
  switch (alertSize) {
    case 'xs': {
      return '0.75rem';
    }
    case 'sm': {
      return '0.875rem';
    }
    case 'md': {
      return '1rem';
    }
    case 'lg': {
      return '1.125rem';
    }
    case 'xl': {
      return '1.25rem';
    }
    default: {
      throw Error(`Unknown alert size: ${alertSize}`);
    }
  }
}
