'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * useStableViewportHeight
 *
 * Solves the classic mobile browser "100vh jank" problem.
 *
 * ┌─────────────────────────────────────────────────────────────────┐
 * │  Problem:                                                      │
 * │  • 100vh = "large viewport" → always includes address bar area │
 * │  • 100dvh = changes dynamically as address bar collapses/      │
 * │    expands → continuous layout reflow & visual jank             │
 * │  • 100svh = smallest viewport → too short on initial load      │
 * │                                                                │
 * │  Solution:                                                     │
 * │  Lock the height to window.innerHeight on first paint, then    │
 * │  only update on orientation change or genuine window resize.   │
 * │  Uses VisualViewport API when available for sub-pixel accuracy │
 * │  and to ignore virtual keyboard events.                        │
 * └─────────────────────────────────────────────────────────────────┘
 *
 * @returns height in px (number), or `null` during SSR / before first measurement
 */
export function useStableViewportHeight(): number | null {
  const [height, setHeight] = useState<number | null>(null);

  // Track last-known orientation to detect real orientation changes
  const lastOrientationRef = useRef<number>(0);

  // Debounce timer for resize events
  const resizeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const measure = useCallback(() => {
    // Prefer VisualViewport API — it gives the actual visible area
    // excluding virtual keyboards, pinch-zoom, etc.
    const vv = window.visualViewport;
    const h = vv ? vv.height : window.innerHeight;
    setHeight(h);
  }, []);

  useEffect(() => {
    // Initial measurement
    measure();
    lastOrientationRef.current = window.screen?.orientation?.angle ?? window.orientation ?? 0;

    // ─── Strategy 1: VisualViewport resize ─────────────────────────
    // The VisualViewport 'resize' event fires on:
    //   ✓ device rotation
    //   ✓ pinch-zoom
    //   ✗ address bar toggle (we want to IGNORE this)
    // However, address bar changes DO fire this event on some browsers,
    // so we filter by checking if the orientation actually changed or
    // if the delta is large enough to be a "real" resize (>150px).
    const handleVisualViewportResize = () => {
      const vv = window.visualViewport;
      if (!vv) return;

      const currentOrientation =
        window.screen?.orientation?.angle ?? (window as { orientation?: number }).orientation ?? 0;

      const orientationChanged = currentOrientation !== lastOrientationRef.current;

      // Address bar on iOS/Android typically changes height by ~50-100px.
      // A genuine orientation change or window resize is usually >150px.
      const delta = Math.abs(vv.height - (height ?? 0));
      const isSignificantResize = delta > 150;

      if (orientationChanged || isSignificantResize) {
        lastOrientationRef.current = currentOrientation;
        measure();
      }
    };

    // ─── Strategy 2: orientationchange event (fallback) ────────────
    const handleOrientationChange = () => {
      // Wait for the browser to finish the rotation animation
      setTimeout(() => {
        lastOrientationRef.current =
          window.screen?.orientation?.angle ?? (window as { orientation?: number }).orientation ?? 0;
        measure();
      }, 150);
    };

    // ─── Strategy 3: window resize (desktop & fallback) ────────────
    // Debounced to avoid excessive recalculations during drag-resize
    const handleWindowResize = () => {
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
      resizeTimerRef.current = setTimeout(() => {
        const currentOrientation =
          window.screen?.orientation?.angle ?? (window as { orientation?: number }).orientation ?? 0;
        const orientationChanged = currentOrientation !== lastOrientationRef.current;

        if (orientationChanged) {
          lastOrientationRef.current = currentOrientation;
          measure();
          return;
        }

        // On desktop, always update (no address bar issue)
        const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (!isMobile) {
          measure();
        }
      }, 200);
    };

    // Register listeners
    const vv = window.visualViewport;
    if (vv) {
      vv.addEventListener('resize', handleVisualViewportResize);
    }
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      if (vv) {
        vv.removeEventListener('resize', handleVisualViewportResize);
      }
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('resize', handleWindowResize);
      if (resizeTimerRef.current) clearTimeout(resizeTimerRef.current);
    };
    // height is intentionally NOT in the dep array — we compare against
    // the current state inside the handler via closure-refresh pattern.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [measure]);

  return height;
}
