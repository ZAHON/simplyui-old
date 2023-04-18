import { TabsProps } from './tabs.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '../../utils';
import { TabsContextProvider } from './tabs-context/tabs-context';
import { tabsStyles } from './tabs.styles';

const defaultProps: Partial<TabsProps> = {
  variant: 'default',
  size: 'md',
  color: 'primary',
  focusOutlineColor: 'primary',
  rounded: 'md',
  orientation: 'horizontal',
  activationMode: 'automatic',
};

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(props, ref) {
  const { size, variant, color, focusOutlineColor, rounded, className, children, ...others } =
    applayComponentDefaultProps(defaultProps, props);

  return (
    <Root ref={ref} className={twMerge(tabsStyles({ size }), className)} {...others}>
      <TabsContextProvider value={{ variant, color, focusOutlineColor, rounded }}>
        {children}
      </TabsContextProvider>
    </Root>
  );
});

Tabs.displayName = 'Tabs';
