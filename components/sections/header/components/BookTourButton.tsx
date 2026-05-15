'use client';

import Link from 'next/link';
import { memo } from 'react';
import { PlaneTakeoff } from 'lucide-react';
import { useHeaderModeContext } from '../context/header-mode';

type BookTourButtonProps = {
  label: string;
  href?: string;
};

const BASE =
  'group inline-flex cursor-pointer items-center gap-2 rounded-full border transition-all duration-500 px-4 py-2.5 text-[14px] font-semibold md:px-5 md:py-3 md:text-[15px]';

const NORMAL = {
  wrapper:
    'border-primary/20 bg-linear-to-r from-white via-accent-50 to-primary-50 text-text-secondary shadow-[0_12px_28px_rgba(8,124,122,0.08),0_8px_18px_rgba(247,144,9,0.08)] hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_16px_34px_rgba(8,124,122,0.12),0_12px_24px_rgba(247,144,9,0.1)] dark:border-transparent dark:bg-linear-to-r dark:from-accent-500 dark:via-accent-600 dark:to-primary-600 dark:text-white dark:shadow-[0_12px_28px_rgba(8,124,122,0.18),0_10px_22px_rgba(247,144,9,0.18)]',
  icon: 'inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent-100 text-primary-700 ring-1 ring-accent-200 shadow-[0_8px_18px_rgba(247,144,9,0.12)] transition-transform duration-300 group-hover:rotate-12 dark:bg-white/16 dark:text-white dark:ring-0 dark:shadow-none dark:group-hover:bg-white/20',
  arrow: 'hidden text-text-secondary/80 transition-transform duration-300 group-hover:translate-x-0.5 dark:text-white/90 md:inline-flex',
};

const HERO = {
  wrapper:
    'border-white/30 bg-white/12 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/20 hover:border-white/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]',
  icon: 'inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:rotate-12',
  arrow: 'hidden text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 md:inline-flex',
};

const BookTourButton = memo(function BookTourButton({
  label,
  href = '#contact',
}: BookTourButtonProps) {
  const isHeroMode = useHeaderModeContext();
  const s = isHeroMode ? HERO : NORMAL;

  return (
    <Link href={href} className={`${BASE} ${s.wrapper}`} prefetch={false}>
      <span className={s.icon}>
        <PlaneTakeoff className="h-4 w-4 stroke-[2.25]" />
      </span>
      <span>{label}</span>
      <span className={s.arrow}>→</span>
    </Link>
  );
});

export default BookTourButton;

