import type { CloseButtonProps } from '../../close-button/close-button.types';
import type { AlertProps } from '../alert.types';

export interface AlertCloseButtonProps extends CloseButtonProps {
  alertColor: AlertProps['color'];
  alertVariant: AlertProps['variant'];
  alertSize: AlertProps['size'];
}
