'use client';

import { useActiveSection } from '@/hooks/use-active-section';
import { useHeaderModeContext } from '../context/header-mode';

type NavLink = {
  href: string;
  label: string;
};

type DesktopNavProps = {
  navLinks: NavLink[];
};

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
const DURATION = '650ms';

export default function DesktopNav({ navLinks }: DesktopNavProps) {
  const activeSection = useActiveSection(navLinks);
  const isHeroMode = useHeaderModeContext();

  return (
    <nav
      className="relative hidden items-center rounded-full p-1.5 xl:flex"
      style={{
        // Light: white card. Dark handled by inheriting the dark layer from HeaderShell.
        // Using a semi-transparent white that looks correct in both themes since
        // HeaderShell already sets the dark background behind everything.
        backgroundColor: isHeroMode ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.55)',
        boxShadow: isHeroMode ? 'none' : '0 4px 20px rgba(0,0,0,0.04)',
        transition: `background-color ${DURATION} ${EASE}, box-shadow ${DURATION} ${EASE}`,
      }}
      aria-label="Primary navigation"
    >
      {navLinks.map((item) => {
        const isActive =
          activeSection === item.href || (activeSection === '' && item.href === '#about');

        const linkStyle: React.CSSProperties = {
          color: isHeroMode
            ? isActive ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.78)'
            : isActive ? '#ffffff' : 'rgb(105,117,117)',
          backgroundColor: isActive
            ? isHeroMode ? 'rgba(255,255,255,0.18)' : 'rgb(8,124,122)'
            : 'transparent',
          boxShadow: isActive && !isHeroMode
            ? '0 4px 12px rgba(8,124,122,0.3)'
            : 'none',
          transition: [
            `color ${DURATION} ${EASE}`,
            `background-color ${DURATION} ${EASE}`,
            `box-shadow ${DURATION} ${EASE}`,
          ].join(', '),
        };

        return (
          <a
            key={item.href}
            href={item.href}
            className="relative z-10 flex items-center justify-center rounded-full px-5 py-2 text-[15px] font-semibold tracking-wide hover:opacity-100"
            style={linkStyle}
            aria-current={isActive ? 'page' : undefined}
          >
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
