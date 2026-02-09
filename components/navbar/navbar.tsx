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
                <Link href="https://www.github.com/sarrahgandhi">Github</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/sarrah-gandhi/">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
