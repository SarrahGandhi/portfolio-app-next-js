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

    // Reduced motion
    const reduce =
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    if (reduce) {
      items.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0px)';
      });
      container.style.opacity = '1';
      container.style.transform = 'translateY(0px)';
      return;
    }

    // Initial state (like GSAP .from)
    items.forEach((el, i) => {
      el.classList.add('exp-pre');
      el.style.setProperty('--delay', `${i * 0.3}s`); // stagger: 0.3
    });

    const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    let currentIn = 0;
    let currentOut = 0;

    const update = () => {
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;

      // IN: start 'top 60%' -> end 'bottom 50%'
      // We'll map progress as section enters the viewport
      const inStart = vh * 0.6;
      const inEnd = vh * 0.5;

      // Use top for start, bottom for end
      const inProgress = clamp01((inStart - rect.top) / (inStart - inEnd));

      // OUT: start 'bottom 50%' -> end 'bottom 20%'
      const outStart = vh * 0.5;
      const outEnd = vh * 0.2;
      const outProgress = clamp01((outStart - rect.bottom) / (outStart - outEnd));

      // Scrub smoothing
      currentIn = lerp(currentIn, inProgress, 0.12);
      currentOut = lerp(currentOut, outProgress, 0.12);

      // Apply OUT to whole container (matches your gsap to(containerRef.current))
      const outY = lerp(0, -150, currentOut);
      const outO = lerp(1, 0, currentOut);

      container.style.transform = `translateY(${outY}px)`;
      container.style.opacity = `${outO}`;

      // Trigger IN reveal class once we start entering
      if (currentIn > 0.02) {
        items.forEach((el) => el.classList.add('exp-in'));
      }

      // Optional: reverse reveal when scrolling back up (like toggleActions reverse)
      if (inProgress < 0.02 && outProgress < 0.02) {
        items.forEach((el) => el.classList.remove('exp-in'));
      }
    };

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
