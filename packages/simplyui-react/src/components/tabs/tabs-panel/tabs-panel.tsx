import type { TabsPanelProps } from './tabs-panel.types';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';
import { tabsPanelStyles } from './tabs-panel.styles';

export const TabsPanel = forwardRef<HTMLDivElement, TabsPanelProps>(function TabsPanel(props, ref) {
  const { size, className, children, ...others } = props;

  return (
    <Content ref={ref} className={twMerge(tabsPanelStyles({ size }), className)} {...others}>
      {children}
    </Content>
  );
});

TabsPanel.displayName = 'TabsPanel';
