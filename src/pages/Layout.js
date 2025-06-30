import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <hr />
      <div style={{ marginTop: "29px" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
