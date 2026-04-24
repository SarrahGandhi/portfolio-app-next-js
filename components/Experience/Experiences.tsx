'use client';

import React, { useState } from 'react';
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

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
              } ${hoveredIndex === index ? 'is-hovered' : ''} ${
                hoveredIndex !== null && hoveredIndex !== index ? 'is-dimmed' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="experience-item__timeline">
                <div className="experience-item__dot" />
                {index < MY_EXPERIENCE.length - 1 && (
                  <div className="experience-item__line" />
                )}
              </div>
              <div className="experience-item__content">
                <p className="experience-item__company">{item.company}</p>
                <p className="experience-item__title">{item.title}</p>
                <p className="experience-item__duration">{item.duration}</p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <>
                    <button
                      className={`experience-item__toggle ${expandedIndex === index ? 'is-expanded' : ''}`}
                      onClick={() => toggleExpand(index)}
                    >
                      <span>{expandedIndex === index ? 'Hide details' : 'View details'}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="experience-item__chevron"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    <div className={`experience-item__highlights ${expandedIndex === index ? 'is-open' : ''}`}>
                      <ul className="experience-item__highlight-list">
                        {item.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className="experience-item__highlight"
                            style={{ transitionDelay: expandedIndex === index ? `${hIdx * 60}ms` : '0ms' }}
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
