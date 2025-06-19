import React from "react";

const Navbar = () => {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active">
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
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="Login.html">
                <span class="glyphicon glyphicon-log-in"></span>
                &nbsp;&nbsp;Login
              </a>
            </li>
            <li>
              <a href="https://trinity.schoolhour.in/signin/index">
                <span class="glyphicon glyphicon-log-in"></span>
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
