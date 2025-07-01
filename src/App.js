import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Videos from "./pages/Videos";
import Sports from "./pages/Sports";
import Login from "./components/Login";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Worksheets from "./pages/Worksheets";
import Scholarships from "./pages/Scholarships";
import Home from "./pages/Home";
import DashBoard from "./components/DashboardComponents/Index";
import Layout from "./pages/Layout";
import UserWidgets from "./components/DashboardComponents/UserWidgets";
import FlashNews from "./components/DashboardComponents/FlashNews";
import "./App.css";
import AboutData from "./components/DashboardComponents/AboutComponents/Index";
const App = () => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem("auth");
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || "";
  });

  const [userdata, setUserData] = useState(() => {
    const storedUser = localStorage.getItem("userdata");
    return storedUser ? JSON.parse(storedUser) : { username: "kkcc" };
  });

  // Update localStorage when states change
  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);

  useEffect(() => {
    localStorage.setItem("userdata", JSON.stringify(userdata));
  }, [userdata]);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/scholoships" element={<Scholarships />} />
            <Route path="/worksheets" element={<Worksheets />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            {/* <Route path="/login" element={<DashBoard />} /> */}
          </Route>
          <Route
            path="/dashboard"
            element={
              <DashBoard
                setAuth={setAuth}
                setRole={setRole}
                setUserData={setUserData}
              />
            }
          >
            <Route index element={<UserWidgets />} />
            <Route path="/dashboard/flash-news" element={<FlashNews />} />
            <Route path="/dashboard/aboutus-data" element={<AboutData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
