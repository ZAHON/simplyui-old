import type { BurgerIconProps, BurgerIconStyle } from './burger-icon.types';
import { twMerge } from 'tailwind-merge';
import { burgerIconStyles } from './burger-icon.styles';

export function BurgerIcon(props: BurgerIconProps) {
  const {
    opened,
    bars,
    roundedBars,
    size,
    iconSize,
    color,
    transitionDuration,
    className,
    style,
    ...others
  } = props;

  const dataOpened = opened ? '' : undefined;
  const burgerIconSize = iconSize ? iconSize : size;

  const burgerIconStyle: BurgerIconStyle = {
    '--burger-icon-transition-duration': `${transitionDuration}ms`,
    ...style,
  };

  return (
    <div
      {...others}
      data-opened={dataOpened}
      style={burgerIconStyle}
      className={twMerge(
        burgerIconStyles({ size: burgerIconSize, color, roundedBars, bars }),
        className
      )}
    />
  );
}
