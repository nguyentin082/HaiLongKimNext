'use client';

import { useEffect, useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useScroll } from 'framer-motion';

const cards = [
  {
    id: 'card1',
    icon: '/icons/train.svg',
    href: '#',
  },
  {
    id: 'card2',
    icon: '/icons/boat.svg',
    href: '#',
  },
  {
    id: 'card3',
    icon: '/icons/ticket.svg',
    href: '#',
  },
  {
    id: 'card4',
    icon: '/icons/car.svg',
    href: '#',
  },
  {
    id: 'card5',
    icon: '/icons/cabcar.svg',
    href: '#',
  },
];

export default function BookingCards() {
  const t = useTranslations('bookingCards');
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Track scroll state in a ref to avoid re-subscribing on every toggle.
  // The ref always holds the latest value; we only call setState when the
  // value actually changes, preventing the stale-closure re-subscribe loop.
  const isScrolledRef = useRef(false);

  useEffect(() => {
    // Check initial scroll position
    if (window.scrollY > 20) {
      isScrolledRef.current = true;
      setIsScrolled(true);
    }

    const unsubscribe = scrollY.on('change', (latest) => {
      const shouldBeScrolled = latest > 20;
      if (shouldBeScrolled !== isScrolledRef.current) {
        isScrolledRef.current = shouldBeScrolled;
        setIsScrolled(shouldBeScrolled);
      }
    });

    return () => unsubscribe();
    // scrollY is stable (Framer Motion), isScrolled intentionally excluded
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);

  return (
    <section className="relative z-20 w-full px-4 -mt-10 md:-mt-16 lg:-mt-24 pointer-events-none">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 pointer-events-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isScrolled ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.95 }}
              transition={{
                duration: isScrolled ? 0.6 : 0.3,
                delay: isScrolled ? index * 0.1 : (cards.length - 1 - index) * 0.05,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex w-[calc(50%-6px)] flex-col items-center justify-center rounded-2xl md:rounded-[2rem] bg-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.06)] cursor-default sm:w-[calc(33.333%-8px)] lg:w-auto lg:flex-1 dark:bg-zinc-900/95 dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] dark:backdrop-blur-md dark:border dark:border-white/5"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF5EB] md:mb-4 md:h-16 md:w-16 dark:bg-orange-500/10">
                <img
                  src={card.icon}
                  alt={t(card.id)}
                  className="h-7 w-7 md:h-8 md:w-8 object-contain"
                />
              </div>
              <span className="text-center text-[13px] font-semibold text-zinc-800 md:text-[15px] dark:text-zinc-200">
                {t(card.id)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
