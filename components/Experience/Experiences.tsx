'use client';

import React from 'react';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useStaggeredScrollAnimation } from '@/hooks/useScrollAnimation';
import './Experiences.css';

const Experiences = () => {
  const [containerRef, visibleItems] = useStaggeredScrollAnimation(
    MY_EXPERIENCE.length,
    {
      threshold: 0.2,
      rootMargin: '-10% 0px',
    },
  );

  return (
    <section className="experiences" id="my-experience">
      <div className="experiences__container" ref={containerRef as any}>
        <SectionTitle title="My Experience" />

        <div className="experiences__list">
          {MY_EXPERIENCE.map((item, index) => (
            <div
              key={item.title}
              className={`experience-item ${
                visibleItems[index] ? 'is-visible' : ''
              }`}
            >
              <p className="experience-item__company">{item.company}</p>
              <p className="experience-item__title">{item.title}</p>
              <p className="experience-item__duration">{item.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
