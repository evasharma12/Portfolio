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
          <a href="../About Me/About/#about">About</a>
        </li>
        <li style={style}>
          <a href="../Ed and Exp/Ed and Exp/#flex-cont2">Education & Experience</a>
        </li>

        <li style={style}>
          <a href="../Skills/skills/#skills-div">Skills</a>
        </li>
        <li style={style}>
          <a href="../Projects/projects/#proj">Projects</a>
        </li>
        <li style={style}>
          <a href="../Achievements/Achievements/#achInt">Achievements & Interests</a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
