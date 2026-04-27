'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export default function ThemeToggle() {
  const { isDark, toggle, mounted } = useTheme();

  if (!mounted) {
    return <div className="h-10 w-10 rounded-[12px] border border-border bg-muted-bg" />;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className="
        relative flex h-10 w-10 items-center justify-center
        rounded-[12px] border border-border
        bg-card text-foreground
        soft-shadow
        transition-all duration-300
        hover:border-primary/40 hover:bg-primary/5 hover:text-primary
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
      "
    >
      <Sun
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          isDark ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-90'
        }`}
      />
      <Moon
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          isDark ? 'scale-0 opacity-0 -rotate-90' : 'scale-100 opacity-100 rotate-0'
        }`}
      />
    </button>
  );
}
