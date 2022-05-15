import React from "react";

import Project from "../Project";

const projects = [
  {
    name: "Shasha",
    index: "zero",
    repoUrl: "https://github.com/Johnnyboy7781/shasha",
    deployedUrl: "https://shielded-bayou-08776.herokuapp.com/",
    imgPath: "../../assets/imgs/0.jpg"
  },
  {
    name: "Tech Blog",
    index: "one",
    repoUrl: "https://github.com/Johnnyboy7781/tech-blog",
    deployedUrl: "https://powerful-caverns-73555.herokuapp.com/",
  },
  {
    name: "CoinHiz",
    index: "two",
    repoUrl: "https://github.com/Johnnyboy7781/coinhiz",
    deployedUrl: "https://johnnyboy7781.github.io/coinhiz/",
  },
  {
    name: "Just Tech News",
    index: "three",
    repoUrl: "https://github.com/Johnnyboy7781/just-tech-news",
    deployedUrl: "https://safe-fjord-78314.herokuapp.com/",
  },
  {
    name: "Note Taker",
    index: "four",
    repoUrl: "https://github.com/Johnnyboy7781/note-taker",
    deployedUrl: "https://shrouded-chamber-02704.herokuapp.com/",
  },
  {
    name: "Pizza Hunt",
    index: "five",
    repoUrl: "https://github.com/Johnnyboy7781/pizza-hunt",
    deployedUrl: "https://salty-brushlands-57607.herokuapp.com/",
  },
];

function Portfolio() {
    return (
        <section className="project-container">
            {projects.map(project => (
                <Project
                  name={project.name}
                  index={project.index}
                  repoUrl={project.repoUrl}
                  deployedUrl={project.deployedUrl}
                />
            ))}
        </section>
    )
}

export default Portfolio;
