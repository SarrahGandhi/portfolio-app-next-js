import React from "react";
import Image from "next/image"; // ... in the component:
import "./highlights.css";
function Highlights() {
  const facts = [
    {
      title: "Transforming Slay Coffee’s Digital Presence",
      fact: "Redesigned Slay Coffee’s site to reflect its bold brand, improving responsiveness, visuals, and engagement. Also built high-converting landing pages for seasonal campaigns.",
    },
    {
      title: "Creative Freelance Collaborations",
      fact: "As a freelance designer and developer, I’ve created tailored websites for clients like Let There Be Light Studios and MP Ensystems—delivering clean, responsive designs.",
    },
    {
      title: "Creating Functional, API-Driven Web Applications",
      fact: "Developed dynamic web apps using MERN, with API integration, form validation, and responsive UI—balancing functionality, design, and accessibility.",
    },
    {
      title: "Designing Packaging & Marketing for Product Launches",
      fact: "Designed packaging and digital assets for multiple Slay Coffee campaigns, including a holiday launch that surpassed sales targets in its first week.",
    },
  ];
  return (
    <div className="highlights">
      <div className="highlights-title-container">
        <div className="highlights-title">CAREER HIGHLIGHTS</div>

        <div className="tagline">
          <Image
            alt="Misc_06"
            src="https://cdn-us.icons8.com/docs/WXTVKb9hp0elFWZjRc7hOQ/29Qo0E6zQkiv5u3GK-t-Rg.svg"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="highlights-content">
        {facts.map((fact) => (
          <div className="highlights-content-item-container" key={fact.title}>
            <div className="highlights-content-item-title">{fact.title}</div>
            <div className="highlights-content-item-fact">{fact.fact}</div>
          </div>
        ))}
      </div>
      < div className="highlight-button">
        <button>View All</button>
      </div>
    </div>
  );
}

export default Highlights;
