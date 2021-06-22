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
            <button className="cv-button">
              <a target="_blank" href={CV}>
                Download My Resume
              </a>
            </button>

            <h1>Who am I?</h1>
          </div>
        </div>

        <blockquote>
          I am a passionate junior full-stack developer who is fascinated by the
          world's technology and inspired by its art and creativity. I love to
          be like a bee in a hive living and grow in a collaborative
          invironment. I have a long standing interest in technology and how to
          apply technology to solve business challenges. I am very ambitious to
          progress a career that allows me opportunities to build on the broad
          technical skills I have already developed whilst providing me with
          opportunities to further develop and grow.{" "}
        </blockquote>
      </div>
      <div className="skills-container">
        <h1>SKILLS</h1>
        <div className="skills">
          {SkillsData.map((item) => {
            return (
              <div className="single-skill">
                <label for="file">{item.title}</label>

                <progress max="100" value={item.value}>
                  <div class="progress-bar"></div>
                </progress>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
