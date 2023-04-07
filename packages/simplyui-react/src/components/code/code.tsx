import type { CodeProps } from './code.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { codeStyles } from './code.styles';

const defaultProps: Partial<CodeProps> = {
  size: 'md',
  color: 'text',
  backgroundColor: 'neutral',
  rounded: 'xs',
};

export const Code = forwardRef<HTMLElement, CodeProps>(function Code(props, ref) {
  const { size, color, backgroundColor, rounded, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <code
      {...others}
      ref={ref}
      className={twMerge(codeStyles({ size, color, backgroundColor, rounded }), className)}
    >
      {children}
    </code>
  );
});

Code.displayName = 'Code';
