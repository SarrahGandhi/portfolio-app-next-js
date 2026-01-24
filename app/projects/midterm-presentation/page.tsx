"use client";

import React from "react";
import Link from "next/link";
import "./midterm-presentation.css";

function MidtermPresentationPage() {
  const tools = [
    { name: "Figma", icon: "🎨" },
    { name: "User Research", icon: "🔍" },
    { name: "Prototyping", icon: "⚡" },
    { name: "Presentation Design", icon: "📊" },
  ];

  const researchInsights = [
    {
      stat: "12",
      label: "User interviews conducted to understand pain points",
      insight: "Primary research"
    },
    {
      stat: "5",
      label: "Competitor apps analyzed for feature comparison",
      insight: "Competitive analysis"
    },
    {
      stat: "3",
      label: "Design iterations based on user feedback",
      insight: "Iterative design"
    },
  ];

  const outcomes = [
    { metric: "A+", label: "Project grade received" },
    { metric: "100%", label: "Positive peer feedback" },
    { metric: "20+", label: "Slides designed" },
    { metric: "15min", label: "Presentation duration" },
  ];

  const processSteps = [
    { number: "01", title: "Research", desc: "User interviews & market analysis" },
    { number: "02", title: "Define", desc: "Problem statement & user personas" },
    { number: "03", title: "Ideate", desc: "Brainstorming & concept sketches" },
    { number: "04", title: "Prototype", desc: "High-fidelity mockups & testing" },
  ];

  return (
    <div className="midterm-page">
      {/* Hero Section */}
      <section className="midterm-hero">
        <Link href="/" className="back-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </Link>
        
        <div className="hero-content">
          <span className="midterm-badge">CASE STUDY</span>
          <h1>Midterm Presentation</h1>
          <p>A comprehensive UX case study presentation showcasing the complete design process from research to final prototype, demonstrating problem-solving skills and user-centered design methodology.</p>
          
          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">UX Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Type</span>
              <span className="meta-value">Academic Project</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Duration</span>
              <span className="meta-value">6 weeks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Figma Presentation Embed */}
      <section className="presentation-section">
        <div className="presentation-header">
          <h2>Full Presentation</h2>
          <p>Navigate through the slides to see the complete case study</p>
        </div>
        
        <div className="figma-embed-container">
          <iframe 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fslides%2FT8WbnHZc9jng6KyzSNRag8%2FMidterm-Presentation%3Fnode-id%3D43-601%26t%3DhMUjvPCVcn8rSt47-0"
            allowFullScreen
            title="Midterm Presentation - Case Study"
            className="figma-iframe"
          />
        </div>
      </section>

      {/* Case Study Overview */}
      <section className="case-study-section">
        <div className="case-study-container">
          {/* The Challenge */}
          <div className="case-study-block">
            <div className="case-study-label">
              <span className="label-number">01</span>
              <span>The Challenge</span>
            </div>
            <h2>Understanding the problem space</h2>
            <p>
              This project aimed to identify a real-world problem and develop a user-centered solution 
              through rigorous research and iterative design. The challenge was to demonstrate the complete 
              UX design process from discovery to delivery.
            </p>
            <div className="challenge-points">
              <div className="challenge-point">
                <span className="point-icon">🎯</span>
                <div>
                  <strong>Problem Identification</strong>
                  <span>Finding a meaningful problem worth solving</span>
                </div>
              </div>
              <div className="challenge-point">
                <span className="point-icon">👥</span>
                <div>
                  <strong>User Understanding</strong>
                  <span>Deep dive into user needs and behaviors</span>
                </div>
              </div>
              <div className="challenge-point">
                <span className="point-icon">💡</span>
                <div>
                  <strong>Solution Validation</strong>
                  <span>Testing assumptions through prototyping</span>
                </div>
              </div>
            </div>
          </div>

          {/* Research & Discovery */}
          <div className="case-study-block research-block">
            <div className="case-study-label">
              <span className="label-number">02</span>
              <span>Research & Discovery</span>
            </div>
            <h2>Building empathy through research</h2>
            <p>
              Conducted comprehensive user research including interviews, surveys, and competitive 
              analysis to understand the problem space and identify opportunities for innovation.
            </p>
            <div className="research-insights">
              {researchInsights.map((item) => (
                <div key={item.label} className="insight-card">
                  <span className="insight-stat">{item.stat}</span>
                  <p className="insight-label">{item.label}</p>
                  <span className="insight-tag">{item.insight}</span>
                </div>
              ))}
            </div>
            <div className="persona-snippet">
              <div className="persona-avatar">🎓</div>
              <div className="persona-content">
                <span className="persona-name">Research Approach</span>
                <p>&quot;We combined qualitative and quantitative methods to build a comprehensive understanding of user needs, pain points, and motivations.&quot;</p>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="case-study-block solution-block">
            <div className="case-study-label">
              <span className="label-number">03</span>
              <span>The Solution</span>
            </div>
            <h2>From insights to design</h2>
            <p>
              Based on research findings, I developed a solution that directly addresses user pain points 
              while aligning with business goals and technical constraints.
            </p>
            <div className="solution-principles">
              <div className="principle">
                <div className="principle-header">
                  <span className="principle-icon">🧭</span>
                  <h3>User-Centered Approach</h3>
                </div>
                <p>Every design decision was validated against user needs discovered during research, ensuring the solution truly serves its intended audience.</p>
              </div>
              <div className="principle">
                <div className="principle-header">
                  <span className="principle-icon">🔄</span>
                  <h3>Iterative Process</h3>
                </div>
                <p>Multiple rounds of prototyping and testing allowed for continuous improvement and refinement of the design.</p>
              </div>
              <div className="principle">
                <div className="principle-header">
                  <span className="principle-icon">📐</span>
                  <h3>Design Systems Thinking</h3>
                </div>
                <p>Created consistent, scalable components that can be extended and maintained over time.</p>
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <div className="case-study-block outcomes-block">
            <div className="case-study-label">
              <span className="label-number">04</span>
              <span>Results & Impact</span>
            </div>
            <h2>Project outcomes</h2>
            <p>
              The presentation successfully demonstrated mastery of the UX design process and received 
              excellent feedback from instructors and peers.
            </p>
            <div className="outcomes-grid">
              {outcomes.map((item) => (
                <div key={item.label} className="outcome-card">
                  <span className="outcome-metric">{item.metric}</span>
                  <span className="outcome-label">{item.label}</span>
                </div>
              ))}
            </div>
            <blockquote className="testimonial">
              <p>&quot;This case study demonstrates a thorough understanding of user-centered design principles and effective communication of the design process.&quot;</p>
              <cite>— Instructor feedback</cite>
            </blockquote>
          </div>

          {/* Key Learnings */}
          <div className="case-study-block learnings-block">
            <div className="case-study-label">
              <span className="label-number">05</span>
              <span>Key Learnings</span>
            </div>
            <h2>What I learned from this project</h2>
            <div className="learnings-list">
              <div className="learning-item">
                <span className="learning-number">1</span>
                <div>
                  <strong>Research is the foundation</strong>
                  <p>Solid research creates confidence in design decisions and provides evidence to support recommendations.</p>
                </div>
              </div>
              <div className="learning-item">
                <span className="learning-number">2</span>
                <div>
                  <strong>Storytelling matters</strong>
                  <p>Presenting design work effectively is just as important as the design itself—the narrative drives understanding.</p>
                </div>
              </div>
              <div className="learning-item">
                <span className="learning-number">3</span>
                <div>
                  <strong>Iteration leads to excellence</strong>
                  <p>Each round of feedback and refinement brought the design closer to meeting user needs effectively.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="process-section">
        <h2>Design Process</h2>
        <div className="process-steps">
          {processSteps.map((step) => (
            <div key={step.number} className="process-step">
              <span className="step-number">{step.number}</span>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="tools-section">
        <h2>Tools & Methods</h2>
        <div className="tools-row">
          {tools.map((tool) => (
            <div key={tool.name} className="tool-item">
              <span className="tool-icon">{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <p>Interested in working together?</p>
        <a href="mailto:thesarrahgandhi@gmail.com" className="cta-btn">
          Get In Touch
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </section>
    </div>
  );
}

export default MidtermPresentationPage;
