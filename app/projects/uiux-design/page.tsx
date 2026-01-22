"use client";

import React from "react";
import Link from "next/link";
import "./uiux-design.css";

function UIUXDesignPage() {
  const tools = [
    { name: "Figma", icon: "🎨" },
    { name: "Adobe XD", icon: "✨" },
    { name: "Sketch", icon: "💎" },
    { name: "Miro", icon: "📋" },
  ];

  const features = [
    {
      icon: "🧘",
      title: "Guided Meditations",
      description: "Curated sessions for stress relief, focus, and sleep"
    },
    {
      icon: "📊",
      title: "Mood Tracking",
      description: "Daily check-ins with visual progress insights"
    },
    {
      icon: "🌙",
      title: "Sleep Stories",
      description: "Calming narratives for better rest"
    },
    {
      icon: "🎯",
      title: "Personalized Goals",
      description: "Custom wellness journeys based on user needs"
    },
  ];

  const processSteps = [
    { number: "01", title: "Research", desc: "User interviews & competitive analysis" },
    { number: "02", title: "Wireframes", desc: "Low-fi sketches & user flows" },
    { number: "03", title: "Design", desc: "High-fidelity screens & components" },
    { number: "04", title: "Prototype", desc: "Interactive flows & micro-interactions" },
  ];

  const colors = [
    { hex: "#8B5CF6", name: "Violet" },
    { hex: "#6366F1", name: "Indigo" },
    { hex: "#EC4899", name: "Pink" },
    { hex: "#F97316", name: "Orange" },
    { hex: "#06B6D4", name: "Cyan" },
  ];

  return (
    <div className="uiux-page-simple">
      {/* Hero Section */}
      <section className="uiux-hero-simple">
        <Link href="/" className="back-link-simple">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </Link>
        
        <div className="hero-content-simple">
          <span className="uiux-badge">UI/UX DESIGN</span>
          <h1>Meditate UI Kit</h1>
          <p>A comprehensive wellness & meditation app design featuring calming aesthetics, intuitive user flows, and thoughtful micro-interactions for mindful living.</p>
          
          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">UI/UX Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">iOS & Android</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Screens</span>
              <span className="meta-value">20+</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Prototype */}
      <section className="prototype-section">
        <div className="prototype-header">
          <h2>Interactive Prototype</h2>
          <p>Click and interact with the design below to explore the full user experience</p>
        </div>
        
        <div className="figma-embed-container">
          <iframe 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FWgJNBuod1XnGwGGQRJf0yZ%2FMeditate---UI-Kit%3Fnode-id%3D0-1%26t%3DrS7Pxbo591zv2Hc7-1"
            allowFullScreen
            title="Meditate UI Kit - Figma Prototype"
            className="figma-iframe"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
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

      {/* Color Palette */}
      <section className="palette-section">
        <h2>Color Palette</h2>
        <p className="palette-desc">A vibrant gradient palette with purple and indigo tones, designed to create a calming yet engaging experience.</p>
        <div className="color-swatches">
          {colors.map((color) => (
            <div key={color.hex} className="color-swatch" style={{ backgroundColor: color.hex }}>
              <span className="color-name">{color.name}</span>
              <span className="color-hex">{color.hex}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="tools-simple">
        <h2>Design Tools</h2>
        <div className="tools-row">
          {tools.map((tool) => (
            <div key={tool.name} className="tool-item">
              <span className="tool-icon-simple">{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-simple">
        <p>Interested in working together?</p>
        <a href="mailto:thesarrahgandhi@gmail.com" className="cta-btn-simple">
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

export default UIUXDesignPage;
