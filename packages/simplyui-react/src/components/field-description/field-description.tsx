import type { FieldDescriptionProps } from './field-description.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { fieldDescriptionStyles } from './field-description.styles';

const defaultProps: Partial<FieldDescriptionProps> = {
  size: 'md',
};

export const FieldDescription = forwardRef<HTMLSpanElement, FieldDescriptionProps>(
  function FieldDescription(props, ref) {
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
        className={twMerge(fieldDescriptionStyles({ size }), className)}
      >
        {children}
      </span>
    );
  }
);

FieldDescription.displayName = 'FieldDescription';
