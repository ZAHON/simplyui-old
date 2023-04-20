'use client';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

type ProvidersProps = {
  children: ReactNode;
};

export function Providers(props: ProvidersProps) {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
}
