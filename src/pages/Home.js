import React from "react";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div
        style={{ display: "flex", justifyContent: "end", marginBottom: "20px" }}
      >
        <button style={{ backgroundColor: "skyblue" }}>Read More...</button>
      </div>
    </div>
  );
};

export default Home;
