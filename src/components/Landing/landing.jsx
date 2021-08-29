import React from "react";
import Nav from "./Nav";

import Avatar from "./Avatar";


function Landing() {
    const style = {
        color: "#000",
    }

  return (
    <div id="landing">

        <Nav/>

      <div id = "landing-flex-container">
        <div id="landing-bg-img">
            <p style = {style} id = "hello">HELLO, I'M</p>
            <h1 style = {style} id = "name-heading">Eva Sharma.</h1>
            <p style = {style} id = "tag">Full Stack Developer</p>
        </div>
        <div id="landing-info">
            <Avatar/>
            <h1 id = "name">Eva Sharma</h1>
            <p id = "tag2">Sophomore at NITH</p>
            <p>Btech CSE</p>
            <p id = "email">inquesto2003@gmail.com</p>
            <div id = "landing-links">
            <a target = "blank" href = "mailto:inquesto2003@gmail.com"><i className="fas fa-envelope"></i></a>  
            <a target = "blank" href = "https://github.com/evasharma12"><i className="fab fa-github"></i></a>
            <a target = "blank" href = "https://www.instagram.com/evasharma12/"><i className="fab fa-instagram"></i></a>
            <a target = "blank" href = "https://www.linkedin.com/in/eva-sharma-94aab5207/"><i className="fab fa-linkedin-in"></i></a>
            
            </div>
            <div>
              <button id = "about-btn">About Me</button>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Landing;
