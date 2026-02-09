'use client';

import React, { useState, useEffect, useRef } from "react";
import "./projects.css";

interface Project {
    title: string;
    description: string;
    techStack: string;
    imageUrl: string;
    liveUrl?: string;
    githubUrl?: string;
}

function Projects() {
    const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        const title = titleRef.current;
        
        if (!container || !title) return;

        const projectItems = Array.from(
            container.querySelectorAll<HTMLElement>('.project-item')
        );

        // Check for reduced motion preference
        const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;

        if (reduceMotion) {
            title.classList.add('revealed');
            projectItems.forEach(el => el.classList.add('revealed'));
            return;
        }

        // Set stagger delays
        projectItems.forEach((item, index) => {
            item.style.setProperty('--reveal-delay', `${index * 0.1 + 0.2}s`);
        });

        const handleScroll = () => {
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Trigger when section is 40% visible
            const isVisible = rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4;
            
            if (isVisible) {
                title.classList.add('revealed');
                projectItems.forEach(el => el.classList.add('revealed'));
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
    
    const projects: Project[] = [
        {
            title: "Milestone Manager",
            description: "Project management app with milestone tracking",
            techStack: "React, Node.js, Supabase",
            imageUrl: "/milestone-manager.png",
            liveUrl: "https://wedding.sarrahgandhi.com/admin",
            githubUrl: "https://github.com/SarrahGandhi/milestone-manager-react",
        },
        {
            title: "Bullet Journal",
            description: "Digital bullet journal for productivity",
            techStack: "React, Node.js, Supabase", 
            imageUrl: "/images/bullet-journal.jpg",
            liveUrl: "https://journal.sarrahgandhi.com",
            githubUrl: "https://github.com/SarrahGandhi/bullet-journal-react",
        },
        
    ]
    
    return (
        <section className="projects" id="my-projects">
            <div className="projects__container" ref={containerRef}>
                <div className="projects-title-container">
                    <div className="projects-title" ref={titleRef}>PROJECTS</div>
                </div>
                
                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="project-item"
                            onMouseEnter={() => setHoveredProject(project)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <p className="project-tech">{project.techStack}</p>
                            <p className="project-title">{project.title}</p>
                            <p className="project-description">{project.description}</p>
                            <div className="project-buttons">
                                {project.liveUrl && (
                                    <button 
                                        className="project-btn project-btn-live"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                                        }}
                                    >
                                        View Live Site
                                    </button>
                                )}
                                {project.githubUrl && (
                                    <button 
                                        className="project-btn project-btn-github"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                                        }}
                                    >
                                        View Code
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Hover image display */}
                <div className={`project-image-hover ${hoveredProject ? 'visible' : ''}`}>
                    {hoveredProject && (
                        <>
                            {/* <img 
                                src={hoveredProject.imageUrl} 
                                alt="Project preview"
                                className="project-hover-img"
                            /> */}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Projects;