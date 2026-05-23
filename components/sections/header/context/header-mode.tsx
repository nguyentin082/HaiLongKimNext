'use client';

import { createContext, useContext, useState, useEffect, useRef } from 'react';

/* ─── Scroll detection ──────────────────────────────────────── */

/**
 * Returns true while the #hero section is still visible behind the
 * fixed header. Switches to false once the user scrolls past the full
 * hero height, triggering the header's solid/glass style.
 *
 * Performance: uses rAF throttling + ref-guarded setState to avoid
 * unnecessary re-renders during scroll (~60-120 events/sec on mobile).
 */
function useHeaderMode(): boolean {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const isHeroVisibleRef = useRef(true);
  const heroHeightRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Cache hero height once — avoids DOM read (offsetHeight) every scroll frame
    const hero = document.getElementById('hero');
    heroHeightRef.current = hero ? hero.offsetHeight : window.innerHeight;

    const check = () => {
      const visible = window.scrollY < heroHeightRef.current;
      // Only trigger re-render when value actually changes
      if (visible !== isHeroVisibleRef.current) {
        isHeroVisibleRef.current = visible;
        setIsHeroVisible(visible);
      }
    };

    // Throttle to 1 check per animation frame — coalesces rapid scroll events
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        check();
        rafRef.current = 0;
      });
    };

    const handleResize = () => {
      const hero = document.getElementById('hero');
      heroHeightRef.current = hero ? hero.offsetHeight : window.innerHeight;
      check();
    };

    check();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return isHeroVisible;
}

/* ─── Context ───────────────────────────────────────────────── */

const HeaderModeContext = createContext<boolean>(false);

/** Consume the hero-mode boolean in any header sub-component. */
export const useHeaderModeContext = () => useContext(HeaderModeContext);

/* ─── Provider ──────────────────────────────────────────────── */

type HeaderModeProviderProps = { children: React.ReactNode };

/**
 * Drop this around the header's inner content.
 * It reads the scroll position and broadcasts `isHeroMode` via context
 * so every sub-component can adapt without prop drilling.
 */
export function HeaderModeProvider({ children }: HeaderModeProviderProps) {
  const isHeroMode = useHeaderMode();
  return (
    <HeaderModeContext.Provider value={isHeroMode}>
      {children}
    </HeaderModeContext.Provider>
  );
}
