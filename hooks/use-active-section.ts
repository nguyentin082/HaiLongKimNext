'use client';

import { useState, useEffect } from 'react';

/**
 * Hook to track which section of the page is currently visible in the viewport.
 * Works by observing all elements that have an ID corresponding to the hrefs provided.
 * @param navLinks Array of objects containing hrefs like '#about', '#destinations', etc.
 * @returns The href of the currently active section (e.g., '#about')
 */
export function useActiveSection(navLinks: { href: string }[]) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Collect section IDs to observe
    const sectionIds = navLinks
      .filter((link) => link.href.startsWith('#'))
      .map((link) => link.href.substring(1));

    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find all currently intersecting entries
        const intersectingEntries = entries.filter((entry) => entry.isIntersecting);
        
        if (intersectingEntries.length > 0) {
          // If multiple sections are visible, pick the first one (highest on page) or most visible
          const activeEntry = intersectingEntries[0];
          setActiveSection(`#${activeEntry.target.id}`);
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px', // Trigger when section is near the top of viewport
      }
    );

    // Observe each section
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navLinks]);

  return activeSection;
}
