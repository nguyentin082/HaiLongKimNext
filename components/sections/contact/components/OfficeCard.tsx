'use client';

import { Copy, MapPinned, Route } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CARD_CLASSES, GLASS_ADDRESS_CLASSES, GLASS_BUTTON_CLASSES } from '../constants';
import type { Office } from '../types';

interface OfficeCardProps {
  office: Office;
  isCopied: boolean;
  onCopyAddress: (id: string, address: string) => void;
}

export function OfficeCard({ office, isCopied, onCopyAddress }: OfficeCardProps) {
  const t = useTranslations('contact');

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery || office.address)}`;
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery || office.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <article
      className={`group flex flex-col md:block md:relative flex-1 md:min-h-[324px] overflow-hidden ${CARD_CLASSES}`}
    >
      <div className="relative h-[300px] shrink-0 w-full md:absolute md:inset-0 md:h-full">
        <iframe
          title={office.title}
          src={embedSrc}
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex flex-col gap-4 p-5 md:absolute md:inset-0 md:block md:p-0 md:pointer-events-none">
        <div className="md:absolute md:inset-x-0 md:top-6 md:px-7 md:pointer-events-auto">
          <div className={`${GLASS_ADDRESS_CLASSES} w-full md:w-auto`}>{office.address}</div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:absolute md:inset-x-0 md:bottom-6 md:flex-row md:gap-[18px] md:px-7 md:pointer-events-auto">
          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className={`${GLASS_BUTTON_CLASSES} flex w-full justify-center sm:w-auto sm:justify-start md:inline-flex md:w-auto`}
          >
            <MapPinned className="h-4 w-4" />
            {t('actionMaps')}
          </a>
          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className={`${GLASS_BUTTON_CLASSES} flex w-full justify-center sm:w-auto sm:justify-start md:inline-flex md:w-auto`}
          >
            <Route className="h-4 w-4" />
            {t('actionDirections')}
          </a>
          <button
            type="button"
            onClick={() => onCopyAddress(office.id, office.address)}
            className={`${GLASS_BUTTON_CLASSES} flex w-full justify-center sm:w-auto sm:justify-start md:inline-flex md:w-auto`}
          >
            <Copy className="h-4 w-4" />
            {isCopied ? t('actionCopied') : t('actionCopy')}
          </button>
        </div>
      </div>
    </article>
  );
}
