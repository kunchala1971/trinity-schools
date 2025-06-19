import React from "react";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="img-responsive">
              <img
                src="assets/logos/logo.jpg"
                alt=""
                className="img-responsive"
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <marquee onmouseover="stop()" onmouseout="start()">
          <b>
            <span id="Label1" style={{ color: "#0460a4" }}>
              Welcome to Trinity High School . Our Student Got National First
              Prize in JCI NLTS .
            </span>
          </b>
        </marquee>
      </div>
    </>
  );
};

export default Header;
