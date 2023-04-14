import type { LabelProps } from './label.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { labelStyles, labelRequiredIndicatorStyles } from './label.styles';

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
    requiredIndicatorStyle,
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
          style={requiredIndicatorStyle}
          className={twMerge(labelRequiredIndicatorStyles(), requiredIndicatorClassName)}
        >
          {requiredIndicator}
        </span>
      )}
    </Root>
  );
});

Label.displayName = 'Label';
