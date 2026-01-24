import React from "react";
import "./resume.css";

function Resume() {
  const experience = [
    {
      role: "FULL STACK DEVELOPER INTERN",
      company: "IDESIGN TECH",
      period: "2025",
      location: "Hamilton, Ontario",
      description: [
        "Built a web-based booking management system with multi-role authentication (User/Admin) and secure access control.",
        "Developed end-to-end booking workflows with real-time slot availability, cancellations, and status tracking.",
        "Implemented service scheduling and item management (vehicles: cars, bikes, boats) integrated into the booking process.",
        "Designed a responsive UI/UX with Tailwind CSS and Blade templates, ensuring mobile-friendly user experience.",
        "Created an administrative dashboard for booking approvals, service oversight, user management, and email notifications.",
      ],
    },
    {
      role: "UI/UX Designer & Developer",
      company: "Creative Agency",
      period: "2022 - 2023",
      location: "San Francisco, CA",
      description: [
        "Designed and developed websites for 15+ clients across various industries",
        "Created design systems and component libraries in Figma",
        "Implemented responsive designs with modern CSS and JavaScript",
        "Led client presentations and gathered requirements",
      ],
    },
    {
      role: "Junior Web Developer",
      company: "Digital Solutions Inc.",
      period: "2021 - 2022",
      location: "New York, NY",
      description: [
        "Developed and maintained WordPress and custom websites",
        "Worked with HTML, CSS, JavaScript, and PHP",
        "Assisted in database design and management",
        "Participated in agile development processes",
      ],
    },
  ];

  const education = [
    {
      degree: "Web Development",
      school: "Humber Polytechnic",
      period: "2024 - 2025",
      highlights: "Post Graduate Diploma • Dean's List • GPA: 3.8",
    },
    {
      degree: "Entrepreneurship Management",
      school: "George Brown College",
      period: "2024-2025",
      highlights: "Post Graduate Diploma • GPA: 3.5",
    },
    {
      degree: "Bachelor of Vocation in Visual Media",
      school: "St Joseph's University",
      period: "2018-2021",
      highlights: "",
    },
  ];

  const skills = {
    technical: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "MongoDB",
      "MySQL",
      "Git",
      "REST APIs",
    ],
    design: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "InDesign",
      "Premiere Pro",
      "After Effects",
      "Prototyping",
    ],
    soft: [
      "Problem Solving",
      "Communication",
      "Team Collaboration",
      "Project Management",
      "Agile/Scrum",
      "Leadership",
    ],
  };

  return (
    <div className="resume-container">
      {/* Header Section */}
      <section className="resume-header">
        <div className="resume-header-content">
          <div className="resume-title-section">
            <h1>Sarrah Gandhi</h1>
            <p className="resume-subtitle">
              Designer & Developer crafting beautiful digital experiences
            </p>
            <div className="resume-contact">
              <span>📍 Toronto, Canada</span>
              <span>✉️ thesarrahgandhi@gmail.com</span>
              <span>🔗 sarrahgandhi.com</span>
            </div>
          </div>
          <button className="download-btn">
            <span className="download-icon">↓</span>
            Download PDF
          </button>
        </div>
      </section>

      {/* Summary Section */}
      <section className="resume-summary">
        <p>
          Creative frontend developer and UI UX Designer with experience building responsive,
          user-centric web applications. I combine design thinking with
          technical expertise to create digital experiences that are both
          beautiful and functional. Passionate about clean code, accessibility,
          and continuous learning.
        </p>
      </section>

      {/* Experience Section */}
      <section className="resume-section experience-section">
        <h2 className="section-heading">Work Experience</h2>
        <div className="experience-list">
          {experience.map((job, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-header">
                <div className="experience-title">
                  <h3>{job.role}</h3>
                  <span className="company-name">{job.company}</span>
                </div>
                <div className="experience-meta">
                  <span className="period-badge">{job.period}</span>
                  <span className="location">{job.location}</span>
                </div>
              </div>
              <ul className="experience-description">
                {job.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="resume-section skills-section">
        <h2 className="section-heading">Skills & Tools</h2>
        <div className="skills-grid">
          <div className="skills-category">
            <h3>Technical</h3>
            <div className="skills-tags">
              {skills.technical.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>Design</h3>
            <div className="skills-tags">
              {skills.design.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>Soft Skills</h3>
            <div className="skills-tags">
              {skills.soft.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="resume-section education-section">
        <h2 className="section-heading">Education</h2>
        <div className="education-list">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-period">{edu.period}</div>
              <h3>{edu.degree}</h3>
              <span className="school-name">{edu.school}</span>
              {edu.highlights && (
                <p className="education-highlights">{edu.highlights}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="resume-footer">
        <div className="footer-content">
          <p>Let&apos;s build something amazing together</p>
          <div className="footer-links">
            <a
              href="https://github.com/sarrahgandhi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sarrah-gandhi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
            <a
              href="https://behance.net/sarrahgandhi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Behance
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
