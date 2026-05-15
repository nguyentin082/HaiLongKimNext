'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
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

  // Stable callbacks — useCallback with no deps (functional setState)
  const next = useCallback(
    () => setCurrentIndex((i) => (i + 1) % TOTAL),
    [],
  );
  const prev = useCallback(
    () => setCurrentIndex((i) => (i - 1 + TOTAL) % TOTAL),
    [],
  );

  // Auto-play: depends only on stable `next` reference
  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section
      id="hero"
      aria-label={t('companyName')}
      className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-black"
    >
      <HeroBackground
        images={HERO_IMAGES}
        currentIndex={currentIndex}
        imageAlt={t('imageAlt')}
      />

      <HeroArrows onPrev={prev} onNext={next} />

      <HeroContent />
    </section>
  );
}
