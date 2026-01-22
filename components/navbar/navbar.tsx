import Link from "next/link";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="header">
        <nav className="navigation">
          <div className="navigation-logo">
            <ul>
              <li>
                <Link href="/">Sarrah Gandhi</Link>
              </li>
            </ul>
          </div>
          <div className="navigation-links">
            <ul>
              <li>
                <Link href="/about">About//</Link>
              </li>
              <li>
                <Link href="/resume">Resume</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
