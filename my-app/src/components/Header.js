import React from "react";
import "../styles/style.css";

// render just the header from the portfolio page, translate html into jsx
function Header() {
  return (
    <header className="header">
      <h1>Jenn Marshall</h1>
      <nav>
        <ul className="nav-links">
          <li id="about-me-link">
            <a href="#about-me">About Me</a>
          </li>
          <li id="projects-link">
            <a href="#projects">Projects</a>
          </li>
          <li id="contact-link">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;