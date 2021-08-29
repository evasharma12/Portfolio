import React from 'react';
import stylesheet from "./style.css";

import Landing from "./Landing/landing"
import About from './About Me/About';
import EduExp from './Ed and Exp/Ed and Exp';
import Skills from './Skills/skills';
import Projects from './Projects/projects';
import Achievements from './Achievements/Achievements';
import Footer from './Footer/Footer';

function App(){
    return(
        <div>
            <Landing/>
            <About/>
            <EduExp/>
            <Skills/>
            <Projects/>
            <Achievements/>
            <Footer/>
        </div>
    )
}

export default App;