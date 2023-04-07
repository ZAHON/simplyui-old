import type { BurgerProps, BurgerRootStyle } from './burger.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { burgerRootStyles, burgerIconStyles } from './burger.styles';

const defaultProps: Partial<BurgerProps> = {
  size: 'md',
  color: 'text',
  transitionDuration: 300,
  roundedIconBars: true,
};

export const Burger = forwardRef<HTMLButtonElement, BurgerProps>(function Burger(props, ref) {
  const {
    opened,
    roundedIconBars,
    size,
    color,
    rounded,
    transitionDuration,
    rootClassName,
    rootStyle,
    iconClassName,
    iconStyle,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const burgerRootStyle: BurgerRootStyle = {
    '--burger-transition-duration': `${transitionDuration}ms`,
    ...rootStyle,
  };

  return (
    <button
      {...others}
      ref={ref}
      type="button"
      style={burgerRootStyle}
      className={twMerge(burgerRootStyles({ size, rounded }), rootClassName)}
    >
      <div
        data-opened={opened ? '' : undefined}
        style={iconStyle}
        className={twMerge(burgerIconStyles({ size, color, roundedIconBars }), iconClassName)}
      />
    </button>
  );
});

Burger.displayName = 'Burger';
