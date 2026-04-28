import React from "react";
import SectionTitle from "@/components/SectionTitle";
import "./resume.css";

const CONTACT = {
  location: "Toronto, Ontario",
  email: "connect@sarrahgandhi.com",
  website: "www.sarrahgandhi.com",
  phone: "(416) 988 4558",
  github: "github.com/sarrahgandhi",
  linkedin: "/in/sarrah-gandhi",
};

const SUMMARY =
  "Web developer and designer focused on building responsive, user-centred interfaces — fluent in both code and design tooling. I move from research and IA through to React, Next.js, and accessible front-end engineering, and I prefer staying on a project end-to-end so the build matches the intent.";

const EXPERIENCE = [
  {
    role: "Web Developer",
    company: "Freelance",
    period: "Jun 2022 – Present",
    location: "Toronto, Ontario",
    description: [
      "Led 15+ client engagements across branding, web, and digital marketing, owning end-to-end delivery.",
      "Coordinated 10+ designers across scope and feedback to ship ~90% of projects on time.",
      "Drove client discovery through launch, resulting in ~40% repeat business.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "IDesignTech",
    period: "Jun 2025 – Aug 2025",
    location: "Hamilton, Ontario",
    description: [
      "Designed and built UX for a SaaS booking platform where real-time actions (rescheduling, cancellations, approvals) directly impacted availability.",
      "Created and refined 20+ core user flows informed by analytics insights and stakeholder feedback.",
      "Owned 4 production-ready features across admin and user-facing dashboards.",
    ],
  },
  {
    role: "Lead Web Developer, Front End",
    company: "SLAY Coffee",
    period: "Sept 2023 – Apr 2024",
    location: "Bangalore, India",
    description: [
      "Maintained and optimized the company's WordPress site to support marketing campaigns and product launches.",
      "Improved site UX by fixing design inconsistencies, streamlining product pages, and ensuring responsive performance.",
      "Monitored performance via Google Analytics and identified key areas for content and conversion optimization.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Web Development",
    school: "Humber Polytechnic",
    period: "Class of 2025",
    highlights: "CGPA 3.5 / 4.0",
  },
  {
    degree: "Entrepreneurship Management",
    school: "George Brown College",
    period: "Class of 2024",
    highlights: "",
  },
  {
    degree: "Bachelor's in Visual Media",
    school: "St Joseph's University",
    period: "Class of 2020",
    highlights: "",
  },
];

const COURSEWORK = [
  "HTTP 5222 — Full Stack Web Development",
  "IXD 5206 — Front End Development",
  "HTTP 5221 — Security and Usability",
];

const SKILLS = [
  {
    label: "Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Responsive Design",
      "Laravel",
      "Node & NPM build",
    ],
  },
  {
    label: "UI / UX Foundations",
    items: [
      "User-Centered Design",
      "Information Architecture",
      "Interaction Design",
      "Accessibility",
    ],
  },
  {
    label: "Tools & Workflow",
    items: [
      "Figma",
      "Adobe Creative Suite",
      "Git & GitHub",
      "REST APIs",
      "Supabase",
      "Debugging",
    ],
  },
];

const PROJECTS = [
  {
    name: "Milestone Manager",
    tagline: "A wedding planning and RSVP management system.",
    stack: [
      "React",
      "TypeScript",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Render",
    ],
  },
];

const ABOUT = [
  "Built a fully customized wedding platform to manage my own upcoming wedding.",
  "Wiz National Spelling Bee — nationally ranked, 20th at the national competition.",
  "Cold-plunged in the middle of a snowstorm in 2025.",
  "Hated math, but competed in the national abacus competition in Bangalore.",
  "Won 3rd place in a foreign-language storytelling competition without knowing the language.",
];

function Resume() {
  return (
    <div className="resume">
      {/* ── Hero ── */}
      <section className="resume__hero">
        <div className="resume__container">
          <p className="resume__eyebrow">Résumé · Updated 2026</p>
          <h1 className="resume__title">
            <span className="resume__title-primary">SARRAH</span>
            <br />
            <span className="resume__title-indent">GANDHI</span>
          </h1>
          <p className="resume__intro">
            <span className="resume__intro-name">Web developer & designer</span>{" "}
            based in Toronto. The same résumé you&apos;d find in my inbox — only
            written in R Markdown.
          </p>

          <div className="resume__hero-bottom">
            <ul className="resume__contact">
              <li>
                <span className="resume__contact-label">Location</span>
                <span>{CONTACT.location}</span>
              </li>
              <li>
                <span className="resume__contact-label">Email</span>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <span className="resume__contact-label">Web</span>
                <a
                  href={`https://${CONTACT.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {CONTACT.website}
                </a>
              </li>
              <li>
                <span className="resume__contact-label">Phone</span>
                <span>{CONTACT.phone}</span>
              </li>
            </ul>

            <div className="resume__actions">
              <a
                href="/sarrah-gandhi-resume.Rmd"
                download="sarrah-gandhi-resume.Rmd"
                className="resume__btn resume__btn--primary"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
                Download .Rmd
              </a>
              <a
                href="/sarrah-gandhi-resume.Rmd"
                target="_blank"
                rel="noopener noreferrer"
                className="resume__btn"
              >
                View source
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Summary ── */}
      <section className="resume__section">
        <div className="resume__container">
          <SectionTitle title="Summary" />
          <p className="resume__summary">{SUMMARY}</p>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="resume__section">
        <div className="resume__container">
          <SectionTitle title="Experience" />
          <ol className="resume__timeline">
            {EXPERIENCE.map((job, index) => (
              <li className="resume-exp" key={`${job.company}-${index}`}>
                <div className="resume-exp__rail">
                  <span className="resume-exp__dot" />
                  {index < EXPERIENCE.length - 1 && (
                    <span className="resume-exp__line" />
                  )}
                </div>
                <div className="resume-exp__body">
                  <div className="resume-exp__head">
                    <p className="resume-exp__company">{job.company}</p>
                    <span className="resume-exp__period">{job.period}</span>
                  </div>
                  <h3 className="resume-exp__role">{job.role}</h3>
                  <p className="resume-exp__location">{job.location}</p>
                  <ul className="resume-exp__list">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="resume__section">
        <div className="resume__container">
          <SectionTitle title="Selected Project" />
          <div className="resume__projects">
            {PROJECTS.map((project) => (
              <article className="resume-project" key={project.name}>
                <div className="resume-project__header">
                  <h3 className="resume-project__name">{project.name}</h3>
                  <p className="resume-project__tagline">{project.tagline}</p>
                </div>
                <div className="resume__chips">
                  {project.stack.map((tech) => (
                    <span className="resume__chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="resume__section">
        <div className="resume__container">
          <SectionTitle title="Core Skills" />
          <div className="resume__skills">
            {SKILLS.map((group) => (
              <div className="resume-skills" key={group.label}>
                <h4 className="resume-skills__label">{group.label}</h4>
                <div className="resume__chips">
                  {group.items.map((skill) => (
                    <span className="resume__chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="resume__section">
        <div className="resume__container">
          <SectionTitle title="Education" />
          <div className="resume__education">
            {EDUCATION.map((edu, index) => (
              <article className="resume-edu" key={`${edu.school}-${index}`}>
                <p className="resume-edu__period">{edu.period}</p>
                <h3 className="resume-edu__degree">{edu.degree}</h3>
                <p className="resume-edu__school">{edu.school}</p>
                {edu.highlights && (
                  <p className="resume-edu__highlights">{edu.highlights}</p>
                )}
              </article>
            ))}
          </div>

          <div className="resume__coursework">
            <h4 className="resume__coursework-label">Relevant Coursework</h4>
            <ul className="resume__coursework-list">
              {COURSEWORK.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Off the clock ── */}
      <section className="resume__section resume__section--last">
        <div className="resume__container">
          <SectionTitle title="Off the clock" />
          <ul className="resume__about">
            {ABOUT.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Resume;
