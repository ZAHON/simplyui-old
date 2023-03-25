import type { FieldErrorMessageProps } from './field-error-message.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { fieldErrorMessageStyles } from './field-error-message.styles';

export const FieldErrorMessage = forwardRef<HTMLSpanElement, FieldErrorMessageProps>(
  function FieldErrorMessage(props, ref) {
    const { disabled, className, children, ...others } = props;

    const dataDisabled = disabled ? '' : undefined;

    return (
      <span
        {...others}
        ref={ref}
        aria-live="polite"
        data-disabled={dataDisabled}
        className={twMerge(fieldErrorMessageStyles(), className)}
      >
        {children}
      </span>
    );
  }
);

FieldErrorMessage.displayName = 'FieldErrorMessage';
