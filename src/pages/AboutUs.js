import React, { useEffect, useState } from "react";
import { about } from "../data/data";
const AboutUs = () => {
  const [data,setData]=useState([]);
  console.log(about);
  useEffect(() => {
    fetch("http://localhost/api/founders.php")
      .then((response) => response.json())
      .then((data) => setData(data));
  },[]);
  return (
    <div>
      { data && data.map((element) => {
        return (
          <>
            <div>
              <h2 className="about_h2">{element.heading} </h2>
            </div>
            <div className="about_row">
              <p className="about_para ">{element.para}</p>
              <img
                src={element.imageurl}
                className="img-fluid about_image"
                alt="First"
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default AboutUs;
