import React from 'react';
import ParticleBackground from "../../particleBackground";
import resume from "../../components/Eva sharma Resume.pdf";
import Nav from "../Landing/Nav";

function About(){
    return(
        <div id = "about">
            <Nav/>
            <div  id = "particles">
            <ParticleBackground/>
            </div>
            <h1 id = "about-head">About Me</h1>
            <h6 id = "about-parah">With my zeal to be better every day, I am determined to learn new technologies and improving my skills by accepting potentially challenging tasks. 
                 As an enthusiastically receptive student, I am open to different ideas, and by mixing my skills into them, I am looking forward to making my mark in the industry as a developer.
            </h6>
            <div>
            <a href={resume} download><button id = "about-btn">Download Resume</button></a>
            </div>
        </div>
    )
}
export default About;