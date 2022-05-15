import React from "react";

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
                <div className={"project " + project.index}>
                    <div className="project-details-container">
                      <h2>{project.name}</h2>
                      <div className="svg-container">
                        <svg onClick={() => window.open(project.repoUrl, "_blank")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 10.199l-3.64 1.801 3.64 1.796v2.204l-6-2.935v-2.131l6-2.934v2.199zm8 2.866l-6 2.935v-2.204l3.64-1.796-3.64-1.801v-2.199l6 2.935v2.13z"/>
                        </svg>
                        <p>Repository</p>
                      </div>
                      <div className="svg-container">
                        <svg onClick={() => window.open(project.deployedUrl, "_blank")} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                          <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12m2.557 16h-5.115c.546 2.46 1.441 4.114 2.558 5.744 1.194-1.741 2.041-3.41 2.557-5.744m-7.157 0h-4.567c1.236 2.825 3.704 4.972 6.755 5.716-1.048-1.733-1.783-3.658-2.188-5.716m13.767 0h-4.567c-.391 1.988-1.095 3.887-2.175 5.694 3.012-.763 5.517-2.895 6.742-5.694m-14.005-6h-4.962c-.267 1.313-.267 2.685 0 4h4.915c-.119-1.329-.101-2.672.047-4m7.661 0h-5.647c-.165 1.326-.185 2.672-.053 4h5.753c.133-1.328.111-2.673-.053-4m6.977 0h-4.963c.148 1.328.166 2.671.048 4h4.915c.26-1.285.273-2.648 0-4m-12.156-7.729c-3.077.732-5.567 2.886-6.811 5.729h4.653c.435-2.042 1.178-3.985 2.158-5.729m2.355-.048c-1.089 1.77-1.91 3.453-2.463 5.777h4.927c-.534-2.246-1.337-3.948-2.464-5.777m2.368.069c1.013 1.812 1.733 3.76 2.146 5.708h4.654c-1.232-2.816-3.762-4.958-6.8-5.708"/>
                        </svg>
                        <p>Deployment</p>
                      </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Portfolio;
