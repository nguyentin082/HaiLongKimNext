'use client';

import { useTranslations } from 'next-intl';
import BookingCards from '@/components/sections/booking-cards';
import {
  BadgeCheck,
  MapPin,
  Wallet,
  History,
  Award,
} from 'lucide-react';

const LOGO_SRC = '/icons/hailongkim-logo.svg';

export default function About() {
  const tAbout = useTranslations('about');

  const checks = [
    {
      text: tAbout('check1'),
      Icon: BadgeCheck,
    },
    {
      text: tAbout('check2'),
      Icon: MapPin,
    },
    {
      text: tAbout('check3'),
      Icon: Wallet,
    },
    {
      text: tAbout('check4'),
      Icon: History,
    },
  ];

  return (
    <>
      <svg width="0" height="0" className="absolute">
        <linearGradient id="primary-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="rgb(54, 160, 157)" offset="0%" />
          <stop stopColor="rgb(6, 110, 108)" offset="100%" />
        </linearGradient>
        <linearGradient id="primary-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="rgb(116, 216, 213)" offset="0%" />
          <stop stopColor="rgb(35, 157, 157)" offset="100%" />
        </linearGradient>
      </svg>
      <section id="about" className="relative w-full flow-root bg-zinc-50 dark:bg-zinc-900/30">
        <BookingCards />
        <div className="section-shell py-12 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center relative z-10 w-full">
          <div className="w-full max-w-full">
            <p className="font-display text-[14px] font-bold uppercase tracking-[0.14em] text-primary flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {tAbout('eyebrow')}
            </p>
            <h2 className="mt-3 w-full font-display text-[32px] font-extrabold leading-tight text-accent md:text-[44px]">
              {tAbout('title')}
            </h2>
            <div className="mt-5 w-full space-y-4 text-[15px] italic leading-8 text-text-muted md:text-[16px] text-justify lg:text-left">
              <p>
                {tAbout.rich('description1', {
                  strong: (chunks) => (
                    <strong className="font-bold text-[#F79009] dark:text-[#FF9F1C]">
                      {chunks}
                    </strong>
                  ),
                })}
              </p>
              <p>
                {tAbout.rich('description2', {
                  strong: (chunks) => (
                    <strong className="font-bold text-[#F79009] dark:text-[#FF9F1C]">
                      {chunks}
                    </strong>
                  ),
                })}
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {checks.map((check, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <check.Icon
                      className="w-6 h-6 dark:hidden"
                      stroke="url(#primary-gradient-light)"
                    />
                    <check.Icon
                      className="w-6 h-6 hidden dark:block"
                      stroke="url(#primary-gradient-dark)"
                    />
                  </div>
                  <span className="text-[15px] font-semibold text-text-secondary transition-colors group-hover:text-primary">
                    {check.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative flex items-center justify-center p-4">
              <img
                src={LOGO_SRC}
                alt={tAbout('logoAlt')}
                className="relative z-10 w-full max-w-[450px] lg:max-w-[500px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute -bottom-6 -right-2 sm:-right-6 z-20 flex items-center gap-4 rounded-3xl bg-gradient-to-br from-white/90 via-white/30 to-black/10 dark:from-white/10 dark:via-black/20 dark:to-black/60 px-6 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-white/60 border-b-black/20 border-r-black/20 dark:border-white/10 dark:border-b-black/60 dark:border-r-black/60 backdrop-blur-[24px] saturate-[1.2]">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.5)] border border-white/20 dark:border-white/5"
                  style={{
                    backgroundColor: 'rgba(var(--accent-500), 0.15)',
                    color: 'rgb(var(--accent-500))',
                  }}
                >
                  <Award className="h-7 w-7" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span
                    className="font-display text-[32px] font-extrabold leading-none tracking-tight text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, rgb(var(--accent-400)), rgb(var(--accent-600)))',
                    }}
                  >
                    {tAbout('hotlineLabel')}
                  </span>
                  <span className="mt-1 text-[13px] font-medium leading-snug text-muted-foreground">
                    {tAbout('hotlineValue')}
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
