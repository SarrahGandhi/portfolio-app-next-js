import React from "react";
import Link from "next/link";
import "./about.css";

function About() {
  const skills = [
    "UI/UX Design",
    "User Research",
    "Wireframing",
    "Prototyping",
    "Figma",
    "Adobe XD",
    "Design Systems",
    "Interaction Design",
    "Visual Design",
    "Frontend Development",
    "React & Next.js",
    "Responsive Design",
  ];

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-label">About Me</span>
          <h1>
            Hey, I&apos;m <span className="highlight">Sarrah</span>
          </h1>
          <p className="about-intro">
            A designer-developer hybrid who believes great digital experiences
            happen when creativity meets clean code. I craft interfaces that are
            not just functional, but delightful.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="about-bio">
        <p>
          Based in Toronto, I spend my days building responsive, user-centric
          web applications that bridge the gap between design and development.
          When I&apos;m not pushing pixels or debugging CSS, you&apos;ll find me
          exploring new design trends, sipping on an overpriced coffee, or
          convincing my plants they&apos;re doing great.
        </p>
        <p>
          I believe in simplicity, accessibility, and the power of thoughtful
          design. Every project is an opportunity to create something meaningful
          that connects with people.
        </p>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <h2>What I Do</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span className="skill-item" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <p>Let&apos;s build something together</p>
        <div className="cta-links">
          
          <Link href="/resume" className="cta-link secondary">
            Resume
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
