import React from "react";
import ParticleBackground from "../../particleBackground";
import particleBackground from "../../particleBackground";

import Education from "./Education";
import Experience from "./Experience";


function EduExp() {
  return (
    <div id = "flex-cont2">
     <div  id = "particles">
            <ParticleBackground/>
            </div>
      <div id = "Education-flex">
          <Education/>
      </div>
      <div id = "Experience-flex">
          <Experience/>
      </div>
    </div>
  );
}
export default EduExp;
