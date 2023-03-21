import type { ReactNode } from 'react';
import type { SliderProps } from '../slider.types';
import { createContext, useContext } from 'react';

type SliderContextValue = Pick<SliderProps, 'size' | 'color' | 'showLabel' | 'rounded'>;

type SliderContextProviderProps = {
  value: SliderContextValue;
  children: ReactNode;
};

const SliderContext = createContext<SliderContextValue | undefined>(undefined);

export function SliderContextProvider({ children, value }: SliderContextProviderProps) {
  return <SliderContext.Provider value={value}>{children}</SliderContext.Provider>;
}

export function useSliderContext() {
  const context = useContext(SliderContext);

  if (context === undefined) {
    throw new Error('useSliderContext must be used within a SliderContextProvider');
  }

  return context;
}
