'use client';

import React, { useEffect, useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { MY_STACK } from '@/lib/data';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';
import './Skills.css'

const Skills = () => {
  const [containerRef, isVisible] = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-10% 0px',
  });

  const [visibleSkills, setVisibleSkills] = useState<Record<string, boolean>>(
    {},
  );

  useEffect(() => {
    if (!isVisible) return;

    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let delay = 0;

    Object.entries(MY_STACK).forEach(([category, skills]) => {
      // category title
      timeouts.push(
        setTimeout(() => {
          setVisibleSkills((prev) => ({
            ...prev,
            [`${category}-title`]: true,
          }));
        }, delay * 100),
      );
      delay++;

      // each skill
      skills.forEach((skill) => {
        timeouts.push(
          setTimeout(() => {
            setVisibleSkills((prev) => ({
              ...prev,
              [`${category}-${skill.name}`]: true,
            }));
          }, delay * 100),
        );
        delay++;
      });
    });

    return () => timeouts.forEach(clearTimeout);
  }, [isVisible]);

  const revealClass = (key: string) =>
    `reveal ${visibleSkills[key] ? 'is-visible' : ''}`;

  return (
    <section id="my-stack" ref={containerRef as any} className="skills">
      <div className="skills__container">
        <SectionTitle title="My Stack" />

        <div className="skills__groups">
          {Object.entries(MY_STACK).map(([category, items]) => (
            <div className="skills__group" key={category}>
              <div className="skills__categoryCol">
                <p className={`skills__category ${revealClass(`${category}-title`)}`}>
                  {category}
                </p>
              </div>

              <div className="skills__itemsCol">
                {items.map((item) => (
                  <div
                    className={`skills__item ${revealClass(`${category}-${item.name}`)}`}
                    key={item.name}
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="skills__icon"
                    />
                    <span className="skills__name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
