'use client';

import { useEffect, useRef } from 'react';
import './about.css';

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const introRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const heading = headingRef.current;
    const intro = introRef.current;

    if (!container || !heading || !intro) return;

    const textElements = Array.from(
      container.querySelectorAll<HTMLElement>('.about-text p')
    );

    // Check for reduced motion preference
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    if (reduceMotion) {
      container.classList.add('revealed');
      heading.classList.add('revealed');
      intro.classList.add('revealed');
      textElements.forEach(el => el.classList.add('revealed'));
      return;
    }

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Trigger when section is 30% visible
      const isVisible = rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3;
      
      if (isVisible) {
        container.classList.add('revealed');
        heading.classList.add('revealed');
        intro.classList.add('revealed');
        textElements.forEach(el => el.classList.add('revealed'));
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="about" id="about-me">
      <div className="about-container" ref={containerRef}>
        <h2 className="about-heading" ref={headingRef}>
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its
          users.
        </h2>

        <p className="about-label">This is me.</p>

        <div className="about-grid">
          <div className="about-left">
            <p className="about-intro" ref={introRef}>Hi, I&apos;m Sarrah.</p>
          </div>

          <div className="about-right">
            <div className="about-text">
              <p>
                I&apos;m a frontend web developer dedicated to turning ideas
                into creative solutions. I specialize in creating seamless and
                intuitive user experiences.
              </p>

              <p className="mt">
                My approach focuses on creating scalable, high-performing
                solutions tailored to both user needs and business objectives.
                By prioritizing performance, accessibility, and responsiveness,
                I strive to deliver experiences that not only engage users but
                also drive tangible results.
              </p>

              <p className="mt">
                Whether it&apos;s building responsive interfaces, optimizing for performance,
                or implementing complex user interactions, I&apos;m passionate about
                crafting digital experiences that make a difference. Let&apos;s work
                together to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
