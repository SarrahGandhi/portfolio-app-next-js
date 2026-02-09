'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import "./stack.css";

// Example typing — adjust to your real data shape
type StackItem = { name: string; icon: string };
type StackData = Record<string, StackItem[]>;

// Replace this import with your real data import if you want:
// import { MY_STACK } from '@/lib/data';
const MY_STACK: StackData = {
  Frontend: [
    { name: 'HTML', icon: '/html.png' },
    { name: 'CSS', icon: '/css.png' },
    { name: 'JavaScript', icon: '/javascript.png' },
    { name: 'TypeScript', icon: '/typescript.png' },
    { name: 'React', icon: '/react.png' },
    { name: 'Next.js', icon: '/nextjs.png' },
    { name: 'Bootstrap', icon: '/bootstrap.png' },
    { name: 'Tailwind CSS', icon: '/tailwind.png' },
    { name: 'Vue', icon: '/vue.png' },
    { name: 'jQuery', icon: '/jquery.png' },
    { name: 'Webpack', icon: '/webpack.png' },
  ],
  Backend: [
    { name: 'Node.js', icon: '/nodejs.png' },
    { name: 'Express.js', icon: '/express.png' },
  ],
  Database: [
    { name: 'MongoDB', icon: '/mongodb.png' },
    { name: 'MySQL', icon: '/mysql.png' },
    { name: 'SUPABASE', icon: '/supabase.png' },
  ],
  Design: [
    { name: 'Adobe Photoshop', icon: '/photoshop.png' },
    { name: 'Adobe Illustrator', icon: '/illustrator.png' },
    { name: 'Adobe InDesign', icon: '/indesign.png' },
    { name: 'Adobe Premiere Pro', icon: '/premierepro.png' },
    { name: 'Figma', icon: '/figma.png' },
  ],
};

function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Enhanced slide-up reveal with consistent styling
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const title = root.querySelector<HTMLElement>('.skills__title');
    const rows = Array.from(root.querySelectorAll<HTMLElement>('.skills__row'));
    
    if (!title || !rows.length) return;

    // Check for reduced motion preference
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

    if (reduceMotion) {
      title.classList.add('revealed');
      rows.forEach(row => row.classList.add('revealed'));
      return;
    }

    // Set stagger delays for rows
    rows.forEach((row, index) => {
      row.style.setProperty('--reveal-delay', `${index * 0.1 + 0.2}s`);
    });

    const handleScroll = () => {
      const rect = root.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Trigger when section is 40% visible
      const isVisible = rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4;
      
      if (isVisible) {
        title.classList.add('revealed');
        rows.forEach(row => row.classList.add('revealed'));
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

  // 2) "move up + fade out" near bottom (approx GSAP scrub)
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const onScroll = () => {
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight;

      // progress when bottom goes from 50% viewport to 10% viewport
      const start = vh * 0.5;
      const end = vh * 0.1;

      const bottom = rect.bottom;
      const raw = (start - bottom) / (start - end);
      const progress = Math.min(1, Math.max(0, raw));

      root.style.setProperty('--outY', `${progress * -150}px`);
      root.style.setProperty('--outOpacity', `${1 - progress}`);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="rectangle">
      {/* <div className="stack-rectangle-image"></div> */}
      <section id="my-stack" ref={sectionRef} className="skills">
        <div className="skills__container">
          {/* Replace with your SectionTitle component if you want */}
          <h2 className="skills__title">My Stack</h2>

          <div className="skills__groups">
            {Object.entries(MY_STACK).map(([key, value]) => (
              <div className="skills__row" key={key}>
                <div className="skills__left">
                  <p className="skills__category">{key}</p>
                </div>

                <div className="skills__right">
                  {value.map((item) => (
                    <div className="skills__item" key={item.name}>
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
    </div>
  );
}
export default About;
