import { memo } from 'react';
import { cn } from '@/lib/utils';

export const FlagComponent = memo(function FlagComponent({
  flag,
  active,
  size,
}: {
  flag: 'vn' | 'us';
  active: boolean;
  size: 'sm' | 'md';
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'fi shrink-0 overflow-hidden rounded-full bg-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        `fi-${flag}`,
        size === 'sm' ? 'h-8 w-8' : 'h-10 w-10',
        active
          ? 'shadow-[0_10px_22px_rgba(8,124,122,0.20)] ring-1 ring-primary/20 dark:shadow-[0_10px_22px_rgba(15,23,42,0.42)] dark:ring-primary/30'
          : 'opacity-90 saturate-90 shadow-none hover:opacity-100 hover:saturate-100 dark:opacity-85',
      )}
    />
  );
});
