import type { LabelProps } from './label.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { labelStyles } from './label.styles';

const defaultProps: Partial<LabelProps> = {
  size: 'md',
  requiredIndicator: ' *',
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(function FieldLabel(props, ref) {
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
      className={twMerge(labelStyles({ size }), className)}
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

Label.displayName = 'Label';
