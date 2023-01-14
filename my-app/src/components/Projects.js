import React from "react";
import "../styles/style.css";
import Image from "react-image";
import boozehound from "../images/boozehound text and pic.png";
import cumberbatch from "../images/cumberbatchcropped.jpg";
import kermit from "../images/kermit8.png";
import nick from "../images/nickcavecropped.jpg";
import skittle from "../images/skittlescropped.jpg";
import lentil from "../images/lentilhardwickcropped.jpg";

function Projects() {
  return (
    <main id="projects" className="main">
      <section className="card-prime">
        <Image src={boozehound} alt="A cartoon dog having a beverage." />
        <div className="card-tag">
          <a href="https://mg1919.github.io/boozeHound/">
            <h3>Boozehound Cocktail Finder</h3>
            <p>A cocktail finding app!</p>
          </a>
        </div>
      </section>
      <section className="card">
        <Image
          src={cumberbatch}
          alt="A portrait of Benedict Cumberbatch in blue and white."
        />
        <div className="card-tag">
          <a href="https://jennnmarshall.github.io/seo-code-refactor/">
            <h3>First Repo</h3>
            <p>My First Repo!</p>
          </a>
        </div>
      </section>
      <section className="card">
        <Image src={kermit} alt="Kermit hangman" />
        <div className="card-tag">
          <a href="https://crimekermitterhangman.herokuapp.com/">
            <h3>Hangman Full Stack Application</h3>
            <p>An online Hangman game with a chat function!</p>
          </a>
        </div>
      </section>
      <section className="card">
        <Image src={nick} alt="A portrait of Nick Cave in black and white." />
        <div className="card-tag">
          <a href="#">
            <h3>Coming Soon.</h3>
            <p>(tm)</p>
          </a>
        </div>
      </section>
      <section className="card">
        <Image src={skittle} alt="A portrait of Jensen Ackles in Skittles." />
        <div className="card-tag">
          <a href="#">
            <h3>Coming Soon.</h3>
            <p>(tm)</p>
          </a>
        </div>
      </section>
      <section className="card">
        <Image
          src={lentil}
          alt="A portrait of Chris Hardwick in lentils."
        />
        <div className="card-tag">
          <a href="#">
            <h3>Coming Soon.</h3>
            <p>(tm)</p>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Projects;
