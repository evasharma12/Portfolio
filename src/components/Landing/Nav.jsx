import React from "react";

function Nav() {
  const styleul = {
    listStyleType: "none",
  };
  const style = {
    float: "left",
    marginLeft: "3%",
  };
  return (
    <div id = "nav">
      <ul style={styleul}>
        <li style={style}>
          <a href="/#about" onClick={() => window.location.replace("/#about")}>About</a>
        </li>
        <li style={style}>
          <a href="/#flex-cont2">Education & Experience</a>
        </li>

        <li style={style}>
          <a href="/#skills-div">Skills</a>
        </li>
        <li style={style}>
          <a href="/#proj">Projects</a>
        </li>
        <li style={style}>
          <a href="/#achInt">Achievements & Interests</a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
