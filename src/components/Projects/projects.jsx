import React from "react";
import Card from "./Card";
import projects from "./projectslist";
function Projects() {
  function Cards() {
    return projects.map((project, index) => {
      return (
        <Card
          title={project.title}
          tag={project.tag}
          desc={project.desc}
          link={project.link}
          github={project.githubRepo}
          tech={project.tech}
          img={project.img}
          key={index}
        ></Card>
      );
    });
  }

  return (
    <div id = "proj"> 
      <div>
        <h1 id="proj-head">Projects</h1>
      </div>

      <div id="projects">{Cards()}</div>
    </div>
  );
}
export default Projects;
