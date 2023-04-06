import type { KbdProps } from './kbd.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { kbdStyles } from './kbd.styles';

const defaultProps: Partial<KbdProps> = {
  size: 'sm',
  rounded: 'xs',
};

export const Kbd = forwardRef<HTMLElement, KbdProps>(function Kbd(props, ref) {
  const { size, rounded, className, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <kbd {...others} ref={ref} className={twMerge(kbdStyles({ size, rounded }), className)}>
      {children}
    </kbd>
  );
});

Kbd.displayName = 'Kbd';
