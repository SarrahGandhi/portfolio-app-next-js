"use client";

import React from "react";
import Link from "next/link";
import "./avro-mobile.css";

function AvroMobilePage() {
  const tools = [
    { name: "Figma", icon: "🎨" },
    { name: "User Research", icon: "🔍" },
    { name: "Prototyping", icon: "⚡" },
    { name: "Wireframing", icon: "📐" },
  ];

  const features = [
    {
      icon: "🪪",
      title: "Digital ID Display",
      description: "Student photo, ID barcode/QR for quick verification"
    },
    {
      icon: "💳",
      title: "Tap-to-Pay",
      description: "Quick campus payments integrated seamlessly"
    },
    {
      icon: "💰",
      title: "Real-Time Balances",
      description: "Account summaries with detailed transaction history"
    },
    {
      icon: "🔐",
      title: "Access Control",
      description: "Doors, parking, and secure campus access"
    },
  ];

  const processSteps = [
    { number: "01", title: "Research", desc: "User interviews & competitive analysis" },
    { number: "02", title: "Wireframes", desc: "Low-fi sketches & user flows" },
    { number: "03", title: "Design", desc: "High-fidelity screens & components" },
    { number: "04", title: "Prototype", desc: "Interactive flows & usability testing" },
  ];

  const colors = [
    { hex: "#0EA5E9", name: "Sky" },
    { hex: "#0891B2", name: "Cyan" },
    { hex: "#14B8A6", name: "Teal" },
    { hex: "#1E3A5F", name: "Navy" },
    { hex: "#F97316", name: "Orange" },
  ];

  const researchInsights = [
    {
      stat: "67%",
      label: "of students want faster access to services and balances",
      insight: "Speed is critical"
    },
    {
      stat: "54%",
      label: "get confused when apps don't show clear next steps",
      insight: "Clarity matters"
    },
    {
      stat: "89%",
      label: "say privacy and security are critical for ID apps",
      insight: "Trust is essential"
    },
    {
      stat: "72%",
      label: "prefer digital over physical campus cards",
      insight: "Digital-first mindset"
    },
  ];

  const outcomes = [
    { metric: "~40%", label: "Reduced time searching for services" },
    { metric: "78%", label: "Completed ID display task in <10 sec" },
    { metric: "65%", label: "Found balance history immediately" },
    { metric: "4.6/5", label: "User satisfaction score" },
  ];

  const userFlow = [
    { stage: "Onboarding", action: "Login with campus credentials, permission requests", emotion: "Secure", opportunity: "Build trust early" },
    { stage: "Home Dashboard", action: "Quick actions: Show ID, Tap to Pay, View balance", emotion: "Efficient", opportunity: "One-tap access" },
    { stage: "Account Screen", action: "Transaction history, plan balances", emotion: "Informed", opportunity: "Transparency" },
    { stage: "Access Screen", action: "Tap to unlock doors, scan for services", emotion: "Empowered", opportunity: "Seamless entry" },
  ];

  const wireframes = [
    { title: "Home Dashboard", description: "Quick actions with Show ID, Tap to Pay, View balance" },
    { title: "Digital ID", description: "Student photo and barcode/QR prominently displayed" },
    { title: "Balance Cards", description: "Current balances at-a-glance with history" },
    { title: "Access Control", description: "Tap to unlock doors and campus services" },
  ];

  const designDecisions = [
    { area: "Navigation", decision: "Bottom Nav + Simple Labels", reason: "Easier reach for thumb interaction" },
    { area: "Action Buttons", decision: "Large CTA Icons", reason: "Quick task completion for frequent interactions" },
    { area: "Color Use", decision: "High contrast (accessible)", reason: "Better readability in various light environments" },
    { area: "Data Display", decision: "Real-time balances, receipt list", reason: "Transparency and reassurance" },
  ];

  return (
    <div className="avro-page">
      {/* Hero Section */}
      <section className="avro-hero">
        <Link href="/" className="back-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back
        </Link>
        
        <div className="hero-content">
          <span className="avro-badge">UI/UX DESIGN</span>
          <h1>Avro Mobile</h1>
          <p className="hero-subtitle">Campus Life Assistant App — Digital ID, Payments & Services</p>
          <p className="hero-desc">A mobile app that helps students manage their digital campus identity, access services, and handle payments — all from a single app that replaces physical campus cards.</p>
          
          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">UX/UI Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Duration</span>
              <span className="meta-value">3–4 weeks</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">iOS & Android</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="problem-section">
        <div className="problem-container">
          <div className="problem-header">
            <span className="section-badge">THE PROBLEM</span>
            <h2>Fragmented Campus Experience</h2>
          </div>
          <p className="problem-statement">
            Students often carry physical ID cards and multiple access cards (library ID, payment card, door access card). This creates:
          </p>
          <div className="problem-points">
            <div className="problem-point">
              <span className="point-icon">📦</span>
              <div>
                <strong>Increased risk of loss</strong>
                <span>Physical cards get lost, damaged, or forgotten</span>
              </div>
            </div>
            <div className="problem-point">
              <span className="point-icon">🐌</span>
              <div>
                <strong>Slow, fragmented access</strong>
                <span>Multiple cards for different campus services</span>
              </div>
            </div>
            <div className="problem-point">
              <span className="point-icon">👁️</span>
              <div>
                <strong>Poor visibility</strong>
                <span>Limited insight into account balances and transactions</span>
              </div>
            </div>
          </div>
          <div className="hmw-statement">
            <span className="hmw-label">How might we</span>
            <p>create a centralized digital experience that lets students access their credentials, view transactions, unlock campus services, and pay seamlessly?</p>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="users-section">
        <div className="case-study-container">
          <div className="case-study-block">
            <div className="case-study-label">
              <span className="label-number">01</span>
              <span>Target Users</span>
            </div>
            <h2>Who are we designing for?</h2>
            <div className="users-grid">
              <div className="user-card primary">
                <div className="user-icon">🎓</div>
                <div className="user-content">
                  <span className="user-type">Primary Users</span>
                  <h4>University Students</h4>
                  <p>Students using OneCard systems who need quick access to ID, payments, and campus services daily.</p>
                </div>
              </div>
              <div className="user-card secondary">
                <div className="user-icon">👔</div>
                <div className="user-content">
                  <span className="user-type">Secondary Users</span>
                  <h4>Campus Staff</h4>
                  <p>Staff members managing student access, verifying IDs, and overseeing campus services.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="case-study-section">
        <div className="case-study-container">
          {/* User Research */}
          <div className="case-study-block research-block">
            <div className="case-study-label">
              <span className="label-number">02</span>
              <span>User Research Insights</span>
            </div>
            <h2>Understanding student needs</h2>
            <p>
              Based on common campus app usage patterns and reviews, we identified key pain points and opportunities 
              to improve the campus digital experience.
            </p>
            
            <h3 className="subsection-title">Key Findings</h3>
            <div className="research-insights">
              {researchInsights.map((item) => (
                <div key={item.label} className="insight-card">
                  <span className="insight-stat">{item.stat}</span>
                  <p className="insight-label">{item.label}</p>
                  <span className="insight-tag">{item.insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Design Strategy */}
          <div className="case-study-block strategy-block">
            <div className="case-study-label">
              <span className="label-number">03</span>
              <span>Design Strategy</span>
            </div>
            <h2>Key features designed</h2>
            <p>
              Our strategy focused on consolidating all campus services into a single, intuitive mobile experience 
              that prioritizes speed, security, and clarity.
            </p>
            <div className="strategy-features">
              <div className="strategy-feature">
                <span className="strategy-icon">🪪</span>
                <div>
                  <strong>Digital ID Display</strong>
                  <p>Shows student photo, ID barcode/QR for instant verification</p>
                </div>
              </div>
              <div className="strategy-feature">
                <span className="strategy-icon">💳</span>
                <div>
                  <strong>Tap-to-Pay Integration</strong>
                  <p>Quick campus payments with one-tap convenience</p>
                </div>
              </div>
              <div className="strategy-feature">
                <span className="strategy-icon">📊</span>
                <div>
                  <strong>Real-Time Balances</strong>
                  <p>Account summaries with detailed transaction history</p>
                </div>
              </div>
              <div className="strategy-feature">
                <span className="strategy-icon">🔐</span>
                <div>
                  <strong>Access Control Tools</strong>
                  <p>Doors, parking access, and secure entry points</p>
                </div>
              </div>
              <div className="strategy-feature">
                <span className="strategy-icon">🔗</span>
                <div>
                  <strong>Resource Shortcuts</strong>
                  <p>Quick calls to wellness, emergency, library services</p>
                </div>
              </div>
              <div className="strategy-feature">
                <span className="strategy-icon">🏦</span>
                <div>
                  <strong>Portal Integration</strong>
                  <p>Easy way to add funds or plan purchases</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Flow */}
          <div className="case-study-block flow-block">
            <div className="case-study-label">
              <span className="label-number">04</span>
              <span>User Flow</span>
            </div>
            <h2>Mapping the experience</h2>
            <p>
              We mapped out the complete user journey to ensure seamless navigation from onboarding to daily use.
            </p>
            <div className="flow-map">
              {userFlow.map((step, index) => (
                <div key={step.stage} className="flow-step">
                  <div className="flow-stage">
                    <span className="stage-number">{String(index + 1).padStart(2, '0')}</span>
                    <h4>{step.stage}</h4>
                  </div>
                  <div className="flow-details">
                    <div className="flow-row">
                      <span className="flow-label">Action</span>
                      <p>{step.action}</p>
                    </div>
                    <div className="flow-row">
                      <span className="flow-label">Feeling</span>
                      <span className="emotion-tag">{step.emotion}</span>
                    </div>
                    <div className="flow-row">
                      <span className="flow-label">Opportunity</span>
                      <p className="opportunity">{step.opportunity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Wireframes */}
          <div className="case-study-block wireframes-block">
            <div className="case-study-label">
              <span className="label-number">05</span>
              <span>Wireframes → UI</span>
            </div>
            <h2>From sketches to screens</h2>
            <p>
              Wireframe goals focused on simplifying navigation with a bottom nav, clear CTAs for ID, Payments, 
              and Balances, with consistent use of campus colors and readable typography.
            </p>
            <div className="wireframes-grid">
              {wireframes.map((item) => (
                <div key={item.title} className="wireframe-card">
                  <div className="wireframe-placeholder">
                    <svg viewBox="0 0 200 400" className="wireframe-sketch">
                      <rect x="10" y="10" width="180" height="380" rx="20" fill="none" stroke="#0EA5E9" strokeWidth="2"/>
                      <rect x="70" y="20" width="60" height="8" rx="4" fill="#0EA5E9" opacity="0.3"/>
                      <rect x="20" y="50" width="160" height="100" rx="8" fill="#0EA5E9" opacity="0.15"/>
                      <rect x="20" y="170" width="75" height="60" rx="6" fill="#0EA5E9" opacity="0.2"/>
                      <rect x="105" y="170" width="75" height="60" rx="6" fill="#0EA5E9" opacity="0.2"/>
                      <rect x="20" y="250" width="160" height="20" rx="4" fill="#0EA5E9" opacity="0.15"/>
                      <rect x="20" y="280" width="120" height="12" rx="3" fill="#0EA5E9" opacity="0.1"/>
                      <rect x="20" y="310" width="160" height="40" rx="8" fill="#0EA5E9" opacity="0.25"/>
                    </svg>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            
            <h3 className="subsection-title">UI Highlights</h3>
            <div className="ui-highlights">
              <div className="ui-highlight">
                <span className="highlight-icon">💳</span>
                <strong>Balance Cards</strong>
                <p>Display current balances at-a-glance with clear typography</p>
              </div>
              <div className="ui-highlight">
                <span className="highlight-icon">🪪</span>
                <strong>Prominent ID Card</strong>
                <p>Student photo and barcode section easily accessible</p>
              </div>
              <div className="ui-highlight">
                <span className="highlight-icon">🎯</span>
                <strong>Action Buttons</strong>
                <p>Large icons for common tasks (Pay, Scan, Show ID)</p>
              </div>
              <div className="ui-highlight">
                <span className="highlight-icon">📋</span>
                <strong>History Feed</strong>
                <p>Transparent, chronological transaction log</p>
              </div>
            </div>
          </div>

          {/* Design Decisions */}
          <div className="case-study-block decisions-block">
            <div className="case-study-label">
              <span className="label-number">06</span>
              <span>Design Decisions & Rationale</span>
            </div>
            <h2>Why we made these choices</h2>
            <div className="decisions-table">
              <div className="decisions-header">
                <span>Design Area</span>
                <span>Decision</span>
                <span>Why</span>
              </div>
              {designDecisions.map((item) => (
                <div key={item.area} className="decision-row">
                  <span className="decision-area">{item.area}</span>
                  <span className="decision-choice">{item.decision}</span>
                  <span className="decision-reason">{item.reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accessibility */}
          <div className="case-study-block accessibility-block">
            <div className="case-study-label">
              <span className="label-number">07</span>
              <span>Accessibility Considerations</span>
            </div>
            <h2>Designing for everyone</h2>
            <div className="accessibility-features">
              <div className="a11y-feature">
                <span className="a11y-icon">🎨</span>
                <div>
                  <strong>High Contrast UI</strong>
                  <p>Better readability for students in various light environments</p>
                </div>
              </div>
              <div className="a11y-feature">
                <span className="a11y-icon">🔊</span>
                <div>
                  <strong>VoiceOver / TalkBack Support</strong>
                  <p>Full label support for screen readers</p>
                </div>
              </div>
              <div className="a11y-feature">
                <span className="a11y-icon">👆</span>
                <div>
                  <strong>Large Tappable Areas</strong>
                  <p>Minimum 44x44pt touch targets for quick access</p>
                </div>
              </div>
            </div>
          </div>

          {/* Usability Testing */}
          <div className="case-study-block testing-block">
            <div className="case-study-label">
              <span className="label-number">08</span>
              <span>Usability Testing & Feedback</span>
            </div>
            <h2>Validating with real users</h2>
            <p>
              We conducted remote usability tests with students to validate our design decisions and identify 
              areas for improvement.
            </p>
            <div className="testing-goals">
              <h3 className="subsection-title">Testing Goals</h3>
              <ul>
                <li>Can users quickly find and use the ID card feature?</li>
                <li>Can users view balances in less than 10 seconds?</li>
                <li>Are transaction flows clear and intuitive?</li>
              </ul>
            </div>
            <div className="testing-results">
              <h3 className="subsection-title">Results</h3>
              <div className="results-grid">
                <div className="result-card">
                  <span className="result-metric">78%</span>
                  <p>Completed the ID display task in &lt;10 sec</p>
                </div>
                <div className="result-card">
                  <span className="result-metric">65%</span>
                  <p>Found balance history immediately</p>
                </div>
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <div className="case-study-block outcomes-block">
            <div className="case-study-label">
              <span className="label-number">09</span>
              <span>Outcomes & Impact</span>
            </div>
            <h2>Measurable improvements</h2>
            <div className="outcomes-grid">
              {outcomes.map((item) => (
                <div key={item.label} className="outcome-card">
                  <span className="outcome-metric">{item.metric}</span>
                  <span className="outcome-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings */}
          <div className="case-study-block learnings-block">
            <div className="case-study-label">
              <span className="label-number">10</span>
              <span>Key Learnings</span>
            </div>
            <h2>What I took away from this project</h2>
            <div className="learnings-list">
              <div className="learning-item">
                <span className="learning-number">1</span>
                <div>
                  <strong>Simple, accessible layouts improve adoption</strong>
                  <p>Reducing cognitive load is essential for apps meant to be used quickly and frequently.</p>
                </div>
              </div>
              <div className="learning-item">
                <span className="learning-number">2</span>
                <div>
                  <strong>Students value clarity in financial data</strong>
                  <p>Transparent, real-time balance information builds trust and reduces anxiety.</p>
                </div>
              </div>
              <div className="learning-item">
                <span className="learning-number">3</span>
                <div>
                  <strong>Onboarding must minimize friction</strong>
                  <p>Campus apps compete for attention—quick setup drives initial adoption.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Improvements */}
          <div className="case-study-block future-block">
            <div className="case-study-label">
              <span className="label-number">11</span>
              <span>Future Improvements</span>
            </div>
            <h2>What&apos;s next</h2>
            <div className="future-list">
              <div className="future-item">
                <span className="future-icon">🎫</span>
                <div>
                  <strong>QR Tickets for Events</strong>
                  <p>Add digital tickets for campus events and activities</p>
                </div>
              </div>
              <div className="future-item">
                <span className="future-icon">🎨</span>
                <div>
                  <strong>Enhanced Personalization</strong>
                  <p>Theme options, customizable quick actions for individual preferences</p>
                </div>
              </div>
              <div className="future-item">
                <span className="future-icon">🔔</span>
                <div>
                  <strong>Push Notifications</strong>
                  <p>Alerts for low balance or campus announcements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="case-study-block conclusion-block">
            <div className="case-study-label">
              <span className="label-number">12</span>
              <span>Conclusion</span>
            </div>
            <div className="conclusion-content">
              <h2>Centralizing campus life</h2>
              <p>
                Avro Mobile successfully centralizes student campus identity and financial services into one 
                accessible mobile experience by reducing reliance on physical cards and offering transparency 
                into balances and access services — all while keeping interactions intuitive and fast.
              </p>
            </div>
          </div>
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
        <p className="palette-desc">A professional campus-inspired palette with sky blue and teal tones, designed to convey trust, security, and accessibility.</p>
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
      <section className="tools-section">
        <h2>Design Tools</h2>
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

export default AvroMobilePage;
