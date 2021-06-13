import React from "react";
import "./Projects.css";
import ReactPlayer from "react-player";

function Projects() {
  return (
    <div className="projects">
      <div className="project-demo">
        <h2>TV Show Dom Project</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/lSNAKK85Fy4"
            width="100%"
            height="100%"
          />
        </div>
        <div className="vid-buttons">
          <a target="_blank" href="https://cyf-sulaiman-100-tv.netlify.app/">
            <button>TV Show Link</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/SULAIMAN-100/tv-show-dom-project"
          >
            <button>Source Code</button>
          </a>
        </div>
      </div>
      <div className="project-demo">
        <h2>TV Show Dom Project</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/UDtHvX_MrsQ"
            width="100%"
            height="100%"
          />
        </div>
        <div className="vid-buttons">
          <a target="_blank" href="https://cyf-sulaiman-100-tv.netlify.app/">
            <button>TV Show Link</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/SULAIMAN-100/tv-show-dom-project"
          >
            <button>Source Code</button>
          </a>
        </div>
      </div>
      <div className="project-demo">
        <h2>TV Show Dom Project</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/UDtHvX_MrsQ"
            width="100%"
            height="100%"
          />
        </div>
        <div className="vid-buttons">
          <a target="_blank" href="https://cyf-sulaiman-100-tv.netlify.app/">
            <button>TV Show Link</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/SULAIMAN-100/tv-show-dom-project"
          >
            <button>Source Code</button>
          </a>
        </div>
      </div>
      <div className="project-demo">
        <h2>TV Show Dom Project</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/UDtHvX_MrsQ"
            width="100%"
            height="100%"
          />
        </div>
        <div className="vid-buttons">
          <a target="_blank" href="https://cyf-sulaiman-100-tv.netlify.app/">
            <button>TV Show Link</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/SULAIMAN-100/tv-show-dom-project"
          >
            <button>Source Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
