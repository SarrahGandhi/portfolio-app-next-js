'use client';

import React, { useEffect, useRef } from 'react';
import './experience.css';

// Keep your real imports if you want:
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';

export default function Experiences() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll<HTMLElement>('.experience-item')
    );

    // Check if mobile device (screens smaller than 768px)
    const isMobile = window.innerWidth < 768;

    // Reduced motion
    const reduce =
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    // On mobile or reduced motion, show everything immediately
    if (reduce || isMobile) {
      items.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0px)';
      });
      container.style.opacity = '1';
      container.style.transform = 'translateY(0px)';
      return;
    }

    // Set container to visible - we only animate the items
    container.style.opacity = '1';
    container.style.transform = 'translateY(0px)';

    // Initial state (like GSAP .from)
    items.forEach((el, i) => {
      el.classList.add('exp-pre');
      el.style.setProperty('--delay', `${i * 0.15}s`); // stagger: 0.15
    });

    const update = () => {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;

      // Check if section is in viewport (top is above 80% of viewport)
      const isInView = rect.top < vh * 0.8;

      // Trigger IN reveal class when section enters viewport
      if (isInView) {
        items.forEach((el) => el.classList.add('exp-in'));
      }
    };

    // Initial check
    update();
    
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section className="experiences" id="my-experience">
      <div className="experiences__container" ref={containerRef}>
        <SectionTitle title="My Experience" />

        <div className="experiences__grid">
          {MY_EXPERIENCE.map((item) => (
            <div key={item.title} className="experience-item">
              <p className="exp-company">{item.company}</p>
              <p className="exp-title">{item.title}</p>
              <p className="exp-duration">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
