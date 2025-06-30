import React, { useState } from "react";
//import './Gallery.css'; // optional CSS file
const images = [
  "/assets/gallary/1.jpg",
  "/assets/gallary/2.jpg",
  "/assets/gallary/3.jpg",
  "/assets/gallary/4.jpg",
  "/assets/gallary/5.jpg",
  "/assets/gallary/6.jpg",
  "/assets/gallary/7.jpg",
  "/assets/gallary/8.jpg",
  "/assets/gallary/9.jpg",
  "/assets/gallary/10.jpg",
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  const itemStyle = {
    flex: "0 0 calc(33.333% - 40px)", // 3 per row, accounting for gap
    margin: "10px",
    overflow: "hidden",
    borderRadius: "8px",
    cursor: "pointer",
  };

  const imgStyle = {
    width: "80%",
    height: "200px",
    objectFit: "cover",
    display: "block",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          margin: "30px",
        }}
      >
        {images.map((src, i) => (
          <div key={i} style={itemStyle} onClick={() => setSelected(src)}>
            <img src={src} alt={`img${i}`} style={imgStyle} />
          </div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={selected}
            alt="enlarged"
            style={{ maxWidth: "700px", maxHeight: "500px" }}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
