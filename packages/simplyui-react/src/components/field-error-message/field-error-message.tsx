import type { FieldErrorMessageProps } from './field-error-message.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { fieldErrorMessageStyles } from './field-error-message.styles';

const defaultProps: Partial<FieldErrorMessageProps> = {
  size: 'md',
};

export const FieldErrorMessage = forwardRef<HTMLSpanElement, FieldErrorMessageProps>(
  function FieldErrorMessage(props, ref) {
    const { size, disabled, className, children, ...others } = applayComponentDefaultProps(
      defaultProps,
      props
    );

    const dataDisabled = disabled ? '' : undefined;

    return (
      <span
        {...others}
        ref={ref}
        data-disabled={dataDisabled}
        className={twMerge(fieldErrorMessageStyles({ size }), className)}
      >
        {children}
      </span>
    );
  }
);

FieldErrorMessage.displayName = 'FieldErrorMessage';
