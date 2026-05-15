'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import HeroBackground from './components/HeroBackground';
import HeroArrows from './components/HeroArrows';
import HeroContent from './components/HeroContent';

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
];

export default function Hero() {
  const t = useTranslations('hero');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  // Optional: Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-black"
    >
      <HeroBackground 
        images={HERO_IMAGES} 
        currentIndex={currentImageIndex} 
        imageAlt={t('imageAlt')} 
      />
      
      <HeroArrows 
        onPrev={prevSlide} 
        onNext={nextSlide} 
      />

      <HeroContent />
    </section>
  );
}
