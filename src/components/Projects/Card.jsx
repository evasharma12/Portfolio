import React from "react";

function Card(props) {
  console.log(props.title);
  return (
    <div id="card">
      <img src={props.img} alt="image"></img>
      <div id = "below-img">
        <h1>{props.title}</h1>
        <h4>{props.tag}</h4>
        <p id = "card-tech">{props.tech}</p>
        {props.desc !== "" && <p id = "card-desc">{props.desc}</p>}
        {props.link !== "" && <a target = "_blank" href={props.link}>Project</a>}
        {props.github !=="" && <a  target = "_blank" href={props.github}>Github</a>}
      </div>
    </div>
  );
}

export default Card;
