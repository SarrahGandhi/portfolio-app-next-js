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

  const researchInsights = [
    {
      stat: "78%",
      label: "of users abandon wellness apps within the first week",
      insight: "Retention is the key challenge"
    },
    {
      stat: "63%",
      label: "said they feel overwhelmed by too many features",
      insight: "Simplicity matters"
    },
    {
      stat: "91%",
      label: "prefer personalized content over generic programs",
      insight: "Personalization drives engagement"
    },
    {
      stat: "42%",
      label: "cite lack of progress visibility as reason to quit",
      insight: "Show the journey"
    },
  ];

  const outcomes = [
    { metric: "4.8/5", label: "User satisfaction score" },
    { metric: "47%", label: "Increase in session completion" },
    { metric: "3x", label: "Higher 30-day retention" },
    { metric: "2.1min", label: "Avg. time to first meditation" },
  ];

  const competitors = [
    { name: "Headspace", strength: "Brand recognition & content library", weakness: "Expensive, overwhelming features" },
    { name: "Calm", strength: "Sleep stories & ambient sounds", weakness: "Less focus on beginner guidance" },
    { name: "Insight Timer", strength: "Free content, community", weakness: "Cluttered UI, inconsistent quality" },
  ];

  const userJourney = [
    { stage: "Awareness", action: "Discovers app through recommendation", emotion: "Curious", opportunity: "Clear value proposition" },
    { stage: "Onboarding", action: "Sets up profile and preferences", emotion: "Hopeful", opportunity: "Personalized experience" },
    { stage: "First Session", action: "Completes first meditation", emotion: "Accomplished", opportunity: "Positive reinforcement" },
    { stage: "Habit Building", action: "Returns for daily practice", emotion: "Committed", opportunity: "Streak rewards" },
  ];

  const wireframes = [
    { title: "Home Screen", description: "Daily mood check-in with personalized session recommendations" },
    { title: "Session Player", description: "Distraction-free player with breathing visualizations" },
    { title: "Progress Dashboard", description: "Visual streaks, stats, and achievement badges" },
    { title: "Explore Library", description: "Categorized content with smart filters" },
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

      {/* Case Study Section */}
      <section className="case-study-section">
        <div className="case-study-container">
          {/* The Challenge */}
          <div className="case-study-block">
            <div className="case-study-label">
              <span className="label-number">01</span>
              <span>The Challenge</span>
            </div>
            <h2>Why do most wellness apps fail to retain users?</h2>
            <p>
              The meditation app market is saturated with options, yet most users abandon these apps within days. 
              I was tasked with designing an experience that not only attracts users but keeps them coming back—
              transforming meditation from a chore into a daily habit.
            </p>
            <div className="challenge-points">
              <div className="challenge-point">
                <span className="point-icon">🎯</span>
                <div>
                  <strong>Low engagement</strong>
                  <span>Users open the app once and never return</span>
                </div>
              </div>
              <div className="challenge-point">
                <span className="point-icon">😵</span>
                <div>
                  <strong>Feature overload</strong>
                  <span>Too many options lead to decision paralysis</span>
                </div>
              </div>
              <div className="challenge-point">
                <span className="point-icon">🔄</span>
                <div>
                  <strong>Generic content</strong>
                  <span>One-size-fits-all approach doesn&apos;t resonate</span>
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
            <h2>Understanding real user needs</h2>
            <p>
              I conducted user interviews with 24 participants, analyzed competitor apps, and surveyed 150+ 
              potential users to uncover pain points and opportunities.
            </p>
            
            <h3 className="subsection-title">Research Methods</h3>
            <div className="research-methods">
              <div className="method-card">
                <span className="method-icon">🎙️</span>
                <h4>User Interviews</h4>
                <p>24 in-depth interviews with meditation beginners and experienced practitioners to understand motivations and frustrations.</p>
              </div>
              <div className="method-card">
                <span className="method-icon">📊</span>
                <h4>Survey Analysis</h4>
                <p>150+ responses analyzing habits, preferences, and reasons for abandoning previous wellness apps.</p>
              </div>
              <div className="method-card">
                <span className="method-icon">🔍</span>
                <h4>Competitive Audit</h4>
                <p>Deep-dive analysis of 8 leading meditation apps to identify market gaps and opportunities.</p>
              </div>
            </div>

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

            <h3 className="subsection-title">Competitive Landscape</h3>
            <div className="competitor-analysis">
              {competitors.map((comp) => (
                <div key={comp.name} className="competitor-card">
                  <h4>{comp.name}</h4>
                  <div className="competitor-details">
                    <div className="strength">
                      <span className="detail-label">✓ Strength</span>
                      <p>{comp.strength}</p>
                    </div>
                    <div className="weakness">
                      <span className="detail-label">✗ Weakness</span>
                      <p>{comp.weakness}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="subsection-title">User Personas</h3>
            <div className="personas-grid">
              <div className="persona-snippet">
                <div className="persona-avatar">👩‍💻</div>
                <div className="persona-content">
                  <span className="persona-name">Primary Persona: Sarah, 28</span>
                  <span className="persona-role">Marketing Manager • Stress-driven beginner</span>
                  <p>&quot;I want to meditate, but I always feel like I&apos;m doing it wrong. I need something that guides me gently without making me feel like a beginner.&quot;</p>
                  <div className="persona-goals">
                    <span>Goals:</span> Reduce work anxiety, Build consistent habit, Improve sleep
                  </div>
                </div>
              </div>
              <div className="persona-snippet secondary">
                <div className="persona-avatar">👨‍🎨</div>
                <div className="persona-content">
                  <span className="persona-name">Secondary Persona: Marcus, 35</span>
                  <span className="persona-role">Creative Director • Experienced practitioner</span>
                  <p>&quot;I&apos;ve been meditating for years but need fresh content. Most apps feel too basic or don&apos;t respect my time.&quot;</p>
                  <div className="persona-goals">
                    <span>Goals:</span> Advanced techniques, Variety in content, Track long-term progress
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Journey Mapping */}
          <div className="case-study-block journey-block">
            <div className="case-study-label">
              <span className="label-number">03</span>
              <span>User Journey Mapping</span>
            </div>
            <h2>Mapping the path to mindfulness</h2>
            <p>
              I mapped out the complete user journey to identify key touchpoints and opportunities 
              for creating meaningful moments that drive engagement and retention.
            </p>
            <div className="journey-map">
              {userJourney.map((step, index) => (
                <div key={step.stage} className="journey-step">
                  <div className="journey-stage">
                    <span className="stage-number">{String(index + 1).padStart(2, '0')}</span>
                    <h4>{step.stage}</h4>
                  </div>
                  <div className="journey-details">
                    <div className="journey-row">
                      <span className="journey-label">Action</span>
                      <p>{step.action}</p>
                    </div>
                    <div className="journey-row">
                      <span className="journey-label">Emotion</span>
                      <span className="emotion-tag">{step.emotion}</span>
                    </div>
                    <div className="journey-row">
                      <span className="journey-label">Opportunity</span>
                      <p className="opportunity">{step.opportunity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Solution */}
          <div className="case-study-block solution-block">
            <div className="case-study-label">
              <span className="label-number">04</span>
              <span>The Solution</span>
            </div>
            <h2>Designing for calm and clarity</h2>
            <p>
              Based on research insights, I designed an experience centered around three core principles:
            </p>
            <div className="solution-principles">
              <div className="principle">
                <div className="principle-header">
                  <span className="principle-icon">✨</span>
                  <h3>Progressive Onboarding</h3>
                </div>
                <p>A warm, conversational onboarding that learns user preferences and sets personalized goals—no overwhelming options upfront.</p>
              </div>
              <div className="principle">
                <div className="principle-header">
                  <span className="principle-icon">🎨</span>
                  <h3>Calming Visual Language</h3>
                </div>
                <p>Soft gradients, generous whitespace, and subtle animations create a sense of tranquility from the first screen.</p>
              </div>
              <div className="principle">
                <div className="principle-header">
                  <span className="principle-icon">🧭</span>
                  <h3>Guided Pathways</h3>
                </div>
                <p>Instead of endless browsing, users receive daily curated sessions based on their mood, goals, and progress.</p>
              </div>
            </div>
          </div>

          {/* Information Architecture */}
          <div className="case-study-block ia-block">
            <div className="case-study-label">
              <span className="label-number">05</span>
              <span>Information Architecture</span>
            </div>
            <h2>Simplifying the structure</h2>
            <p>
              I restructured the app&apos;s navigation from a complex 6-tab system to a focused 3-tab experience, 
              reducing cognitive load while maintaining discoverability.
            </p>
            <div className="ia-comparison">
              <div className="ia-before">
                <span className="ia-label">Before: 6 Tabs</span>
                <div className="ia-tabs">
                  <span>Home</span>
                  <span>Meditate</span>
                  <span>Sleep</span>
                  <span>Music</span>
                  <span>Community</span>
                  <span>Profile</span>
                </div>
                <p className="ia-note">Users reported feeling overwhelmed and unsure where to start</p>
              </div>
              <div className="ia-arrow">→</div>
              <div className="ia-after">
                <span className="ia-label">After: 3 Tabs</span>
                <div className="ia-tabs">
                  <span className="primary-tab">Today</span>
                  <span>Explore</span>
                  <span>Progress</span>
                </div>
                <p className="ia-note">Clear entry point with personalized daily recommendations</p>
              </div>
            </div>
          </div>

          {/* Wireframes & Iterations */}
          <div className="case-study-block wireframes-block">
            <div className="case-study-label">
              <span className="label-number">06</span>
              <span>Wireframes & Iterations</span>
            </div>
            <h2>From sketches to screens</h2>
            <p>
              The design evolved through multiple iterations, with each version informed by user feedback 
              and usability testing insights.
            </p>
            <div className="wireframes-grid">
              {wireframes.map((item) => (
                <div key={item.title} className="wireframe-card">
                  <div className="wireframe-placeholder">
                    <svg viewBox="0 0 200 400" className="wireframe-sketch">
                      <rect x="10" y="10" width="180" height="380" rx="20" fill="none" stroke="#ccc" strokeWidth="2"/>
                      <rect x="70" y="20" width="60" height="8" rx="4" fill="#ddd"/>
                      <rect x="20" y="50" width="160" height="100" rx="8" fill="#f0f0f0"/>
                      <rect x="20" y="170" width="75" height="60" rx="6" fill="#e8e8e8"/>
                      <rect x="105" y="170" width="75" height="60" rx="6" fill="#e8e8e8"/>
                      <rect x="20" y="250" width="160" height="20" rx="4" fill="#f0f0f0"/>
                      <rect x="20" y="280" width="120" height="12" rx="3" fill="#e0e0e0"/>
                      <rect x="20" y="310" width="160" height="40" rx="8" fill="#ddd"/>
                    </svg>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
            <div className="iteration-note">
              <span className="note-icon">💡</span>
              <p><strong>Key Iteration:</strong> After testing, we moved the mood check-in from a separate screen to the home feed header, reducing friction and increasing completion rates by 34%.</p>
            </div>
          </div>

          {/* Key Decisions */}
          <div className="case-study-block decisions-block">
            <div className="case-study-label">
              <span className="label-number">07</span>
              <span>Key Design Decisions</span>
            </div>
            <div className="decisions-grid">
              <div className="decision-item">
                <div className="decision-before">
                  <span className="decision-tag before">Before</span>
                  <p>Complex navigation with 6+ tabs</p>
                </div>
                <div className="decision-arrow">→</div>
                <div className="decision-after">
                  <span className="decision-tag after">After</span>
                  <p>Simplified to 3 core tabs: Today, Explore, Progress</p>
                </div>
              </div>
              <div className="decision-item">
                <div className="decision-before">
                  <span className="decision-tag before">Before</span>
                  <p>Generic session recommendations</p>
                </div>
                <div className="decision-arrow">→</div>
                <div className="decision-after">
                  <span className="decision-tag after">After</span>
                  <p>Daily mood check-in drives personalized content</p>
                </div>
              </div>
              <div className="decision-item">
                <div className="decision-before">
                  <span className="decision-tag before">Before</span>
                  <p>Abrupt session endings</p>
                </div>
                <div className="decision-arrow">→</div>
                <div className="decision-after">
                  <span className="decision-tag after">After</span>
                  <p>Gentle transitions with reflection prompts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Usability Testing */}
          <div className="case-study-block testing-block">
            <div className="case-study-label">
              <span className="label-number">08</span>
              <span>Usability Testing</span>
            </div>
            <h2>Validating with real users</h2>
            <p>
              I conducted moderated usability tests with 12 participants across two rounds, iterating 
              based on feedback to refine the experience.
            </p>
            <div className="testing-rounds">
              <div className="testing-round">
                <h4>Round 1: Concept Validation</h4>
                <ul>
                  <li>8 participants tested low-fidelity prototype</li>
                  <li>Identified confusion around progress tracking</li>
                  <li>Discovered need for clearer session length indicators</li>
                </ul>
              </div>
              <div className="testing-round">
                <h4>Round 2: Refinement</h4>
                <ul>
                  <li>12 participants tested high-fidelity prototype</li>
                  <li>Task completion rate: 94%</li>
                  <li>Average SUS score: 87 (Excellent)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <div className="case-study-block outcomes-block">
            <div className="case-study-label">
              <span className="label-number">09</span>
              <span>Results & Impact</span>
            </div>
            <h2>Measurable improvements</h2>
            <p>
              User testing with the new prototype showed significant improvements across all key metrics:
            </p>
            <div className="outcomes-grid">
              {outcomes.map((item) => (
                <div key={item.label} className="outcome-card">
                  <span className="outcome-metric">{item.metric}</span>
                  <span className="outcome-label">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="testimonials-grid">
              <blockquote className="testimonial">
                <p>&quot;This feels like an app that actually wants me to succeed, not just another subscription trap.&quot;</p>
                <cite>— User testing participant</cite>
              </blockquote>
              <blockquote className="testimonial">
                <p>&quot;I love how it doesn&apos;t overwhelm me with choices. The daily recommendation is exactly what I need.&quot;</p>
                <cite>— Beta tester, 32</cite>
              </blockquote>
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
                  <strong>Less is more in wellness UX</strong>
                  <p>Reducing cognitive load is essential for apps meant to reduce stress. Every element should serve the user&apos;s peace of mind.</p>
                </div>
              </div>
              <div className="learning-item">
                <span className="learning-number">2</span>
                <div>
                  <strong>Personalization builds trust</strong>
                  <p>Users feel cared for when the app remembers their preferences and adapts to their journey.</p>
                </div>
              </div>
              <div className="learning-item">
                <span className="learning-number">3</span>
                <div>
                  <strong>Micro-interactions matter</strong>
                  <p>Small, thoughtful animations during loading states and transitions create moments of delight that reinforce the calming experience.</p>
                </div>
              </div>
              <div className="learning-item">
                <span className="learning-number">4</span>
                <div>
                  <strong>Test early, test often</strong>
                  <p>Early user feedback prevented costly redesigns and helped validate assumptions before investing in high-fidelity designs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="case-study-block next-steps-block">
            <div className="case-study-label">
              <span className="label-number">11</span>
              <span>Next Steps</span>
            </div>
            <h2>Future considerations</h2>
            <div className="next-steps-list">
              <div className="next-step">
                <span className="step-icon">🔔</span>
                <div>
                  <strong>Smart Notifications</strong>
                  <p>Implement AI-driven reminders based on user behavior patterns and optimal meditation times.</p>
                </div>
              </div>
              <div className="next-step">
                <span className="step-icon">👥</span>
                <div>
                  <strong>Community Features</strong>
                  <p>Add optional group meditation sessions and progress sharing for accountability.</p>
                </div>
              </div>
              <div className="next-step">
                <span className="step-icon">⌚</span>
                <div>
                  <strong>Wearable Integration</strong>
                  <p>Connect with Apple Watch and fitness trackers for biometric-informed recommendations.</p>
                </div>
              </div>
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
