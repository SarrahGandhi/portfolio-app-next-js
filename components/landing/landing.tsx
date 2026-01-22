import React from "react";

import "./landing.css";
function Landing() {
  const Skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "GIT",
    "VS Code",
    "Responsive Design",
    "Chrome DevTools",
    "Figma",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "Premiere Pro",
    "Adobe Suite",
    "Terminal",
    "Express.js",
    "MongoDB",
    "MySQL",
  ];
  const scrollingSkills = [...Skills, ...Skills];
  return (
    <>
      <div className="flower-icon">
        <img
          src="https://cdn-us.icons8.com/docs/WXTVKb9hp0elFWZjRc7hOQ/_X8G_8B0T0yC9WSaA_lNmg.svg"
          alt="Union"
        />
      </div>
      <div className="rectangle">
        <div className="rectangle-image"></div>
 <div className="icons">
          <div className="figma-icon">
            <img
              src="https://cdn-us.icons8.com/docs/WXTVKb9hp0elFWZjRc7hOQ/qICglo_FH0Wnvq-RZOmaXA.svg"
              alt="Group 2"
            />
          </div>
          <div className="orange-half-circle">
            <img
              src="https://cdn-us.icons8.com/docs/WXTVKb9hp0elFWZjRc7hOQ/c-A2zfoiBkSuJg9FN7bn7A.svg"
              alt="Subtract"
            />
          </div>
          <div className="behance">
            <img
              src="https://cdn-us.icons8.com/docs/WXTVKb9hp0elFWZjRc7hOQ/biqDVmNOTUKx73svJPFayQ.svg"
              alt="Logos"
            />
          </div>
        </div>
        <div className="landing-title">
          <ul>
            <li>DESIGNER BY CHOICE</li>
            <li>DEVELOPER BY CAREER</li>
            <li>DEBUGGER BY CHANCE</li>
          </ul>
        </div>
       
        <div className="image">
          <img
            src="https://lcdn-us.icons8.com/c/WXTVKb9hp0elFWZjRc7hOQ/fac041fa3855fb2a4ba2350c9156aa710a777fba.png"
            alt="Profile"
          />
        </div>
        <div className="resume-button">
          <button>View Resume</button>
        </div>
      </div>
      <div className="bottom-container-container">
        <div className="bottom-container">
          {scrollingSkills.map((skill, index) => (
            <p key={index}>{skill}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Landing;
