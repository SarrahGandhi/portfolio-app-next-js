'use client';

import React, { useEffect, useRef, useState } from 'react';
import ArrowAnimation from '../CustomCursor/ArrowAnimation';
// import { SOCIAL_LINKS } from '../../lib/data';
import './Banner.css';

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.bottom) / (window.innerHeight * 0.6)),
      );
      setScrollOffset(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize once

    return () => window.removeEventListener('scroll', handleScroll);
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
            <span className="banner__primary">FRONTEND</span>
            <br /> <span className="banner__indent">DEVELOPER</span>
          </h1>

          <p
            className="banner__description"
            style={{ ...slideStyle, transitionDelay: '20ms' }}
          >
            Hi! I&apos;m <span className="banner__name">Sarrah</span>. A creative
            Frontend Developer with 3+ years of experience in building high-performance,
            scalable, and responsive web solutions.
          </p>

          {/* <a
            className="banner__cta"
            // href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...slideStyle, transitionDelay: '40ms' }}
          >
            Hire Me
          </a> */}
        </div>

        {/* <div className="banner__stats">
          <div
            className="banner__stat"
            style={{ ...slideStyle, transitionDelay: '60ms' }}
          >
            <h5 className="banner__statValue">3+</h5>
            <p className="banner__statLabel">Years of Experience</p>
          </div>

          <div
            className="banner__stat"
            style={{ ...slideStyle, transitionDelay: '80ms' }}
          >
            <h5 className="banner__statValue">7+</h5>
            <p className="banner__statLabel">Completed Projects</p>
          </div>

          <div
            className="banner__stat"
            style={{ ...slideStyle, transitionDelay: '100ms' }}
          >
            <h5 className="banner__statValue">10K+</h5>
            <p className="banner__statLabel">Hours Worked</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
