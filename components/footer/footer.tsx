"use client";

import React from "react";
import Link from "next/link";
import "./footer.css";

const SOCIAL_LINKS = [
  { label: "Github", href: "https://www.github.com/sarrahgandhi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sarrah-gandhi/" },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <h2 className="footer__name">Sarrah Gandhi</h2>
            <p className="footer__tagline">
              Graphic & Web Designer
            </p>
          </div>

          <div className="footer__links">
            <div className="footer__link-group">
              <h4 className="footer__link-title">Connect</h4>
              <a href="mailto:connect@sarrahgandhi.com" className="footer__link">
                connect@sarrahgandhi.com
              </a>
              <Link href="/resume" className="footer__link">
                Resume
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
            </div>
            <div className="footer__link-group">
              <h4 className="footer__link-title">Socials</h4>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  {link.label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Sarrah Gandhi. All rights reserved.
          </p>
          <button className="footer__back-top" onClick={scrollToTop}>
            Back to top
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;