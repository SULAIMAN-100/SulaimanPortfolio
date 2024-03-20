import React from "react";
import "./Projects.css";
import ReactPlayer from "react-player";
import { ProjectsData } from "./ProjectsData";

function Projects() {
  return (
    <div className="projects fadeIn">
      {ProjectsData.map((p) => {
        return (
          <div className="project-demo">
            <h2>{p.title}</h2>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                url={p.url}
                width="100%"
                height="100%"
              />
            </div>
            <div className="vid-buttons">
              <a target="_blank" rel="noreferrer" href={p.appLink}>
                <button>App Link</button>
              </a>
              <a target="_blank" rel="noreferrer" href={p.githubLink}>
                <button>GitHub Code</button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
