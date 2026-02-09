'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import TransitionLink from '@/components/TransitionLink';
import SectionTitle from '@/components/SectionTitle';
import { PROJECTS } from '@/lib/data';
import { IProject } from '@/types';
import './projects.css';

interface ProjectProps {
  index: number;
  project: IProject;
  selectedProject: string | null;
  onMouseEnter: (slug: string) => void;
}

const ProjectItem = ({ index, project, selectedProject, onMouseEnter }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const arrowLineRef = useRef<SVGPathElement>(null);
  const arrowCurbRef = useRef<SVGPathElement>(null);
  const boxRef = useRef<SVGPathElement>(null);
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isHovered) {
      const phases = [
        () => setAnimationPhase(1), // Show box
        () => setAnimationPhase(2), // Show arrow line
        () => setAnimationPhase(3), // Show arrow curb
        () => setAnimationPhase(4), // Hide all
        () => setAnimationPhase(0), // Reset
      ];

      let currentPhase = 0;

      const runPhase = () => {
        if (currentPhase < phases.length && isHovered) {
          phases[currentPhase]();
          currentPhase++;
          animationRef.current = setTimeout(
            runPhase,
            currentPhase === 4 ? 1000 : 200,
          );
        } else if (isHovered) {
          currentPhase = 0;
          animationRef.current = setTimeout(runPhase, 1000);
        }
      };

      animationRef.current = setTimeout(runPhase, 100);
    } else {
      if (animationRef.current) clearTimeout(animationRef.current);
      setAnimationPhase(0);
    }

    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
    };
  }, [isHovered]);

  useEffect(() => {
    if (arrowLineRef.current && arrowCurbRef.current && boxRef.current) {
      const boxLength = boxRef.current.getTotalLength();
      const arrowLineLength = arrowLineRef.current.getTotalLength();
      const arrowCurbLength = arrowCurbRef.current.getTotalLength();

      boxRef.current.style.strokeDasharray = boxLength.toString();
      arrowLineRef.current.style.strokeDasharray = arrowLineLength.toString();
      arrowCurbRef.current.style.strokeDasharray = arrowCurbLength.toString();

      // Start hidden
      boxRef.current.style.strokeDashoffset = '100%';
      arrowLineRef.current.style.strokeDashoffset = '100%';
      arrowCurbRef.current.style.strokeDashoffset = '100%';
    }
  }, []);

  const handleMouseEnter = () => {
    onMouseEnter(project.link);
    setIsHovered(true);
  };

  const handleMouseLeave = () => setIsHovered(false);

  const indexText = `_${(index + 1).toString().padStart(2, '0')}.`;

  const fadeClass =
    selectedProject !== null && selectedProject !== project.slug
      ? 'project-item--faded'
      : '';

  return (
    <TransitionLink
      href={project.link as any}
      className={`project-item ${fadeClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* {selectedProject === null && (
        <Image
          src={project.thumbnail}
          alt="Project"
          width={300}
          height={200}
          className="project-item__thumb"
          loading="lazy"
        />
      )} */}

      <div className="project-item__row">
        <div className="project-item__index">{indexText}</div>

        <div className="project-item__content">
          <h4 className="project-item__title">
            {project.title}

            <span
              className={`project-item__icon ${isHovered ? 'is-visible' : ''
                }`}
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  ref={boxRef}
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  className={`project-item__path ${animationPhase >= 1 && animationPhase < 4
                    ? 'is-on'
                    : ''
                    }`}
                  style={{
                    strokeDashoffset:
                      animationPhase >= 1 && animationPhase < 4 ? 0 : '100%',
                  }}
                />
                <path
                  ref={arrowLineRef}
                  d="M10 14 21 3"
                  className={`project-item__path ${animationPhase >= 2 && animationPhase < 4
                    ? 'is-on'
                    : ''
                    }`}
                  style={{
                    strokeDashoffset:
                      animationPhase >= 2 && animationPhase < 4 ? 0 : '100%',
                  }}
                />
                <path
                  ref={arrowCurbRef}
                  d="M15 3h6v6"
                  className={`project-item__path ${animationPhase >= 3 && animationPhase < 4
                    ? 'is-on'
                    : ''
                    }`}
                  style={{
                    strokeDashoffset:
                      animationPhase >= 3 && animationPhase < 4 ? 0 : '100%',
                  }}
                />
              </svg>
            </span>
          </h4>

          <div className="project-item__stack">
            {project.techStack.slice(0, 3).map((tech, idx, arr) => (
              <div className="project-item__stackItem" key={tech}>
                <span>{tech}</span>
                {idx !== arr.length - 1 && (
                  <span className="project-item__dot" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TransitionLink>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleMouseEnter = (slug: string) => {
    setSelectedProject(slug);
  };

  return (
    <section className="projects" id="my-projects">
      <div className="projects__container">
        <SectionTitle title="Selected Projects" />
        <div className="projects__list">
          {PROJECTS.map((project, index) => (
            <ProjectItem
              key={project.slug}
              index={index}
              project={project}
              selectedProject={selectedProject}
              onMouseEnter={handleMouseEnter}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
