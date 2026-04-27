'use client';

import { useTranslations } from 'next-intl';
import { Phone, MessageCircle, Send } from 'lucide-react';

export default function FloatingContact() {
  const t = useTranslations('floatingContact');

  return (
    <div className="fixed bottom-[13px] right-[11px] z-50 rounded-full bg-muted-bg p-[7px] float-shadow">
      <div className="flex flex-col gap-4">
        <a
          href="tel:0901234567"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f28c10] text-white shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label={t('ariaPhone')}
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href="https://zalo.me"
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label={t('ariaZalo')}
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href="https://m.me"
          target="_blank"
          rel="noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label={t('ariaMessenger')}
        >
          <Send className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
