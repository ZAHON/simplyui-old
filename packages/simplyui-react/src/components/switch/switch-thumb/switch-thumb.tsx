import type { SwitchThumbProps } from './switch-thumb.types';
import { Thumb } from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';
import { switchThumbstyles } from './switch-thumb.styles';

export function SwitchThumb(props: SwitchThumbProps) {
  const { variant, size, rounded, className, children } = props;

  return (
    <Thumb className={twMerge(switchThumbstyles({ variant, size, rounded }), className)}>
      {children}
    </Thumb>
  );
}
