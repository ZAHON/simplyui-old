import '../../styles/globals.css';
import type { ReactNode } from 'react';
import { Providers } from '@/components';

export const metadata = {
  title: 'Simplyui React',
  description: 'React components library',
};

type HomeLayoutProps = {
  children: ReactNode;
};

export default function HomeLayout(props: HomeLayoutProps) {
  const { children } = props;

  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
