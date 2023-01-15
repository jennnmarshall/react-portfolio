import React from "react";
import "../styles/style.css";
// import Image from "react-image";
import profileimg from "../images/jennprofile.png";

// render only the about me section, translate the html into jsx
function About() {
  return (
    <div id="about-me">
        <section className="about-me">
            <h2>About Me</h2>
            <p>Jenn Marshall is currently studying coding and web development. She enjoys creating 
                portrait art using unconventional media. This site is currently serving as a showcase of both of those skills.</p>
            <img src={profileimg} alt="A photo of Jenn Marshall."/>
        </section>
    </div>
  );
}

export default About;
