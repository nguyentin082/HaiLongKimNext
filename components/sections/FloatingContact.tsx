'use client';

import { useTranslations } from 'next-intl';
import { Phone, MessageSquareText, MessagesSquare } from 'lucide-react';

export default function FloatingContact() {
  const t = useTranslations('floatingContact');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5">
      {/* Phone Button */}
      <div className="group relative flex items-center gap-3">
        <span className="absolute right-14 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 opacity-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-xl border border-white/60 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 dark:bg-black/50 dark:border-white/10 dark:text-gray-200 pointer-events-none">
          Hotline
        </span>
        <a
          href="tel:0901234567"
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#F79009]/60 backdrop-blur-xl border border-white/40 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-105 hover:bg-[#F79009]/80 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_6px_16px_rgba(0,0,0,0.12)] dark:bg-[#FF9F1C]/40 dark:border-white/10 dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.3)] dark:hover:bg-[#FF9F1C]/60"
          aria-label={t('ariaPhone')}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
          <Phone className="relative z-10 h-5 w-5 drop-shadow-sm" strokeWidth={2} />
        </a>
      </div>

      {/* Zalo Button */}
      <div className="group relative flex items-center gap-3">
        <span className="absolute right-14 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 opacity-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-xl border border-white/60 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 dark:bg-black/50 dark:border-white/10 dark:text-gray-200 pointer-events-none">
          Zalo
        </span>
        <a
          href="https://zalo.me"
          target="_blank"
          rel="noreferrer"
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#087C7A]/60 backdrop-blur-xl border border-white/40 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-105 hover:bg-[#087C7A]/80 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_6px_16px_rgba(0,0,0,0.12)] dark:bg-[#4CC8C5]/40 dark:border-white/10 dark:text-[#042728] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.3)] dark:hover:bg-[#4CC8C5]/60"
          aria-label={t('ariaZalo')}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
          <MessageSquareText className="relative z-10 h-5 w-5 drop-shadow-sm" strokeWidth={2} />
        </a>
      </div>

      {/* Messenger Button */}
      <div className="group relative flex items-center gap-3">
        <span className="absolute right-14 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 opacity-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-xl border border-white/60 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 dark:bg-black/50 dark:border-white/10 dark:text-gray-200 pointer-events-none">
          Messenger
        </span>
        <a
          href="https://m.me"
          target="_blank"
          rel="noreferrer"
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#087C7A]/60 backdrop-blur-xl border border-white/40 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-105 hover:bg-[#087C7A]/80 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_6px_16px_rgba(0,0,0,0.12)] dark:bg-[#4CC8C5]/40 dark:border-white/10 dark:text-[#042728] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),0_4px_12px_rgba(0,0,0,0.3)] dark:hover:bg-[#4CC8C5]/60"
          aria-label={t('ariaMessenger')}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
          <MessagesSquare className="relative z-10 h-5 w-5 drop-shadow-sm" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
