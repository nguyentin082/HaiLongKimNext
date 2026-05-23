'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { useStableViewportHeight } from '@/hooks/use-stable-viewport-height';
import HeroBackground from './components/HeroBackground';
import HeroArrows from './components/HeroArrows';
import HeroContent from './components/HeroContent';

// Hoisted to module level — never recreated on re-render
const HERO_IMAGES = [
  '/images/hero/unsplash_3XeTyJW4mWs.jpg',
  '/images/hero/unsplash_6lrnBIBUbgg.jpg',
  '/images/hero/unsplash_7btoiH9Mtc8.jpg',
  '/images/hero/unsplash_LlsmsdQu4nA.jpg',
  '/images/hero/unsplash_MjYzuyjPUFo.jpg',
  '/images/hero/unsplash_PeRt3uMmjYM.jpg',
  '/images/hero/unsplash_PgSxHidgJHQ.jpg',
  '/images/hero/unsplash_PknaOrb1lVo.jpg',
  '/images/hero/unsplash_XMdhnFTaZ8c.jpg',
  '/images/hero/unsplash_cbetSkgoFq0.jpg',
  '/images/hero/unsplash_lcEPWkmqXAo.jpg',
  '/images/hero/unsplash_niFWqrLdjlE.jpg',
  '/images/hero/unsplash_wUk2U5Wirxg.jpg',
  '/images/hero/unsplash_xCrdGY4Ung4.jpg',
] as const;

const TOTAL = HERO_IMAGES.length;
const AUTOPLAY_INTERVAL = 5000;

export default function Hero() {
  const t = useTranslations('hero');
  const [currentIndex, setCurrentIndex] = useState(0);

  // ─── Stable viewport height ──────────────────────────────────────
  // Avoids the classic iOS/Android "100vh jank" where the hero section
  // continuously resizes as the address bar collapses/expands.
  // Returns null during SSR → we fall back to 100svh via CSS.
  const stableHeight = useStableViewportHeight();

  // Store pause state in a ref to avoid restarting the interval on hover toggle
  const isPausedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = useCallback(() => setCurrentIndex((i) => (i + 1) % TOTAL), []);
  const goPrev = useCallback(() => setCurrentIndex((i) => (i - 1 + TOTAL) % TOTAL), []);

  // Start a fresh interval — clears any existing one first
  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isPausedRef.current) goNext();
    }, AUTOPLAY_INTERVAL);
  }, [goNext]);

  // Boot the interval once on mount, clean up on unmount
  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetInterval]);

  // Manual navigation: change slide AND reset the timer so it never fires
  // immediately after a manual click (avoids double-advance within the same second)
  const handlePrev = useCallback(() => {
    goPrev();
    resetInterval();
  }, [goPrev, resetInterval]);

  const handleNext = useCallback(() => {
    goNext();
    resetInterval();
  }, [goNext, resetInterval]);

  return (
    <section
      id="hero"
      aria-label={t('companyName')}
      className="relative min-h-[600px] w-full overflow-hidden bg-black"
      style={{
        // Use JS-computed stable height when available.
        // Falls back to 100svh (smallest viewport) during SSR/first-paint,
        // which is the initial viewport WITH address bar visible — no jank.
        height: stableHeight ? `${stableHeight}px` : '100svh',
      }}
      // Pause auto-play while the user hovers anywhere over the hero section
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
    >
      <HeroBackground
        images={HERO_IMAGES}
        currentIndex={currentIndex}
        imageAlt={t('imageAlt')}
      />

      <HeroArrows onPrev={handlePrev} onNext={handleNext} />

      <HeroContent />
    </section>
  );
}
