'use client';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { Burger } from '@simplyui/react';
import { Header } from './header';
import { Nav } from './nav';

type ShellProps = {
  children: ReactNode;
};

export function Shell(props: ShellProps) {
  const { children } = props;

  const [navOpened, setNavOpened] = useState(false);
  const burgerAriaLabel = `${navOpened ? 'Close' : 'Open'} navigation`;

  function handleBurgerClick() {
    if (navOpened) {
      setNavOpened(false);
      document.body.style.overflowY = 'auto';
    } else {
      setNavOpened(true);
      document.body.style.overflowY = 'hidden';
    }
  }

  return (
    <>
      <Header>
        <Burger
          size="sm"
          bars={2}
          aria-label={burgerAriaLabel}
          opened={navOpened}
          onClick={handleBurgerClick}
          className="lg:hidden"
        />
      </Header>
      <Nav opened={navOpened} />
      <div className="md:ml-64">
        <div className="max-w-4xl mx-auto">
          <main className="p-6">{children}</main>
        </div>
      </div>
    </>
  );
}
