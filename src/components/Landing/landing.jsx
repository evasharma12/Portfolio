import React from "react";
import Nav from "./Nav";
import image from "../images/Portfolio3.png";

import Avatar from "./Avatar";
import resume from "../../components/Eva sharma Resume.pdf";

function Landing() {
    const style = {
        color: "#000",
    }

  return (
    <div id="landing">

        <Nav/>
      <div>
        <img id = "landing-image-laptop" src = {image} alt = "landing-page"></img>
      </div>
      {/* <div id = "landing-flex-container">
        <div id="landing-bg-img">
          <div id = "intro-div">
          <p style = {style} id = "hello">HELLO, I'M</p>
            <h1 style = {style} id = "name-heading">Eva Sharma.</h1>
            <p style = {style} id = "tag">Full Stack Developer</p>
          </div>
            
        </div>
        <div id="landing-info">
            <Avatar/>
            <h1 id = "name">Eva Sharma</h1>
            <div id = "landing-typing">
            
            <p id = "tag2">Sophomore at NITH</p>
            <p>Btech CSE</p>
            </div>
            

            <p id = "email">inquesto2003@gmail.com</p>
            <div id = "landing-links">
            <a target = "blank" href = "mailto:inquesto2003@gmail.com"><i className="fas fa-envelope"></i></a>  
            <a target = "blank" href = "https://github.com/evasharma12"><i className="fab fa-github"></i></a>
            <a target = "blank" href = "https://www.instagram.com/evasharma12/"><i className="fab fa-instagram"></i></a>
            <a target = "blank" href = "https://www.linkedin.com/in/eva-sharma-94aab5207/"><i className="fab fa-linkedin-in"></i></a>
            
            </div>
            <div>
            <a href={resume} download><button id = "about-btn">Download Resume</button></a>
            </div>
            
        </div>
      </div> */}
    </div>
  );
}

export default Landing;
