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
          <img src={In} />
          <img src={Github} />
          <img src={Email} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
