'use client';

import { useTranslations } from 'next-intl';
import { Phone, MessageSquareText, MessagesSquare, ArrowUp } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FabButton } from './components/FabButton';

const ICON_CLASS = 'h-5 w-5 drop-shadow-sm';

const PHONE_COLOR =
  'bg-[#F79009]/60 hover:bg-[#F79009]/80 dark:bg-[#FF9F1C]/40 dark:border-white/10 dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.3)] dark:hover:bg-[#FF9F1C]/60';

const TEAL_COLOR =
  'bg-[#087C7A]/60 hover:bg-[#087C7A]/80 dark:bg-[#4CC8C5]/40 dark:border-white/10 dark:text-[#042728] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.3)] dark:hover:bg-[#4CC8C5]/60';

export default function FabSection() {
  const t = useTranslations('floatingContact');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // Throttle with rAF — coalesces rapid scroll events into 1 per frame
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        const shouldShow = window.scrollY > 100;
        // Functional updater: only triggers re-render if value actually changes
        setShowScrollTop((prev) => (prev !== shouldShow ? shouldShow : prev));
        rafRef.current = 0;
      });
    };

    // { passive: true } is CRITICAL — tells browser this handler never calls
    // preventDefault(), so it can start scrolling without waiting for JS
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3.5">
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <FabButton
              onClick={scrollToTop}
              ariaLabel={t('ariaScrollTop')}
              tooltip={t('tooltipScrollTop')}
              colorClass={TEAL_COLOR}
              icon={<ArrowUp className={ICON_CLASS} strokeWidth={2} />}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <FabButton
        href="tel:0901234567"
        ariaLabel={t('ariaPhone')}
        tooltip="Hotline"
        colorClass={PHONE_COLOR}
        icon={<Phone className={ICON_CLASS} strokeWidth={2} />}
      />
      <FabButton
        href="https://zalo.me"
        ariaLabel={t('ariaZalo')}
        tooltip="Zalo"
        colorClass={TEAL_COLOR}
        icon={<MessageSquareText className={ICON_CLASS} strokeWidth={2} />}
        external
      />
      <FabButton
        href="https://m.me"
        ariaLabel={t('ariaMessenger')}
        tooltip="Messenger"
        colorClass={TEAL_COLOR}
        icon={<MessagesSquare className={ICON_CLASS} strokeWidth={2} />}
        external
      />
    </div>
  );
}
