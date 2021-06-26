import React from "react";
import "./About.css";
import image from "../img/myPhoto3.jpg";

import CV from "../img/CV.pdf";

import { SkillsData } from "./SkillsData";

const About = () => {
  return (
    <div class="about-container">
      <div class="about fadeIn">
        <div className="about-me">
          <img src={image} className="my-photo" />
          <div className="cv-container">
            {/* <button className="cv-button">
              <a target="_blank" href={CV}>
                Download My Resume
              </a>
            </button> */}

            <h1>Who</h1>
            <h1> am I?</h1>
          </div>
        </div>

        <blockquote>
          I am a passionate junior full-stack developer who is fascinated by the
          world's technology and inspired by its art and creativity. I love
          problem solving, working in teams and supporting my team mates to
          develop and grow. I have a long standing interest in technology and
          how to apply technology to solve business challenges. I am very
          ambitious to progress a career that allows me opportunities to build
          on the broad technical skills I have already developed whilst
          providing me with opportunities to further develop and grow.{" "}
        </blockquote>
      </div>
      <div className="skills-container">
        <h1>SKILLS</h1>
        <div className="catigory">
          <h2>Front-End: </h2>
          {SkillsData.frontEnd.map((item) => {
            return (
              <div className="skill">
                <img className="skill-icon" src={item.icon} />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="catigory">
          <h2>Back-End: </h2>
          {SkillsData.backEnd.map((item) => {
            return (
              <div className="skill">
                <img className="skill-icon" src={item.icon} />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="catigory">
          <h2>Technologies: </h2>
          {SkillsData.tecnologies.map((item) => {
            return (
              <div className="skill">
                <img className="skill-icon" src={item.icon} />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
