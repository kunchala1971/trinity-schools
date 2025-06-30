import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import "./Dashboard.css";
import { Outlet } from "react-router-dom";
const DashBoard = ({ role, setAuth, userdata }) => {
  return (
    <div className="layout">
      <Sidebar userRole={"admin"} />
      <div className="content-area">
        <TopBar setAuth={setAuth} userdata={userdata} />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
