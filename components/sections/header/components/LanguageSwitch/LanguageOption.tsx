import { memo } from 'react';
import { cn } from '@/lib/utils';
import { FlagComponent } from './FlagComponent';

export const LanguageOption = memo(function LanguageOption({
  locale,
  flag,
  label,
  active,
  size,
  onClick,
}: {
  locale: 'vi' | 'en';
  flag: 'vn' | 'us';
  label: string;
  active: boolean;
  size: 'sm' | 'md';
  onClick: () => void;
}) {
  const buttonClass = size === 'sm' 
    ? 'group relative flex min-w-0 cursor-pointer items-center justify-center gap-2 rounded-full px-3 h-9 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]'
    : 'group relative flex min-w-0 cursor-pointer items-center justify-center gap-2 rounded-full px-3 h-11 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]';

  return (
    <button
      key={locale}
      type="button"
      onClick={onClick}
      className={cn(
        buttonClass,
        active
          ? 'bg-linear-to-b from-primary-500 via-primary-600 to-primary-700 text-primary-foreground shadow-[0_12px_24px_rgba(8,124,122,0.24),inset_0_1px_0_rgba(255,255,255,0.12)] dark:from-slate-800 dark:via-slate-900 dark:to-slate-950 dark:text-emerald-50 dark:shadow-[0_12px_24px_rgba(15,23,42,0.42),inset_0_1px_0_rgba(255,255,255,0.05)]'
          : 'bg-transparent text-text-muted hover:bg-primary-50/70 hover:text-primary-700 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-emerald-50',
      )}
      aria-label={label}
      aria-pressed={active}
      title={label}
    >
      <FlagComponent flag={flag} active={active} size={size} />
      <span className={cn(
        'text-[0.7rem] font-semibold tracking-[0.18em] transition-colors',
        active
          ? 'text-primary-foreground dark:text-emerald-50'
          : 'text-text-muted dark:text-slate-400',
      )}>
        {locale.toUpperCase()}
      </span>
    </button>
  );
});
