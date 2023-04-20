'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { NativeSelect } from '@simplyui/react';
import { IconColorSwatch } from '@tabler/icons-react';

export function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      <div className="h-8 w-8 absolute top-0 left-0 flex justify-center items-center pointer-events-none z-10">
        <IconColorSwatch size="0.875rem" />
      </div>
      <NativeSelect
        size="sm"
        className="pl-8"
        wrapperProps={{ className: 'w-30' }}
        aria-label="Toggle theme"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </NativeSelect>
    </div>
  );
}
