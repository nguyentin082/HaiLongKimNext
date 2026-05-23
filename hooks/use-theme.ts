'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const THEME_TRANSITION_MS = 500;

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme') as Theme | null;
    // Always default to light mode; only respect a previously stored user preference
    const resolved: Theme = stored ?? 'light';
    // On initial mount: apply theme WITHOUT the transition class so hover
    // animations work immediately from the first frame.
    applyTheme(resolved, { animate: false });
    setTheme(resolved);
  }, []);

  function applyTheme(t: Theme, { animate = true }: { animate?: boolean } = {}) {
    const html = document.documentElement;

    if (animate) {
      html.classList.add('theme-transitioning');
    }

    if (t === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    if (animate) {
      window.setTimeout(() => {
        html.classList.remove('theme-transitioning');
      }, THEME_TRANSITION_MS);
    }

    localStorage.setItem('theme', t);
  }

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    // User-triggered toggle: animate = true (default)
    applyTheme(next);
    setTheme(next);
  }

  return { theme, toggle, mounted, isDark: theme === 'dark' };
}

