import React from 'react';
import stylesheet from "./style.css";

import Landing from "./Landing/landing"
import About from './About Me/About';
import EduExp from './Ed and Exp/Ed and Exp';
import Skills from './Skills/skills';
import Projects from './Projects/projects';
import Achievements from './Achievements/Achievements';
import Footer from './Footer/Footer';
import image from "./images/filler.jpg";
import ParticleBackground from '../particleBackground';

function App(){
    return(
        <div>
            
            <Landing/>
            <div id = "filler">
                
            </div>
            
            <About/>
            <EduExp/>
            <Skills/>
            <Projects/>
            <Achievements/>
            <div id = "filler2">
                
            </div>
            <Footer/>
        </div>
    )
}

export default App;