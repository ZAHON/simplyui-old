import type { SwitchProps } from './switch.types';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { FieldLabel, FieldDescription, FieldErrorMessage } from '../form-helpers';
import { switchStyles } from './switch.styles';

const defaultProps: Partial<SwitchProps> = {
  variant: 'filled',
  size: 'md',
  color: 'primary',
  labelPosition: 'right',
  rounded: 'full',
  requiredIndicator: ' *',
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(props, ref) {
  const {
    id,
    disabled,
    invalid,
    required,
    label,
    labelPosition,
    requiredIndicator,
    description,
    errorMessage,
    variant,
    size,
    color,
    rounded,
    rootClassName,
    inputClassName,
    labelWrapperClassName,
    labelClassName,
    requiredIndicatorClassName,
    descriptionClassName,
    errorMessageClassName,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const uuid = useId();
  const inputId = id || uuid;

  const labelWrapper =
    label || description || errorMessage ? (
      <div className={twMerge('flex flex-col', labelWrapperClassName)}>
        {label && (
          <FieldLabel
            htmlFor={inputId}
            disabled={disabled}
            withRequiredIndicator={required}
            requiredIndicator={requiredIndicator}
            className={labelClassName}
            requiredIndicatorClassName={requiredIndicatorClassName}
          >
            {label}
          </FieldLabel>
        )}
        {description && (
          <FieldDescription disabled={disabled} className={descriptionClassName}>
            {description}
          </FieldDescription>
        )}
        {invalid && errorMessage && (
          <FieldErrorMessage disabled={disabled} className={errorMessageClassName}>
            {errorMessage}
          </FieldErrorMessage>
        )}
      </div>
    ) : undefined;

  return (
    <div className={twMerge('flex items-center gap-x-3', rootClassName)}>
      {labelPosition === 'left' && labelWrapper}
      <input
        {...others}
        ref={ref}
        id={inputId}
        disabled={disabled}
        aria-required={required}
        aria-invalid={invalid}
        data-invalid={invalid}
        type="checkbox"
        role="switch"
        className={twMerge(switchStyles({ variant, size, color, rounded }), inputClassName)}
      />
      {labelPosition === 'right' && labelWrapper}
    </div>
  );
});

Switch.displayName = 'Switch';
