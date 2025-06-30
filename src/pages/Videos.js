// src/components/EmbedVideoGallery.js

import React from "react";

// Embed URLs directly
const embedLinks = [
  "https://www.youtube.com/embed/rQVBPAJAk_8",
  "https://www.youtube.com/embed/3_svdovMANI",

];

const Videos = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px"
      }}>
        {embedLinks.map((link, index) => (
          <iframe
            key={index}
            width="360"
            height="215"
            src={link}
            title={`Video ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default Videos;
