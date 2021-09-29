import bodyshaming from "../images/Body shaming.png";
import ToDoList from "../images/TOdolist.png";
import codequest from "../images/CodeQuest.png";
import Portfolio from "../images/portfolioProj.png";

const projects = [
    {
      title: "Body Positivity",
      tag: "Full Stack Website",
      tech: "HTML CSS JS Node JS Mongo DB",
      desc: "A full stack website made to make people aware about body positivity.",
      link: "https://body-shaming.herokuapp.com/",
      githubRepo: "https://github.com/evasharma12/Project-nodeJs-mongodb",
      img: bodyshaming,
    },
    {
      title: "To-Do List",
      tag: "Full Stack web app",
      tech: "HTML CSS Node JS MongoDB",
      desc: "A website dedicated to keep you on task on time.",
      link: "https://to-do-list-with-nodejs-mongodb.herokuapp.com/",
      githubRepo: "https://github.com/evasharma12/To-Do-List",
      img: ToDoList,
    },
    {
      title: "Portfolio",
      tag: "Frontend Project",
      tech: "React",
      desc: "A website dedicated to describe me.",
      link: "https://inspiring-colden-67f9d2.netlify.app/",
      githubRepo: "https://github.com/evasharma12/Portfolio",
      img: Portfolio,
    },
    {
      title: "Code Quest",
      tag: "Full Stack mobile app",
      tech: "Flutter Firebase",
      desc: "A mobile app like quora for students. Knowledgable videos can also be posted.",
      link: "",
      githubRepo: "https://github.com/evasharma12/CodeQuest",
      img: codequest,
    },

  ];

  export default projects;