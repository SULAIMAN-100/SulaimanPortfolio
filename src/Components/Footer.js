import React from "react";
import "./Footer.css";
import In from "../img/in.png";
import Github from "../img/GitHub.png";
import Email from "../img/mail.png";

function Contact() {
  return (
    <div className="footer-container">
      <div className="footer">
        <p>SULAIMAN@2021</p>
        <div className="social">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sulaiman-alhalabi-4038521b0/"
          >
            <img src={In} />
          </a>
          <a target="_blank" href="https://github.com/SULAIMAN-100">
            <img src={Github} />
          </a>
          <a
            target="_blank"
            href="mailto:suliamnsolo73505@gmail.com?subject = Feedback&body = Message"
          >
            <img src={Email} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
