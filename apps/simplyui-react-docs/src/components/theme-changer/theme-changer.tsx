'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { IconButton } from '@simplyui/react';
import { IconSunHigh } from '@tabler/icons-react';

export function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const label = `Switch to ${theme} theme`;

  function handleClick() {
    if (theme) {
      if (theme === 'light') {
        setTheme('dark');
      }

      if (theme === 'dark') {
        setTheme('light');
      }
    }
  }

  if (!mounted) {
    return null;
  }

  return (
    <IconButton size="sm" aria-label={label} onClick={handleClick}>
      <IconSunHigh size="1rem" />
    </IconButton>
  );
}
