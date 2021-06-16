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
            <button>App Link</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/SULAIMAN-100/tv-show-dom-project"
          >
            <button>GitHub Code</button>
          </a>
        </div>
      </div>
      <div className="project-demo">
        <h2>TV Show React.js Project</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/iyp5lesYD5k"
            width="100%"
            height="100%"
          />
        </div>
        <div className="vid-buttons">
          <a target="_blank" href="https://sulaiman-tv-show-react.netlify.app/">
            <button>App Link</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/SULAIMAN-100/TV-show-react"
          >
            <button>GitHub Code</button>
          </a>
        </div>
      </div>
      <div className="project-demo">
        <h2>CYF-Hotel App</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/itklyAIcbDY"
            width="100%"
            height="100%"
          />
        </div>
        <div className="vid-buttons">
          <a
            target="_blank"
            href="https://sulaiman-cyf-hotel-project.netlify.app"
          >
            <button>App Link</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/SULAIMAN-100/cyf-hotel-react"
          >
            <button>GitHub Code</button>
          </a>
        </div>
      </div>
      <div className="project-demo">
        <h2>Feedback Tracker App</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/zsR5cW5MiAE"
            width="100%"
            height="100%"
          />
        </div>
        <div className="vid-buttons">
          <a target="_blank" href="https://feedback-compass.herokuapp.com/">
            <button>App Link</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/SULAIMAN-100/Feedback-Compass"
          >
            <button>GitHub Code</button>
          </a>
        </div>
      </div>
      <div className="project-demo">
        <h2>Knowledge Checklist App</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/E5hbsw1ZYI0"
            width="100%"
            height="100%"
          />
        </div>
        <div className="vid-buttons">
          <a
            target="_blank"
            href="https://cyf-knowledge-checklist.herokuapp.com/"
          >
            <button>App Link</button>
          </a>
          <a
            target="_blank"
            href="https://github.com/CodeYourFuture/knowledge-checklist"
          >
            <button>GitHub Code</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
