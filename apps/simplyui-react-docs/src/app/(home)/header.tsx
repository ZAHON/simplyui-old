import { ThemeChanger } from '@/components';

export function Header() {
  return (
    <div className="w-full h-16 sticky z-20 top-0 left-0 bg-layout-background border-b border-b-neutral-4">
      <header className="h-full max-w-[90rem] mx-auto px-6 flex justify-between items-center">
        <h1>Simplyiu</h1>
        <ThemeChanger />
      </header>
    </div>
  );
}
