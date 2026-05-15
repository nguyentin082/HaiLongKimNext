'use client';

import Link from 'next/link';
import { memo } from 'react';
import { useHeaderModeContext } from '../context/header-mode';

type HeaderLogoProps = {
  locale: string;
};

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
const FADE = `opacity 650ms ${EASE}`;

const HeaderLogo = memo(function HeaderLogo({ locale }: HeaderLogoProps) {
  const isHeroMode = useHeaderModeContext();

  return (
    <Link
      href={`/${locale}`}
      className="relative font-brand text-[23px] font-bold leading-8"
      prefetch={false}
    >
      {/* Brand gradient layer — visible in normal mode */}
      <span
        className="brand-gradient"
        style={{ opacity: isHeroMode ? 0 : 1, transition: FADE }}
        aria-hidden={isHeroMode}
      >
        Hải Long Kim Tourist
      </span>
      {/* White layer — visible in hero mode */}
      <span
        className="absolute inset-0 text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.5)]"
        style={{ opacity: isHeroMode ? 1 : 0, transition: FADE }}
        aria-hidden={!isHeroMode}
      >
        Hải Long Kim Tourist
      </span>
    </Link>
  );
});

export default HeaderLogo;

