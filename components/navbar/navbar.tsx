"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import "./navbar.css";

const SECTION_LINKS = [
  { label: "About", href: "#about-me" },
  { label: "Stack", href: "#my-stack" },
  { label: "Work", href: "#my-experience" },
  { label: "Projects", href: "#my-projects" },
  { label: "Contact", href: "#footer" },
];

const SOCIAL_LINKS = [
  { label: "Github", href: "https://www.github.com/sarrahgandhi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sarrah-gandhi/" },
];

// Matches the preloader's total duration (animationPhase 3 fires at 2500ms)
const PRELOADER_DURATION = 2500;

// Module-level flag: true once the navbar has waited out the preloader for
// this browser session. Persists across client-side navigations (the JS
// module isn't reloaded), but resets on a full page reload — which is when
// the Preloader actually animates again.
let preloaderHasFinished = false;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ready, setReady] = useState(preloaderHasFinished);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const sectionHref = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    if (preloaderHasFinished) return;
    const t = setTimeout(() => {
      preloaderHasFinished = true;
      setReady(true);
    }, PRELOADER_DURATION);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Subtle bottom hairline appears once the user starts scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`header ${ready ? "is-ready" : ""} ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-menu-open" : ""}`}
      >
        <nav className="navigation">
          <Link href="/" className="navigation-logo">
            Sarrah Gandhi
          </Link>

          <ul className="navigation-sections">
            {SECTION_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={sectionHref(link.href)} className="nav-section-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="navigation-socials">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-social-link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

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
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <div className="mobile-menu__links">
          {SECTION_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={sectionHref(link.href)}
              className="mobile-menu__link"
              onClick={closeMenu}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mobile-menu__socials">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
