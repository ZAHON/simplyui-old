import type { TabsContextValue, TabsContextProviderProps } from './tabs-context.types';
import { createContext, useContext } from 'react';

const TabsContext = createContext<TabsContextValue | undefined>(undefined);

export function TabsContextProvider(props: TabsContextProviderProps) {
  const { value, children } = props;

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}

export function useTabsContext() {
  const context = useContext(TabsContext);

  if (context === undefined) {
    throw new Error('useTabsContext must be used within a TabsContextProvider');
  }

  return context;
}
