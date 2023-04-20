'use client';
import type { ReactNode } from 'react';
import { ThemeChanger } from '@/components';

type HeaderProps = {
  children: ReactNode;
};

export function Header(props: HeaderProps) {
  const { children } = props;

  return (
    <div className="w-full h-16 sticky z-20 top-0 left-0 bg-layout-background border-b border-b-neutral-4">
      <header className="h-full px-6 flex justify-between items-center">
        <h1>Simplyiu</h1>
        <div className="flex gap-x-2">
          <ThemeChanger />
          {children}
        </div>
      </header>
    </div>
  );
}
