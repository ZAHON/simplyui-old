import '../../../styles/globals.css';
import type { ReactNode } from 'react';
import { Providers } from '@/components/index';
import { Shell } from './shell';

export const metadata = {
  title: 'Simplyui React',
  description: 'React components library',
};

type DocsLayoutProps = {
  children: ReactNode;
};

export default function DocsLayout(props: DocsLayoutProps) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
