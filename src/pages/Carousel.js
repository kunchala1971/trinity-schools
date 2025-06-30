import React, { useState } from "react";


const Carousel = () => {
  const images = ["/assets/images/Slide1.jpg","/assets/images/Slide2.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const nextSlide = () => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div style={{ width: "100%", padding: "15px", position: "relative", textAlign: "center" }}>
      <div
        style={{
          width: "100%",  // set your desired display size
          height: "300px",
          margin: "0 auto",
          overflow: "hidden",
          borderRadius: "10px",
         
         
        }}
      >

      <div class="container-fluid">
       <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="img-responsive">
          <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={{
            width: "100%",
            height: "auto",
            class:"img-responsive",
            objectFit: "cover", // keeps aspect ratio, fills container :contentReference[oaicite:1]{index=1}
          }}
        />
        </div>
        </div>
        </div>
        </div>
      </div>

      <button onClick={prevSlide} style={{ position: "absolute", top: "50%", left: "35px" }}>◀</button>
      <button onClick={nextSlide} style={{ position: "absolute", top: "50%", right: "35px" }}>▶</button>
    </div>
  );
};

export default Carousel;
  
           
          
         