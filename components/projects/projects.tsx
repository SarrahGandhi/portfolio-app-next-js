import React from "react";
import "./projects.css";
import Image from "next/image";

function Projects() {
    const projects = [
        {
            title: "Milestone Manager",
            description: "React, Node.js, MongoDB",

        },
        {
            title: "Milestone Manager",
            description: "React, Node.js, MongoDB",

        },
        {
            title: "Milestone Manager",
            description: "React, Node.js, MongoDB",

        },
        {
            title: "Milestone Manager",
            description: "React, Node.js, MongoDB",

        },
        {
            title: "Milestone Manager",
            description: "React, Node.js, MongoDB",

        },
        {
            title: "Milestone Manager",
            description: "React, Node.js, MongoDB",

        },
    ]
    return (
        <>
            <div className="projects-title-container">
                <div className="projects-title">PROJECTS</div>
            </div>
            <div className="projects-content">
                <div className="projects-content-item">
                    {projects.map((project, index) => (
                        <div key={index}>
                            <div className="projects-content-item-container">
                                <div className="projects-content-item-title">{project.title}</div>
                                <div className="projects-content-item-image"><Image src="/Placeholder.png" alt="Placeholder" width={500} height={300} style={{ width: '100%', height: 'auto' }}></Image></div>
                                <div className="projects-content-item-description">{project.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    );
}

export default Projects;