'use client';

import React, { useEffect, useRef, useState } from 'react';
import ArrowAnimation from '../CustomCursor/ArrowAnimation';
import './Banner.css';

/* ── Animated counter hook ── */
function useCounter(end: number, duration = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, startCounting]);

  return count;
}

const STATS = [
  { value: 3, suffix: '+', label: 'Years of Experience' },
  { value: 7, suffix: '+', label: 'Completed Projects' },
  { value: 10, suffix: 'K+', label: 'Hours Worked' },
];

const StatItem = ({
  stat,
  isVisible,
  delay,
}: {
  stat: (typeof STATS)[number];
  isVisible: boolean;
  delay: number;
}) => {
  const count = useCounter(stat.value, 1600, isVisible);
  return (
    <div
      className={`banner__stat fade-slide ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h5 className="banner__statValue">
        {count}
        {stat.suffix}
      </h5>
      <p className="banner__statLabel">{stat.label}</p>
    </div>
  );
};

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.bottom) / (window.innerHeight * 0.6)),
      );
      setScrollOffset(scrollProgress);

      // Trigger stats when banner is in view
      if (rect.top < window.innerHeight * 0.8) {
        setStatsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Trigger stats on load after a short delay
    const timer = setTimeout(() => setStatsVisible(true), 800);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const slideStyle: React.CSSProperties = {
    transform: `translateY(${scrollOffset * -150}px)`,
    opacity: 1 - scrollOffset,
  };

  return (
    <section className="banner" id="banner">
      <ArrowAnimation />

      <div className="banner__container" ref={containerRef}>
        <div className="banner__left">
          <h1 className="banner__title" style={slideStyle}>
            <span className="banner__primary">GRAPHIC & WEB</span>
            <br /> <span className="banner__indent">DESIGNER</span>
          </h1>

          <p
            className="banner__description"
            style={{ ...slideStyle, transitionDelay: '20ms' }}
          >
            I&apos;m <span className="banner__name">Sarrah</span> — I care about the one pixel nobody notices until it&apos;s wrong. Four years making the web feel less like software and more like intention.
          </p>
        </div>

        <div className="banner__stats" style={slideStyle}>
          {STATS.map((stat, i) => (
            <StatItem
              key={stat.label}
              stat={stat}
              isVisible={statsVisible}
              delay={60 + i * 80}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="banner__scroll-indicator" style={{ opacity: 1 - scrollOffset * 3 }}>
        <span className="banner__scroll-text">Scroll</span>
        <div className="banner__scroll-line">
          <div className="banner__scroll-dot" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
