import React from "react";
import "./About.css";
import image from "../img/myPhoto3.jpg";
import CV from "../img/CV.pdf";

const About = () => {
  return (
    <div className="about">
      <div className="about-me">
        <img src={image} className="my-photo" />
        <div className="cv-container">
          <button className="cv-button">
            <a target="_blank" href={CV}>
              MY C.V :)
            </a>
          </button>

          <h1>Who am I?</h1>
        </div>
      </div>

      <blockquote>
        I am a passionate junior full stack developer and a recent graduate of
        the Code Your Future 2020 programme. I love problem solving, working in
        teams and supporting my team mates to develop and grow. I have a long
        standing interest in technology and how to apply technology to solve
        business challenges. I am very ambitious to progress a career that
        allows me opportunities to build on the broad technical skills I have
        already developed whilst providing me with opportunities to further
        develop and grow.{" "}
      </blockquote>
    </div>
  );
};

export default About;
