'use client';

import { useActiveSection } from '@/hooks/use-active-section';

type NavLink = {
  href: string;
  label: string;
};

type DesktopNavProps = {
  navLinks: NavLink[];
};

const STYLES = {
  nav: 'relative hidden items-center rounded-full bg-card/60 p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl xl:flex dark:bg-card/40 dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]',
  navLink: 'relative z-10 flex items-center justify-center rounded-full px-5 py-2 text-[15px] font-semibold tracking-wide transition-all duration-500 ease-out',
  linkInactive: 'text-text-muted hover:text-foreground hover:bg-foreground/5 dark:hover:bg-foreground/10',
  linkActive: 'bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(var(--primary),0.3)] dark:bg-primary/20 dark:text-primary dark:shadow-[0_4px_20px_rgba(var(--primary),0.15)] scale-[1.02]',
};

export default function DesktopNav({ navLinks }: DesktopNavProps) {
  const activeSection = useActiveSection(navLinks);

  return (
    <nav className={STYLES.nav} aria-label="Primary navigation">
      {navLinks.map((item) => {
        // Assume first item is active if activeSection is empty (at the top of page)
        const isActive = activeSection === item.href || (activeSection === '' && item.href === '#about');
        
        return (
          <a
            key={item.href}
            href={item.href}
            className={`${STYLES.navLink} ${isActive ? STYLES.linkActive : STYLES.linkInactive}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
