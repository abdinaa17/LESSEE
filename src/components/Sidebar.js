import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

const Sidebar = () => {
  const { sideBar, closeSideBar } = useGlobalContext();

  return (
    <aside className={sideBar ? "sidebar show" : "sidebar"}>
      <div className="container">
        <div className="sidebar__content">
          <ul className="sidebar__menu">
            <Link
              to="/"
              onClick={closeSideBar}
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={closeSideBar}
            >
              Services
            </Link>
            <Link
              to="/projects"
              onClick={closeSideBar}
            >
              Projects
            </Link>
            <Link
              to="/pricing"
              onClick={closeSideBar}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              onClick={closeSideBar}
            >
              Contact
            </Link>
          </ul>
          <div className="sidebar__bars">
            <FaTimes
              onClick={closeSideBar}
              style={{ fontSize: "1.8rem", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;