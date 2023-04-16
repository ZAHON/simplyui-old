import type { LabelProps } from './label.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { LabelRequiredIndicator } from './label-required-indicator/label-required-indicator';
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
    requiredIndicatorProps,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const dataDisabled = disabled ? '' : undefined;

  const labelRequiredIndicator = withRequiredIndicator && (
    <LabelRequiredIndicator data-disabled={dataDisabled} {...requiredIndicatorProps}>
      {requiredIndicator}
    </LabelRequiredIndicator>
  );

  return (
    <Root
      {...others}
      ref={ref}
      data-disabled={dataDisabled}
      className={twMerge(labelStyles({ size }), className)}
    >
      {children}
      {labelRequiredIndicator}
    </Root>
  );
});

Label.displayName = 'Label';
