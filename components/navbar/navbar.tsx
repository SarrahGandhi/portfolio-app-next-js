"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useCallback, useState, useEffect } from "react";
import "./navbar.css";

const SECTION_LINKS = [
  { label: "About", href: "#about-me" },
  { label: "Stack", href: "#my-stack" },
  { label: "Work", href: "#my-experience" },
  { label: "Projects", href: "#my-projects" },
  { label: "Contact", href: "#footer" },
];

// Matches the preloader's total duration (animationPhase 3 fires at 2500ms)
const PRELOADER_DURATION = 2500;

function Navbar() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), PRELOADER_DURATION);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = headerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    el.style.transform = `perspective(600px) rotateX(${-ny * 3}deg) rotateY(${nx * 3}deg)`;
    el.style.boxShadow = `${-nx * 10 + 6}px ${-ny * 6 + 6}px 0px 0px rgba(0,0,0,0.25)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = headerRef.current;
    if (!el) return;
    el.style.transform = "";
    el.style.boxShadow = "";
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div
        className={`header ${ready ? 'is-ready' : ''}`}
        ref={headerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Row 1: Logo + Socials (desktop) / Logo + Hamburger (mobile) */}
        <nav className="navigation">
          <div className="navigation-logo">
            <ul>
              <li>
                <Link href="/">Sarrah Gandhi</Link>
              </li>
            </ul>
          </div>

          {/* Desktop social links */}
          <div className="navigation-links">
            <ul>
              <li>
                <a href="https://www.github.com/sarrahgandhi" target="_blank" rel="noopener noreferrer">Github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sarrah-gandhi/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
            </ul>
          </div>

          {/* Hamburger (mobile only) */}
          <button
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>

        {/* Row 2: Section links strip (desktop only) */}
        <div className="navigation-sections">
          {SECTION_LINKS.map((link) => (
            <a
              key={link.href}
              href={sectionHref(link.href)}
              className="nav-section-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu__links">
          {SECTION_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={sectionHref(link.href)}
              className="mobile-menu__link"
              onClick={closeMenu}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mobile-menu__socials">
          <a href="https://www.github.com/sarrahgandhi" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            Github ↗
          </a>
          <a href="https://www.linkedin.com/in/sarrah-gandhi/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            LinkedIn ↗
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
