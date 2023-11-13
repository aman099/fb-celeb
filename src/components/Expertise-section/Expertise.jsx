import React from "react";
import SwiperSlides from "./SwiperSlides";
import "./Expertise.styles.css";
import PropTypes from "prop-types";

import rsvpImg from "../../assets/img/Cropped/rsvp-invitation.jpg";
import decorImg from "../../assets/img/Cropped/decor.jpg";
import foodBevImg from "../../assets/img/Cropped/food-beverages.jpg";
import groomingConsultImg from "../../assets/img/Cropped/grooming-consultation.jpg";
import entertainmentImg from "../../assets/img/Cropped/entertainment.jpg";
import hospitalityImg from "../../assets/img/Cropped/hospility.jpg";
import digitalSocialImg from "../../assets/img/Cropped/digital_socail.jpg";
import travelImg from "../../assets/img/Cropped/travel.jpg";
import specialEffectImg from "../../assets/img/Cropped/specail_effect.jpg";

const slideMaterials = [
  {
    id: 1,
    img: rsvpImg,
    link: "#RSVP & Invitation Management",
  },
  {
    id: 2,
    img: decorImg,
    link: "#Décor, Technical & Production",
  },
  {
    id: 3,
    img: foodBevImg,
    link: "#Food & Beverage Consultation",
  },
  {
    id: 4,
    img: groomingConsultImg,
    link: "#Grooming Consultation",
  },
  {
    id: 5,
    img: entertainmentImg,
    link: "#Entertainment",
  },
  {
    id: 6,
    img: hospitalityImg,
    link: "#Hospitality",
  },
  {
    id: 7,
    img: digitalSocialImg,
    link: "#Digital & Social Media Management",
  },
  {
    id: 8,
    img: travelImg,
    link: "#Travel & Logistics Management",
  },
  {
    id: 9,
    img: specialEffectImg,
    link: "#Special Effects",
  },
];

function Expertise() {
  return (
    <section className="expertise">
      <div className="expertise-container">
        <div className="expertise-title">
          <h2>OUR</h2>
          <h3>expertise</h3>
        </div>
        <div className="swiper slider">
          <div className="swiper-wrapper slider-container">
            <SwiperSlides slideMaterials={slideMaterials} />
          </div>
        </div>
      </div>
    </section>
  );
}

Expertise.propTypes = {
  slideMaterials: PropTypes.array,
  rsvpImg: PropTypes.string,
  decorImg: PropTypes.string,
  foodBevImg: PropTypes.string,
  groomingConsultImg: PropTypes.string,
  entertainmentImg: PropTypes.string,
  hospitalityImg: PropTypes.string,
  digitalSocialImg: PropTypes.string,
  travelImg: PropTypes.string,
  specialEffectImg: PropTypes.string,
};

export default Expertise;
