import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import { Link, Route } from "react-router-dom";
import logo from "../img/solo.jpg";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import In from "../img/in.png";
import Tel from "../img/tel.png";
import Github from "../img/GitHub.png";
import Email from "../img/mail.png";
function Navbar() {
  function toggle() {
    window.location.reload();
  }
  return (
    <div>
      <IconContext.Provider value={{ color: "orange" }}>
        <div className="navbar">
          <div className="features">
            {SidebarData.map((item, index) => {
              return (
                // onClick={toggle}
                <div key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </div>
              );
            })}

            <div
              className="nav-text"
              data-toggle="modal"
              data-target="#myModal"
            >
              <Link>
                <MdIcons.MdPermContactCalendar />
                <span> Contact Me</span>
              </Link>
            </div>

            <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                    <h4 class="modal-title">My Contact Details</h4>
                  </div>
                  <div class="modal-body">
                    <p>
                      <img src={Tel} />
                      Mobile :
                      <a
                        target="_blank"
                        rel="norefer"
                        href="tel:+447542566262"
                        onClick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});"
                      >
                        +447542566262
                      </a>
                    </p>
                    <p>
                      <img src={Email} />
                      Email Me :
                      <a
                        rel="#"
                        target="_blank"
                        href="mailto:sulaimansolo73505@gmail.com"
                      >
                        Sulaiman
                      </a>
                    </p>
                    <p>
                      <img src={In} />
                      <a
                        rel="#"
                        target="_blank"
                        href="https://www.linkedin.com/in/sulaiman-alhalabi-4038521b0/"
                      >
                        Visit my Linkedin profile :)
                      </a>
                    </p>

                    <p>
                      <img src={Github} />
                      <a
                        rel="#"
                        target="_blank"
                        href="https://github.com/SULAIMAN-100"
                      >
                        Visit my GitHub Profile :)
                      </a>
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-warning"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Link to="#" className="menu-bar">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link> */}
          <div className="title">
            <h1 className="awesome"> Sulaiman Alhalabi</h1>
          </div>
          <img src={logo} className="logo" />
        </div>

        {/* <ul className="nav-menu-items"> */}
        {/* <li className="navbar-toggle">
              <Link to="#" className="menu-bar">
                <AiIcons.AiFillCloseSquare />
              </Link>
            </li> */}

        {/* </ul> */}
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;
