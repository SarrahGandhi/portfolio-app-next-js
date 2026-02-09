'use client';

import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // don’t show custom cursor on small screens
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <svg
      width="27"
      height="30"
      viewBox="0 0 27 30"
      className={`custom-cursor ${isVisible ? 'is-visible' : ''}`}
      fill="none"
      id="cursor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <path
        d="M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z"
        className="custom-cursor__shape"
      />
    </svg>
  );
};

export default CustomCursor;
