import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as VscIcons from "react-icons/vsc";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About Me",
    path: "/about",
    icon: <MdIcons.MdPersonPin />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <VscIcons.VscProject />,
    cName: "nav-text",
  },
  // {
  //   title: "Contact",
  //   path: "/contact",
  //   icon: <MdIcons.MdPermContactCalendar />,
  //   cName: "nav-text",
  // },
];
