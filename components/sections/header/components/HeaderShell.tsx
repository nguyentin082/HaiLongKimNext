'use client';

import { memo } from 'react';
import { HeaderModeProvider, useHeaderModeContext } from '../context/header-mode';

type HeaderShellProps = {
  children: React.ReactNode;
};

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
const DURATION = '650ms';
const TRANSITION = `opacity ${DURATION} ${EASE}, transform ${DURATION} ${EASE}`;

/**
 * Inner shell — consumes isHeroMode from context (provided by HeaderModeProvider above).
 * Two background layers fade in/out via opacity so all CSS properties
 * transition smoothly without an instant class-swap.
 */
const HeaderInner = memo(function HeaderInner({ children }: HeaderShellProps) {
  const isHeroMode = useHeaderModeContext();

  return (
    <div
      className="relative flex items-center justify-between gap-2 rounded-3xl border px-3 py-2.5 min-[480px]:gap-4 min-[480px]:px-4 md:px-6"
      style={{
        borderColor: isHeroMode ? 'rgba(255,255,255,0.13)' : 'rgba(255,255,255,0.04)',
        boxShadow: isHeroMode
          ? '0 8px 32px rgba(0,0,0,0.28)'
          : '0 14px 35px rgba(0,0,0,0.09)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        transition: `border-color ${DURATION} ${EASE}, box-shadow ${DURATION} ${EASE}`,
      }}
    >
      {/* Hero background layer — dark glass */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl bg-black/22"
        style={{ opacity: isHeroMode ? 1 : 0, transition: TRANSITION }}
      />
      {/* Normal background layer — card glass (light + dark) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl bg-white/85 dark:bg-[rgb(15,28,30)]/85"
        style={{ opacity: isHeroMode ? 0 : 1, transition: TRANSITION }}
      />
      {/* Actual content sits on top */}
      <div className="relative z-10 flex w-full items-center justify-between gap-2 min-[480px]:gap-4">
        {children}
      </div>
    </div>
  );
});

/**
 * Outer shell — provides HeaderModeContext, then renders HeaderInner which consumes it.
 */
const HeaderShell = memo(function HeaderShell({ children }: HeaderShellProps) {
  return (
    <HeaderModeProvider>
      <HeaderInner>{children}</HeaderInner>
    </HeaderModeProvider>
  );
});

export default HeaderShell;
