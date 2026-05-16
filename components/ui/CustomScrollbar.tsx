'use client';

import { useEffect, useState, useCallback, useRef } from 'react';

export default function CustomScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const dragStartY = useRef(0);
  const dragStartScrollY = useRef(0);
  
  const updateScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (documentHeight <= windowHeight) {
      setThumbHeight(0);
      return;
    }

    const scrollY = window.scrollY;
    const maxScroll = documentHeight - windowHeight;
    const progress = scrollY / maxScroll;
    
    const heightRatio = windowHeight / documentHeight;
    const calculatedHeight = Math.max(heightRatio * windowHeight, 40);
    
    setThumbHeight(calculatedHeight);
    
    const availableScrollSpace = windowHeight - calculatedHeight;
    setScrollProgress(progress * availableScrollSpace);
  }, []);

  useEffect(() => {
    updateScroll();
    
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!isDragging) {
        updateScroll();
      }
      setIsScrolling(true);
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    
    const resizeObserver = new ResizeObserver(() => updateScroll());
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScroll);
      resizeObserver.disconnect();
      clearTimeout(scrollTimeout);
    };
  }, [updateScroll, isDragging]);

  // Drag logic
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: PointerEvent) => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      const availableScrollSpace = windowHeight - thumbHeight;

      if (availableScrollSpace <= 0) return;

      const deltaY = e.clientY - dragStartY.current;
      const scrollRatio = deltaY / availableScrollSpace;
      const newScrollY = dragStartScrollY.current + (scrollRatio * maxScroll);
      
      window.scrollTo({
        top: newScrollY,
        behavior: 'auto'
      });
      
      // Update progress immediately for responsive UI
      const progress = newScrollY / maxScroll;
      setScrollProgress(progress * availableScrollSpace);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = '';
      document.documentElement.style.scrollBehavior = '';
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging, thumbHeight]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartScrollY.current = window.scrollY;
    document.body.style.userSelect = 'none'; // Ngăn highlight text khi kéo
    document.documentElement.style.scrollBehavior = 'auto'; // Tắt smooth scroll của html để tránh bị delay khi kéo
  };

  if (thumbHeight === 0) return null;

  return (
    <div 
      className="fixed right-0 top-0 bottom-0 z-[9999] w-4 pointer-events-none"
    >
      <div 
        className="absolute right-0 top-0 bottom-0 w-full pointer-events-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div
        className={`absolute right-1 w-1.5 rounded-full backdrop-blur-md pointer-events-auto ${
          isHovered || isScrolling || isDragging
            ? 'bg-gray-600/60 dark:bg-gray-400/60 opacity-100' 
            : 'bg-gray-600/20 dark:bg-gray-400/20 opacity-0'
        }`}
        style={{
          height: `${thumbHeight}px`,
          transform: `translateY(${scrollProgress}px)`,
          transition: isDragging ? 'none' : 'opacity 0.3s, background-color 0.3s',
        }}
        onPointerDown={handlePointerDown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
}
