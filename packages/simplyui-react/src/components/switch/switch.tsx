import type { SwitchProps } from './switch.types';
import { forwardRef, useState } from 'react';
import { Root } from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { SwitchThumb } from './switch-thumb/switch-thumb';
import { getInitialState } from './utils/get-initial-state';
import { getIcon } from './utils/get-icon';
import { switchStyles } from './switch.styles';

const defaultProps: Partial<SwitchProps> = {
  variant: 'filled',
  size: 'md',
  color: 'primary',
};

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(props, ref) {
  const {
    variant,
    size,
    color,
    rounded,
    icon,
    iconOn,
    iconOff,
    className,
    thumbClassName,
    onCheckedChange,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const { checked, defaultChecked } = props;

  const [isChecked, setIsChecked] = useState(getInitialState({ checked, defaultChecked }));

  const thumbIcon = getIcon({ isChecked, icon, iconOn, iconOff });

  function handleCheckedChange(checked: boolean) {
    if (iconOn || iconOff) {
      setIsChecked(checked);
    }

    if (onCheckedChange) {
      onCheckedChange(checked);
    }
  }

  return (
    <Root
      {...others}
      ref={ref}
      onCheckedChange={handleCheckedChange}
      className={twMerge(switchStyles({ variant, size, color, rounded }), className)}
    >
      <SwitchThumb variant={variant} size={size} rounded={rounded} className={thumbClassName}>
        {thumbIcon}
      </SwitchThumb>
    </Root>
  );
});

Switch.displayName = 'Switch';
