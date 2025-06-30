import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navtoggle, setNavToggle] = useState(false);
  const navbar = [
    {
      id: 1,
      label: "Home",
      to: "/",
    },

    {
      id: 2,
      label: "News",
      to: "/News",
    },
  ];
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
            onClick={() => setNavToggle(!navtoggle)}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div
          className={
            navtoggle === true
              ? "collapse navbar-collapse in"
              : "collapse navbar-collapse"
          }
          id="myNavbar"
          aria-expanded={navtoggle === true ? "true" : "false"}
        >
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/sports">Sports</Link>
            </li>
            <li>
              <Link to="/scholoships">Scholarships</Link>
            </li>
            <li>
              <Link to="/worksheets">Worksheets</Link>
            </li>
            <li>
              <Link to="/contactus">ContactUs</Link>
            </li>
            <li>
              <Link to="/aboutus">AboutUs</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="Login.html">
                <span className="glyphicon glyphicon-log-in"></span>
                &nbsp;&nbsp;Login
              </a>
            </li>
            <li>
              <a href="https://trinity.schoolhour.in/signin/index">
                <span className="glyphicon glyphicon-log-in"></span>
                &nbsp;&nbsp;School Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
