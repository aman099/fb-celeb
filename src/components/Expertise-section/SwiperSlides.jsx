import React, { useEffect } from "react";
import "./Expertise.styles.css";

function SwiperSlides({ slideMaterials }) {
  return (
    <>
      {slideMaterials.map((slide, idx) => (
        <div key={slide.id} className="swiper-slide">
          <div className="swiper-img">
            <img
              src={slide.img}
              alt="RSVP & Invitation Management by FBCelebrations"
            />
          </div>
          <div className="swiper-text">
            <h3 className="swiper-title rotate-container">
              <a className="first-rot-container" href="">
                {slide.link}
              </a>
            </h3>
          </div>
        </div>
      ))}
    </>
  );
}

export default SwiperSlides;
