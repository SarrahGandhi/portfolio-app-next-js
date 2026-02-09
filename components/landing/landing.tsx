"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

import "./landing.css";

function Landing() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Simple reveal animation (slide up + fade + stagger)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(
      container.querySelectorAll<HTMLElement>('.slide-up-and-fade')
    );

    items.forEach((el, i) => {
      el.classList.add('pre');
      el.style.setProperty('--delay', `${i * 0.06}s`);
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el) => el.classList.add('in'));
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -15% 0px' }
    );

    io.observe(container);

    return () => io.disconnect();
  }, []);
  const Skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "GIT",
    "VS Code",
    "Responsive Design",
    "Chrome DevTools",
    "Figma",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "Premiere Pro",
    "Adobe Suite",
    "Terminal",
    "Express.js",
    "MongoDB",
    "MySQL",


  ];
  const scrollingSkills = [...Skills, ...Skills];
  return (
    <>
      
      <div className="rectangle">
        <div className="rectangle-image"></div>
        <section className="banner" id="banner">
      <div className="banner-container" ref={containerRef}>
        <div className="banner-layout">
          <div className="banner-left">
            <h1 className="banner-title slide-up-and-fade">
              <span className="primary">FRONTEND</span>
              <br />
              <span className="offset">DEVELOPER</span>
            </h1>

            <a
              href="/Sarrah Gandhi Resume .pdf"
              download="Sarrah_Gandhi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="banner-button slide-up-and-fade"
            >
              DOWNLOAD MY RESUME
            </a>
          </div>
          
          <div className="banner-right">
            <div className="aboutlanding slide-up-and-fade">
              <div className="html-tag">&lt;span&gt;</div>
              <div className="about-content-landing">
                Hi! I'm Sarrah. A creative Frontend Developer and Designer with 3+ years of experience in building high-performance, scalable, and responsive web solutions.
              </div>
              <div className="html-tag">&lt;/span&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
        </div>
    </>
  );
}

export default Landing;
