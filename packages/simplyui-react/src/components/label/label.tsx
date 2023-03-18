import type { LabelProps } from './label.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { LabelAsterisk } from './label-asterisk/label-asterisk';
import { labelStyles } from './label.styles';

const defaultProps: Partial<LabelProps> = {
  size: 'md',
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(props, ref) {
  const { size, withAsterisk, className, asteriskClassName, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <Root {...others} ref={ref} className={twMerge(labelStyles({ size }), className)}>
      {children}
      {withAsterisk && <LabelAsterisk className={asteriskClassName} />}
    </Root>
  );
});

Label.displayName = 'Label';
