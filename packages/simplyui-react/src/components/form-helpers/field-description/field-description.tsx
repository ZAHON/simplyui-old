import type { FieldDescriptionProps } from './field-description.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { fieldDescriptionStyles } from './field-description.styles';

export const FieldDescription = forwardRef<HTMLSpanElement, FieldDescriptionProps>(
  function FieldDescription(props, ref) {
    const { disabled, className, children, ...others } = props;

    const dataDisabled = disabled ? '' : undefined;

    return (
      <span
        {...others}
        ref={ref}
        data-disabled={dataDisabled}
        className={twMerge(fieldDescriptionStyles(), className)}
      >
        {children}
      </span>
    );
  }
);

FieldDescription.displayName = 'FieldDescription';
