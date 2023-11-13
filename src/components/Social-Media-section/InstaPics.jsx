import "./SocialMedia.styles.css";

import React from "react";

function InstaPics({ instaPicsInfo }) {
  return (
    <>
      {instaPicsInfo.map((pic, idx) => (
        <div key={pic.id} className={`pic pic-${pic.id}`}>
          <div className="black">
            <i className="fa-regular fa-heart"></i>
            <span>{pic.likes}</span>
          </div>
          <img src={pic.img} alt="" />
        </div>
      ))}
    </>
  );
}

export default InstaPics;
