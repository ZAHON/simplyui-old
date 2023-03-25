import type { FieldLabelProps } from './field-label.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../../utils';
import { fieldLabelStyles } from './field-label.styles';

const defaultProps: Partial<FieldLabelProps> = {
  size: 'md',
  requiredIndicator: ' *',
};

export const FieldLabel = forwardRef<HTMLLabelElement, FieldLabelProps>(function FieldLabel(
  props,
  ref
) {
  const {
    size,
    disabled,
    requiredIndicator,
    withRequiredIndicator,
    className,
    requiredIndicatorClassName,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const dataDisabled = disabled ? '' : undefined;

  return (
    <Root
      {...others}
      ref={ref}
      data-disabled={dataDisabled}
      className={twMerge(fieldLabelStyles({ size }), className)}
    >
      {children}
      {withRequiredIndicator && (
        <span
          aria-hidden
          data-disabled={dataDisabled}
          className={twMerge('text-error-11', requiredIndicatorClassName)}
        >
          {requiredIndicator}
        </span>
      )}
    </Root>
  );
});

FieldLabel.displayName = 'FieldLabel';
