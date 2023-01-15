import React from "react";
import "../styles/style.css";

// render only the footer section, translate html into jsx
function Footer() {
  return (
    <footer id="contact" className="footer">
      <h3>Contact Me</h3>
      <ul className="nav-links">
        <li id="github">
          <a href="https://github.com/jennnmarshall" target="_blank">
            GitHub
          </a>
        </li>
        <li id="email">
          <a href="mailto:jenn@gmail.com">e-mail</a>
        </li>
        <li id="twitter">
          <a href="http://www.twitter.com/jennnmarshall" target="_blank">
            Twitter
          </a>
        </li>
      </ul>
      <h4>JM 2023</h4>
    </footer>
  );
}

export default Footer;
