import type { BurgerProps } from './burger.types';
import type { BurgerIconProps } from './burger-icon/burger-icon.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { BurgerIcon } from './burger-icon/burger-icon';
import { burgerStyles } from './burger.styles';

const defaultProps: Partial<BurgerProps> = {
  size: 'md',
  color: 'neutral',
  variant: 'subtle',
  bars: 3,
  transitionDuration: 300,
  roundedBars: true,
};

export const Burger = forwardRef<HTMLButtonElement, BurgerProps>(function Burger(props, ref) {
  const {
    opened,
    roundedBars,
    bars,
    size,
    iconSize,
    color,
    variant,
    rounded,
    transitionDuration,
    className,
    iconClassName,
    iconStyle,
    ...others
  } = applayComponentDefaultProps(defaultProps, props);

  const burgerIconProps: BurgerIconProps = {
    opened,
    roundedBars,
    bars,
    size,
    iconSize,
    color,
    transitionDuration,
    className: iconClassName,
    style: iconStyle,
  };

  return (
    <button
      {...others}
      ref={ref}
      type="button"
      className={twMerge(burgerStyles({ size, rounded, variant, color }), className)}
    >
      <BurgerIcon {...burgerIconProps} />
    </button>
  );
});

Burger.displayName = 'Burger';
