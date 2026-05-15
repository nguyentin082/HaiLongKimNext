'use client';

import { createContext, useContext, useState, useEffect } from 'react';

/* ─── Scroll detection ──────────────────────────────────────── */

/**
 * Returns true while the #hero section is still visible behind the
 * fixed header. Switches to false once the user scrolls past the full
 * hero height, triggering the header's solid/glass style.
 */
function useHeaderMode(): boolean {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const getHeroHeight = () => {
      const hero = document.getElementById('hero');
      return hero ? hero.offsetHeight : window.innerHeight;
    };

    const check = () => setIsHeroVisible(window.scrollY < getHeroHeight());

    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });

    return () => {
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
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
