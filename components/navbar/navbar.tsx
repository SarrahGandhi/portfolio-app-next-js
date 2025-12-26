import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="header">
        <nav className="navigation">
          <div className="navigation-logo">
            <ul>
              <li>
                <a href="/">Sarrah Gandhi</a>
              </li>
            </ul>
          </div>
          <div className="navigation-links">
            <ul>
              <li>
                <a href="/about">About//</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/resume">Resume</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
