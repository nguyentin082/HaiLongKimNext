import {
  Bus,
  Check,
  Compass,
  MapPin,
  Music,
  Phone,
  Plane,
  Ship,
  Ticket,
  Train,
  type LucideIcon,
} from 'lucide-react';

const FEATURE_ICON_RULES: Array<{ terms: string[]; icon: LucideIcon }> = [
  { terms: ['liên hệ', 'contact'], icon: Phone },
  { terms: ['máy bay', 'flight'], icon: Plane },
  { terms: ['tàu hoả', 'train'], icon: Train },
  { terms: ['cao tốc', 'speedboat', 'tàu'], icon: Ship },
  { terms: ['xe', 'bus', 'car'], icon: Bus },
  { terms: ['safari'], icon: Compass },
  { terms: ['show', 'diễn', 'live'], icon: Music },
  { terms: ['vinwonders', 'cáp treo', 'cable', 'ticket'], icon: Ticket },
  { terms: ['đảo', 'island', 'rút', 'móng tay'], icon: MapPin },
  { terms: ['sài gòn', 'hà tiên', 'phú quốc', 'route'], icon: MapPin },
];

export function getFeatureIcon(feature: string): LucideIcon {
  const normalizedFeature = feature.toLowerCase();

  for (const rule of FEATURE_ICON_RULES) {
    if (rule.terms.some((term) => normalizedFeature.includes(term))) {
      return rule.icon;
    }
  }

  return Check;
}