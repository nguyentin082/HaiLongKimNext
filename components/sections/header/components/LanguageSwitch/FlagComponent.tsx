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
        'fi shrink-0 overflow-hidden rounded-full transition-all duration-300',
        `fi-${flag}`,
        size === 'sm' ? 'h-4 w-4' : 'h-5 w-5',
        active ? 'opacity-100' : 'opacity-50',
      )}
    />
  );
});
