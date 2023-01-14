import React from "react";
import "../styles/style.css";

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