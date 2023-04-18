import type { TabsTriggerProps } from './tabs-trigger.types';
import { forwardRef } from 'react';
import { Trigger } from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';
import { useTabsContext } from '../tabs-context/tabs-context';
import { tabsTriggerStyles } from './tabs-trigger.styles';

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(function TabsTrigger(
  props,
  ref
) {
  const { color, focusOutlineColor, className, leftSection, rightSection, children, ...others } =
    props;

  const {
    rounded,
    variant,
    color: _color,
    focusOutlineColor: _focusOutlineColor,
  } = useTabsContext();

  const tabsTriggerColor = color ?? _color;
  const tabsTriggerFocusOutlineColor = focusOutlineColor ?? _focusOutlineColor;

  return (
    <Trigger
      ref={ref}
      className={twMerge(
        tabsTriggerStyles({
          rounded,
          variant,
          color: tabsTriggerColor,
          focusOutlineColor: tabsTriggerFocusOutlineColor,
        }),
        className
      )}
      {...others}
    >
      {leftSection && leftSection}
      {children}
      {rightSection && rightSection}
    </Trigger>
  );
});

TabsTrigger.displayName = 'TabsTrigger';
