import type { ReactNode } from 'react';
import type { TabsProps } from '../tabs.types';

export type TabsContextValue = {
  color: TabsProps['color'];
  focusOutlineColor: TabsProps['focusOutlineColor'];
  variant: TabsProps['variant'];
  rounded: TabsProps['rounded'];
};

export type TabsContextProviderProps = {
  value: TabsContextValue;
  children: ReactNode;
};
