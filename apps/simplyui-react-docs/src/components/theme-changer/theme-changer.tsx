'use client';
import { useTheme } from 'next-themes';
import { IconButton } from '@simplyui/react';
import { IconSunHigh } from '@tabler/icons-react';

export function ThemeChanger() {
  const { theme, setTheme } = useTheme();

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

  return (
    <IconButton size="sm" aria-label={label} onClick={handleClick}>
      <IconSunHigh size="1rem" />
    </IconButton>
  );
}
