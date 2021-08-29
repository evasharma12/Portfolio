import React from "react";

import html5 from "../images/html-5.png";
import CSS3 from "../images/css-3.png";
import Bootstrap from "../images/bootstrap-logo.png"
import JS from "../images/js.png";
import Node from "../images/nodejs.png";
import express from "../images/express js.png";
import mongoDB from "../images/mongoDB.png";
import react from "../images/react.png";
import flutter from "../images/flutter.png";
import firebase from "../images/firebase (1).png";
import c from "../images/c++.svg";

function Skills() {
  const style = {
    backgroundColor : "white",
  }
  return (
    <div id  = "skills-div">
      <div className = "skills">
      <h1 id = "skills-head">Skills</h1>
      <div id="skills">


      <div className="skill-div">
      <img src = {html5} alt = "HTML5"></img>
        <p className="skill-p">HTML5</p>
      </div>
      <div className="skill-div">
      <img src = {CSS3} alt = "CSS 3"></img>
        <p className="skill-p">CSS 3</p>
      </div>
      <div className="skill-div">
      <img src = {Bootstrap} alt = "Bootstrap"></img>
        <p className="skill-p">Bootstrap</p>
      </div>
      <div className="skill-div">
      <img src = {JS} alt = "JS"></img>
        <p className="skill-p">JS</p>
      </div>
      <div className="skill-div">
      <img src = {Node} style = {style} alt = "Node JS"></img>
        <p className="skill-p">Node JS</p>
      </div>
      <div className="skill-div">
      <img src = {express} alt = "Express JS"></img>
        <p className="skill-p">Express JS</p>
      </div>
      <div className="skill-div">
      <img src = {mongoDB} style = {style} alt = "Mongo DB"></img>
        <p className="skill-p">Mongo DB</p>
      </div>
      <div className="skill-div">
      <img src = {react} alt = "React"></img>
        <p className="skill-p">React</p>
      </div>
      <div className="skill-div">
      <img src = {flutter} alt = "Flutter"></img>
        <p className="skill-p">Flutter</p>
      </div>
      <div className="skill-div">
      <img src = {firebase}alt = "Firebase"></img>
        <p className="skill-p">Firebase</p>
      </div>
      <div className="skill-div">
      <img src = {c} alt = "C++"></img>
        <p className="skill-p">C++</p>
      </div>
      <div className="skill-div DSA">
      
        <p className="skill-p">DSA</p>
      </div>
    </div>
    </div>
    
    </div>
    
  );
}
export default Skills;
