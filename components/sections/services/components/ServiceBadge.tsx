'use client';

import { memo } from 'react';
import { Flame, Sparkles } from 'lucide-react';
import type { ServiceBadgeVariant } from '../types';

type ServiceBadgeProps = {
  label: string;
  variant: ServiceBadgeVariant;
};

function ServiceBadgeBase({ label, variant }: ServiceBadgeProps) {
  const isAccent = variant === 'accent';
  const Icon = isAccent ? Sparkles : Flame;

  return (
    <div className="absolute right-4 top-4 z-20">
      <div
        className={[
          'flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 backdrop-blur-md shadow-sm',
          'bg-white/85 dark:bg-black/50 dark:border-white/10 border-white/20',
          isAccent
            ? 'text-amber-600 dark:text-amber-400'
            : 'text-emerald-700 dark:text-emerald-400',
        ].join(' ')}
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
        <span className="text-[11px] font-bold uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
}

export const ServiceBadge = memo(ServiceBadgeBase);