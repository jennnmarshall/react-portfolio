import React from "react";
import "../styles/style.css";
import Image from "react-image";
import headerimg from "../images/subheader.png"


function Subheader() {
  return (
    <div className="subdiv">
      <img src={headerimg} className="subhead" alt="Rainbow gradient." />
      <p className="subtitle">This is my cool subtitle.</p>
    </div>
  );
}

export default Subheader;
