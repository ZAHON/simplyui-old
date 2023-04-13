import type { AlertProps } from './alert.types';
import { useId, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { AlertCloseButton } from './alert-close-button/alert-close-button';
import {
  alertStyles,
  alertTitleStyles,
  alertContentWrapperStyles,
  alertIconWrapperStyles,
} from './alert.styles';

const defaultProps: Partial<AlertProps> = {
  size: 'md',
  variant: 'light',
  color: 'error',
  rounded: 'md',
  closeButtonIconType: 'x-mark',
  closeButtonLabel: 'Close alert',
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  const {
    title,
    size,
    variant,
    color,
    accent,
    rounded,
    icon,
    closeButton,
    closeButtonIconType,
    closeButtonLabel,
    className,
    titleClassName,
    titleStyle,
    descriptionClassName,
    descriptionStyle,
    contentWrapperClassName,
    contentWrapperStyle,
    iconWrapperClassName,
    iconWrapperStyle,
    closeButtonClassName,
    closeButtonStyle,
    onClose,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const alertTitleId = useId();
  const alertDescriptionId = useId();

  const alertTitle = title && (
    <strong
      id={alertTitleId}
      style={titleStyle}
      className={twMerge(alertTitleStyles(), titleClassName)}
    >
      {title}
    </strong>
  );

  const alertDescription = children && (
    <div id={alertDescriptionId} style={descriptionStyle} className={twMerge(descriptionClassName)}>
      {children}
    </div>
  );

  const alertContentWrapper = (
    <div
      style={contentWrapperStyle}
      className={twMerge(alertContentWrapperStyles(), contentWrapperClassName)}
    >
      {alertTitle}
      {alertDescription}
    </div>
  );

  const alertIcon = icon && (
    <span
      style={iconWrapperStyle}
      className={twMerge(alertIconWrapperStyles(), iconWrapperClassName)}
    >
      {icon}
    </span>
  );

  const alertCloseButton = closeButton && (
    <AlertCloseButton
      alertColor={color}
      alertSize={size}
      alertVariant={variant}
      iconType={closeButtonIconType}
      aria-label={closeButtonLabel}
      className={closeButtonClassName}
      onClick={onClose}
      style={closeButtonStyle}
    />
  );

  return (
    <div
      ref={ref}
      aria-labelledby={title ? alertTitleId : undefined}
      aria-describedby={children ? alertDescriptionId : undefined}
      role="alert"
      className={twMerge(alertStyles({ size, variant, color, accent, rounded }), className)}
      {...others}
    >
      {alertIcon}
      {alertContentWrapper}
      {alertCloseButton}
    </div>
  );
});

Alert.displayName = 'Alert';
