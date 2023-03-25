import type { LabelProps } from './label.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { LabelDescription } from './label-description/label-description';
import { labelStyles } from './label.styles';

const defaultProps: Partial<LabelProps> = {
  size: 'md',
  color: 'default',
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(function Label(props, ref) {
  const {
    disabled,
    size,
    color,
    withAsterisk,
    description,
    rootClassName,
    labelClassName,
    asteriskClassName,
    descriptionClassName,
    children,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const asterisk = ' *';
  const dataDisabled = disabled ? '' : undefined;

  return (
    <div className={twMerge(rootClassName)}>
      <Root
        {...others}
        ref={ref}
        data-disabled={dataDisabled}
        className={twMerge(labelStyles({ size, color }), labelClassName)}
      >
        {children}
        {withAsterisk && (
          <span
            aria-hidden
            data-disabled={dataDisabled}
            className={twMerge('text-error-11', asteriskClassName)}
          >
            {asterisk}
          </span>
        )}
      </Root>
      {description && (
        <LabelDescription
          data-disabled={dataDisabled}
          color={color}
          className={descriptionClassName}
        >
          {description}
        </LabelDescription>
      )}
    </div>
  );
});

Label.displayName = 'Label';
