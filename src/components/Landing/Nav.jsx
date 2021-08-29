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
          <a href="">About</a>
        </li>
        <li style={style}>
          <a href="">Education & Experience</a>
        </li>

        <li style={style}>
          <a href="">Skills</a>
        </li>
        <li style={style}>
          <a href="">Projects</a>
        </li>
        <li style={style}>
          <a href="">Achievements & Interests</a>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
