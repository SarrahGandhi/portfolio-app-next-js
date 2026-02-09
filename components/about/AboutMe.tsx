'use client';

import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './AboutMe.css';

const AboutMe = () => {
  const [containerRef, isVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '-10% 0px',
  });

  const [visibleElements, setVisibleElements] = useState<boolean[]>(
    Array(5).fill(false),
  );

  useEffect(() => {
    if (!isVisible) return;

    const elementCount = 5;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < elementCount; i++) {
      const timeout = setTimeout(() => {
        setVisibleElements((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, i * 50);

      timeouts.push(timeout);
    }

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [isVisible]);

  const animateClass = (i: number) =>
    `fade-slide ${visibleElements[i] ? 'is-visible' : ''}`;

  return (
    <section className="about" id="about-me">
      <div className="about__container" ref={containerRef as any}>
        <h2 className={`about__headline ${animateClass(0)}`}>
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </h2>

        <p className={`about__subline ${animateClass(1)}`}>This is me.</p>

        <div className="about__grid">
          <div className="about__left">
            <p className={`about__intro ${animateClass(2)}`}>
              Hi, I&apos;m Sarrah.
            </p>
          </div>

          <div className="about__right">
            <div className="about__body">
              <p className={animateClass(3)}>
                I&apos;m a frontend web developer dedicated to turning ideas into
                creative solutions. I specialize in creating seamless and
                intuitive user experiences.
              </p>

              <p className={`${animateClass(4)} about__bodySpacing`}>
                My approach focuses on creating scalable, high-performing
                solutions tailored to both user needs and business objectives.
                By prioritizing performance, accessibility, and responsiveness,
                I strive to deliver experiences that not only engage users but
                also drive tangible results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
