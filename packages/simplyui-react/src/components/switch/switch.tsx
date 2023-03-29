import type { SwitchProps } from './switch.types';
import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { Label } from '../label';
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
  const dataDisabled = disabled ? '' : undefined;

  const labelWrapper =
    label || description || errorMessage ? (
      <div className={twMerge('flex flex-col', labelWrapperClassName)}>
        {label && (
          <Label
            htmlFor={inputId}
            disabled={disabled}
            withRequiredIndicator={required}
            requiredIndicator={requiredIndicator}
            className={labelClassName}
            requiredIndicatorClassName={requiredIndicatorClassName}
          >
            {label}
          </Label>
        )}
        {description && (
          <span
            data-disabled={dataDisabled}
            className={twMerge(
              'text-xs cursor-default font-light text-neutral-12 motion-safe:transition motion-safe:duration-150 data-[disabled]:opacity-40 data-[disabled]:select-none',
              descriptionClassName
            )}
          >
            {description}
          </span>
        )}
        {invalid && errorMessage && (
          <span
            aria-live="polite"
            data-disabled={dataDisabled}
            className={twMerge(
              'text-xs cursor-default font-light text-error-11 motion-safe:transition motion-safe:duration-150 data-[disabled]:opacity-40 data-[disabled]:select-none',
              errorMessageClassName
            )}
          >
            {errorMessage}
          </span>
        )}
      </div>
    ) : undefined;

  return (
    <div role="group" className={twMerge('flex items-center gap-x-3', rootClassName)}>
      {labelPosition === 'left' && labelWrapper}
      <input
        {...others}
        ref={ref}
        id={inputId}
        disabled={disabled}
        aria-required={required ? true : undefined}
        aria-invalid={invalid ? 'true' : undefined}
        data-invalid={invalid ? '' : undefined}
        type="checkbox"
        role="switch"
        className={twMerge(switchStyles({ variant, size, color, rounded }), inputClassName)}
      />
      {labelPosition === 'right' && labelWrapper}
    </div>
  );
});

Switch.displayName = 'Switch';
