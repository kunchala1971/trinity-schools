import React from "react";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Header />
      <Navbar />
      <Routes>
        <Route/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
};

export default App;
