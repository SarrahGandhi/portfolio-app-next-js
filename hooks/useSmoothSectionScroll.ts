"use client";

import { useEffect, useState, useCallback } from 'react';

export function useSmoothSectionScroll(sectionIds: string[]) {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= sectionIds.length || isScrolling) return;
    
    const sectionElement = document.getElementById(sectionIds[index]);
    if (!sectionElement) return;

    setIsScrolling(true);
    
    sectionElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Reset scrolling state after animation completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  }, [sectionIds, isScrolling]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    let scrollVelocity = 0;
    const SCROLL_THRESHOLD = 50; // Reduced threshold for more sensitivity
    const VELOCITY_THRESHOLD = 0.5; // Minimum velocity to trigger section change
    const DEBOUNCE_DELAY = 100; // Reduced delay for more responsiveness

    const handleScroll = () => {
      if (isScrolling) return;

      const currentTime = Date.now();
      const currentScrollY = window.scrollY;
      const deltaTime = currentTime - lastScrollTime;
      const deltaY = currentScrollY - lastScrollY;

      // Calculate scroll velocity
      if (deltaTime > 0) {
        scrollVelocity = Math.abs(deltaY) / deltaTime;
      }

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        // Find the section most visible in the viewport
        const windowHeight = window.innerHeight;
        const viewportCenter = currentScrollY + windowHeight / 2;
        
        let targetSectionIndex = 0;
        let maxVisibleArea = 0;

        sectionIds.forEach((id, index) => {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + currentScrollY;
            const elementBottom = elementTop + rect.height;
            
            // Calculate visible area of this section
            const visibleTop = Math.max(elementTop, currentScrollY);
            const visibleBottom = Math.min(elementBottom, currentScrollY + windowHeight);
            const visibleArea = Math.max(0, visibleBottom - visibleTop);
            
            if (visibleArea > maxVisibleArea) {
              maxVisibleArea = visibleArea;
              targetSectionIndex = index;
            }
          }
        });

        // Check if we should move to the next/previous section
        if (scrollVelocity > VELOCITY_THRESHOLD || Math.abs(deltaY) > SCROLL_THRESHOLD) {
          const scrollDirection = deltaY > 0 ? 1 : -1;
          const newIndex = Math.max(0, Math.min(sectionIds.length - 1, targetSectionIndex + scrollDirection));
          
          if (newIndex !== currentSectionIndex) {
            scrollToSection(newIndex);
            setCurrentSectionIndex(newIndex);
          } else {
            // Snap to current section if we're not changing sections
            scrollToSection(targetSectionIndex);
          }
        } else {
          // Small scroll - just update current section without snapping
          setCurrentSectionIndex(targetSectionIndex);
        }
        
        lastScrollY = currentScrollY;
        lastScrollTime = currentTime;
      }, DEBOUNCE_DELAY);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;
      
      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          scrollToSection(currentSectionIndex + 1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          scrollToSection(currentSectionIndex - 1);
          break;
        case 'Home':
          e.preventDefault();
          scrollToSection(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSection(sectionIds.length - 1);
          break;
      }
    };

    // Initial section detection
    const detectCurrentSection = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;
      
      let closestSectionIndex = 0;
      let minDistance = Infinity;

      sectionIds.forEach((id, index) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + window.scrollY + rect.height / 2;
          const distance = Math.abs(scrollPosition - elementCenter);
          
          if (distance < minDistance) {
            minDistance = distance;
            closestSectionIndex = index;
          }
        }
      });

      setCurrentSectionIndex(closestSectionIndex);
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    
    // Detect initial section
    detectCurrentSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(scrollTimeout);
    };
  }, [sectionIds, currentSectionIndex, scrollToSection, isScrolling]);

  return {
    currentSectionIndex,
    scrollToSection,
    isScrolling
  };
}