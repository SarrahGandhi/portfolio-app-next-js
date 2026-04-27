"use client";

import React, { useEffect, useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import "./AboutMe.css";

const AboutMe = () => {
  const [containerRef, isVisible] = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "-10% 0px",
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
    `fade-slide ${visibleElements[i] ? "is-visible" : ""}`;

  return (
    <section className="about" id="about-me">
      <div className="about__container" ref={containerRef as any}>
        <h2 className={`about__headline ${animateClass(0)}`}>
          Most people open a website and feel nothing. I build the ones that
          make them stop scrolling.
        </h2>

        <p className={`about__subline ${animateClass(1)}`}>About me.</p>

        <div className="about__grid">
          <div className="about__left">
            <p className={`about__intro ${animateClass(2)}`}>
              Hi, I&apos;m Sarrah.
            </p>
          </div>

          <div className="about__right">
            <div className="about__body">
              <p className={animateClass(3)}>
                I&apos;m a graphic and web designer, but more honestly, I&apos;m
                someone who gets unreasonably invested in the quality of other
                people&apos;s work. Four years in, and I still obsess over type
                scales, hover states, and whether a layout breathes right. That
                obsession has produced brand identities, full-stack
                applications, and everything in between, for clients who care as
                much about the details as I do.
              </p>

              <p className={`${animateClass(4)} about__bodySpacing`}>
                I write code as well as I push pixels using React, Next.js,
                Figma and Photoshop, the whole stack, which means nothing gets
                lost in translation between design and build. I don&apos;t hand
                off files and hope for the best. I stay in it until the thing
                ships right: fast, accessible, and sharp enough that your users
                notice without knowing why.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
