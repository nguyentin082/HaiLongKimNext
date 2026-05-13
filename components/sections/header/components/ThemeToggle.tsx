'use client';

import { Sun, Moon } from 'lucide-react';
import { memo } from 'react';
import { useTheme } from '@/hooks/use-theme';

// Theme toggle styles converted to use Tailwind's dark: modifier for zero-JS styling
const THEME_STYLES = {
  button:
    'group relative inline-flex h-11 w-20 cursor-pointer items-center rounded-full border p-1 transition-[transform,box-shadow,background-color,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 bg-[linear-gradient(180deg,rgba(255,247,237,0.98)_0%,rgba(254,215,170,0.98)_100%)] dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.98)_0%,rgba(30,41,59,0.98)_100%)] border-[rgba(251,191,36,0.35)] dark:border-[rgba(148,163,184,0.18)] shadow-[0_14px_30px_rgba(245,158,11,0.18),inset_0_1px_0_rgba(255,255,255,0.45)] dark:shadow-[0_14px_30px_rgba(15,23,42,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]',
  glow: 'pointer-events-none absolute inset-0 overflow-hidden rounded-full',
  glowLight:
    'absolute -top-6 h-14 w-14 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.95)_0%,rgba(254,243,199,0.95)_45%,rgba(251,191,36,0)_75%)] -left-1 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-100 dark:opacity-0',
  glowDark:
    'absolute -top-6 h-14 w-14 rounded-full left-10 bg-[radial-gradient(circle_at_35%_35%,rgba(248,250,252,0.28)_0%,rgba(148,163,184,0.1)_42%,rgba(15,23,42,0)_72%)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 dark:opacity-100',
  slider:
    'relative inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform translate-x-0 dark:translate-x-[2.25rem] border-[rgba(251,191,36,0.8)] dark:border-[rgba(255,255,255,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(254,243,199,0.98))] dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(30,41,59,0.98))] shadow-[0_8px_20px_rgba(245,158,11,0.2)] dark:shadow-[0_8px_20px_rgba(15,23,42,0.45)]',
};

const ThemeToggle = memo(function ThemeToggle() {
  const { isDark, toggle, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted && isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={mounted && isDark}
      suppressHydrationWarning
      className={THEME_STYLES.button}
    >
      <span aria-hidden="true" className={THEME_STYLES.glow}>
        <span className={THEME_STYLES.glowLight} />
        <span className={THEME_STYLES.glowDark} />
        <span className="absolute top-2 h-1.5 w-1.5 rounded-full bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] left-2 opacity-0 dark:left-4 dark:opacity-100" />
        <span className="absolute top-4 h-1 w-1 rounded-full bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.65)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] left-5 opacity-0 dark:left-7 dark:opacity-100" />
        <span className="absolute top-2.5 h-1 w-1 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.7)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] left-7 opacity-0 dark:left-8 dark:opacity-100" />
      </span>

      <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-[13px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] scale-100 opacity-100 dark:scale-0 dark:opacity-0">
        <Sun className="h-4 w-4 drop-shadow-[0_0_10px_rgba(251,191,36,0.55)]" />
      </span>

      <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-[13px] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] scale-0 opacity-0 dark:scale-100 dark:opacity-100">
        <Moon className="h-4 w-4 drop-shadow-[0_0_10px_rgba(147,197,253,0.45)]" />
      </span>

      <span aria-hidden="true" className={THEME_STYLES.slider}>
        <Sun className="absolute h-4 w-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] rotate-0 scale-100 opacity-100 dark:rotate-90 dark:scale-0 dark:opacity-0" />
        <Moon className="absolute h-4 w-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] -rotate-90 scale-0 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100" />
      </span>
    </button>
  );
});

export default ThemeToggle;
