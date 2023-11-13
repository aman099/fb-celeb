import "./Media.styles.css";

import React from "react";

function MediaLogo({ mediaLogos }) {
  return (
    <>
      {mediaLogos.map((logo, idx) => (
        <span key={logo.id} className={`logo logo-${logo.id}`}>
          <img src={logo.img} alt={logo.alt} />
        </span>
      ))}
    </>
  );
}

export default MediaLogo;
