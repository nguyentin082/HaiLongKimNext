'use client';

import { memo } from 'react';
import { getFeatureIcon } from '../utils';

type ServiceFeaturesProps = {
  features: string[];
};

function ServiceFeaturesBase({ features }: ServiceFeaturesProps) {
  return (
    <ul
      className={`mt-auto mb-6 grid gap-x-3 gap-y-3 ${features.length >= 4 ? 'grid-cols-2' : 'grid-cols-1'}`}
    >
      {features.map((feature, index) => {
        const Icon = getFeatureIcon(feature);

        return (
          <li key={`${feature}-${index}`} className="flex items-start gap-2.5">
            <div className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
              <Icon className="h-[11px] w-[11px]" strokeWidth={2.5} />
            </div>
            <span className="text-[13px] font-medium leading-snug text-text-secondary/90">
              {feature}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export const ServiceFeatures = memo(ServiceFeaturesBase);