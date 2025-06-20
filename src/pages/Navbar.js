import React, { useState } from "react";

const Navbar = () => {
  const [navtoggle, setNavToggle] = useState(false);
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-inverse">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
            onClick={()=>setNavToggle(!navtoggle)}
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div
          className={
            navtoggle == true
              ? "collapse navbar-collapse in"
              : "collapse navbar-collapse"
          }
          id="myNavbar"
          aria-expanded={navtoggle == true ? "true" : "false"}
        >
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a id="ContentPlaceHolder2_HyperLink7" href="news.html">
                News
              </a>
            </li>
            <li>
              <a id="ContentPlaceHolder2_HyperLink12" href="gallery.html">
                Gallery
              </a>
            </li>
            <li>
              <a id="ContentPlaceHolder2_HyperLink1" href="videos.html">
                Videos
              </a>
            </li>
            <li>
              <a id="ContentPlaceHolder2_HyperLink2" href="sports.html">
                Sports
              </a>
            </li>
            <li>
              <a id="ContentPlaceHolder2_HyperLink3" href="scholarship.html">
                ScholarShip
              </a>
            </li>
            <li>
              <a id="ContentPlaceHolder2_HyperLink4" href="worksheet.html">
                Work Sheets
              </a>
            </li>
            <li>
              <a id="ContentPlaceHolder2_HyperLink10" href="ContactUs.html">
                Contact
              </a>
            </li>
            <li>
              <a id="ContentPlaceHolder2_HyperLink11" href="AboutUs.html">
                About
              </a>
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
