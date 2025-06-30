import React from 'react';

const Footer = () => {
  return (
    <div style={{
      backgroundColor: "grey",
      height: "30px",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "12px",
      position: "relative",
      bottom: 0
    }}>
      <p style={{ margin: 0 }}>
        © 2019 Trinity High School. All Rights Reserved. Designed by: SrinivasaRao.K
      </p>
    </div>
  );
};

export default Footer;
